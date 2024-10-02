'use client';

import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-[304px] bg-[#2B3E4D]">
      {/* Left Section */}
      <div className="absolute top-[40px] left-[42px]">
        <p className="text-white font-inter text-[12px] leading-[15px]">
          RPLThree Games
        </p>
        <p className="text-white font-inter text-[12px] leading-[15px] mt-[30px]">
          All rights reserved©
        </p>
        <p className="text-white font-inter text-[12px] leading-[15px] mt-[30px]">
          Kisah Sekolah, the RPLThree logo are either ® or TM, RPLThree Games.
        </p>
        <p className="text-white font-inter italic font-semibold text-[12px] leading-[15px] mt-[43px]">
          Business Contact: Instagram @RPLTHREEE_
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-[40px] right-[42px] flex space-x-4">
        <a href="https://www.instagram.com/rplthreee_" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} className="text-white" />
        </a>
        <a href="https://www.youtube.com/@xpplg3" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={28} className="text-white" />
        </a>
        <a href="https://www.tiktok.com/@rplthree" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={28} className="text-white" />
        </a>
      </div>

      {/* Right Section - Team Info */}
      <div className="absolute top-[100px] left-[1550px] text-white">
        <p className="text-[12px] leading-[15px] mb-[20px]">Meet Kisah Sekolah Team:</p>
        <div>
          <p className="text-[12px] leading-[15px]">Game Developer - Faris Febrian</p>
          <p className="text-[12px] leading-[15px] mt-[20px]">Game Designer - Rendra</p>
          <p className="text-[12px] leading-[15px] mt-[20px]">Level Designer - Gaizka Rizky</p>
          <p className="text-[12px] leading-[15px] mt-[20px]">Script Writer - Zain Zaidan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
