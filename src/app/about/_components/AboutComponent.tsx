import Image from 'next/image';
import stars from '../../../../public/multiple_stars.svg';

type InterfaceProps = {
  title: string;
  subHeading: string;
  maxWidth?: string;
};

export default function AboutComponent({ title, subHeading, maxWidth }: InterfaceProps) {
  return (
    <div>
      <Image src={stars} alt="stars" />
      <h2 className="font-semibold text-[28px] md:text-[38px] leading-[42px] md:leading-[57px] mb-[8px]">{title}</h2>
      <p className={`text-gray text-sm md:text-base leading-[21px] md:leading-[24px] ${maxWidth ? maxWidth : 'max-w-[610px]'}`}>{subHeading}</p>
    </div>
  );
}
