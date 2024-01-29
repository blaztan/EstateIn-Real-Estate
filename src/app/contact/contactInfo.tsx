import emailIcon from '../../../public/message_icc.svg';
import phoneIcon from '../../../public/phone_icc.svg';
import locationIcon from '../../../public/location_icc.svg';
import socialsIcon from '../../../public/socials_icc.svg';
import arrowIcon from '../../../public/arrow_icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div id="features" className="sub_cards min-h-[318px] md:min-h-0 rounded-[10px] gap-[10px] md:gap-[20px] p-[10px] md:p-[20px]">
      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={emailIcon} alt="email icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <h2 className="font-semibold text-sm leading-[21px] text-center">info@estatein.com</h2>
      </div>

      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={phoneIcon} alt="phone icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <h2 className="font-semibold text-sm leading-[21px] text-center">+1 (123) 456-7890</h2>
      </div>

      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={locationIcon} alt="location icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <h2 className="font-semibold text-sm leading-[21px] text-center">Main Headquarters</h2>
      </div>

      <div className="rounded-[10px] border border-faintWhite py-5 relative bg-faintBg ">
        <Image src={arrowIcon} alt="dream home icon" className="absolute top-[20px] right-[20px]" />
        <Image src={socialsIcon} alt="socials icon" className="mb-[14px] mx-auto w-[50px] sm:w-auto" />
        <div className="flex items-center gap-[10px] justify-center flex-wrap">
          <Link href="#" className="font-semibold text-sm leading-[21px] text-center underline">
            Instagram
          </Link>

          <Link href="#" className="font-semibold text-sm leading-[21px] text-center underline">
            LinkedIn
          </Link>

          <Link href="#" className="font-semibold text-sm leading-[21px] text-center underline">
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
