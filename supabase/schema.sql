create type public.user_role as enum ('owner', 'editor');
create type public.content_status as enum ('draft', 'published');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.user_role not null default 'editor',
  created_at timestamptz not null default now()
);

create table public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  description text,
  button_text text,
  button_link text,
  image_url text,
  background_image_url text,
  section_visibility jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  status public.content_status not null default 'draft',
  seo_title text,
  seo_description text,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table public.sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  section_key text not null,
  title text,
  content jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  status public.content_status not null default 'draft',
  updated_at timestamptz not null default now(),
  unique(page_id, section_key)
);

create table public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  short_description text,
  long_description text,
  category text,
  image_url text,
  features jsonb not null default '[]'::jsonb,
  status public.content_status not null default 'draft',
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  category text,
  image_url text,
  price_label text,
  status public.content_status not null default 'draft',
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  image_url text,
  description text,
  status public.content_status not null default 'draft',
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  rating integer not null default 5 check (rating between 1 and 5),
  quote text not null,
  status public.content_status not null default 'draft',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.media (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  storage_path text unique,
  public_url text not null,
  alt_text text,
  title text,
  source text not null default 'upload',
  mime_type text,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.blogs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  short_description text,
  content text,
  featured_image_url text,
  gallery_urls jsonb not null default '[]'::jsonb,
  author text,
  published_at timestamptz,
  reading_time integer,
  featured boolean not null default false,
  status public.content_status not null default 'draft',
  seo_title text,
  meta_description text,
  og_image_url text,
  category text,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table public.brands (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  logo_url text,
  description text,
  sort_order integer not null default 0,
  status public.content_status not null default 'published',
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text,
  sort_order integer not null default 0,
  status public.content_status not null default 'published',
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table public.service_areas (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  area_type text,
  description text,
  coverage_status text not null default 'active',
  sort_order integer not null default 0,
  status public.content_status not null default 'published',
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  message text not null,
  service_requested text,
  status text not null default 'new' check (status in ('new', 'in_progress', 'converted', 'closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.seo_metadata (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null unique,
  seo_title text,
  meta_description text,
  canonical_url text,
  og_title text,
  og_description text,
  og_image_url text,
  robots text not null default 'index,follow',
  updated_at timestamptz not null default now()
);

create table public.site_settings (
  id uuid primary key default gen_random_uuid(),
  setting_key text not null unique,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.services add column if not exists gallery_urls jsonb not null default '[]'::jsonb;
alter table public.services add column if not exists icon_name text;
alter table public.services add column if not exists featured boolean not null default false;
alter table public.services add column if not exists seo_title text;
alter table public.services add column if not exists meta_description text;
alter table public.products add column if not exists brand_id uuid references public.brands(id) on delete set null;
alter table public.products add column if not exists short_description text;
alter table public.products add column if not exists full_description text;
alter table public.products add column if not exists specifications jsonb not null default '{}'::jsonb;
alter table public.products add column if not exists gallery_urls jsonb not null default '[]'::jsonb;
alter table public.products add column if not exists featured boolean not null default false;
alter table public.projects add column if not exists location text;
alter table public.projects add column if not exists gallery_urls jsonb not null default '[]'::jsonb;
alter table public.projects add column if not exists featured boolean not null default false;
alter table public.reviews add column if not exists profile_image_url text;
alter table public.reviews add column if not exists review_source text;
alter table public.reviews add column if not exists reviewed_at date;
alter table public.reviews add column if not exists featured boolean not null default false;

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid());
$$;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, role) values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email), 'editor');
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.pages enable row level security;
alter table public.sections enable row level security;
alter table public.services enable row level security;
alter table public.products enable row level security;
alter table public.projects enable row level security;
alter table public.reviews enable row level security;
alter table public.media enable row level security;
alter table public.blogs enable row level security;
alter table public.brands enable row level security;
alter table public.faqs enable row level security;
alter table public.service_areas enable row level security;
alter table public.inquiries enable row level security;
alter table public.seo_metadata enable row level security;
alter table public.site_settings enable row level security;

do $$ declare table_name text; begin
  foreach table_name in array array['profiles','pages','sections','services','products','projects','reviews','media','blogs','brands','faqs','service_areas','inquiries','seo_metadata','site_settings'] loop
    execute format('create policy "Admins manage %s" on public.%I for all using (public.is_admin()) with check (public.is_admin())', table_name, table_name);
  end loop;
end $$;

create policy "Public read published content" on public.services for select using (status = 'published');
create policy "Public read published products" on public.products for select using (status = 'published');
create policy "Public read published blogs" on public.blogs for select using (status = 'published');
create policy "Public read published brands" on public.brands for select using (status = 'published');
create policy "Public read published projects" on public.projects for select using (status = 'published');
create policy "Public read approved reviews" on public.reviews for select using (status = 'published');
create policy "Public read published faqs" on public.faqs for select using (status = 'published');
create policy "Public read active service areas" on public.service_areas for select using (status = 'published' and coverage_status = 'active');
create policy "Public create inquiries" on public.inquiries for insert with check (true);

insert into public.pages (slug, title, description, status) values
  ('home', 'Home', 'PowerFix electrical solutions homepage', 'published'),
  ('about', 'About Us', 'Company story and trust information', 'published'),
  ('services', 'Our Services', 'Electrical services catalogue', 'published'),
  ('products', 'Products', 'Electrical products catalogue', 'published'),
  ('projects', 'Projects', 'Completed project gallery', 'published'),
  ('contact', 'Contact Us', 'Contact and enquiry page', 'published')
on conflict (slug) do nothing;

insert into storage.buckets (id, name, public) values ('media', 'media', true) on conflict (id) do nothing;
create policy "Admins upload media" on storage.objects for insert with check (bucket_id = 'media' and public.is_admin());
create policy "Admins update media" on storage.objects for update using (bucket_id = 'media' and public.is_admin());
create policy "Admins delete media" on storage.objects for delete using (bucket_id = 'media' and public.is_admin());
create policy "Public read media" on storage.objects for select using (bucket_id = 'media');
