import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-[50vh] items-center justify-center py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">404</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">Return Home</Link>
      </div>
    </main>
  );
}
