import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ArrowUpRight, Boxes, BriefcaseBusiness, FileImage, FileText, MessageSquareQuote, Settings2, Users } from 'lucide-react';
import { AdminShell } from '@/components/admin/AdminShell';
import { DashboardInsights } from '@/components/admin/DashboardInsights';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { getAdminUser } from '@/lib/supabase/admin-auth';

export const dynamic = 'force-dynamic';

const modules = [
  { title: 'Pages & Sections', description: 'Edit page copy, SEO fields, and homepage sections.', href: '/admin/pages', icon: FileText, color: 'blue' },
  { title: 'Services', description: 'Manage your electrical service catalogue and categories.', href: '/admin/services', icon: Settings2, color: 'amber' },
  { title: 'Products', description: 'Update products, descriptions, images, and visibility.', href: '/admin/products', icon: Boxes, color: 'emerald' },
  { title: 'Projects', description: 'Keep your completed work gallery fresh and credible.', href: '/admin/projects', icon: BriefcaseBusiness, color: 'violet' },
  { title: 'Reviews', description: 'Approve and publish customer testimonials.', href: '/admin/reviews', icon: MessageSquareQuote, color: 'rose' },
  { title: 'Media Library', description: 'Upload, organize, and reuse website imagery.', href: '/admin/media', icon: FileImage, color: 'cyan' },
  { title: 'Users', description: 'Control who can access the admin workspace.', href: '/admin/users', icon: Users, color: 'slate' }
];

export default async function AdminDashboard() {
  const user = await getAdminUser();
  if (!user) redirect('/admin/login');

  const tables = ['pages', 'services', 'products', 'projects', 'reviews', 'media'] as const;
  const hasSupabase = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const counts = hasSupabase
    ? await Promise.all(tables.map(async (table) => { const supabase = await createSupabaseServerClient(); const { count } = await supabase.from(table).select('*', { count: 'exact', head: true }); return count ?? 0; }))
    : tables.map(() => 0);
  const stats = [{ label: 'Website Visits', value: '—', note: 'Analytics pending' }, { label: 'Products', value: counts[2], note: hasSupabase ? 'Live database count' : 'Awaiting database' }, { label: 'Services', value: counts[1], note: hasSupabase ? 'Live database count' : 'Awaiting database' }, { label: 'New Inquiries', value: '—', note: 'Inquiry tracking pending' }];

  return <AdminShell email={user.email ?? 'Administrator'}><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-medium text-[#7890aa]">Welcome back, Administrator.</p><h2 className="mt-1 text-3xl font-black tracking-tight text-[#eef6ff]">Website Control Center</h2><p className="mt-2 text-sm text-[#7890aa]">Manage your complete AMR Electrical website from one premium CMS.</p></div><Link href="/admin/pages" className="inline-flex items-center gap-2 self-start rounded-[11px] bg-gradient-to-br from-[#ffdb39] to-[#ffba00] px-4 py-3 text-sm font-extrabold text-[#04101d] shadow-[0_0_28px_rgba(255,201,40,0.14)] transition hover:-translate-y-0.5">Quick Action <ArrowUpRight size={16} /></Link></div>{!hasSupabase && <div className="mt-8 rounded-2xl border border-[#ffc92835] bg-[#ffc92812] px-5 py-4 text-sm font-medium text-[#ffd64e]">Demo access is active. Add your Supabase URL and anon key to enable database-backed content editing.</div>}<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b]/95 to-[#071625]/95 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.32)]"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7089a2]">{stat.label}</p><p className="mt-3 text-3xl font-black text-[#eef6ff]">{stat.value}</p><p className={`mt-1 text-[10px] font-bold uppercase tracking-[0.14em] ${stat.value === '—' ? 'text-[#ffd54d]' : hasSupabase ? 'text-[#25d69b]' : 'text-[#ffd54d]'}`}>{stat.note}</p></div>)}</div><DashboardInsights counts={{ pages: counts[0], services: counts[1], products: counts[2], media: counts[5] }} hasSupabase={hasSupabase} /><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{modules.map((module) => { const Icon = module.icon; return <Link key={module.href} href={module.href} className="group rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b]/95 to-[#071625]/95 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-[#238dff55] hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]"><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#238dff18] text-[#62c0ff] transition group-hover:bg-[#238dff2b]"><Icon size={20} /></span><ArrowUpRight size={18} className="text-[#5cbaff] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div><h3 className="mt-6 text-lg font-black text-[#eef6ff]">{module.title}</h3><p className="mt-2 text-sm leading-6 text-[#7d94ad]">{module.description}</p></Link>; })}</div></div></AdminShell>;
}
