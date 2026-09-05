import Image from 'next/image';
import { brandLogos } from '@/lib/constants';

export function Brands() {
  const half = Math.ceil(brandLogos.length / 2);
  const firstRow = [...brandLogos.slice(0, half), ...brandLogos.slice(0, half)];
  const secondRow = [...brandLogos.slice(half), ...brandLogos.slice(half)];

  return (
    <section id="brands" className="relative overflow-hidden border-y border-slate-100/90 bg-white py-4 sm:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-28" />

      <div className="flex w-full flex-col gap-3 sm:gap-4">
        <div className="marquee marquee-ltr w-full">
          <div className="marquee-track flex items-center gap-3 sm:gap-4 hover:[animation-play-state:paused]">
            {firstRow.map((brand, index) => {
              const isWideLogo = brand.name === 'Relaxo' || brand.name === 'Hosper';

              return (
                <div
                  key={`ltr-${brand.name}-${index}`}
                  className="group relative flex h-14 min-w-[130px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_12px_24px_rgba(59,130,246,0.12)] sm:h-16 sm:min-w-[155px]"
                  title={brand.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-sky-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className={`relative z-10 flex items-center justify-center ${isWideLogo ? 'h-9 w-32 sm:h-10 sm:w-40' : 'h-9 sm:h-10 w-28 sm:w-32'}`}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes={isWideLogo ? '(max-width: 640px) 120px, 160px' : '(max-width: 640px) 120px, 140px'}
                      className="object-contain p-0.5 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="marquee marquee-rtl w-full">
          <div className="marquee-track flex items-center gap-3 sm:gap-4 hover:[animation-play-state:paused]">
            {secondRow.map((brand, index) => {
              const isWideLogo = brand.name === 'Relaxo' || brand.name === 'Hosper';

              return (
                <div
                  key={`rtl-${brand.name}-${index}`}
                  className="group relative flex h-14 min-w-[130px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_12px_24px_rgba(59,130,246,0.12)] sm:h-16 sm:min-w-[155px]"
                  title={brand.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-sky-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className={`relative z-10 flex items-center justify-center ${isWideLogo ? 'h-9 w-32 sm:h-10 sm:w-40' : 'h-9 sm:h-10 w-28 sm:w-32'}`}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes={isWideLogo ? '(max-width: 640px) 120px, 160px' : '(max-width: 640px) 120px, 140px'}
                      className="object-contain p-0.5 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
