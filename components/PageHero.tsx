import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = '#contact',
  primaryLabel = 'Get Free Quote',
  secondaryHref = '/contact',
  secondaryLabel = 'Book a Call'
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),transparent_36%)]" />
      <div className="container-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 shadow-sm">
            <BadgeCheck size={14} />
            {eyebrow}
          </div>
          <h1 className="font-['var(--font-display)'] text-4xl font-extrabold tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3.5 text-base font-semibold text-white shadow-glow">
              {primaryLabel}
              <ArrowRight size={18} />
            </Link>
            <Link href={secondaryHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm hover:border-brand-200 hover:text-brand-700">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
