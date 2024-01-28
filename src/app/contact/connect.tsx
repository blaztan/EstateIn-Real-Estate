import AboutComponent from '../about/_components/AboutComponent';
import Image from 'next/image';
import caretDown from '../../../public/down_caret_icon.svg';

export default function Connect() {
  return (
    <div id="contact-us" className="mt-[61px]">
      <AboutComponent
        title="Let's Connect"
        subHeading="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        maxWidth="max-w-[100%]"
      />

      <div className="border border-faintWhite rounded-[12px] p-5 lg:p-[80px] mt-[40px] md:mt-[60px]">
        <div className="contact_form_grid gap-5">
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
            <label htmlFor="Inquiry Type" className="font-semibold leading-[21px] md:leading-[24px]">
              Inquiry Type
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <input type="text" placeholder="Select Inquiry Type" disabled className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
              <Image src={caretDown} alt="down caret icon" className="absolute right-5" />
            </div>
          </div>

          <div>
            <label htmlFor="How Did You Hear About Us?" className="font-semibold leading-[21px] md:leading-[24px]">
              How Did You Hear About Us?
            </label>

            <div className="border border-faintWhite h-[52px] w-full md:w-auto bg-faintBg rounded-[8px] mt-[10px] relative flex items-center">
              <input type="text" placeholder="Select" disabled className="bg-transparent outline-none px-5 w-full h-full placeholder:text-gray" />
              <Image src={caretDown} alt="down caret icon" className="absolute right-5" />
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
