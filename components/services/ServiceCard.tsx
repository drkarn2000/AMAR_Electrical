'use client';

import Image from 'next/image';
import {
  AlertTriangle,
  ArrowRight,
  BatteryCharging,
  Bell,
  Building,
  Building2,
  Camera,
  Cpu,
  Droplets,
  Factory,
  Fan,
  GitCommitVertical,
  Home,
  Lightbulb,
  Network,
  Power,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  Wind,
  Wrench,
  Zap
} from 'lucide-react';
import { ServiceDetail } from '@/lib/services-data';

interface ServiceCardProps {
  service: ServiceDetail;
  onSelect: (service: ServiceDetail) => void;
}

// Icon dictionary mapped to iconName string
const iconMap: Record<string, React.ElementType> = {
  Home,
  Building,
  Building2,
  Factory,
  Wrench,
  Search,
  AlertTriangle,
  Fan,
  Wind,
  Lightbulb,
  ShieldAlert,
  ShieldCheck,
  BatteryCharging,
  Camera,
  Bell,
  Droplets,
  Power,
  Network,
  Cpu,
  UserCheck,
  Zap,
  GitCommitVertical
};

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const imageSrc = service.image.startsWith('/') ? `${service.image}?v=20260905` : service.image;
  const IconComponent = iconMap[service.iconName] || Zap;

  return (
    <div
      onClick={() => onSelect(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service);
        }
      }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.25rem] border border-slate-200/90 bg-white shadow-[0_6px_20px_rgba(15,35,75,0.05)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(21,101,230,0.15)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {/* Top Image Section with Fixed Uniform Height */}
      <div className="relative h-44 sm:h-48 w-full shrink-0 overflow-hidden rounded-t-[1.2rem] bg-slate-100">
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07] group-hover:translate-x-0.5"
        />

        {/* Subtle Dark / Blue Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Light Sweep Reflection Effect */}
        <div className="pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:inset-0 group-hover:opacity-100 group-hover:translate-x-[400%]" />

        {/* Circular Blue Icon Shifted to TOP LEFT of Image */}
        <div className="absolute top-3 left-3 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-white/90 bg-blue-600 text-white shadow-md backdrop-blur-sm transition-all duration-500 ease-out group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-sky-500 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(21,101,230,0.45)]">
          <IconComponent size={20} />
        </div>

        {/* Category Pill on Image (Top Right) */}
        <span className="absolute top-3 right-3 z-10 rounded-full border border-white/40 bg-slate-900/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-blue-600/90">
          {service.category}
        </span>
      </div>

      {/* Card Body - Equalized Heights */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5">
        <div>
          {/* Service Title with Fixed Min-Height for Alignment */}
          <div className="min-h-[2.75rem] flex items-center">
            <h3 className="text-base sm:text-[1.02rem] font-black tracking-tight text-slate-900 leading-snug transition-colors duration-300 group-hover:text-blue-600">
              {service.title}
            </h3>
          </div>

          {/* Short Description with Fixed 2-Line Height */}
          <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-500 line-clamp-2 min-h-[2.5rem]">
            {service.shortDescription}
          </p>
        </div>

        {/* Subtle "Explore Service →" Interaction Pinned to Bottom */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
          <span className="transition-all duration-300 group-hover:text-blue-700">
            Explore Service
          </span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </div>
      </div>
    </div>
  );
}
