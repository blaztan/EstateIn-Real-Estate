import Image from 'next/image';
import bedroomIcon from '../../../public/bedroom_icon.svg';
import bathroomIcon from '../../../public/bathroom_icon.svg';
import villaIcon from '../../../public/villa_icon.svg';
import featuredImg from '../../../public/featured_img.png';

type PropertiesProps = {
  isTopTagVisible: boolean;
  title: string;
  description: string;
  tags: boolean;
  price: string;
};

export default function PropertiesComponent({ isTopTagVisible, title, description, price, tags }: PropertiesProps) {
  const testArr = [1, 2, 3];

  return (
    <>
      {testArr.map((num, i) => (
        <div key={i} className="border border-faintWhite rounded-[12px] p-[24px] mb-[20px] md:mb-0">
          <Image src={featuredImg} alt="featured image" priority className="mb-[16px] md:mb-5 mx-auto w-full" />
          <div>
            {isTopTagVisible && (
              <div className="border border-faintWhite bg-faintBg px-[12px] py-[6px] rounded-[28px] text-sm leading-[21px] md:text-base md:leading-[24px] mt-[4px] mb-[22px] max-w-[280px] md:max-w-[320px] text-center">
                Coastal Escapes - Where Waves Beckon
              </div>
            )}

            <h2 className="font-semibold text-lg md:text-xl leading-[27px] md:mb-[4px] md:leading-[30px]">{title}</h2>
            <p className="text-sm md:text-base leading-[21px] md:leading-[24px] text-gray">
              {description}
              <span className="underline cursor-pointer">Read More</span>
            </p>

            {/* tags section */}
            {tags && (
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
            )}

            <div className={`flex items-center justify-between ${!tags && 'mt-5'}`}>
              <div>
                <p className="text-sm text-gray leading-[21px]">Price</p>
                <h2 className="text-lg md:text-xl leading-[27px] md:leading-[30px] font-semibold">{price}</h2>
              </div>

              <button className="h-[49px] px-5 bg-btn rounded-[8px] md:text-sm">View Property Details</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
