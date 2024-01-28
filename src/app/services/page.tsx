import CTA from '../_components/CTA';
import HeroTags from '../_components/heroTags';
import SmartInvestments from './SIID';
import EffortlessManagement from './effortlessManagement';
import Hero from './heroServices';
import PropertyValue from './propertyValue';

export default function Services() {
  return (
    <section>
      <Hero />
      <HeroTags />

      <main>
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px]">
          <PropertyValue />
          <EffortlessManagement />
          <SmartInvestments />
        </div>

        <CTA />
      </main>
    </section>
  );
}
