'use client'; // Required for Next.js 13+ client-side components

import React, { useState } from 'react';
import Image from 'next/image';
import rpl3Logo from '/public/assets/rpl3Logo.png';
import youtubeIcon from '/public/assets/youtube.svg';
import instagramIcon from '/public/assets/instagram.svg';
import tiktokIcon from '/public/assets/tiktok.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Background Navbar */}
      <div
        className="absolute min-w-full h-[151px] left-1/2 transform -translate-x-1/2 top-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(22, 22, 22, 0) 13%, rgba(22, 22, 22, 0.5) 59%, rgba(22, 22, 22, 0.7625) 73.25%, rgba(22, 22, 22, 0.775) 87.5%, rgba(22, 22, 22, 0.8) 100%)',
        }}
      />
      {/* Logo */}
      <div className="absolute left-10 top-2.5">
        <Image src={rpl3Logo} alt="RPL3 Logo" width={98} height={96} />
      </div>

      {/* Title */}
      <div className="absolute left-[129px] top-[21px] w-[190px] h-[92px] font-kodchasan font-black text-[35px] leading-[46px] text-white cursor-default">
        RPLTHREE <br />
        <span className="font-extralight text-white/50">G A M E S</span>
      </div>

      {/* Hamburger Button for mobile */}
      <div className="absolute top-[42px] right-[68px] md:hidden">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button onClick={toggleSidebar} className="p-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col space-y-6 mt-10 ml-4">
          <li className="font-inter font-normal text-[12px] leading-[15px] hover:underline cursor-pointer">
            Home
          </li>
          <li className="font-inter font-normal text-[12px] leading-[15px] hover:underline cursor-pointer">
            Kisah Sekolah
          </li>
          <li className="font-inter font-normal text-[12px] leading-[15px] hover:underline cursor-pointer">
            About Us
          </li>
        </ul>

        {/* Social Media Icons (Only visible in sidebar on mobile) */}
        <div className="flex space-x-6 mt-4 ml-4">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src={youtubeIcon} alt="YouTube" width={28} height={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src={instagramIcon} alt="Instagram" width={28} height={30} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image src={tiktokIcon} alt="TikTok" width={28} height={30} />
          </a>
        </div>
      </div>

      {/* Menu for desktop */}
      <div className="hidden md:flex absolute top-[42px] left-[595px] space-x-[50px]">
        <ul className="flex space-x-[50px]">
          <li className="font-inter font-normal text-[12px] leading-[15px] text-white hover:underline cursor-pointer">
            Home
          </li> 
          <li className="font-inter font-normal text-[12px] leading-[15px] text-white hover:underline cursor-pointer">
            Kisah Sekolah
          </li>
          <li className="font-inter font-normal text-[12px] leading-[15px] text-white hover:underline cursor-pointer">
            About Us
          </li>
        </ul>
      </div>

      {/* Social Media Icons for desktop */}
      <div className="hidden md:flex absolute top-[42px] right-[68px] space-x-[30px]">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Image 
            src={youtubeIcon} 
            alt="YouTube" 
            width={28} 
            height={30} 
            className="w-[27.79px] h-[30px]"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image 
            src={instagramIcon} 
            alt="Instagram" 
            width={28} 
            height={30} 
            className="w-[27.79px] h-[30px]"
          />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image 
            src={tiktokIcon} 
            alt="TikTok" 
            width={28} 
            height={30} 
            className="w-[27.79px] h-[30px]"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;