import CTA from '../_components/CTA';
import Connect from './connect';
import Hero from './contactHero';
import ContactInfo from './contactInfo';
import EstateinWorld from './estateinWorld';
import OfficeLocation from './officeLocations';

export default function Contact() {
  return (
    <section>
      <Hero />
      <ContactInfo />

      <main className="max-w-[1440px] mx-auto px-4 md:px-[80px]">
        <Connect />
        <OfficeLocation />
        <EstateinWorld />
      </main>

      <CTA />
    </section>
  );
}
