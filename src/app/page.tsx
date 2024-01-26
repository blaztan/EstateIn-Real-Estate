import CTA from './_components/CTA';
import FAQ from './_components/FAQ';
import ClientThoughts from './_components/clientsThought';
import FeaturedProperties from './_components/featuredProperties';
import Hero from './_components/hero';

export default function Home() {
  return (
    <section>
      <Hero />

      <main className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px] md:mt-[95px]">
        <FeaturedProperties />
        <ClientThoughts />
        <FAQ />
      </main>

      <CTA />
    </section>
  );
}
