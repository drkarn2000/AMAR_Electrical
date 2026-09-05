import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';
import { AdminShell } from '@/components/admin/AdminShell';
import { ContentManager } from '@/components/admin/ContentManager';
import { WebsitePagesManager } from '@/components/admin/WebsitePagesManager';
import { getAdminUser } from '@/lib/supabase/admin-auth';

const sections = ['pages', 'services', 'products', 'blogs', 'brands', 'projects', 'reviews', 'faqs', 'service-areas', 'inquiries', 'media', 'page-seo', 'blog-seo', 'global-seo', 'business-information', 'contact-information', 'social-links', 'header-settings', 'footer-settings', 'users'] as const;
type Section = (typeof sections)[number];

export default async function AdminSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section as Section)) notFound();
  const user = await getAdminUser();
  if (!user) redirect('/admin/login');
  return <AdminShell email={user.email ?? 'Admin'}>{section === 'pages' ? <WebsitePagesManager /> : <ContentManager section={section as Exclude<Section, 'pages'>} />}</AdminShell>;
}
