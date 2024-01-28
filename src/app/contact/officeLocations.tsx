import AboutComponent from '../about/_components/AboutComponent';
import emailIcon from '../../../public/email_icon_white.svg';
import phoneIcon from '../../../public/phone_icon.svg';
import locationIcon from '../../../public/locaiton_icon_white.svg';
import Image from 'next/image';

export default function OfficeLocation() {
  return (
    <div id="our-offices" className="mt-[61px]">
      <AboutComponent
        title="Discover Our Office Locations"
        subHeading="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
        maxWidth="max-w-[1030px]"
      />

      <div className="mt-[40px] mb-[30px] rounded-[8px]">
        <div className="bg-faintBg p-[10px] flex items-center justify-center flex-wrap gap-[10px] w-full md:max-w-[413px] rounded-[8px]">
          <div className="border border-faintWhite bg-background rounded-[8px] h-[49px] flex items-center justify-center min-w-[105px] md:min-w-[124px] cursor-pointer hover:bg-background">All</div>

          <div className="border border-faintWhite rounded-[8px] h-[49px] flex items-center justify-center min-w-[105px] md:min-w-[124px] cursor-pointer hover:bg-background">Regional</div>

          <div className="border border-faintWhite rounded-[8px] h-[49px] flex items-center justify-center min-w-[105px] md:min-w-[124px] cursor-pointer hover:bg-background">International</div>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="border border-faintWhite p-[24px] mt-[30px] rounded-[8px]">
            <h4 className="text-sm leading-[21px] tracking-[0.6%]">Main Headquarters</h4>
            <h2 className="font-semibold text-xl leading-[30px]">123 Estatein Plaza, City Center, Metropolis</h2>
            <p className="text-gray text-sm leading-[21px] tracking-[0.6%] mt-[8px]">
              Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.
            </p>
            <div className="my-[24px] flex items-center flex-wrap gap-[8px]">
              <div className="border border-faintWhite bg-faintBg px-[12px] py-[6px] rounded-[28px] text-sm leading-[21px] md:text-base md:leading-[24px] max-w-[280px] md:max-w-[320px] text-center flex items-center gap-4">
                <Image src={emailIcon} alt="email icon" />
                <span>info@estatein.com</span>
              </div>

              <div className="border border-faintWhite bg-faintBg px-[12px] py-[6px] rounded-[28px] text-sm leading-[21px] md:text-base md:leading-[24px] max-w-[280px] md:max-w-[320px] text-center flex items-center gap-4">
                <Image src={phoneIcon} alt="phone icon" />
                <span>+1 (123) 456-7890</span>
              </div>

              <div className="border border-faintWhite bg-faintBg px-[12px] py-[6px] rounded-[28px] text-sm leading-[21px] md:text-base md:leading-[24px] max-w-[280px] md:max-w-[320px] text-center flex items-center gap-4">
                <Image src={locationIcon} alt="location icon" />
                <span>Metropolis</span>
              </div>
            </div>
            <button className="text-sm bg-btn tracking-[0.6%] w-full h-[46px] rounded-[8px]">Get Direction</button>
          </div>

          <div className="border border-faintWhite p-[24px] mt-[30px] rounded-[8px]">
            <h4 className="text-sm leading-[21px] tracking-[0.6%]">Regional Offices</h4>
            <h2 className="font-semibold text-xl leading-[30px]">456 Urban Avenue, Downtown District, Metropolis</h2>
            <p className="text-gray text-sm leading-[21px] tracking-[0.6%] mt-[8px]">
              Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.
            </p>
            <div className="my-[24px] flex items-center flex-wrap gap-[8px]">
              <div className="border border-faintWhite bg-faintBg px-[12px] py-[6px] rounded-[28px] text-sm leading-[21px] md:text-base md:leading-[24px] max-w-[280px] md:max-w-[320px] text-center flex items-center gap-4">
                <Image src={emailIcon} alt="email icon" />
                <span>info@estatein.com</span>
              </div>

              <div className="border border-faintWhite bg-faintBg px-[12px] py-[6px] rounded-[28px] text-sm leading-[21px] md:text-base md:leading-[24px] max-w-[280px] md:max-w-[320px] text-center flex items-center gap-4">
                <Image src={phoneIcon} alt="phone icon" />
                <span>+1 (123) 456-7890</span>
              </div>

              <div className="border border-faintWhite bg-faintBg px-[12px] py-[6px] rounded-[28px] text-sm leading-[21px] md:text-base md:leading-[24px] max-w-[280px] md:max-w-[320px] text-center flex items-center gap-4">
                <Image src={locationIcon} alt="location icon" />
                <span>Metropolis</span>
              </div>
            </div>
            <button className="text-sm bg-btn tracking-[0.6%] w-full h-[46px] rounded-[8px]">Get Direction</button>
          </div>
        </div>
      </div>
    </div>
  );
}
