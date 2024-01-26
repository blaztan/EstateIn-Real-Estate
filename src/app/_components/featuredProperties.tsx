import Image from 'next/image';
import featuredImg from '../../../public/featured_img.png';
import bedroomIcon from '../../../public/bedroom_icon.svg';
import bathroomIcon from '../../../public/bathroom_icon.svg';
import villaIcon from '../../../public/villa_icon.svg';
import ReusableComponent from './reusableComponent';

export default function FeaturedProperties() {
  const testArr = [1, 2, 3];

  return (
    <ReusableComponent
      heading="Featured Properties"
      subHeading='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
      btnTxt="View All Properties"
    >
      <div className="featured gap-5">
        {testArr.map((num, i) => (
          <div key={i} className="border border-faintWhite rounded-[12px] p-[24px] mb-[20px] md:mb-0">
            <Image src={featuredImg} alt="featured image" priority className="mb-[16px] md:mb-5 mx-auto w-full" />

            <div>
              <h2 className="font-semibold text-lg md:text-xl leading-[27px] md:mb-[4px] md:leading-[30px]">Rustic Retreat Cuttage</h2>
              <p className="text-sm md:text-base leading-[21px] md:leading-[24px] text-gray">
                An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... <span className="underline cursor-pointer">Read More</span>
              </p>

              {/* tags section */}
              <div className="flex items-center flex-wrap gap-[6px] my-5 md:my-[24px]">
                <div className="flex items-center gap-[4px] border border-faintWhite bg-faintBg h-[33px] px-[14px] rounded-[28px]">
                  <Image src={bedroomIcon} alt="bedroom icon" />
                  <span className="text-sm leading-[21px]">4-Bedroom</span>
                </div>

                <div className="flex items-center gap-[4px] border border-faintWhite bg-faintBg h-[33px] px-[14px] rounded-[28px]">
                  <Image src={bathroomIcon} alt="bathroom icon" />
                  <span className="text-sm leading-[21px]">3-Bathroom</span>
                </div>

                <div className="flex items-center gap-[4px] border border-faintWhite bg-faintBg h-[33px] px-[14px] rounded-[28px]">
                  <Image src={villaIcon} alt="villa icon" />
                  <span className="text-sm leading-[21px]">Villa</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray leading-[21px]">Price</p>
                  <h2 className="text-lg md:text-xl leading-[27px] md:leading-[30px] font-semibold">$550,000</h2>
                </div>

                <button className="h-[49px] px-5 bg-btn rounded-[8px] md:text-sm">View Property Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ReusableComponent>
  );
}
