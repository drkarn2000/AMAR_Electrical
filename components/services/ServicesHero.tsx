'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { TrustIndicators } from './TrustIndicators';

export function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(3, 17, 39, 0.75) 0%, rgba(7, 31, 60, 0.72) 35%, rgba(18, 52, 98, 0.55) 100%)'
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/services/hero_sec.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_40%)]" />

      <div className="container-shell relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-white/90 shadow-sm backdrop-blur-sm"
          >
            <Zap size={14} className="text-blue-300 animate-pulse" />
            <span>OUR SERVICES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.85rem]"
          >
            Complete Electrical
            <span className="mt-2 block">Solutions for Every Need</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-100 sm:text-lg"
          >
            From installation to maintenance, we provide safe, reliable and professional electrical services for homes, businesses and industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 flex flex-wrap items-center gap-3.5"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-[#1565e6] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(21,101,230,0.3)] transition-all duration-300 hover:bg-[#0f55cb] hover:shadow-[0_14px_30px_rgba(21,101,230,0.4)] hover:-translate-y-0.5 sm:text-base"
            >
              <span>Book a Service</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/8 px-5 py-3 text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-white/12 hover:-translate-y-0.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200">
                <Phone size={16} />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-200">Quick Call</div>
                <div className="text-xs font-bold text-white sm:text-sm">{siteConfig.phone}</div>
              </div>
            </a>
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-10">
          <TrustIndicators />
        </div>
      </div>
    </section>
  );
}
