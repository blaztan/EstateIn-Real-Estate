import Image from 'next/image';
import AboutComponent from '../about/_components/AboutComponent';
import marketIcon from '../../../public/valuation_icon.svg';
import roiIcon from '../../../public/roi_icon.svg';
import ideaIcon from '../../../public/idea_icon.svg';
import diversificationIcon from '../../../public/legal_icon.svg';

export default function SmartInvestments() {
  return (
    <div className="mt-[61px] mb-[80px] xl:flex items-center gap-[50px]">
      <div className="mb-[40px]">
        <AboutComponent title="Smart Investments Informed Decisions" subHeading="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions." />

        <div className="border border-faintWhite rounded-[10px] p-[24px] bg-faintBg mt-5 bg-[url('/abstract_bg_design.svg')]">
          <h2 className="font-bold mb-5 text-xl md:text-[22px] md:leading-[36px]">Experience Effortless Property Management</h2>

          <p className="my-5 text-sm leading-[21px] md:text-base md:leading-[24px] text-gray">
            Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
          </p>

          <button className="bg-background border border-faintWhite leading-[30px] w-full h-[49px] rounded-[8px] relative z-[20]">Learn More</button>
        </div>
      </div>

      <div className="clients siid bg-faintBg rounded-[10px] flex flex-col gap-[10px]">
        <div className="border border-faintWhite bg-background rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={marketIcon} alt="market icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Market Insight</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions</p>
        </div>

        <div className="border border-faintWhite bg-background rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={roiIcon} alt="return on investment icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">ROI Assessment</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments</p>
        </div>

        <div className="border border-faintWhite bg-background rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={ideaIcon} alt="idea icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Customized Strategies</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs</p>
        </div>

        <div className="border border-faintWhite bg-background rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={diversificationIcon} alt="diversification icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Diversification Mastery</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations</p>
        </div>
      </div>
    </div>
  );
}
