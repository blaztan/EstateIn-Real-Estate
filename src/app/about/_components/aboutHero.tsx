import Image from 'next/image';
import heroImg from '../../../../public/about_hero_img.png';
import HeroCards from '@/app/_components/heroCards';
import AboutComponent from './AboutComponent';

export default function AboutHero() {
  return (
    <div id="our-story" className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-10 flex flex-col-reverse gap-[21px] md:gap-[60px] md:flex-row items-center">
      <div>
        <AboutComponent
          title="Our Journey"
          subHeading="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable
          partnerships, and gained the trust of countless clients."
        />

        <HeroCards />
      </div>

      <div>
        <Image src={heroImg} alt="hero image" priority />
      </div>
    </div>
  );
}
