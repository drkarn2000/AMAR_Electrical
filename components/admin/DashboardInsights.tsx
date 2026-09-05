import Link from 'next/link';
import { Activity, ArrowUpRight, BarChart3, CheckCircle2, Clock3, FileImage, MessageSquare, Package, Zap } from 'lucide-react';

type DashboardInsightsProps = {
  counts: { pages: number; services: number; products: number; media: number };
  hasSupabase: boolean;
};

export function DashboardInsights({ counts, hasSupabase }: DashboardInsightsProps) {
  const health = [
    { module: 'Website Pages', items: counts.pages, published: counts.pages, draft: 0, status: 'Healthy' },
    { module: 'Services', items: counts.services, published: counts.services, draft: 0, status: 'Healthy' },
    { module: 'Products', items: counts.products, published: counts.products, draft: 0, status: 'Healthy' },
    { module: 'Media Library', items: counts.media, published: counts.media, draft: 0, status: 'Healthy' }
  ];

  return <>
    <div className="mt-6 grid gap-4 xl:grid-cols-[1.55fr_1fr]">
      <section className="overflow-hidden rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b]/95 to-[#071625]/95 shadow-[0_22px_70px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2"><BarChart3 size={16} className="text-[#62c0ff]" /><b className="text-sm">Website Performance</b></div><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7890aa]">Last 30 days</span></div>
        <div className="p-5"><div className="relative h-44 overflow-hidden rounded-xl bg-[repeating-linear-gradient(to_bottom,transparent_0_42px,rgba(255,255,255,0.06)_43px)]"><div className="grid h-full place-items-center text-center text-xs text-[#7890aa]"><BarChart3 size={22} className="mx-auto mb-2 text-[#5cbaff]" /><span>Connect an analytics provider to display live performance data.</span></div></div><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-[#7890aa]"><span>Visitors <b className="text-[#ffd54d]">Pending</b></span><span>Average <b className="text-[#ffd54d]">Pending</b></span><span>Conversion <b className="text-[#ffd54d]">Pending</b></span></div></div>
      </section>
      <section className="overflow-hidden rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b]/95 to-[#071625]/95 shadow-[0_22px_70px_rgba(0,0,0,0.3)]"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2"><Activity size={16} className="text-[#62c0ff]" /><b className="text-sm">Recent Activity</b></div><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#25d69b]">● Live</span></div><div className="space-y-5 p-5">{[{ icon: Zap, title: 'Services workspace ready', text: `${counts.services} service records available` }, { icon: Package, title: 'Product catalogue connected', text: `${counts.products} product records available` }, { icon: FileImage, title: 'Media library status', text: `${counts.media} media files available` }, { icon: MessageSquare, title: 'Content control center', text: 'CMS modules are ready to manage' }].map((item) => { const Icon = item.icon; return <div key={item.title} className="flex gap-3"><div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#238dff18] text-[#5db8ff]"><Icon size={15} /></div><div><b className="text-xs">{item.title}</b><p className="mt-1 text-[10px] text-[#738aa3]">{item.text}</p></div></div>; })}</div></section>
    </div>
    <section className="mt-4 overflow-hidden rounded-[17px] border border-white/10 bg-gradient-to-br from-[#0f253b]/95 to-[#071625]/95 shadow-[0_22px_70px_rgba(0,0,0,0.3)]"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#25d69b]" /><b className="text-sm">Content Health</b></div><Link href="/admin/pages" className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-[#dbe8f5] transition hover:border-[#238dff65] hover:bg-[#238dff0d]">Manage pages <ArrowUpRight size={14} /></Link></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left"><thead><tr className="border-b border-white/10 text-[9px] uppercase tracking-[0.16em] text-[#65809a]">{['Module', 'Items', 'Published', 'Draft', 'Last Updated', 'Status'].map((heading) => <th key={heading} className="px-5 py-3 font-bold">{heading}</th>)}</tr></thead><tbody>{health.map((row) => <tr key={row.module} className="border-b border-white/[0.06] text-xs transition hover:bg-[#238dff08]"><td className="px-5 py-3 font-bold text-[#eef6ff]">{row.module}</td><td className="px-5 py-3 text-[#7890aa]">{row.items}</td><td className="px-5 py-3 text-[#7890aa]">{row.published}</td><td className="px-5 py-3 text-[#7890aa]">{row.draft}</td><td className="px-5 py-3 text-[#7890aa]"><span className="inline-flex items-center gap-1"><Clock3 size={12} /> Just now</span></td><td className="px-5 py-3"><span className="rounded-full bg-[#25d69b17] px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#4be3b0]">{row.status}</span></td></tr>)}</tbody></table></div></section>
  </>;
}
