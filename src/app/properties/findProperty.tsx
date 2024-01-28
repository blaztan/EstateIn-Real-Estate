import Image from 'next/image';
import searchIcon from '../../../public/search_icon.svg';
import arrowDown from '../../../public/down_caret_icon.svg';
import locationIcon from '../../../public/location_icon.svg';
import propertyIcon from '../../../public/property_icon.svg';
import moneyIcon from '../../../public/money_icon.svg';
import boxIcon from '../../../public/box_size_icon.svg';
import calendarIcon from '../../../public/calendar_icon.svg';
import bar from '../../../public/short_line_icon.svg';

export default function FindProperty() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[40px] md:mt-0 md:-translate-y-[40px]">
      <div className="findProperty border border-faintWhite w-full h-[68px] rounded-[12px] flex items-center relative mb-5 lg:mb-0 md:bg-background lg:rounded-b-none max-w-[1100px] mx-auto">
        <input type="text" placeholder="Search For A Property" className="w-full outline-none bg-transparent pl-[18px] pr-[80px]" />

        <div className="flex items-center justify-center h-[48px] px-5 absolute right-[10px] bg-btn rounded-[8px]">
          <Image src={searchIcon} alt="search icon" />
        </div>
      </div>

      <div className="bg-faintBg p-5 rounded-[12px] flex flex-col lg:flex-row gap-5 justify-center">
        <div className="border border-faintWhite bg-background h-[52px] px-[14px] rounded-[8px] flex items-center justify-between cursor-pointer w-full">
          <div className="flex items-center gap-[8px]">
            <Image src={locationIcon} alt="icon location" />
            <Image src={bar} alt="bar icon" />
            <span className="text-gray text-sm leading-[21px]">Location</span>
          </div>

          <div className="size-[28px] rounded-[46px] bg-faintBg flex items-center justify-center">
            <Image src={arrowDown} alt="icon arrow down" />
          </div>
        </div>

        <div className="border border-faintWhite bg-background h-[52px] px-[14px] rounded-[8px] flex items-center justify-between cursor-pointer w-full">
          <div className="flex items-center gap-[8px]">
            <Image src={propertyIcon} alt="icon property" />
            <Image src={bar} alt="bar icon" />
            <span className="text-gray text-sm leading-[21px]">Property Type</span>
          </div>

          <div className="size-[28px] rounded-[46px] bg-faintBg flex items-center justify-center">
            <Image src={arrowDown} alt="icon arrow down" />
          </div>
        </div>

        <div className="border border-faintWhite bg-background h-[52px] px-[14px] rounded-[8px] flex items-center justify-between cursor-pointer w-full">
          <div className="flex items-center gap-[8px]">
            <Image src={moneyIcon} alt="money icon" />
            <Image src={bar} alt="bar icon" />
            <span className="text-gray text-sm leading-[21px]">Pricing Range</span>
          </div>

          <div className="size-[28px] rounded-[46px] bg-faintBg flex items-center justify-center">
            <Image src={arrowDown} alt="icon arrow down" />
          </div>
        </div>

        <div className="border border-faintWhite bg-background h-[52px] px-[14px] rounded-[8px] flex items-center justify-between cursor-pointer w-full">
          <div className="flex items-center gap-[8px]">
            <Image src={boxIcon} alt="box icon" />
            <Image src={bar} alt="bar icon" />
            <span className="text-gray text-sm leading-[21px]">Property Size</span>
          </div>

          <div className="size-[28px] rounded-[46px] bg-faintBg flex items-center justify-center">
            <Image src={arrowDown} alt="icon arrow down" />
          </div>
        </div>

        <div className="border border-faintWhite bg-background h-[52px] px-[14px] rounded-[8px] flex items-center justify-between cursor-pointer w-full">
          <div className="flex items-center gap-[8px]">
            <Image src={calendarIcon} alt="calendar icon" />
            <Image src={bar} alt="bar icon" />
            <span className="text-gray text-sm leading-[21px]">Build Year</span>
          </div>

          <div className="size-[28px] rounded-[46px] bg-faintBg flex items-center justify-center">
            <Image src={arrowDown} alt="icon arrow down" />
          </div>
        </div>
      </div>
    </div>
  );
}
