'use client';

import Image from 'next/image';
import logo from '../../../public/logo.svg';
import menu from '../../../public/menubar.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Properties', href: '/properties' },
  { name: 'Service', href: '/services' },
];

export default function Header() {
  const pathname = usePathname();
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className={`px-4 py-[14px] pb-5 flex relative items-center gap-[6px] justify-start md:justify-center bg-[url('/top_design.svg')] ${!isNotificationVisible && 'hidden'}`}>
        <div className="flex flex-col items-left md:flex-row gap-[6px]">
          <span className="text-xs lg:text-sm leading-[18px] lg:leading-[21px]">✨Discover Your Dream Property with Estatein</span>
          <span className="underline text-xs lg:text-sm leading-[18px] lg:leading-[21px] cursor-pointer">Learn More</span>
        </div>

        <div className="w-[26px] h-[26px] bg-faintWhite rounded-full flex items-center justify-center cursor-pointer absolute right-[16px]" onClick={() => setIsNotificationVisible(false)}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 13.5L13.5 4.5M4.5 4.5L13.5 13.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <nav className="h-[68px] lg:h-[77px] border border-r-transparent border-l-transparent border-t-[#211E2F] border-b-[#211E2F] flex items-center bg-faintBg">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] flex items-center justify-between w-full relative">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" />
            <h2 className="text-lg md:text-xl font-semibold">Estatein</h2>
          </div>

          <div
            className={`navSlide absolute right-0 top-[48px] h-screen w-1/2 bg-faintBg z-[9999] p-5 flex flex-col gap-[24px] lg:bg-transparent lg:static lg:w-[75%] xl:w-[65%] lg:top-0 lg:p-0 lg:flex-row lg:h-auto lg:justify-between lg:gap-0 ${
              isNavOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:translate-x-0`}
          >
            <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-[24px]">
              {navLinks.map((link, i) => (
                <li key={i} onClick={() => setIsNavOpen(false)}>
                  <Link href={link.href} className={`${pathname === link.href ? 'border-faintWhite bg-background' : 'border-transparent'} text-sm leading-[21px]  border hover:border-faintWhite py-3 px-5 rounded-[8px]`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              onClick={() => setIsNavOpen(false)}
              href="/contact"
              className={`lg:block text-sm leading-[21px] py-3 px-5 rounded-[8px] border border-faintWhite max-w-[120px] lg:max-w-full ${pathname === '/contact' ? 'bg-btn' : 'lg:bg-background'}`}
            >
              Contact Us
            </Link>
          </div>

          <div className={`overlay w-full h-full min-h-screen backdrop-blur-[2px] z-[8888] absolute top-[170%] left-0 ${isNavOpen ? 'block' : 'hidden'} lg:hidden`} onClick={() => setIsNavOpen(false)}></div>

          <Image src={menu} alt="menu" className="cursor-pointer lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)} />
        </div>
      </nav>
    </header>
  );
}
