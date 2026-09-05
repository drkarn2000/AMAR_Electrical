import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { productCategories } from '@/lib/constants';

export function Products() {
  return (
    <section id="products" className="bg-white/70 py-20">
      <div className="container-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Products We Sell</span>
            <h2 className="section-heading mt-5">Premium Electrical Materials</h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            View All Products <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <div className="relative h-56 overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
