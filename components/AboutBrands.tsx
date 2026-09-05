'use client';

import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface BrandCardItem {
  id: string;
  name: string;
  tagline: string;
  logoSrc: string;
  alt: string;
}

export function AboutBrands() {
  const brands: BrandCardItem[] = [
    {
      id: 'havells',
      name: 'Havells',
      tagline: 'Reliable • Safe • Superior',
      logoSrc: '/Brands/official/havells.svg',
      alt: 'Havells Official Logo'
    },
    {
      id: 'anchor',
      name: 'Anchor by Panasonic',
      tagline: 'Trusted • Innovative • Safe',
      logoSrc: '/Brands/official/anchor.svg',
      alt: 'Anchor by Panasonic Official Logo'
    },
    {
      id: 'polycab',
      name: 'Polycab',
      tagline: 'Trusted • Durable • Innovative',
      logoSrc: '/Brands/official/polycab.png',
      alt: 'Polycab Official Logo'
    },
    {
      id: 'finolex',
      name: 'Finolex Cables',
      tagline: 'Safe • Durable • Reliable',
      logoSrc: '/Brands/official/finolex.svg',
      alt: 'Finolex Cables Official Logo'
    },
    {
      id: 'rr-kabel',
      name: 'RR Kabel',
      tagline: 'Strong • Safe • Reliable',
      logoSrc: '/Brands/official/rr-kabel.svg',
      alt: 'RR Kabel Official Logo'
    },
    {
      id: 'philips',
      name: 'Philips',
      tagline: 'Innovative • Reliable • Efficient',
      logoSrc: '/Brands/official/philips.svg',
      alt: 'Philips Official Logo'
    },
    {
      id: 'crompton',
      name: 'Crompton',
      tagline: 'Trusted • Durable • Efficient',
      logoSrc: '/Brands/official/crompton.webp',
      alt: 'Crompton Official Logo'
    },
    {
      id: 'syska',
      name: 'Syska',
      tagline: 'Stylish • Reliable • Efficient',
      logoSrc: '/Brands/official/syska.png',
      alt: 'Syska Official Logo'
    },
    {
      id: 'panasonic',
      name: 'Panasonic',
      tagline: 'Reliable • Innovative • Durable',
      logoSrc: '/Brands/official/panasonic.svg',
      alt: 'Panasonic Official Logo'
    },
    {
      id: 'schneider',
      name: 'Schneider Electric',
      tagline: 'Safe • Smart • Sustainable',
      logoSrc: '/Brands/official/schneider.svg',
      alt: 'Schneider Electric Official Logo'
    },
    {
      id: 'legrand',
      name: 'Legrand',
      tagline: 'Innovative • Reliable • Premium',
      logoSrc: '/Brands/official/legrand.svg',
      alt: 'Legrand Official Logo'
    },
    {
      id: 'relaxo',
      name: 'Relaxo',
      tagline: 'Comfort • Modern • Reliable',
      logoSrc: '/Brands/official/logo-black-relaxo.png',
      alt: 'Relaxo Home Appliances Official Logo'
    },
    {
      id: 'hosper',
      name: 'Hosper',
      tagline: 'Smart • Safe • Durable',
      logoSrc: '/Brands/official/Hosper-New-Logo-1-2-1.png',
      alt: 'Hosper Official Logo'
    }
  ];

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: "url('/Brands%20We%20Deal%20In.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent'
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-transparent" />

      <div className="container-shell relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow with Shield */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
            <span className="h-px w-6 bg-blue-300" />
            <ShieldCheck className="h-4 w-4 text-[#1565e6] animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1565e6]">
              OUR TRUSTED PARTNERS
            </span>
            <span className="h-px w-6 bg-blue-300" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Brands We Deal In
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            We use and provide only 100% genuine and high quality electrical products from the most trusted and leading brands in the industry.
          </p>

          {/* Golden accent bar */}
          <div className="mx-auto mt-4 mb-10 h-1 w-14 rounded-full bg-[#f5b82e]" />
        </motion.div>

        {/* 4-Column Desktop, 2-Column Tablet, 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
          {brands.map((brand, index) => {
            const isWideLogo = brand.name === 'Relaxo' || brand.name === 'Hosper';

            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(21,101,230,0.12)] cursor-pointer"
              >
                {/* Subtle top-edge gradient glow on hover */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Logo Area: Centered to match homepage slider proportions */}
                <div className={`flex w-full items-center justify-center ${isWideLogo ? 'h-16' : 'h-20'} p-2`}>
                  <img
                    src={brand.logoSrc}
                    alt={brand.alt}
                    className={`${isWideLogo ? 'h-full w-full max-h-14 max-w-[92%]' : 'max-h-14 max-w-[88%]'} object-contain transition-transform duration-500 ease-out group-hover:scale-110`}
                    loading="lazy"
                  />
                </div>

                {/* Tagline / Bullets Footer */}
                <div className="border-t border-slate-100 pt-3 text-center w-full">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-blue-600">
                    {brand.tagline}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* 12th Card: 100% Genuine Products Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 11 * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl border border-blue-200/90 bg-gradient-to-b from-blue-50/50 via-white to-white p-6 shadow-[0_8px_24px_rgba(21,101,230,0.05)] text-center transition-all duration-300 hover:border-blue-400 hover:shadow-[0_20px_45px_rgba(21,101,230,0.16)] cursor-pointer"
          >
            {/* Ambient Pulse Glow */}
            <div className="pointer-events-none absolute -inset-2 bg-gradient-to-r from-blue-400/10 via-sky-400/10 to-indigo-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Blue Circular Icon with continuous bob */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1565e6] to-[#0f52c1] text-white shadow-[0_8px_20px_rgba(21,101,230,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            >
              <ShieldCheck className="h-7 w-7" />
            </motion.div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-black tracking-tight text-[#1565e6] transition-transform duration-300 group-hover:scale-105">
              100% Genuine Products
            </h3>

            {/* Description */}
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-[210px]">
              We guarantee original products from trusted brands only.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
