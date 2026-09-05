import { Star } from 'lucide-react';
import { reviewPlaceholders } from '@/lib/constants';

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage: "url('/Customer%20Reviews.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent'
      }}
    >
      <div className="absolute inset-0 bg-transparent" />
      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Customer Reviews</span>
          <h2 className="section-heading mt-5">Trusted Performance, Verified Experience</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviewPlaceholders.map((review, index) => (
            <article key={review.slice(0, 20) + index} className="group rounded-[1.8rem] border border-slate-200/80 bg-white/80 p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-200 hover:bg-white hover:shadow-glow backdrop-blur-sm">
              <div className="flex items-center gap-1 text-electric transition duration-300 group-hover:scale-105">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-slate-600">“{review}”</p>
              <div className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-500 transition group-hover:text-slate-700">
                Google Review Placeholder
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
