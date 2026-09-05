'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allServices, ServiceCategory, ServiceDetail } from '@/lib/services-data';
import { ServiceCard } from './ServiceCard';
import { ServicesFilter } from './ServicesFilter';
import { ServiceModal } from './ServiceModal';

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ServiceCategory, number> = {
      All: allServices.length,
      Residential: 0,
      Commercial: 0,
      Industrial: 0,
      Maintenance: 0
    };

    allServices.forEach((s) => {
      if (counts[s.category] !== undefined) {
        counts[s.category] += 1;
      }
      if (s.additionalCategories) {
        s.additionalCategories.forEach((cat) => {
          if (counts[cat] !== undefined && cat !== s.category) {
            counts[cat] += 1;
          }
        });
      }
    });

    return counts;
  }, []);

  // Filtered services
  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return allServices;
    return allServices.filter(
      (s) =>
        s.category === activeCategory ||
        s.additionalCategories?.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section id="services-grid" className="relative py-16 sm:py-20 bg-slate-50/40">
      <div className="container-shell">
        {/* Section Heading matching reference image */}
        <div className="mx-auto max-w-2xl text-center">
          {/* "- What We Do -" with yellow/gold accent lines */}
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-slate-900">
              What We Do
            </span>
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />
          </div>

          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950">
            One-stop solution for all your electrical needs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Explore our end-to-end engineering, installation and maintenance solutions.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8">
            <ServicesFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              counts={categoryCounts}
            />
          </div>
        </div>

        {/* 5-Column Responsive Services Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-stretch"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="h-full flex flex-col"
              >
                <ServiceCard
                  service={service}
                  onSelect={(item) => setSelectedService(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Service Details & Booking Modal */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      </div>
    </section>
  );
}
