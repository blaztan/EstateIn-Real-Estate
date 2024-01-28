import Image from 'next/image';
import AboutComponent from './AboutComponent';
import maxImg from '../../../../public/max_img.png';
import sarahImg from '../../../../public//sara_img.png';
import davidImg from '../../../../public/david_img.png';
import turnerImg from '../../../../public/turner_img.png';
import twitterIcon from '../../../../public/twitter_icon.svg';
import sendIcon from '../../../../public/send_icon.svg';

export default function Team() {
  return (
    <div id="our-team" className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px]">
      <AboutComponent
        title="Meet The Estatein Team"
        subHeading="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        maxWidth="max-w-[1297px]"
      />

      <div className="profiles gap-5 mt-[40px]">
        <div className="p-5 border border-faintWhite rounded-[12px] max-w-[338px] mx-auto">
          <div className="flex items-center justify-center relative">
            <Image src={maxImg} priority alt="max image" />
            <div className="h-[40px] w-[60px] rounded-[43px] bg-btn flex items-center justify-center absolute bottom-0 translate-y-[20px]">
              <Image src={twitterIcon} alt="twitter icon" />
            </div>
          </div>

          <h2 className="mt-[40px] text-center text-lg leading-[28px] font-semibold md:text-xl md:leading-[28px]">Max Mitchell</h2>
          <p className="text-gray text-sm leading-[24px] mb-4 text-center md:text-base md:leading-[24px]">Founder</p>

          <div className="h-[64px] rounded-[100px] w-full border border-faintWhite flex items-center relative mx-auto">
            <input type="text" className="outline-none bg-transparent w-full h-full px-[24px]" placeholder="Say Hello 👋" />

            <div className="absolute right-[8px] h-[48px] w-[48px] rounded-[100px] bg-btn flex items-center justify-center">
              <Image src={sendIcon} alt="send message icon" />
            </div>
          </div>
        </div>

        <div className="p-5 border border-faintWhite rounded-[12px] max-w-[338px] mx-auto">
          <div className="flex items-center justify-center relative">
            <Image src={sarahImg} priority alt="sarah image" />
            <div className="h-[40px] w-[60px] rounded-[43px] bg-btn flex items-center justify-center absolute bottom-0 translate-y-[20px]">
              <Image src={twitterIcon} alt="twitter icon" />
            </div>
          </div>

          <h2 className="mt-[40px] text-center text-lg leading-[28px] font-semibold md:text-xl md:leading-[28px]">Sarah Johnson</h2>
          <p className="text-gray text-sm leading-[24px] mb-4 text-center md:text-base md:leading-[24px]">Chief Real Estate Officer</p>

          <div className="h-[64px] rounded-[100px] w-full border border-faintWhite flex items-center relative mx-auto">
            <input type="text" className="outline-none bg-transparent w-full h-full px-[24px]" placeholder="Say Hello 👋" />

            <div className="absolute right-[8px] h-[48px] w-[48px] rounded-[100px] bg-btn flex items-center justify-center">
              <Image src={sendIcon} alt="send message icon" />
            </div>
          </div>
        </div>

        <div className="p-5 border border-faintWhite rounded-[12px] max-w-[338px] mx-auto">
          <div className="flex items-center justify-center relative">
            <Image src={davidImg} priority alt="david image" />
            <div className="h-[40px] w-[60px] rounded-[43px] bg-btn flex items-center justify-center absolute bottom-0 translate-y-[20px]">
              <Image src={twitterIcon} alt="twitter icon" />
            </div>
          </div>

          <h2 className="mt-[40px] text-center text-lg leading-[28px] font-semibold md:text-xl md:leading-[28px]">David Brown</h2>
          <p className="text-gray text-sm leading-[24px] mb-4 text-center md:text-base md:leading-[24px]">Head of Property Management</p>

          <div className="h-[64px] rounded-[100px] w-full border border-faintWhite flex items-center relative mx-auto">
            <input type="text" className="outline-none bg-transparent w-full h-full px-[24px]" placeholder="Say Hello 👋" />

            <div className="absolute right-[8px] h-[48px] w-[48px] rounded-[100px] bg-btn flex items-center justify-center">
              <Image src={sendIcon} alt="send message icon" />
            </div>
          </div>
        </div>

        <div className="p-5 border border-faintWhite rounded-[12px] max-w-[338px] mx-auto">
          <div className="flex items-center justify-center relative">
            <Image src={turnerImg} priority alt="turner image" />
            <div className="h-[40px] w-[60px] rounded-[43px] bg-btn flex items-center justify-center absolute bottom-0 translate-y-[20px]">
              <Image src={twitterIcon} alt="twitter icon" />
            </div>
          </div>

          <h2 className="mt-[40px] text-center text-lg leading-[28px] font-semibold md:text-xl md:leading-[28px]">Michael Turner</h2>
          <p className="text-gray text-sm leading-[24px] mb-4 text-center md:text-base md:leading-[24px]">Legal Counsel</p>

          <div className="h-[64px] rounded-[100px] w-full border border-faintWhite flex items-center relative mx-auto">
            <input type="text" className="outline-none bg-transparent w-full h-full px-[24px]" placeholder="Say Hello 👋" />

            <div className="absolute right-[8px] h-[48px] w-[48px] rounded-[100px] bg-btn flex items-center justify-center">
              <Image src={sendIcon} alt="send message icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
