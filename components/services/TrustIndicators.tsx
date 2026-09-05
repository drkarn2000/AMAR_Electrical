'use client';

import { Award, Clock, HardHat, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: ShieldCheck,
    title: 'Safe & Reliable',
    description: 'Work with highest safety standards',
    color: 'from-blue-600 to-sky-500'
  },
  {
    icon: HardHat,
    title: 'Expert Engineers',
    description: 'Skilled & certified professionals',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    icon: Clock,
    title: 'On Time Service',
    description: 'We value your time and deadlines',
    color: 'from-sky-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'Satisfaction Guaranteed',
    description: 'Quality service you can trust',
    color: 'from-amber-500 to-yellow-400'
  }
];

export function TrustIndicators() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 pt-2">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + index * 0.08, ease: 'easeOut' }}
            className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-3 sm:p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="leading-tight min-w-0">
              <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight truncate">
                {item.title}
              </div>
              <div className="mt-0.5 text-[11px] sm:text-xs text-slate-500 leading-tight line-clamp-1 sm:line-clamp-2">
                {item.description}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
