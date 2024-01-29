import dreamHomeIcon from '../../../public/dream_home.svg';
import arrowIcon from '../../../public/arrow_icon.svg';
import propertyValue from '../../../public/property_value.svg';
import propertyManagement from '../../../public/property_management.svg';
import smartInvestments from '../../../public/smart_investments.svg';
import Image from 'next/image';

export default function HeroTags() {
  return (
    <div id="features" className="sub_cards min-h-[318px] md:min-h-0 rounded-[10px] gap-[10px] md:gap-[20px] p-[10px] md:p-[20px]">
      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={dreamHomeIcon} alt="dream home icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <h2 className="font-semibold text-sm leading-[21px] text-center">Find Your Dream Home</h2>
      </div>

      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={propertyValue} alt="dream home icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <h2 className="font-semibold text-sm leading-[21px] text-center">Unlock Property Value</h2>
      </div>

      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={propertyManagement} alt="dream home icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <h2 className="font-semibold text-sm leading-[21px] text-center">Effortless Property Management</h2>
      </div>

      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={smartInvestments} alt="dream home icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <h2 className="font-semibold text-sm leading-[21px] text-center">Smart Investments, Informed Decisions</h2>
      </div>
    </div>
  );
}
