'use client';

import { motion } from 'framer-motion';
import { ServiceCategory, serviceCategories } from '@/lib/services-data';

interface ServicesFilterProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (category: ServiceCategory) => void;
  counts: Record<ServiceCategory, number>;
}

export function ServicesFilter({
  activeCategory,
  onSelectCategory,
  counts
}: ServicesFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
      {serviceCategories.map((tab) => {
        const isActive = activeCategory === tab.value;
        const count = counts[tab.value] ?? 0;

        return (
          <button
            key={tab.value}
            onClick={() => onSelectCategory(tab.value)}
            className={`relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
              isActive
                ? 'text-white shadow-[0_4px_16px_rgba(21,101,230,0.35)]'
                : 'bg-white/80 text-slate-700 hover:bg-white hover:text-blue-600 border border-slate-200/80'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-600"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
            <span
              className={`relative z-10 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-extrabold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
