import Image from 'next/image';
import logo from '../../public/logo.svg';
import sendIcon from '../../public/send_icon.svg';
import emailIcon from '../../public/email_icon.svg';
import Link from 'next/link';
import facebookIcon from '../../public/facebook_icon.svg';
import linkedinIcon from '../../public/linkedin.svg';
import twitterIcon from '../../public/twitter.svg';
import youtubeIcon from '../../public/youtube.svg';

export default function Footer() {
  return (
    <footer className="border border-faintWhite">
      <div className="max-w-[1440px] mx-auto py-[50px] px-4 lg:p-[80px] xl:flex items-start justify-between">
        <div className="mb-[50px] xl:mb-0">
          <div className="flex items-center gap-3 mb-5">
            <Image src={logo} alt="logo" />
            <h2 className="text-lg md:text-xl">Estatein</h2>
          </div>

          <div className="relative flex items-center">
            <Image src={emailIcon} alt="email icon" className="absolute left-5" />
            <input type="text" placeholder="Enter Your Email" className="bg-transparent border border-faintWhite rounded-[8px] w-full h-[52px] px-[50px] outline-none" />
            <Image src={sendIcon} alt="send icon" className="absolute right-5" />
          </div>
        </div>

        <div className="flex items-stretch justify-between gap-5 lg:gap-[90.5px]">
          <div className="w-1/2 xl:w-auto">
            <h2 className="leading-[24px] tracking-[-0.6%] text-gray mb-4 md:text-lg">Home</h2>

            <ul className="flex flex-col gap-[8px]">
              <li>
                <Link href="/#hero_home" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Hero Section
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Features
                </Link>
              </li>

              <li>
                <Link href="/#properties" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Properties
                </Link>
              </li>

              <li>
                <Link href="/#testimonials" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  FAQ's
                </Link>
              </li>
            </ul>

            <div className="bg-faintWhite h-[1px] w-full my-5 xl:hidden"></div>
          </div>

          <div className="xl:hidden bg-faintWhite w-[1px]"></div>

          <div className="w-1/2 xl:w-auto">
            <h2 className="leading-[24px] tracking-[-0.6%] text-gray mb-4 md:text-lg">About Us</h2>

            <ul className="flex flex-col gap-[8px]">
              <li>
                <Link href="/about/#our-story" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/#our-works" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Our Works
                </Link>
              </li>

              <li>
                <Link href="/about/#how-it-works" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  How It Works
                </Link>
              </li>

              <li>
                <Link href="/about/#our-team" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/#our-clients" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Our Client
                </Link>
              </li>
            </ul>

            <div className="bg-faintWhite h-[1px] w-full my-5 xl:hidden"></div>
          </div>
        </div>

        <div className="flex items-stretch justify-between gap-5 lg:gap-[90.5px]">
          <div className="w-1/2 xl:w-auto">
            <div>
              <h2 className="leading-[24px] tracking-[-0.6%] text-gray mb-4 text-lg">Properties</h2>

              <ul className="flex flex-col gap-[8px]">
                <li>
                  <Link href="/properties/#portfolio" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/properties/#categories" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                    Categories
                  </Link>
                </li>
              </ul>

              <div className="bg-faintWhite h-[1px] w-full mt-5 xl:hidden"></div>
            </div>

            <div className="mt-5 xl:hidden">
              <h2 className="leading-[24px] tracking-[-0.6%] text-gray mb-4">Contact Us</h2>

              <ul className="flex flex-col gap-[8px]">
                <li>
                  <Link href="/contact/#contact-us" className="text-sm leading-[24px] tracking-[0.6%] hover:text-btn">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link href="/contact/#our-offices" className="text-sm leading-[24px] tracking-[0.6%] hover:text-btn">
                    Our Offices
                  </Link>
                </li>
              </ul>

              <div className="bg-faintWhite h-[1px] w-full mt-5"></div>
            </div>
          </div>

          <div className="bg-faintWhite w-[1px] xl:hidden"></div>

          <div className="w-1/2 xl:w-auto">
            <h2 className="leading-[24px] tracking-[-0.6%] text-gray mb-4 md:text-lg">Services</h2>

            <ul className="flex flex-col gap-[8px]">
              <li>
                <Link href="#" className="text-sm md:text-base leading-[24px] tracking-[0.6%]">
                  Voluntary Mastery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base leading-[24px] tracking-[0.6%]">
                  Strategic Marketing
                </Link>
              </li>

              <li>
                <Link href="#" className="text-sm md:text-base leading-[24px] tracking-[0.6%]">
                  Negotiation Wizardry
                </Link>
              </li>

              <li>
                <Link href="#" className="text-sm md:text-base leading-[24px] tracking-[0.6%]">
                  Closing Success
                </Link>
              </li>

              <li>
                <Link href="/services/#property-management" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                  Property Management
                </Link>
              </li>
            </ul>

            <div className="bg-faintWhite h-[1px] w-full mt-5 xl:hidden"></div>
          </div>
        </div>

        <div className="hidden w-1/2 xl:w-auto xl:block">
          <h2 className="leading-[24px] tracking-[-0.6%] text-gray mb-4 md:text-lg">Contact</h2>

          <ul className="flex flex-col gap-[8px]">
            <li>
              <Link href="/contact/#contact-us" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/contact/#our-offices" className="text-sm md:text-base leading-[24px] tracking-[0.6%] hover:text-btn">
                Our Offices
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-faintWhite">
        <div className="max-w-[1440px] mx-auto px-4 py-5 md:flex flex-row-reverse items-center justify-between">
          <div className="flex items-center justify-center gap-[8px]">
            <div className="bg-faintBg h-[60px] w-[60px] rounded-[58px] flex items-center justify-center">
              <Image src={facebookIcon} alt="facebook icon" />
            </div>

            <div className="bg-faintBg h-[60px] w-[60px] rounded-[58px] flex items-center justify-center">
              <Image src={linkedinIcon} alt="Linkedin icon" />
            </div>

            <div className="bg-faintBg h-[60px] w-[60px] rounded-[58px] flex items-center justify-center">
              <Image src={twitterIcon} alt="twitter icon" />
            </div>

            <div className="bg-faintBg h-[60px] w-[60px] rounded-[58px] flex items-center justify-center">
              <Image src={youtubeIcon} alt="youtube icon" />
            </div>
          </div>

          <div className="lg:flex items-center gap-5 mt-5">
            <p className="tracking-[-0.6%] text-sm leading-[24px] text-center mb-[10px] lg:mb-0">@2023 Estatein. All Rights Reserved.</p>
            <p className="text-center tracking-[-0.6%] text-sm leading-[24px]">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
