'use client';

import { motion } from 'framer-motion';
import { Headphones, IndianRupee, Phone, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const emergencyFeatures = [
  {
    icon: Headphones,
    title: '24x7',
    subtitle: 'Emergency Support'
  },
  {
    icon: Zap,
    title: 'Quick',
    subtitle: 'Response Team'
  },
  {
    icon: IndianRupee,
    title: 'Affordable',
    subtitle: 'Pricing'
  },
  {
    icon: ShieldCheck,
    title: 'Work',
    subtitle: 'Warranty Assured'
  }
];

export function ServicesEmergencyBanner() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-blue-500/30 bg-gradient-to-r from-[#061126] via-[#091b3f] to-[#0a2760] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(4,14,35,0.4)]">
          {/* Subtle Electric Lightning & Particle Background Glow */}
          <div className="pointer-events-none absolute inset-0 -z-0">
            {/* Center lightning glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute top-0 right-1/4 h-48 w-48 rounded-full bg-sky-400/10 blur-2xl" />

            {/* Lightning bolt background lines */}
            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <path
                d="M 380 0 L 410 110 L 390 130 L 440 210 L 415 230 L 460 300"
                stroke="#60a5fa"
                strokeWidth="2"
                fill="none"
                filter="drop-shadow(0 0 8px #3b82f6)"
              />
              <path
                d="M 440 80 L 470 140 L 450 160 L 500 230"
                stroke="#93c5fd"
                strokeWidth="1.5"
                fill="none"
                filter="drop-shadow(0 0 6px #60a5fa)"
              />
            </svg>
          </div>

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] xl:gap-12">
            {/* Left Content Area: 24/7 Badge + Urgent Call */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              {/* Glowing 24/7 circular badge */}
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-full border-2 border-amber-400/80 bg-slate-900/90 shadow-[0_0_25px_rgba(245,184,46,0.25)]">
                <svg
                  className="absolute inset-1 h-[calc(100%-8px)] w-[calc(100%-8px)] text-amber-400 animate-spin"
                  style={{ animationDuration: '18s' }}
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="18 10"
                    fill="none"
                  />
                </svg>
                <div className="text-center font-black leading-none">
                  <div className="text-lg sm:text-xl text-amber-400">24/7</div>
                  <div className="text-[9px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                    Service
                  </div>
                </div>
              </div>

              {/* Text Information */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-black text-white tracking-tight leading-tight">
                  Need Immediate Help?
                </h3>
                <p className="mt-1 text-base sm:text-lg font-extrabold text-amber-400">
                  We&apos;re Available 24x7 for You!
                </p>
                <p className="mt-1 text-xs sm:text-sm text-blue-100/80 font-normal">
                  Call us anytime for emergency electrical support &amp; fast fault resolution.
                </p>

                {/* Call Now Button */}
                <div className="mt-4 pt-1">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 px-6 py-3 text-sm sm:text-base font-extrabold text-white shadow-[0_10px_25px_rgba(225,29,72,0.4)] transition-all duration-300 hover:from-red-500 hover:to-rose-500 hover:shadow-[0_14px_30px_rgba(225,29,72,0.5)]"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <Phone size={14} className="fill-white" />
                    </div>
                    <span>Call Now: {siteConfig.phone}</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right Content Area: 4 Feature Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 border-t lg:border-t-0 lg:border-l border-blue-400/20 pt-6 lg:pt-0 lg:pl-8">
              {emergencyFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.subtitle}
                    className="flex flex-col items-center text-center p-2 rounded-2xl transition hover:bg-white/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/30 border border-blue-400/30 text-sky-400 shadow-inner">
                      <Icon size={22} />
                    </div>
                    <div className="mt-2.5 text-xs sm:text-sm font-black text-white leading-tight">
                      {feat.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-blue-200/80 leading-tight">
                      {feat.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
