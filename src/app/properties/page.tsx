import CTA from '../_components/CTA';
import FindProperty from './findProperty';
import MakeItHappen from './makeItHappen';
import Hero from './propertiesHero';
import WorldPossibilities from './worldPossibilities';

export default function Properties() {
  return (
    <section>
      <Hero />

      <main>
        <FindProperty />
        <WorldPossibilities />
        <MakeItHappen />
        <CTA />
      </main>
    </section>
  );
}
