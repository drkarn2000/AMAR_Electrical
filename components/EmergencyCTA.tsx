'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  AlertTriangle,
  Clock,
  Flame,
  PhoneCall,
  Power,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const emergencyIssues = [
  {
    name: 'Short Circuit & Sparking',
    desc: 'Immediate circuit isolation to prevent electrical fire',
    icon: Flame,
    color: 'from-red-600 to-rose-600'
  },
  {
    name: 'Complete Power Blackout',
    desc: 'Main incomer and phase failure diagnostics',
    icon: Power,
    color: 'from-amber-600 to-orange-600'
  },
  {
    name: 'Continuous MCB Tripping',
    desc: 'Earth leakage & neutral overload detection',
    icon: AlertTriangle,
    color: 'from-yellow-500 to-amber-600'
  },
  {
    name: 'Burning Wire Smell',
    desc: 'Concealed conduit thermal inspection & repair',
    icon: AlertCircle,
    color: 'from-red-600 to-amber-600'
  },
  {
    name: 'Industrial Panel Breakdown',
    desc: 'Three-phase busbar, contractor & drive repair',
    icon: Zap,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Inverter / Generator Failure',
    desc: 'Emergency backup changeover & battery restart',
    icon: ShieldAlert,
    color: 'from-violet-600 to-purple-600'
  }
];

export function EmergencyCTA() {
  const whatsappEmergencyMsg = encodeURIComponent(
    'URGENT: Hello PowerFix Electrical, I have an emergency electrical breakdown and need urgent assistance!'
  );

  return (
    <section id="emergency" className="relative overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-white to-[#f5f9ff] py-20 text-slate-950 sm:py-24">
      {/* Background Electric Ambience & Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 h-96 w-96 rounded-full bg-red-600/15 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ef4444_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Subtle Lightning Line */}
        <svg
          className="absolute top-0 right-10 w-96 h-96 opacity-15 text-red-500"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M200 0 L180 120 L230 140 L160 280 L210 290 L140 400"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2.5rem] border border-red-500/30 bg-cover bg-center p-6 shadow-[0_25px_70px_rgba(225,29,72,0.18)] backdrop-blur-xl sm:p-10 lg:p-12"
          style={{
            backgroundImage: "url('/24×7%20EMERGENCY%20DISPATCH.png')"
          }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] xl:gap-14">
            {/* Left Column: Heading, Badge, and 6 Interactive Issue Cards */}
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Emergency Pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-red-400 backdrop-blur-md shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                <span>24×7 EMERGENCY DISPATCH</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
              >
                Urgent Electrical Complaint?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                  We Arrive Fast.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.48 }}
                className="mt-3.5 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
              >
                Dangerous electrical faults cannot wait. Our emergency engineering fleet is on call round the clock with calibrated diagnostic gear and certified replacement parts.
              </motion.p>

              {/* 6 Interactive Emergency Issues Grid with Hover Effects */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {emergencyIssues.map((issue, index) => {
                  const Icon = issue.icon;
                  return (
                    <motion.a
                      key={issue.name}
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      whileHover={{ y: -5, scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-red-400/60 hover:bg-white/10 hover:shadow-[0_12px_28px_rgba(225,29,72,0.2)] cursor-pointer"
                    >
                      <span className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/3 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 group-hover:left-[125%] group-hover:opacity-100" />
                      <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${issue.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon size={18} />
                      </div>
                      <div className="relative z-10 min-w-0">
                        <div className="text-xs sm:text-sm font-black text-white group-hover:text-red-300 transition-colors">
                          {issue.name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 leading-tight">
                          {issue.desc}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: High-Impact Hotline Command Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.2rem] border border-red-500/40 bg-gradient-to-b from-red-950/40 via-slate-900 to-slate-950 p-6 sm:p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Pulsing Beacon Ring Behind Call Icon */}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-red-600/25 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white shadow-[0_0_35px_rgba(225,29,72,0.5)] transition-transform duration-300 hover:scale-110">
                  <PhoneCall size={34} className="animate-pulse" />
                </div>
              </div>

              {/* Status Header */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>HOTLINE ONLINE • 24/7 ATTENDANCE</span>
              </div>

              <div className="mt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Emergency Dispatch Hotline
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="mt-1 block text-2xl sm:text-3xl font-black text-white hover:text-red-300 transition-colors tracking-tight"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
                  Priority mobile van dispatched with licensed electrical engineer within 30–45 minutes.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(225,29,72,0.45)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(225,29,72,0.6)]"
                >
                  <PhoneCall size={16} />
                  <span>Call Emergency Team</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={`${siteConfig.whatsapp}?text=${whatsappEmergencyMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-white/10 hover:border-white/40"
                >
                  <span>Send SOS via WhatsApp</span>
                </motion.a>
              </div>

              {/* Assurance strip */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-[11px] font-medium text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Zero Hidden Costs
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-amber-400" />
                  30–45 Min ETA
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
