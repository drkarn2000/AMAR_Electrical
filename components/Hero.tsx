'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BadgeCheck,
  Clock,
  House,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const statCards = [
  { value: '10+', label: 'Years Experience', icon: ShieldCheck, color: 'from-blue-600 to-sky-500' },
  { value: '500+', label: 'Projects Completed', icon: House, color: 'from-sky-500 to-indigo-600' },
  { value: '1000+', label: 'Happy Customers', icon: Users, color: 'from-amber-500 to-orange-500' },
  { value: '24×7', label: 'Emergency Support', icon: Clock, color: 'from-rose-500 to-red-600' }
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-300, 300], [-8, 8]);
  const parallaxY = useTransform(smoothY, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-white pb-0"
    >
      {/* Background with the Electrician, panel, house, lighting arcs and wave */}
      <div
        className="relative bg-no-repeat bg-[center_right_-80px] md:bg-right lg:bg-center"
        style={{
          backgroundImage: "url('/hero_home.png')",
          backgroundSize: 'cover'
        }}
      >
        {/* Subtle Ambient Particle & Glow Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/60 lg:to-transparent" />
        <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-shell relative z-10 pt-8 pb-10 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.18fr_0.82fr]">
            {/* Left Content Column */}
            <div className="max-w-2xl">
              {/* Pill badge with pulsing spark */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-bold tracking-wide text-slate-800 shadow-sm backdrop-blur-md"
              >
                <Zap size={14} className="fill-blue-600 text-blue-600 animate-pulse" />
                <span>Trusted Electrical Solutions Since 2015</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black tracking-tight leading-[1.06] text-slate-950"
              >
                <span className="text-[#1565e6] block">Electrical Sales,</span>
                <span className="text-[#0a1936] block">Installation &amp;</span>
                <span className="text-[#0a1936] block">Repair Services</span>
              </motion.h1>

              {/* Golden Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 56 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-3.5 mb-5 h-1 rounded-full bg-[#f5b82e]"
              />

              {/* Subheading 1 */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-900 text-base sm:text-lg font-bold leading-snug"
              >
                Complete Electrical Solutions for{' '}
                <span className="text-[#1565e6]">Homes</span>,{' '}
                <span className="text-[#1565e6]">Shops</span>,{' '}
                <span className="text-[#1565e6]">Offices</span> &amp;{' '}
                <span className="text-[#1565e6]">Industries</span>.
              </motion.p>

              {/* Subheading 2 */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-3 max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal"
              >
                From quality electrical products to professional installation and maintenance, we deliver safe, reliable and affordable electrical services.
              </motion.p>

              {/* 3 Action Buttons with Strong Hover Effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-7 flex flex-wrap items-center gap-3 sm:gap-3.5"
              >
                {/* Call Now */}
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="group inline-flex items-center gap-3 rounded-2xl bg-[#1565e6] px-4 sm:px-5 py-3 text-white shadow-[0_10px_25px_rgba(21,101,230,0.32)] transition-all duration-300 hover:bg-[#0f55cb] hover:shadow-[0_16px_35px_rgba(21,101,230,0.48)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Phone size={18} className="fill-white text-white" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-100">Call Now</div>
                    <div className="text-[13px] font-extrabold text-white mt-0.5">{siteConfig.phone}</div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 sm:px-5 py-3 text-slate-900 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_10px_25px_rgba(37,211,102,0.2)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.19-.174.29-.087.101-.183.226-.262.304-.088.087-.179.182-.077.357.101.174.451.744.969 1.205.666.593 1.229.777 1.403.864.173.087.275.072.376-.044.101-.116.433-.506.549-.679.116-.174.232-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/>
                    </svg>
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-[11px] font-semibold text-slate-500">WhatsApp</div>
                    <div className="text-[13px] font-extrabold text-slate-900 mt-0.5">Chat With Us</div>
                  </div>
                </motion.a>

                {/* Get Free Quote */}
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-2xl bg-[#f5b82e] px-4 sm:px-5 py-3 text-slate-950 shadow-[0_10px_24px_rgba(245,184,46,0.3)] transition-all duration-300 hover:bg-[#eab308] hover:shadow-[0_16px_35px_rgba(245,184,46,0.45)]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950/10 text-slate-950 transition-transform duration-300 group-hover:rotate-6">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div className="text-left leading-tight">
                      <div className="text-[11px] font-bold text-slate-800">Get Free Quote</div>
                      <div className="text-[13px] font-extrabold text-slate-950 mt-0.5 flex items-center gap-1">
                        Fast &amp; Easy <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Bottom Trust Bar Capsule with Interactive Hover Dynamics */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-8 rounded-2xl border border-white/80 bg-white/90 p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] backdrop-blur-md"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 md:divide-x md:divide-slate-200">
                  {/* Rated Local Service */}
                  <div className="flex items-center gap-2.5 px-2 py-1 transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Star size={16} className="fill-blue-600 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-slate-900 leading-tight">Rated Local Service</div>
                      <div className="flex items-center gap-0.5 text-amber-400 text-xs mt-0.5">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                  </div>

                  {/* Certified Engineer */}
                  <div className="flex items-center gap-2.5 px-2 py-1 transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-slate-900 leading-tight">Certified Engineer</div>
                      <div className="text-[11px] font-medium text-slate-500">Licensed &amp; Verified</div>
                    </div>
                  </div>

                  {/* Genuine Products */}
                  <div className="flex items-center gap-2.5 px-2 py-1 transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <BadgeCheck size={16} />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-slate-900 leading-tight">Genuine Products</div>
                      <div className="text-[11px] font-medium text-slate-500">100% Original</div>
                    </div>
                  </div>

                  {/* Fast Response */}
                  <div className="flex items-center gap-2.5 px-2 py-1 transition-transform hover:scale-105 cursor-default">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Zap size={16} className="fill-blue-600/20" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-slate-900 leading-tight">Fast Response</div>
                      <div className="text-[11px] font-medium text-slate-500">Quick &amp; Reliable</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: 4 Stat Cards Stack with Parallax & Strong Hover Effects */}
            <motion.div
              style={{ x: parallaxX, y: parallaxY }}
              className="relative hidden lg:flex flex-col justify-center items-end py-6 min-h-[540px]"
            >
              <div className="flex flex-col gap-3.5 w-full max-w-[210px] xl:max-w-[220px]">
                {statCards.map(({ value, label, icon: Icon, color }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    whileHover={{ scale: 1.07, x: -8 }}
                    className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-white/90 bg-white/95 p-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:shadow-[0_18px_35px_rgba(21,101,230,0.18)] cursor-pointer"
                  >
                    {/* Light sweep */}
                    <div className="pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 transition-all duration-700 group-hover:inset-0 group-hover:opacity-100 group-hover:translate-x-[350%]" />

                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[1.3rem] font-black tracking-tight text-slate-950 leading-none group-hover:text-blue-600 transition-colors">
                        {value}
                      </div>
                      <div className="text-[10px] font-bold text-slate-600 uppercase tracking-tight mt-1 leading-tight">
                        {label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
