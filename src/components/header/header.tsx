'use client';

import Image from 'next/image';
import img from '../../../public/top_design.svg';
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

  return (
    <header>
      <div className={`px-4 py-[14px] pb-5 relative overflow-hidden flex items-center gap-[6px] justify-center ${!isNotificationVisible && 'hidden'}`}>
        <span className="text-xs lg:text-sm leading-[18px] lg:leading-[21px]">✨Discover Your Dream Property with Estatein</span>
        <span className="underline text-xs lg:text-sm leading-[18px] lg:leading-[21px] cursor-pointer">Learn More</span>

        <div className="w-[26px] h-[26px] bg-faintWhite rounded-full flex items-center justify-center cursor-pointer absolute right-[16px] top-[50%] -translate-x-[50%] -translate-y-[50%]" onClick={() => setIsNotificationVisible(false)}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 13.5L13.5 4.5M4.5 4.5L13.5 13.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <Image src={img} alt="background gradial lines" priority className="absolute bottom-0 right-0 -z-[1]" />
      </div>

      <nav className="h-[68px] lg:h-[77px] border border-r-transparent border-l-transparent border-t-[#211E2F] border-b-[#211E2F] flex items-center bg-faintBg">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" />
            <h2 className="text-lg md:text-xl font-semibold">Estatein</h2>
          </div>

          <ul className="hidden lg:flex items-center gap-[24px]">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className={`${pathname === link.href ? 'border-faintWhite bg-background' : 'border-transparent'} text-sm leading-[21px]  border hover:border-faintWhite py-3 px-5 rounded-[8px]`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className={`hidden lg:block text-sm leading-[21px] py-3 px-5 rounded-[8px] border border-faintWhite ${pathname === '/contact' ? 'bg-btn' : 'bg-background'}`}>
            Contact Us
          </Link>

          <Image src={menu} alt="menu" className="cursor-pointer lg:hidden" />
        </div>
      </nav>
    </header>
  );
}
