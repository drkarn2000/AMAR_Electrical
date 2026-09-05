# PowerFix Admin Setup

The admin workspace lives at `/admin` and uses Supabase for authentication, PostgreSQL content, and image storage.

## 1. Create the Supabase project

1. Create a project at https://supabase.com.
2. Open **Project Settings > API**.
3. Copy the project URL and the anon key into a local `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Use `.env.example` as the template. Never expose a Supabase service-role key in the browser.

## 2. Create the database

Open **SQL Editor** in Supabase and run [`supabase/schema.sql`](../supabase/schema.sql). It creates:

- Admin profiles and roles
- Pages and sections
- Services, products, projects, and reviews
- Media metadata and a public `media` storage bucket
- Row-level security policies

## 3. Create the first admin

In Supabase, open **Authentication > Users** and create the first user with email and password. The database trigger creates the matching profile automatically.

Then visit `/admin/login` and sign in.

## 4. Available management areas

- `/admin/pages`
- `/admin/services`
- `/admin/products`
- `/admin/projects`
- `/admin/reviews`
- `/admin/media`
- `/admin/users`

Each content section supports create, edit, and delete. The media section uploads images to Supabase Storage and stores their public URLs.

## Public content note

The current public site still contains its launch content in `lib/constants.ts`, `lib/services-data.ts`, and page components. The admin records are ready and protected, but public pages need to be migrated section-by-section to read published records from Supabase. This avoids replacing the existing site with empty content before the database has been seeded.
