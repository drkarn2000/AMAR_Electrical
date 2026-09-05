'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  Factory,
  Home,
  MapPin,
  MapPinned,
  Navigation,
  Phone,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const areas = [
  {
    name: 'Villages & Rural Areas',
    type: 'Domestic & Agricultural',
    eta: '30–45 Mins',
    desc: 'Borewell pump wiring, farm house power connections, single & three-phase lines.',
    icon: Home,
    gradient: 'from-blue-600 to-sky-500'
  },
  {
    name: 'Towns & Suburbs',
    type: 'Residential & Retail',
    eta: '25–40 Mins',
    desc: 'New home wiring, inverter setups, tripping MCB repairs, and emergency fixes.',
    icon: Building,
    gradient: 'from-sky-500 to-blue-600'
  },
  {
    name: 'Commercial Hubs',
    type: 'Offices & Showrooms',
    eta: '30–45 Mins',
    desc: 'Office structured raceway power, UPS distribution, and designer LED lighting.',
    icon: Building2,
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    name: 'Industrial Zones',
    type: 'Factories & Plants',
    eta: '30–45 Mins',
    desc: 'Heavy-duty busbar panels, motor drives, cable tray dressing, and earthing grids.',
    icon: Factory,
    gradient: 'from-slate-800 to-blue-900'
  },
  {
    name: 'Residential Colonies',
    type: 'Apartments & Villas',
    eta: '20–35 Mins',
    desc: 'Main distribution board dressing, smart home switches, and safety RCCB installs.',
    icon: MapPin,
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Nearby Cities & Corridors',
    type: 'Extended Projects',
    eta: 'Scheduled & Priority',
    desc: 'Turnkey contract electrification, government code compliance, and load audits.',
    icon: Compass,
    gradient: 'from-emerald-600 to-teal-600'
  }
];

export function ServiceAreas() {
  const [activeArea, setActiveArea] = useState<string>(areas[0].name);

  return (
    <section id="areas" className="relative overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-white to-[#f5f9ff] py-20 sm:py-24 lg:py-28">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#3b82f6_0.75px,transparent_0.75px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="container-shell relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
            <MapPinned size={14} className="text-blue-600 animate-bounce" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-700">
              LOCAL COVERAGE &amp; DISPATCH
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-tight">
            Serving Nearby Communities With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700">
              Fast On-Site Response
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Our engineer-managed service vans and local dispatch units are active across nearby villages, towns, and industrial clusters with fast arrival and fully equipped emergency vans.
          </p>

          <div className="mx-auto mt-4 mb-12 h-1 w-14 rounded-full bg-[#f5b82e]" />
        </motion.div>

        {/* 2-Column Grid: Location Cards Left + Interactive Radar Map Right */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column: 6 Location Cards with Strong Hover Effects */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            {areas.map((area, index) => {
              const Icon = area.icon;
              const isActive = activeArea === area.name;

              return (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setActiveArea(area.name)}
                  whileHover={{ y: -6 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4.5 sm:p-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-blue-400 bg-white shadow-[0_16px_36px_rgba(21,101,230,0.12)]'
                      : 'border-slate-200/90 bg-white/80 hover:border-blue-300 hover:bg-white hover:shadow-[0_12px_28px_rgba(15,35,75,0.06)]'
                  }`}
                >
                  {/* Subtle Light Sweep */}
                  <div className="pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 transition-all duration-700 group-hover:inset-0 group-hover:opacity-100 group-hover:translate-x-[350%]" />

                  <div>
                    {/* Top Row: Icon + ETA Pill */}
                    <div className="flex items-center justify-between">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                        <Icon size={20} />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                        <Clock size={11} />
                        {area.eta}
                      </span>
                    </div>

                    {/* Area Name */}
                    <h3 className="mt-3.5 text-base font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {area.name}
                    </h3>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                      {area.type}
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-500">
                      {area.desc}
                    </p>
                  </div>

                  {/* Bottom Coverage Status Indicator */}
                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Active Dispatch Unit
                    </span>
                    <span className="text-blue-600 font-bold text-[11px] group-hover:translate-x-1 transition-transform">
                      Book Visit →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Premium Interactive Radar / Service Beacon Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.5rem] border border-blue-200/90 bg-cover bg-center p-6 text-white shadow-[0_24px_60px_rgba(10,25,54,0.2)] sm:p-8"
            style={{ backgroundImage: "url('/GPS%20FLEET%20DISPATCH.png')" }}
          >
            {/* Animated Radar Rings in Background */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-44 w-44 rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute h-72 w-72 rounded-full border border-sky-400/15" />
              <div className="absolute h-96 w-96 rounded-full border border-blue-500/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),transparent_65%)]" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Radar Status Header */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>GPS FLEET DISPATCH • ACTIVE</span>
                </div>
                <span className="text-xs text-sky-200 font-bold">24×7 Coverage</span>
              </div>

              {/* Central Map Illustration Card */}
              <motion.div
                whileHover={{ y: -3, borderColor: 'rgba(147, 197, 253, 0.45)' }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition-shadow duration-300 hover:bg-white/10 hover:shadow-[0_16px_34px_rgba(37,99,235,0.16)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Navigation size={22} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">Central Operations Hub</h4>
                    <p className="text-xs text-sky-200 mt-0.5">Dispatched to your exact location in minutes</p>
                  </div>
                </div>

                {/* Radius Distance Highlights */}
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <motion.div whileHover={{ y: -4, scale: 1.03 }} className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors duration-300 hover:border-amber-300/40 hover:bg-amber-300/10">
                    <div className="text-base sm:text-lg font-black text-amber-300">0–15 km</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">Tier 1: ~25 Min</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -4, scale: 1.03 }} className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors duration-300 hover:border-sky-300/40 hover:bg-sky-300/10">
                    <div className="text-base sm:text-lg font-black text-sky-300">15–30 km</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">Tier 2: ~40 Min</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -4, scale: 1.03 }} className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors duration-300 hover:border-blue-300/40 hover:bg-blue-300/10">
                    <div className="text-base sm:text-lg font-black text-blue-300">30+ km</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">Priority Dispatch</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Service Features Checkmarks */}
              <div className="space-y-2.5">
                {[
                  'Mobile service vans stocked with original OEM cables & breakers',
                  'Instant arrival confirmation via SMS & WhatsApp call tracking',
                  'Zero hidden travel fees — fixed, transparent upfront estimate'
                ].map((point) => (
                  <motion.div
                    key={point}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative flex items-start gap-2.5 overflow-hidden rounded-lg px-2 py-1 text-xs text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
                    <CheckCircle2 size={16} className="relative z-10 mt-0.5 shrink-0 text-amber-400 transition-transform duration-200 group-hover:scale-110" />
                    <span className="relative z-10">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick Call Action */}
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.55)]"
                >
                  <Phone size={16} />
                  <span>Request Instant Attendance: {siteConfig.phone}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
