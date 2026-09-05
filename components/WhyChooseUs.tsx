import { ArrowRight, Award, Clock3, Gauge, Shield, Sparkles, Wrench, Zap } from 'lucide-react';

const stats = [
  { value: '1,200+', label: 'Projects completed' },
  { value: '24/7', label: 'Emergency support' },
  { value: '4.9/5', label: 'Client rating' }
];

const features = [
  {
    title: 'Engineer Managed',
    summary: 'Design-led planning backed by technical expertise and code-compliant execution.',
    icon: Sparkles,
    accent: 'from-sky-500/20 via-sky-500/8 to-slate-900',
    badge: '01'
  },
  {
    title: 'Genuine Products',
    summary: 'Only trusted, certified components selected for reliability and long-term performance.',
    icon: Shield,
    accent: 'from-emerald-500/20 via-emerald-500/8 to-slate-900',
    badge: '02'
  },
  {
    title: 'Affordable Price',
    summary: 'Transparent pricing and smart solutions that protect your budget without cutting corners.',
    icon: Gauge,
    accent: 'from-violet-500/20 via-violet-500/8 to-slate-900',
    badge: '03'
  },
  {
    title: 'Fast Response',
    summary: 'Rapid attendance and practical problem-solving when timing matters most.',
    icon: Clock3,
    accent: 'from-amber-500/20 via-amber-500/8 to-slate-900',
    badge: '04'
  },
  {
    title: 'Experienced Team',
    summary: 'Skilled electricians trusted for residential, commercial, and industrial work.',
    icon: Wrench,
    accent: 'from-cyan-500/20 via-cyan-500/8 to-slate-900',
    badge: '05'
  },
  {
    title: 'Warranty on Work',
    summary: 'Confidence built into every installation with dependable workmanship guarantees.',
    icon: Award,
    accent: 'from-fuchsia-500/20 via-fuchsia-500/8 to-slate-900',
    badge: '06'
  },
  {
    title: 'On Time Service',
    summary: 'Structured scheduling and clean execution that keeps projects moving on target.',
    icon: Zap,
    accent: 'from-rose-500/20 via-rose-500/8 to-slate-900',
    badge: '07'
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="container-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
            Reliable electrical solutions with lasting peace of mind.
          </h2>
          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            From everyday fixes to major upgrades, we combine practical expertise, premium standards, and responsive support to keep your property running safely and smoothly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
              <div className="text-3xl font-black tracking-[-0.06em] text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, summary, icon: Icon, accent, badge }) => (
            <div key={title} className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br ${accent} p-[1px] shadow-[0_24px_60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-2 hover:border-sky-300/40`}>
              <div className="flex h-full flex-col rounded-[1.7rem] bg-slate-950/90 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/20 transition duration-300 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.24em] text-slate-400">{badge}</span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{summary}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                  Trusted solution
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
