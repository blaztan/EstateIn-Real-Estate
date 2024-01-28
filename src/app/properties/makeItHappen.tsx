import AboutComponent from '../about/_components/AboutComponent';
import caretDown from '../../../public/down_caret_icon.svg';
import phoneIcon from '../../../public/phone_icon.svg';
import emailIcon from '../../../public/email_icon_white.svg';
import Image from 'next/image';

export default function MakeItHappen() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px] mb-[80px]">
      <AboutComponent
        title="Let's Make It Happen"
        subHeading="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        maxWidth="max-w-[1297px]"
      />

      <div className="border border-faintWhite p-5 rounded-[12px] mt-[40px]">
        <div className="form_grid gap-5">
          <div>
            <label htmlFor="First Name" className="font-semibold leading-[21px] md:leading-[24px]">
              First Name
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px]">
              <input type="text" placeholder="Enter First Name" className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
            </div>
          </div>

          <div>
            <label htmlFor="Last Name" className="font-semibold leading-[21px] md:leading-[24px]">
              Last Name
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px]">
              <input type="text" placeholder="Enter Last Name" className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
            </div>
          </div>

          <div>
            <label htmlFor="Email" className="font-semibold leading-[21px] md:leading-[24px]">
              Email
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px]">
              <input type="text" placeholder="Enter Your Email" className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
            </div>
          </div>

          <div>
            <label htmlFor="Phone" className="font-semibold leading-[21px] md:leading-[24px]">
              Phone
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px]">
              <input type="text" placeholder="Enter Phone Number" className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
            </div>
          </div>

          <div>
            <label htmlFor="Preferred Location" className="font-semibold leading-[21px] md:leading-[24px]">
              Preferred Location
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <input type="text" placeholder="Select Location" disabled className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
              <Image src={caretDown} alt="down caret icon" className="absolute right-5" />
            </div>
          </div>

          <div>
            <label htmlFor="Property Type" className="font-semibold leading-[21px] md:leading-[24px]">
              Property Type
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <input type="text" placeholder="Select Property Type" disabled className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
              <Image src={caretDown} alt="down caret icon" className="absolute right-5" />
            </div>
          </div>

          <div>
            <label htmlFor="No. of Bathrooms" className="font-semibold leading-[21px] md:leading-[24px]">
              No. of Bathrooms
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <input type="text" placeholder="Select no. of Bathrooms" disabled className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
              <Image src={caretDown} alt="down caret icon" className="absolute right-5" />
            </div>
          </div>

          <div>
            <label htmlFor="No. of Bedrooms" className="font-semibold leading-[21px] md:leading-[24px]">
              No. of Bedrooms
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <input type="text" placeholder="Select no. of Bedrooms" disabled className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
              <Image src={caretDown} alt="down caret icon" className="absolute right-5" />
            </div>
          </div>

          <div>
            <label htmlFor="Budget" className="font-semibold leading-[21px] md:leading-[24px]">
              Budget
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <input type="text" placeholder="Select Budget" disabled className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
              <Image src={caretDown} alt="down caret icon" className="absolute right-5" />
            </div>
          </div>

          <div>
            <label htmlFor="Preferred Contact Method" className="font-semibold leading-[21px] md:leading-[24px]">
              Preferred Contact Method
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <Image src={phoneIcon} alt="phone icon" className="absolute left-5" />
              <input type="text" placeholder="Enter Your Number" disabled className="bg-transparent outline-none pl-[50px] pr-5 w-full h-full placeholder:text-gray" />
              <div className="size-[10px] bg-btn rounded-full absolute right-5"></div>
            </div>
          </div>

          <div>
            <label htmlFor="Preferred Contact Method" className="font-semibold leading-[21px] md:leading-[24px] hidden md:block md:opacity-0">
              Preferred Contact Method
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] relative flex items-center mt-[10px]">
              <Image src={emailIcon} alt="email icon" className="absolute left-5" />
              <input type="text" placeholder="Enter Your Email" disabled className="bg-transparent outline-none pl-[50px] pr-5 w-full h-full placeholder:text-gray" />
              <div className="size-[10px] border border-btn bg-transparent rounded-full absolute right-5"></div>
            </div>
          </div>

          <div>
            <label htmlFor="Message" className="font-semibold leading-[21px] md:leading-[24px]">
              Message
            </label>

            <div className="border border-faintWhite h-[90px] xl:h-[170px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px]">
              <textarea placeholder="Enter Your Message Here" className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray py-[16px]"></textarea>
            </div>
          </div>
        </div>

        <div className="mt-5 md:flex justify-between items-center">
          <div className="flex items-center gap-[6px]">
            <input type="checkbox" />
            <div className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">
              I agree with <span className="underline text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Terms of Use</span> and{' '}
              <span className="underline text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Privacy Policy</span>
            </div>
          </div>

          <button className="h-[52px] w-full bg-btn rounded-[6px] text-sm leading-[24px] mt-5 md:w-auto md:px-[34px]">Send Your Message</button>
        </div>
      </div>
    </div>
  );
}
