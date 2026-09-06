'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AboutBrands } from '@/components/AboutBrands';
import { AboutWhyChooseUs } from '@/components/AboutWhyChooseUs';
import { siteConfig } from '@/lib/constants';

const statItems = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '1000+', label: 'Happy Clients' },
  { value: '24/7', label: 'Emergency Service' }
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5f8ff] text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Background Image with Layered Gradients */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(2, 13, 34, 0.88) 0%, rgba(3, 22, 45, 0.76) 40%, rgba(11, 69, 128, 0.55) 100%), url('/about_hero.png')"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),transparent_35%)]" />

        <div className="container-shell relative z-10 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl text-white">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#facc15] animate-ping" />
              <span>About Our Company</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl"
            >
              Powering safer,{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-indigo-200">
                smarter spaces.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200"
            >
              We are a trusted electrical service company dedicated to delivering premium installations, maintenance, repairs, and energy-efficient solutions for homes, offices, shops, and commercial spaces.
            </motion.p>

            {/* CTA Buttons with Hover Lift & Shine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#facc15] to-[#eab308] px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-slate-950 shadow-[0_15px_35px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(250,204,21,0.45)] hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>

          {/* 4 Interactive Stat Cards in Hero */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statItems.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:border-sky-300/50 hover:bg-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] cursor-default"
              >
                {/* Light Sweep Glow on Card Hover */}
                <div className="pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:inset-0 group-hover:opacity-100 group-hover:translate-x-[350%]" />

                <div className="text-3xl sm:text-4xl font-black tracking-[-0.05em] text-white transition-transform duration-300 group-hover:scale-105 drop-shadow">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-sky-200 transition-colors group-hover:text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Staggered Motion */}
      <AboutWhyChooseUs />

      {/* Brands We Deal In Section with Hover Scale */}
      <AboutBrands />

      {/* Bottom Assistance CTA Banner */}
      <section className="container-shell mt-8 pb-24 sm:mt-10 lg:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-sky-400/20 bg-cover bg-center px-6 py-10 text-white shadow-[0_28px_80px_rgba(14,116,144,0.25)] sm:px-10 lg:px-12"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(2, 17, 36, 0.82) 0%, rgba(8, 42, 76, 0.72) 42%, rgba(12, 59, 105, 0.66) 100%), url('/about_cta.png')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="pointer-events-none absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-blue-500/15 blur-2xl"
          />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-400/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-sky-300">
                <Sparkles size={13} />
                <span>Need assistance?</span>
              </div>
              <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight text-white">
                Let us help with your next electrical project.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-sky-100/90 font-medium">
                Reach out today for professional consultation, load calculations, or emergency maintenance.
              </p>
            </motion.div>

            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:items-center shrink-0">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#facc15] to-[#eab308] px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-slate-950 shadow-[0_10px_25px_rgba(250,204,21,0.35)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(250,204,21,0.5)]"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call Now</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
