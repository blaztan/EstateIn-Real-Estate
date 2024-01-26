import AboutComponent from './AboutComponent';
import capIcon from '../../../../public/cap_excellence.svg';
import clientIcon from '../../../../public/client_icon.svg';
import starTrustIcon from '../../../../public/star_trust.svg';
import Image from 'next/image';

export default function OurValues() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px] lg:flex items-center justify-between gap-[60px]">
      <AboutComponent title="Our Values" subHeading="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary." />

      <div className="values mt-[40px] rounded-[12px] p-[24px] lg:mt-0 gap-5 md:gap-0">
        <div className="border-b border-faintWhite pb-5">
          <div className="flex items-center gap-[8px] mb-[14px]">
            <div className="w-[52px] h-[52px] rounded-[52px] border border-btn flex items-center justify-center">
              <Image src={starTrustIcon} alt="star trust icon" />
            </div>
            <span className="text-lg leading-[27px]">Trust</span>
          </div>
          <p className="text-gray text-sm leading-[21px]">Trust is the cornerstone of every successful real estate transaction.</p>
        </div>

        <div className="border-b border-faintWhite sm:border-l sm:pl-5 pb-5">
          <div className="flex items-center gap-[8px] mb-[14px]">
            <div className="w-[52px] h-[52px] rounded-[52px] border border-btn flex items-center justify-center">
              <Image src={capIcon} alt="cap icon" />
            </div>
            <span className="text-lg leading-[27px]">Excellence</span>
          </div>
          <p className="text-gray text-sm leading-[21px]">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
        </div>

        <div className="border-b border-faintWhite sm:border-none sm:mt-5">
          <div className="flex items-center gap-[8px] mb-[14px]">
            <div className="w-[52px] h-[52px] rounded-[52px] border border-btn flex items-center justify-center">
              <Image src={clientIcon} alt="client-centric icon" />
            </div>
            <span className="text-lg leading-[27px]">Client-Centric</span>
          </div>
          <p className="text-gray text-sm leading-[21px]">Your dreams and needs are at the center of our universe. We listen, understand.</p>
        </div>

        <div className="sm:border-l sm:border-l-faintWhite sm:pl-5 pb-5 md:mt-5">
          <div className="flex items-center gap-[8px] mb-[14px]">
            <div className="w-[52px] h-[52px] rounded-[52px] border border-btn flex items-center justify-center">
              <Image src={starTrustIcon} alt="star trust icon" />
            </div>
            <span className="text-lg leading-[27px]">Our Commitment</span>
          </div>
          <p className="text-gray text-sm leading-[21px]">We are dedicated to providing you with the highest level of service, professionalism</p>
        </div>
      </div>
    </div>
  );
}
