import CTA from './_components/CTA';
import FAQ from './_components/FAQ';
import FeaturedProperties from './_components/featuredProperties';
import Hero from './_components/hero';
import Testimonials from './_components/testimonials';

export default function Home() {
  return (
    <section>
      <Hero />

      <main className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px] md:mt-[95px]">
        <FeaturedProperties />
        <Testimonials />
        <FAQ />
      </main>

      <CTA />
    </section>
  );
}
