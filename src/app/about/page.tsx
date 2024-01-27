import CTA from '../_components/CTA';
import AboutHero from './_components/aboutHero';
import Experience from './_components/experience';
import OurAchievements from './_components/ourAchievements';
import OurValues from './_components/ourValues';
import Team from './_components/team';
import ValuedClients from './_components/valuedClients';

export default function About() {
  return (
    <section>
      <AboutHero />
      <main>
        <OurValues />
        <OurAchievements />
        <Experience />
        <Team />
        <ValuedClients />
        <CTA />
      </main>
    </section>
  );
}
