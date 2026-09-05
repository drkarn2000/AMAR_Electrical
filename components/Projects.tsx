import Image from 'next/image';
import { ArrowUpRight, Zap } from 'lucide-react';
import { projectCategories } from '@/lib/constants';

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/about_hero.png')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-white/70" />
      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Completed Projects</span>
          <h2 className="section-heading mt-5">Installation Work That Performs</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectCategories.map((project) => (
            <article key={project.name} className="group relative h-72 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              {/* Top slide: the image and icon lift to reveal the project details. */}
              <div className="absolute inset-0 z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[38%]">
                <Image src={project.image} alt={project.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-blue-600/90 text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] backdrop-blur-sm">
                    <Zap size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex rounded-full border border-white/70 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition duration-300 group-hover:border-amber-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                    {project.name}
                  </span>
                </div>
              </div>

              {/* Bottom slide: project text enters from below on hover. */}
              <div className="absolute inset-x-0 bottom-0 flex h-[42%] translate-y-full flex-col justify-center bg-slate-950 px-5 py-4 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-black tracking-tight text-white">{project.name}</h3>
                  <ArrowUpRight size={18} className="shrink-0 text-amber-300" />
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
