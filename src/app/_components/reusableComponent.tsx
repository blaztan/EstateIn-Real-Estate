import Image from 'next/image';
import multipleStars from '../../../public/multiple_stars.svg';
import arrowLeft from '../../../public/arrow_left.svg';
import arrowRight from '../../../public/arrow_right.svg';

type InterfaceProps = {
  children: React.ReactNode;
  id?: string;
  heading: string;
  subHeading: string;
  btnTxt?: string;
  isDifferentNav?: boolean;
};

export default function ReusableComponent({ children, id, heading, subHeading, btnTxt, isDifferentNav }: InterfaceProps) {
  return (
    <section id={id && id} className="mb-[65px] md:mb-[90px]">
      <Image src={multipleStars} alt="multiple stars" />
      <h2 className="font-semibold text-[28px] md:text-[38px] leading-[42px] md:leading-[57px] mb-[6px]">{heading}</h2>
      <div className="mb-[40px] md:flex items-center justify-between">
        <p className="text-sm md:text-base leading-[21px] md:leading-[24px] text-gray max-w-[975px]">{subHeading}</p>

        {btnTxt && <button className="hidden md:block border border-faintWhite h-[49px] px-5 bg-faintBg rounded-[8px]">{btnTxt}</button>}
      </div>

      <section>
        {children}

        <div className="mt-[30px] border border-t-faintWhite flex items-center justify-between border-b-0 border-l-0 border-r-0 pt-4 md:relative">
          {btnTxt && <button className="md:hidden border border-faintWhite bg-faintBg text-sm leading-[21px] h-[49px] px-5 rounded-[8px]">{btnTxt}</button>}

          {/* navigation */}
          {isDifferentNav ? (
            <div className="md:ml-auto flex items-center justify-between w-full">
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
          ) : (
            <div className="md:ml-auto flex items-center gap-[10px]">
              <div className="h-[44px] w-[44px] border border-faintWhite bg-faintBg rounded-[69px] flex items-center justify-center">
                <Image src={arrowLeft} alt="arrow left" />
              </div>

              <div className="md:absolute left-0 text-sm leading-[21px] text-gray">
                <span>01</span> of 60
              </div>

              <div className="h-[44px] w-[44px] border border-faintWhite bg-faintBg rounded-[69px] flex items-center justify-center cursor-pointer">
                <Image src={arrowRight} alt="arrow right" />
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
