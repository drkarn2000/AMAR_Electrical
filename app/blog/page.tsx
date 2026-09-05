import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, Clock3, Lightbulb, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Electrical Insights & Advice',
  description: 'Practical electrical advice, safety guides, product explainers, and project insights from the PowerFix team.',
  alternates: { canonical: `${siteConfig.canonicalUrl}/blog` }
};

const articles = [
  { category: 'Safety', title: '7 warning signs your home wiring needs an inspection', excerpt: 'Small electrical symptoms can become expensive hazards. Learn what to notice before a minor issue turns serious.', date: 'May 18, 2026', readTime: '6 min read', image: '/services/engineer_hero.png' },
  { category: 'Guides', title: 'How to choose the right MCB for every circuit', excerpt: 'A practical guide to ratings, protection zones, and the details that make a distribution board safer.', date: 'May 11, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1555618568-211cf84456ca?auto=format&fit=crop&w=1000&q=85' },
  { category: 'Energy', title: 'Simple ways to lower your monthly power use', excerpt: 'Efficient lighting, better load planning, and a few everyday habits can make a measurable difference.', date: 'May 04, 2026', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=85' },
  { category: 'Projects', title: 'Inside a clean, future-ready office installation', excerpt: 'A look at how structured wiring and thoughtful panel planning help workplaces stay flexible.', date: 'April 26, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85' },
  { category: 'Maintenance', title: 'The seasonal electrical maintenance checklist', excerpt: 'Use this simple checklist to prepare fans, pumps, backup power, and outdoor circuits for the season ahead.', date: 'April 18, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85' },
  { category: 'Products', title: 'What to look for in quality electrical accessories', excerpt: 'Genuine materials are about more than packaging. Here are the details worth checking before you buy.', date: 'April 10, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1000&q=85' }
];

export default function BlogPage() {
  const featured = articles[0];

  return (
    <main className="overflow-hidden bg-[#f5f8ff] text-slate-950">
      {/* 1. Blog hero */}
      <section
        className="group relative isolate min-h-[590px] overflow-hidden bg-[#071a2f] text-white"
        style={{ backgroundImage: "url('/Blog-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,35,0.96)_0%,rgba(5,28,52,0.84)_42%,rgba(5,28,52,0.3)_74%,rgba(5,28,52,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,18,35,0.78)_0%,transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(245,184,46,0.18),transparent_28%)] transition duration-700 group-hover:bg-[radial-gradient(circle_at_76%_25%,rgba(245,184,46,0.25),transparent_32%)]" />
        <div className="container-shell relative flex min-h-[590px] items-end py-16 sm:py-20 lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border-l-4 border-amber-400 bg-slate-950/35 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-200 backdrop-blur-sm"><BookOpen size={14} /> PowerFix Journal</div>
            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Practical electrical knowledge for the work ahead.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">Clear guidance for safer homes, smarter projects, and electrical systems that keep performing long after installation day.</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="#featured" className="inline-flex items-center gap-2 rounded-full bg-[#facc15] px-6 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-slate-950 shadow-[0_15px_35px_rgba(250,204,21,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#fde047] hover:shadow-[0_18px_40px_rgba(250,204,21,0.4)]">Read the latest <ArrowRight size={17} /></Link>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-100/85"><ShieldCheck size={17} className="text-amber-300" /> Engineer-reviewed insights</span>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-white/20 pt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-300"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.16)]" /> Safety, maintenance &amp; product guidance <span className="text-amber-300">/</span> Updated weekly</div>
          </div>
        </div>
      </section>

      {/* 2. Featured article */}
      <section id="featured" className="container-shell py-20 sm:py-24">
        <div className="flex items-end justify-between gap-5"><div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700">Featured read</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Start with the essentials</h2></div><Link href="#articles" className="hidden items-center gap-2 text-sm font-extrabold text-blue-700 sm:inline-flex">Browse all articles <ArrowUpRight size={16} /></Link></div>
        <article className="mt-8 grid overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(30,64,175,0.12)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[320px] lg:min-h-[430px]"><Image src={featured.image} alt={featured.title} fill className="object-cover" /></div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14"><span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700">{featured.category}</span><h3 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{featured.title}</h3><p className="mt-5 text-base leading-7 text-slate-600">{featured.excerpt}</p><div className="mt-7 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400"><span>{featured.date}</span><span className="h-1 w-1 rounded-full bg-amber-400" /><span className="inline-flex items-center gap-1"><Clock3 size={14} /> {featured.readTime}</span></div><Link href="#articles" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-slate-950 underline decoration-blue-500 decoration-2 underline-offset-4 transition hover:text-blue-700">Continue reading <ArrowRight size={16} /></Link></div>
        </article>
      </section>

      {/* 3. Article grid */}
      <section id="articles" className="border-y border-slate-200/80 bg-white/70 py-20 sm:py-24"><div className="container-shell"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-700">From the journal</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Useful ideas, clearly explained</h2></div><div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><Lightbulb size={17} className="text-amber-500" /> Safety first. Always.</div></div><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{articles.slice(1).map((article) => <article key={article.title} className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(30,64,175,0.13)]"><div className="relative aspect-[1.45] overflow-hidden"><Image src={article.image} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full border border-white/40 bg-slate-950/60 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">{article.category}</span></div><div className="p-6"><div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400"><span>{article.date}</span><span className="h-1 w-1 rounded-full bg-amber-400" /><span>{article.readTime}</span></div><h3 className="mt-4 text-xl font-black leading-tight tracking-tight transition group-hover:text-blue-700">{article.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p><Link href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-slate-950">Read article <ArrowRight size={15} className="transition group-hover:translate-x-1" /></Link></div></article>)}</div></div></section>

      {/* 4. Newsletter / CTA */}
      <section className="container-shell py-20 sm:py-24"><div className="relative overflow-hidden rounded-[2rem] bg-[#071a2f] px-7 py-12 text-white shadow-[0_25px_70px_rgba(7,26,47,0.22)] sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-16"><div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" /><div className="relative max-w-2xl"><div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300"><Zap size={14} fill="currentColor" /> Practical updates</div><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Keep your next project one step ahead.</h2><p className="mt-4 text-sm leading-7 text-slate-300">Get occasional safety tips, product explainers, and maintenance reminders from the PowerFix team.</p></div><form className="relative mt-8 flex max-w-xl flex-col gap-3 sm:flex-row lg:mt-0" action="#"><input type="email" required placeholder="Your email address" aria-label="Your email address" className="min-h-12 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-300/20" /><button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#facc15] px-5 text-sm font-extrabold text-slate-950 transition hover:bg-[#fde047]">Join the list <ArrowRight size={16} /></button></form></div></section>
    </main>
  );
}
