import Image from 'next/image';
import tileLeft from '../../../public/cta_design_left.svg';
import tileRight from '../../../public/cta_design_right.svg';

export default function CTA() {
  return (
    <section className="relative border border-faintWhite overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] py-[50px] md:py-[59px] md:flex items-center justify-between">
        <Image src={tileLeft} alt="tile left" className="absolute top-[-100px] md:top-0 md:bottom-0 left-0 -z-[1]" />
        <Image src={tileRight} alt="tile right" className="absolute bottom-0 right-0 -z-[1]" />
        <div className="mb-[30px] md:mb-0 max-w-[357px] sm:max-w-[500px] xl:max-w-[979px] text-wrap">
          <h2 className="font-semibold text-[28px] leading-[42px] mb-[6px] md:text-[38px] md:leading-[57px]">Start Your Real Estate Journey Today</h2>
          <p className="text-sm md:text-base leading-[21px] md:leading-[24px] text-gray text-wrap">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate
            goals and explore our available properties or get in touch with our team for personalized assistance.
          </p>
        </div>

        <button className="text-sm leading-[21px] bg-btn h-[49px] px-5 w-full md:w-auto rounded-[8px]">Explore Properties</button>
      </div>
    </section>
  );
}
