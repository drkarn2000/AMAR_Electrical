import { Brands } from '@/components/Brands';
import { EmergencyCTA } from '@/components/EmergencyCTA';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Reviews } from '@/components/Reviews';
import { ServiceAreas } from '@/components/ServiceAreas';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Projects />
      <ServiceAreas />
      <Reviews />
      <EmergencyCTA />
      <FAQ />
    </>
  );
}
