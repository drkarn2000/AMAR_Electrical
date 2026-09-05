'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpenText, Boxes, BriefcaseBusiness, FileImage, FileText, Globe2, HelpCircle, LayoutDashboard, LogOut, Mail, MapPinned, Menu, MessageSquareQuote, Search, SlidersHorizontal, Users, Wrench, X } from 'lucide-react';
import { useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';

const navGroups = [
  {
    label: 'Workspace',
    items: [
      { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { label: 'Website Pages', href: '/admin/pages', icon: FileText },
      { label: 'Services', href: '/admin/services', icon: Wrench },
      { label: 'Products', href: '/admin/products', icon: Boxes },
      { label: 'Blogs', href: '/admin/blogs', icon: BookOpenText },
      { label: 'Brands', href: '/admin/brands', icon: Globe2 },
      { label: 'Projects', href: '/admin/projects', icon: BriefcaseBusiness },
      { label: 'Reviews', href: '/admin/reviews', icon: MessageSquareQuote },
      { label: 'Service Areas', href: '/admin/service-areas', icon: MapPinned },
      { label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
      { label: 'Inquiries', href: '/admin/inquiries', icon: Mail }
    ]
  },
  {
    label: 'Assets & Growth',
    items: [
      { label: 'Media Library', href: '/admin/media', icon: FileImage },
      { label: 'SEO & Metadata', href: '/admin/global-seo', icon: Search },
      { label: 'Settings', href: '/admin/business-information', icon: SlidersHorizontal }
    ]
  }
];

export function AdminShell({ email, children }: { email: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  async function signOut() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    window.location.assign('/admin/login');
  }

  return (
    <div className="admin-theme min-h-screen bg-[#06111f] text-[#eef6ff]">
      {mobileOpen && <button aria-label="Close admin navigation" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/60 lg:hidden" />}
      <aside className={`${mobileOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#05101d]/98 px-3 py-4 backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0`}>
        <Link href="/admin" className="flex items-center gap-3 border-b border-white/10 px-3 pb-6 pt-1"><span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#3bd7ff] to-[#1654e7] text-xl font-black text-white shadow-[0_0_32px_rgba(29,140,255,0.28)]">A</span><span className="text-[13px] font-black tracking-[0.08em]">AMR ELECTRICAL<small className="mt-1 block text-[8px] font-bold tracking-[0.22em] text-[#58caff]">CONTENT CONTROL CENTER</small></span></Link>
        <nav className="flex-1 space-y-6 overflow-y-auto px-1 py-5">{navGroups.map((group) => <div key={group.label}><p className="px-3 pb-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#5d7690]">{group.label}</p><div className="space-y-1">{group.items.map((item) => { const Icon = item.icon; const active = pathname === item.href.split('?')[0] || (item.href !== '/admin' && pathname.startsWith(item.href.split('?')[0])); return <Link key={item.href} href={item.href} className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${active ? 'bg-gradient-to-r from-[#238dff25] to-[#238dff06] text-white shadow-[inset_0_0_0_1px_rgba(35,141,255,0.22),0_0_25px_rgba(35,141,255,0.06)] before:absolute before:-left-3.5 before:top-1.5 before:bottom-1.5 before:w-[3px] before:rounded-full before:bg-[#35d8ff] before:shadow-[0_0_14px_#197cff]' : 'text-[#8ba2ba] hover:translate-x-1 hover:bg-[#218cff12] hover:text-white'}`}><Icon size={18} className="text-[#67bcff]" />{item.label}</Link>; })}</div></div>)}</nav>
        <div className="border-t border-white/10 p-2 pt-4"><div className="truncate px-3 pb-3 text-xs text-[#7890aa]">{email}</div><button onClick={signOut} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[#8ba2ba] transition hover:bg-[#ff637715] hover:text-[#ff8191]"><LogOut size={18} /> Sign out</button></div>
      </aside>
      <main className="min-h-screen bg-[radial-gradient(1000px_600px_at_85%_-10%,#124b80_0,#06111f_55%)] lg:pl-72"><header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#06111f]/70 px-5 sm:px-8"><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#58caff]">AMR ELECTRICAL / <span className="text-[#eef6ff]">Control Center</span></p><h1 className="mt-1 text-xl font-black tracking-tight text-white">Website management</h1></div><Link href="/" target="_blank" className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-bold text-[#dbe8f5] transition hover:border-[#238dff65] hover:bg-[#238dff0d]">View website ↗</Link></header><div className="p-5 sm:p-8">{children}</div></main>
    </div>
  );
}
