'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '@/lib/constants';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-heading mt-5">Common Questions</h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white/80 shadow-soft transition duration-300 hover:border-brand-200 hover:shadow-glow">
                <button
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-800 transition group-hover:text-brand-700">{item.question}</span>
                  <ChevronDown size={18} className={`shrink-0 text-slate-500 transition duration-300 ${isOpen ? 'rotate-180 text-brand-700' : ''}`} />
                </button>
                {isOpen && <p className="border-t border-slate-200 px-5 py-4 text-slate-600 transition-all duration-300">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
