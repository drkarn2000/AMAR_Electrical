'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Phone, ShieldCheck, X, Zap } from 'lucide-react';
import { ServiceDetail } from '@/lib/services-data';
import { siteConfig } from '@/lib/constants';

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  const imageSrc = service
    ? service.image.startsWith('/')
      ? `${service.image}?v=20260906`
      : service.image
    : '';

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello PowerFix Electrical, I would like to book or inquire about your service: ${service.title}.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 hover:scale-105"
          >
            <X size={18} />
          </button>

          {/* Top Image Banner */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
            <Image
              src={imageSrc}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <Zap size={13} className="fill-white" />
                  {service.category}
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                  {service.title}
                </h2>
              </div>
              {service.badge && (
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md">
                  {service.badge}
                </span>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Service Overview
              </h3>
              <p className="mt-2 text-base text-slate-700 leading-relaxed font-normal">
                {service.longDescription || service.shortDescription}
              </p>
            </div>

            {/* Key Features */}
            {service.features && service.features.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  What&apos;s Included
                </h3>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-xs sm:text-sm font-medium text-slate-800"
                    >
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trust highlight */}
            <div className="flex items-center gap-3 rounded-2xl bg-blue-50/60 p-3.5 border border-blue-100">
              <ShieldCheck size={20} className="text-blue-600 shrink-0" />
              <div className="text-xs sm:text-sm text-blue-900 font-medium leading-tight">
                All work executed by licensed &amp; certified electrical engineers with a 100% safety &amp; satisfaction guarantee.
              </div>
            </div>

            {/* Booking Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              >
                <Phone size={16} />
                <span>Call Directly</span>
              </a>

              <a
                href={`${siteConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#20b859] hover:shadow-lg"
              >
                <span>WhatsApp Booking</span>
              </a>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
