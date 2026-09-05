'use client';

import { 
  Award, 
  CheckCircle2, 
  Cpu, 
  ReceiptText, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ReasonItem {
  number: string;
  category: string;
  title: string;
  description: string;
  highlight: string;
  icon: typeof ShieldCheck;
  iconGradient: string;
  glowColor: string;
  borderHover: string;
}

export function AboutWhyChooseUs() {
  const reasons: ReasonItem[] = [
    {
      number: '01',
      category: 'CREDENTIALS',
      title: 'Certified Master Electricians',
      description: 'Every project is executed by licensed engineers trained in national safety codes, load balancing, and fault protection. Never unverified labor.',
      highlight: 'Govt Certified & Insured',
      icon: Award,
      iconGradient: 'from-blue-600 to-indigo-600',
      glowColor: 'rgba(37,99,235,0.18)',
      borderHover: 'hover:border-blue-400'
    },
    {
      number: '02',
      category: 'AUTHENTICITY',
      title: '100% Genuine OEM Products',
      description: 'We source exclusively from authorized distributors of Havells, Polycab, Schneider, Philips, and Legrand. Complete warranty protection guaranteed.',
      highlight: 'Original Certified Stock',
      icon: ShieldCheck,
      iconGradient: 'from-emerald-600 to-teal-600',
      glowColor: 'rgba(16,185,129,0.18)',
      borderHover: 'hover:border-emerald-400'
    },
    {
      number: '03',
      category: 'TRANSPARENCY',
      title: 'Upfront & Fixed Pricing',
      description: 'Transparent written estimates before any tool touches your property. No hidden diagnosis fees, no surprise bill shock, and honest counsel.',
      highlight: 'Zero Hidden Charges',
      icon: ReceiptText,
      iconGradient: 'from-amber-500 to-orange-600',
      glowColor: 'rgba(245,158,11,0.18)',
      borderHover: 'hover:border-amber-400'
    },
    {
      number: '04',
      category: 'SPEED',
      title: 'Rapid 24×7 Emergency Dispatch',
      description: 'Power failures, burning smell, tripping MCBs, or sparking panels require immediate action. Our dedicated response team is on call round the clock.',
      highlight: '30–45 Min Priority Attendance',
      icon: Zap,
      iconGradient: 'from-rose-600 to-red-600',
      glowColor: 'rgba(225,29,72,0.18)',
      borderHover: 'hover:border-rose-400'
    },
    {
      number: '05',
      category: 'ASSURANCE',
      title: 'Workmanship Warranty',
      description: 'We back every cable drawn, switch mounted, and breaker configured with our dependable service warranty. If an issue occurs, we fix it promptly.',
      highlight: 'Service & Parts Warranty',
      icon: CheckCircle2,
      iconGradient: 'from-violet-600 to-purple-600',
      glowColor: 'rgba(139,92,246,0.18)',
      borderHover: 'hover:border-violet-400'
    },
    {
      number: '06',
      category: 'TECHNOLOGY',
      title: 'Modern Diagnostic Equipment',
      description: 'Equipped with digital thermal cameras, laser levels, and precision insulation testers for non-destructive troubleshooting and immaculate finishes.',
      highlight: 'Thermal & Digital Testing',
      icon: Cpu,
      iconGradient: 'from-cyan-600 to-blue-600',
      glowColor: 'rgba(6,182,212,0.18)',
      borderHover: 'hover:border-cyan-400'
    }
  ];

  const highlights = [
    { label: 'Proven Mastery', value: '10+ Years', sub: 'Serving since 2015' },
    { label: 'Completed Jobs', value: '1,200+', sub: 'Homes & businesses' },
    { label: 'Client Satisfaction', value: '4.9 / 5.0', sub: 'Verified reviews' },
    { label: 'Emergency Support', value: '24×7', sub: 'Always accessible' }
  ];

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-transparent" />

      <div className="container-shell relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/70 px-4 py-1.5 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
            <span className="h-2 w-2 rounded-full bg-[#1565e6] animate-ping" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1565e6]">
              WHY CHOOSE AMR ELECTRICAL
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Engineered for Safety,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565e6] to-[#0d9488]">
              Built on Pure Trust
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            From critical industrial power systems to modern residential wiring, we deliver precision electrical engineering backed by certified masters, genuine parts, and transparent customer commitment.
          </p>

          <div className="mx-auto mt-4 mb-12 h-1 w-14 rounded-full bg-[#f5b82e]" />
        </motion.div>

        {/* 6 High-Impact Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_8px_25px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_22px_45px_var(--glow)] ${item.borderHover}`}
                style={{ ['--glow' as string]: item.glowColor }}
              >
                {/* Subtle Light Sweep on Card Hover */}
                <div className="pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 transition-all duration-700 group-hover:inset-0 group-hover:opacity-100 group-hover:translate-x-[350%]" />

                {/* Top Bar: Icon + Category Badge */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.iconGradient} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 transition-colors group-hover:border-slate-300 group-hover:bg-blue-50/50">
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                        {item.number}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 group-hover:text-blue-700 transition-colors">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-black tracking-tight text-slate-900 group-hover:text-[#1565e6] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Capsule */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Check className="h-3.5 w-3.5 text-[#1565e6] transition-transform duration-300 group-hover:scale-125" />
                    <span>{item.highlight}</span>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-[#1565e6] group-hover:text-white group-hover:translate-x-1 group-hover:shadow-md">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Stat Bar with Hover Micro-interactions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-r from-slate-900 via-[#0a1936] to-slate-900 p-6 sm:p-8 text-white shadow-[0_20px_50px_rgba(10,25,54,0.15)]"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-white/10">
            {highlights.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`flex flex-col items-center text-center cursor-default p-2 rounded-2xl transition-colors hover:bg-white/5 ${idx !== 0 ? 'md:pl-6' : ''}`}
              >
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-bold text-[#dbeafe]">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
