import Image from 'next/image';
import AboutComponent from '../about/_components/AboutComponent';
import valuationIcon from '../../../public/valuation_icon.svg';
import strategyIcon from '../../../public/strategic_icon.svg';
import negotiationIcon from '../../../public/negotiation_icon.svg';
import closingIcon from '../../../public/closing_icon.svg';
import abstractDesign from '../../../public/abstract_bg_design.svg';

export default function PropertyValue() {
  return (
    <div className="mt-[61px]">
      <AboutComponent
        title="Unlock Property Value"
        subHeading="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
        maxWidth="max-w-[1296px]"
      />

      <div className="property_value mt-[40px] gap-5">
        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={valuationIcon} alt="valuation icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Valuation Mastery</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Discover the true worth of your property with our expert valuation services.</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={strategyIcon} alt="strategy icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Strategic Marketing</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Selling a property requires more than just a listing; it demands a strategic marketing.</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={negotiationIcon} alt="negotiation icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Negotiation Wizardry</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Negotiating the best deal is an art, and our negotiation experts are masters of it.</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={closingIcon} alt="closing icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Closing Success</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">A successful sale is not complete until the closing. We guide you through the intricate closing process.</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px] relative bg-faintBg overflow-hidden">
          <div className="md:flex items-center justify-between relative z-[20]">
            <h2 className="font-bold mb-5 text-xl md:text-[24px] md:leading-[36px]">Unlock The Value Of Your Property Today</h2>
            <button className="bg-background border border-faintWhite leading-[30px] w-full md:w-auto h-[49px] rounded-[8px] md:px-5">Learn More</button>
          </div>

          <p className="mt-5 text-sm leading-[21px] md:text-base md:leading-[24px] z-[20] relative">
            Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.
          </p>
          <Image src={abstractDesign} alt="abstract design" className="absolute top-0 left-0 z-10 h-full" />
        </div>
      </div>
    </div>
  );
}
