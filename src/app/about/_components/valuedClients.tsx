import AboutComponent from './AboutComponent';
import domainIcon from '../../../../public/domain_icon.svg';
import categoryIcon from '../../../../public/category_icon.svg';
import Image from 'next/image';
import arrowLeft from '../../../../public/arrow_left.svg';
import arrowRight from '../../../../public//arrow_right.svg';

export default function ValuedClients() {
  return (
    <div id="our-clients" className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px] mb-[80px] md:mb-[120px]">
      <AboutComponent
        title="Our Valued Clients"
        subHeading="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        maxWidth="max-w-[1297px]"
      />

      <div className="flex flex-col items-center justify-between lg:flex-row mt-[40px] gap-5 md:gap-10">
        <div className="clients border border-faintWhite p-[24px] rounded-[10px]">
          <div className="md:flex items-center justify-between">
            <div className="mb-5">
              <p className="text-sm md:text-base leading-[21px] md:leading-[24px] mb-[2px] text-gray">Since 2019</p>
              <h3 className="text-xl font-semibold leading-[30px] md:text-[24px] md:leading-[36px]">ABC Corporation</h3>
            </div>

            <button className="border border-faintWhite bg-faintBg text-sm leading-[21px] rounded-[8px] h-[49px] w-full md:w-auto md:px-5">Visit Website</button>
          </div>

          <div className="my-[30px] flex items-stretch justify-between">
            <div>
              <div className="flex items-center gap-[2px] mb-1">
                <Image src={domainIcon} alt="domain icon" />
                <p className="text-xs leading-[18px] md:text-sm md:leading-[21px]">Domain</p>
              </div>

              <h3 className="text-sm leading-[21px] md:text-base md:leading-[24px]">Commercial Real Estate</h3>
            </div>

            <div className="bg-faintWhite w-[1px] mx-5"></div>

            <div>
              <div className="flex items-center gap-[2px] mb-1">
                <Image src={categoryIcon} alt="category icon" />
                <p className="text-xs leading-[18px] md:text-sm md:leading-[21px]">Category</p>
              </div>

              <h3 className="text-sm leading-[21px] md:text-base md:leading-[24px]">Luxury Human Development</h3>
            </div>
          </div>

          <div className="border border-faintWhite rounded-[12px] p-5">
            <h5 className="mb-[8px] text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">What They Said🤗</h5>
            <p className="text-sm leading-[21px] md:text-base md:leading-[24px]">Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.</p>
          </div>
        </div>

        <div className="clients border border-faintWhite p-[24px] rounded-[10px]">
          <div className="md:flex items-center justify-between">
            <div className="mb-5">
              <p className="text-sm md:text-base leading-[21px] md:leading-[24px] mb-[2px] text-gray">Since 2019</p>
              <h3 className="text-xl font-semibold leading-[30px] md:text-[24px] md:leading-[36px]">ABC Corporation</h3>
            </div>

            <button className="border border-faintWhite bg-faintBg text-sm leading-[21px] rounded-[8px] h-[49px] w-full md:w-auto md:px-5">Visit Website</button>
          </div>

          <div className="my-[30px] flex items-stretch justify-between">
            <div>
              <div className="flex items-center gap-[2px] mb-1">
                <Image src={domainIcon} alt="domain icon" />
                <p className="text-xs leading-[18px] md:text-sm md:leading-[21px]">Domain</p>
              </div>

              <h3 className="text-sm leading-[21px] md:text-base md:leading-[24px]">Commercial Real Estate</h3>
            </div>

            <div className="bg-faintWhite w-[1px] mx-5"></div>

            <div>
              <div className="flex items-center gap-[2px] mb-1">
                <Image src={categoryIcon} alt="category icon" />
                <p className="text-xs leading-[18px] md:text-sm md:leading-[21px]">Category</p>
              </div>

              <h3 className="text-sm leading-[21px] md:text-base md:leading-[24px]">Luxury Human Development</h3>
            </div>
          </div>

          <div className="border border-faintWhite rounded-[12px] p-5">
            <h5 className="mb-[8px] text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">What They Said🤗</h5>
            <p className="text-sm leading-[21px] md:text-base md:leading-[24px]">Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.</p>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className="md:ml-auto flex items-center justify-between md:border-t border-t-faintWhite w-full pt-4 mx-auto md:mt-[50px]">
        <div className="hidden md:block text-sm leading-[21px] text-gray">
          <span>01</span> of 60
        </div>

        <div className="flex items-center justify-between gap-[10px] w-full md:w-auto">
          <div className="h-[44px] w-[44px] border border-faintWhite bg-faintBg rounded-[69px] flex items-center justify-center">
            <Image src={arrowLeft} alt="arrow left" />
          </div>

          <div className="md:hidden text-sm leading-[21px] text-gray">
            <span>01</span> of 60
          </div>

          <div className="h-[44px] w-[44px] border border-faintWhite bg-faintBg rounded-[69px] flex items-center justify-center cursor-pointer">
            <Image src={arrowRight} alt="arrow right" />
          </div>
        </div>
      </div>
    </div>
  );
}
