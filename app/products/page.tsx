'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Wrench,
  X,
  Zap
} from 'lucide-react';
import { siteConfig } from '@/lib/constants';

interface ProductItem {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  badge?: string;
  features: string[];
}

const productHighlights = [
  { label: '100% Genuine OEM Products', icon: ShieldCheck },
  { label: 'Top Certified Brands', icon: Award },
  { label: 'Fast On-Site Dispatch', icon: Zap },
  { label: 'Transparent Pricing', icon: CheckCircle2 },
  { label: 'Engineer Guidance', icon: Cpu }
];

const products: ProductItem[] = [
  {
    name: 'Wires & Cables',
    category: 'Wiring & Protection',
    description: 'High-performance copper wiring engineered for fire resistance, maximum conductivity, and lasting safety.',
    longDescription: 'ISI-marked multi-strand copper cables with flame retardant low smoke (FRLS) insulation. Designed for residential concealed conduit and heavy industrial power distribution.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
    badge: 'Best Seller',
    features: ['100% pure electrolytic copper', 'FRLS fire-retardant insulation', 'Approved for 1100V grade']
  },
  {
    name: 'Switches & Sockets',
    category: 'Lighting & Switches',
    description: 'Modern switchgear engineered for ergonomic comfort, high mechanical endurance, and aesthetic luxury.',
    longDescription: 'High-amperage polycarbonate switches and child-safe shuttered sockets from Havells, Legrand, and Panasonic. Built for 100,000+ clicks of flawless operation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    badge: 'Popular',
    features: ['Silver cadmium oxide contacts', 'Child-safety shuttered sockets', 'UV-resistant glossy finish']
  },
  {
    name: 'LED Lights',
    category: 'Lighting & Switches',
    description: 'Energy-saving architectural lighting systems delivering high lumen output with zero flicker.',
    longDescription: 'Comprehensive range of LED ceiling downlights, magnetic track lights, profile cove strips, and outdoor IP65 floodlights with high CRI (85+) color accuracy.',
    image: '/services/light-installation.jpg',
    badge: 'Energy Saver',
    features: ['Up to 85% energy savings', '50,000 hours rated LED life', 'High surge voltage protection']
  },
  {
    name: 'Fans',
    category: 'Lighting & Switches',
    description: 'High-efficiency ceiling, exhaust, and BLDC fans built for maximum airflow, silent motors, and low power.',
    longDescription: 'Modern BLDC motor ceiling fans consuming only 28W at full speed, equipped with smart RF remotes, aerodynamic blades, and decorative trims.',
    image: '/services/fan-installation.jpg',
    features: ['Energy-efficient BLDC motors', 'Double ball-bearing quiet rotation', 'Anti-dust blade coating']
  },
  {
    name: 'MCB & Switchgear',
    category: 'Wiring & Protection',
    description: 'Dependable miniature circuit breakers for rapid short circuit and overload tripping protection.',
    longDescription: 'Type B & C curve MCBs, Isolators, and RCCBs (30mA/100mA) designed to safeguard human life against fatal shocks and eliminate electrical fire hazards.',
    image: '/services/mcb-installation.jpg',
    badge: 'Safety Crucial',
    features: ['10kA high breaking capacity', 'Instantaneous magnetic trip mechanism', 'Bi-connect terminal layout']
  },
  {
    name: 'Distribution Boards',
    category: 'Wiring & Protection',
    description: 'Heavy-duty steel panel boards ensuring structured circuitry, phase isolation, and easy maintenance.',
    longDescription: 'IP43 rated sheet steel enclosures with busbar chambers, acrylic windows, and independent neutral links for clean R-Y-B three-phase and single-phase segregation.',
    image: '/services/panel-installation.jpg',
    badge: 'Heavy Duty',
    features: ['Powder-coated rust-resistant steel', 'Integrated earth & neutral bars', 'Reversible door mechanism']
  },
  {
    name: 'Modular Switches',
    category: 'Lighting & Switches',
    description: 'Premium modular switch accessories adding elegance, touch functionality, and uniformity to spaces.',
    longDescription: 'Sleek frameless glass and metal faceplates compatible with smart home automation modules, USB fast charging ports, and step regulators.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80',
    badge: 'Luxury',
    features: ['Tempered glass & metallic finishes', 'Smart home automation compatible', 'Integrated USB Type-C sockets']
  },
  {
    name: 'PVC Pipes & Conduits',
    category: 'Wiring & Protection',
    description: 'Rigid electrical conduits and accessories engineered for impact resistance and easy wire pulling.',
    longDescription: 'High-impact unplasticized PVC pipes for concrete slab laying and surface electrical conduit routing with fire-retardant formulation.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    features: ['Non-conductive & shock proof', 'High compression strength', 'Anti-rodent additive compound']
  },
  {
    name: 'Water Pumps',
    category: 'Power & Utility',
    description: 'Reliable centrifugal, monoblock, and submersible water pumping systems built for continuous duty.',
    longDescription: 'Heavy-duty cast iron and stainless steel pump sets with thermal overload protection and high hydraulic efficiency for homes and commercial setups.',
    image: '/services/water-pump-installation.jpg',
    badge: 'High Performance',
    features: ['100% copper wound induction motor', 'Anti-rust stainless steel shaft', 'Built-in thermal overload protector']
  },
  {
    name: 'Inverters',
    category: 'Power & Utility',
    description: 'Pure sine wave power inverters delivering seamless backup power to delicate electronics.',
    longDescription: 'Microcontroller-based pure sine wave UPS systems with automatic smart charging, solar hybrid inputs, and ultra-fast changeover under 10ms.',
    image: '/services/inverter-installation.jpg',
    badge: 'Uninterrupted Power',
    features: ['Pure sine wave output', 'Heavy load cold-start capability', 'Adaptive 3-stage battery charging']
  },
  {
    name: 'Batteries',
    category: 'Power & Utility',
    description: 'High-capacity tubular deep-cycle storage batteries built for long power backup and cyclic life.',
    longDescription: 'Tall tubular inverter batteries featuring antimony spine technology, low water loss, and heavy electrolyte reservoirs for 1200+ discharge cycles.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80',
    features: ['High acid volume per ampere-hour', 'Heavy spine pressure die-cast grids', 'Extended 36–60 month warranty']
  },
  {
    name: 'Electrical Tools',
    category: 'Power & Utility',
    description: 'Professional-grade insulated pliers, digital multimeters, wire strippers, and testing equipment.',
    longDescription: 'VDE 1000V tested safety hand tools, non-contact voltage detectors, digital clamp meters, and cable crimpers for precision engineering tasks.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
    badge: 'Pro Grade',
    features: ['VDE certified 1000V insulation', 'Chrome vanadium alloy steel', 'Precision torque & calibration']
  }
];

const categories = ['All', 'Wiring & Protection', 'Lighting & Switches', 'Power & Utility'];

const trustPillars = [
  {
    title: 'Certified Quality & Safety Compliance',
    desc: 'Tested to national ISI & international IEC standards with zero compromise on safety.',
    icon: ShieldCheck,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Professional Engineering Guidance',
    desc: 'Load calculations and selection assistance from certified electrical engineers.',
    icon: Cpu,
    gradient: 'from-sky-500 to-blue-600'
  },
  {
    title: 'Smart Solutions for Homes & Businesses',
    desc: 'Energy-saving LED systems, BLDC motors, and automation-ready switchgear.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Reliable Availability & 24/7 Support',
    desc: 'Continuous warehouse inventory with prompt on-site dispatch and warranty backing.',
    icon: Clock,
    gradient: 'from-emerald-500 to-teal-600'
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-[#f5f8ff] text-slate-900 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-slate-950 pb-20 pt-16 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36">
        {/* Background Image - High Visibility & Vibrancy */}
        <div
          className="absolute inset-0 bg-cover bg-right lg:bg-center transition-transform duration-1000"
          style={{
            backgroundImage: "url('/Product_hero.png')",
            opacity: 0.9
          }}
        />
        {/* Left-weighted dark gradient for crystal clear text legibility while keeping right image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="container-shell relative z-10">
          <div className="max-w-3xl text-white">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md shadow-sm"
            >
              <Zap size={14} className="fill-amber-400 text-amber-400 animate-bounce" />
              <span>PREMIUM ELECTRICAL SUPPLIES</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.5rem]"
            >
              High-Quality Electrical Solutions for{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                Every Space
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-amber-400 opacity-60" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal"
            >
              Discover certified electrical essentials from top OEM brands for homes, offices, commercial towers, and industries—engineered for safety, efficiency, and lasting value.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#catalog"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-slate-950 shadow-[0_12px_30px_rgba(245,184,46,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_40px_rgba(245,184,46,0.55)] hover:-translate-y-0.5"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call: {siteConfig.phone}</span>
              </a>
            </motion.div>
          </div>

          {/* 5 Glassmorphic Key Highlights Bar */}
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {productHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.06 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] cursor-default"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-black shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. REDESIGNED "WHY CUSTOMERS TRUST US" SECTION (Requested Redesign) */}
      <section className="container-shell -mt-10 sm:-mt-14 relative z-20 pb-20 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2.5rem] border border-blue-200/80 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(15,35,75,0.08)] backdrop-blur-xl"
          style={{
            backgroundImage: "url('/CUSTOMERS%20TRUST%20US.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(255,255,255,0.08)'
          }}
        >
          <div className="absolute inset-0 bg-slate-950/5" />
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* Left: Premium High-Tech Electrical Visual with Floating Badge */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-slate-900 shadow-xl group">
              <div className="relative aspect-[4/3] sm:aspect-[14/11] w-full overflow-hidden">
                <Image
                  src="/services/panel-installation.jpg"
                  alt="Industrial grade certified electrical distribution board and switchgear installation"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Ambient dark blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Corner Certification Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/25 bg-slate-900/80 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-md shadow-md">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>100% Genuine Certified</span>
                </div>

                {/* Light Sweep Reflection Effect */}
                <div className="pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:inset-0 group-hover:opacity-100 group-hover:translate-x-[400%]" />
              </div>

              {/* Floating Bottom Quality Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black text-slate-950">
                      OEM Brand Warranty
                    </div>
                    <div className="text-[11px] font-medium text-slate-600">
                      Direct manufacturer authorized distribution
                    </div>
                  </div>
                </div>
                <span className="hidden sm:inline-block rounded-full bg-amber-400/20 border border-amber-500/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-amber-900">
                  ISI / CE
                </span>
              </motion.div>
            </div>

            {/* Right: Content & 4 Interactive Redesigned Mini-Cards */}
            <div className="flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>WHY CUSTOMERS TRUST US</span>
              </div>

              {/* Heading */}
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                Premium products backed by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700">
                  dependable service.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-slate-600">
                We understand that the right electrical product means more than just performance—it must also be safe, durable, and easy to trust. That is why every item we recommend is chosen with quality, compliance, and practicality in mind.
              </p>

              {/* 4 Interactive Feature Pillars */}
              <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {trustPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/60 p-4 transition-all duration-300 hover:border-blue-400 hover:bg-white hover:shadow-[0_12px_28px_rgba(21,101,230,0.12)] cursor-default"
                    >
                      {/* Top Bar with Icon */}
                      <div className="flex items-start gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="text-sm font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PRODUCT CATALOG WITH CATEGORY FILTER TABS & 12 CARDS */}
      <section id="catalog" className="container-shell pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-sky-200/80 p-6 sm:p-8 lg:p-10 text-white shadow-[0_20px_60px_rgba(11,35,65,0.18)]"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(3, 18, 33, 0.82) 0%, rgba(14, 54, 97, 0.74) 100%), url('/Product%20CTA.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.2),_transparent_38%)]" />
          <div className="relative z-10">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-slate-900">
              Our Product Collection
            </span>
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />
          </div>

          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
            Essential electrical products for modern living
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Certified components and smart switchgear from authorized manufacturers.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-[0_4px_16px_rgba(21,101,230,0.35)]'
                      : 'bg-white border border-slate-200/80 text-slate-700 hover:bg-white hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProductFilter"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
          </div>
        </motion.div>

        {/* 12 Interactive Products Grid with Identical Heights & Hover Zoom */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.name}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setActiveModalProduct(product)}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-slate-200/90 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,35,75,0.05)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_20px_45px_rgba(21,101,230,0.16)] cursor-pointer"
              >
                {/* Product Image with Uniform Height (h-52) & Zoom Effect */}
                <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-[1.1rem] bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:translate-x-0.5"
                  />

                  {/* Dark Blue Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Light Sweep Reflection */}
                  <div className="pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:inset-0 group-hover:opacity-100 group-hover:translate-x-[400%]" />

                  {/* Keep the quality badge top-left and the category badge bottom-right. */}
                  {product.badge && (
                    <span className="absolute left-2.5 top-2.5 z-10 max-w-[calc(100%-1.25rem)] rounded-full bg-amber-400 px-2.5 py-1 text-center text-[9px] font-black uppercase leading-tight tracking-wider text-slate-950 shadow-sm sm:text-[10px]">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-2.5 right-2.5 z-10 max-w-[calc(100%-1.25rem)] rounded-full border border-white/40 bg-slate-900/70 px-2.5 py-1 text-center text-[9px] font-bold uppercase leading-tight tracking-wider text-white backdrop-blur-md transition-colors group-hover:bg-blue-600 sm:text-[10px]">
                    {product.category}
                  </span>
                </div>

                {/* Card Body - Standardized Equal Heights */}
                <div className="flex flex-1 flex-col justify-between pt-4 pb-2 px-1">
                  <div>
                    {/* Title with Uniform Min-Height */}
                    <div className="min-h-[2.5rem] flex items-center">
                      <h3 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-500 line-clamp-2 min-h-[2.5rem]">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span className="group-hover:text-blue-700 transition-colors">
                      View Details &amp; Quote
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Product Inquiry Modal */}
        <AnimatePresence>
          {activeModalProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProduct(null)}
                className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProduct(null)}
                  aria-label="Close product modal"
                  className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 hover:scale-105"
                >
                  <X size={18} />
                </button>

                {/* Top Image Banner */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={activeModalProduct.image}
                    alt={activeModalProduct.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  <div className="absolute bottom-5 left-6 right-6 flex flex-col items-start gap-2">
                    <div>
                      <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold uppercase leading-tight tracking-wider text-white backdrop-blur-md">
                        <Shield size={13} className="fill-white" />
                        <span>{activeModalProduct.category}</span>
                      </span>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                        {activeModalProduct.name}
                      </h2>
                    </div>
                    {activeModalProduct.badge && (
                      <span className="order-first max-w-full rounded-full bg-amber-400 px-3 py-1 text-center text-xs font-black uppercase leading-tight tracking-wider text-slate-950 shadow-md">
                        {activeModalProduct.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Product Specifications &amp; Overview
                    </h4>
                    <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                      {activeModalProduct.longDescription || activeModalProduct.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {activeModalProduct.features && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Features &amp; Quality
                      </h4>
                      <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                        {activeModalProduct.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-xs font-bold text-slate-800"
                          >
                            <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Warranty Strip */}
                  <div className="flex items-center gap-3 rounded-2xl bg-blue-50/60 p-3 border border-blue-100 text-xs sm:text-sm text-blue-950 font-medium">
                    <ShieldCheck size={20} className="text-blue-600 shrink-0" />
                    <span>Direct OEM warranty and authentic manufacturer packaging guaranteed.</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
                    >
                      <Phone size={16} />
                      <span>Call for Best Price</span>
                    </a>
                    <a
                      href={`${siteConfig.whatsapp}?text=${encodeURIComponent(`Hello PowerFix Electrical, I would like to enquire about: ${activeModalProduct.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#20b859] hover:shadow-lg"
                    >
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <Link
                      href={`/contact?product=${encodeURIComponent(activeModalProduct.name)}`}
                      onClick={() => setActiveModalProduct(null)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                    >
                      <span>Request Quote</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. BOTTOM RECOMMENDATIONS CTA SECTION */}
      <section className="container-shell pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-r from-sky-950 via-blue-900 to-sky-900 px-6 py-10 text-white shadow-[0_28px_80px_rgba(14,116,144,0.25)] sm:px-10 lg:px-12 border border-sky-400/20"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(2, 20, 38, 0.58) 0%, rgba(8, 45, 84, 0.62) 38%, rgba(16, 68, 117, 0.52) 100%), url('/prodct__CTA_SEC.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Subtle Ambient Electric Glows */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="pointer-events-none absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-blue-500/15 blur-2xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-400/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-sky-300">
                <Sparkles size={13} />
                <span>Need product recommendations?</span>
              </div>
              <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight text-white">
                Let our engineering team help you pick the right equipment.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-sky-100/90 font-medium">
                Get advice on cable cross-sections, switchgear breaking capacity, and lighting lux levels.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row shrink-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#facc15] to-[#eab308] px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-slate-950 shadow-[0_10px_25px_rgba(250,204,21,0.35)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(250,204,21,0.5)]"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call Now</span>
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                >
                  <span>Request Custom Quote</span>
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
