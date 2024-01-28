import Image from 'next/image';
import heroImg from '../../../public/hero_img.svg';
import subContainer from '../../../public/sub_container.svg';
import HeroCards from './heroCards';
import HeroTags from './heroTags';

export default function Hero() {
  return (
    <>
      <section id="hero_home" className="max-w-[1440px] mx-auto px-4 md:px-[80px] flex flex-col-reverse lg:flex-row items-start justify-between mt-10 gap-[56px]">
        <div>
          <h1 className="font-semibold text-[28px] md:text-[46px] md:leading-[55.2px] leading-[33.6px]">Discover Your Dream Property with Estatein</h1>
          <p className="text-gray text-sm md:text-base leading-[21px] mt-[16px]">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>

          <div className="mt-[16px] md:mt-[50px] md:flex gap-[16px]">
            <button className="w-full h-[49px] rounded-[10px] border border-faintWhite mb-[16px] md:mb-0 hover:bg-btn hover:border-transparent md:max-w-[111px]">Learn More</button>
            <button className="w-full h-[49px] bg-btn rounded-[10px] md:max-w-[151px]">Browse Properties</button>
          </div>

          {/* hero cards */}
          <HeroCards />
        </div>

        <div className="relative bg-faintWhite">
          <Image src={heroImg} priority alt="hero image" className="rounded-[10px]" />
          <Image src={subContainer} priority alt="sub container" className="absolute bottom-0 left-0 translate-y-[40px] md:top-[10%] md:translate-y-0 md:-translate-x-[45px]" />
        </div>
      </section>

      <section className="mt-[40px]">
        <HeroTags />
      </section>
    </>
  );
}
