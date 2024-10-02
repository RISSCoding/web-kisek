import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';
import schoolImage from '/public/assets/school.jpg';

const LandingPages = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with dark overlay */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${schoolImage.src})`,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          backgroundBlendMode: 'darken', // Darken the image
        }}
      />

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Title */}
        <h1
          className="absolute font-inter font-black text-4xl"
          style={{
            width: '234px',
            left: '133px',
            top: '325.03px',
            lineHeight: '58px',
            color: '#FFFFFF',
            fontSize: '48px', // Set font size
          }}
        >
          KISAH SEKOLAH
        </h1>

        {/* Game description */}
        <div
          className="absolute"
          style={{
            width: '539px',
            height: '145.1px', // Update height to match the description height
            left: '132px',
            top: '464.32px',
          }}
        >
          <h2 className="font-inter font-normal text-lg text-[#bdbdbd]" style={{ lineHeight: '29px' }}>
            Game simulasi kehidupan sekolah yang penuh dengan pilihan menentukan, menguji pemain untuk menghadapi
            tantangan persahabatan, percintaan, dan prestasi akademik di sekolah elit.
          </h2>
        </div>
      </div>

      {/* Button Play Now */}
      <div
        className="absolute"
        style={{
          width: '303px',
          height: '61.04px',
          right: '173px',
          top: '448.31px',
          backdropFilter: 'blur(5px)', // Note: browser support
          backgroundColor: '#2B3E4D',
          boxShadow: '0px 4px 4px 1px rgba(0, 0, 0, 0.25)',
          borderRadius: '20px',
        }}
      >
        {/* Add link to download the game */}
        <a
          href="https://drive.google.com/uc?export=download&id=1VOwTjxcPLETBQqWhLlMsKu562Y8jSDGr" // Direct download link
          download="kisahsekolah.zip" // This triggers the download
          className="absolute font-inter font-black text-xl"
          style={{
            width: '109px',
            height: '29.02px',
            right: 'calc(50% - 109px/2)',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#FFFFFF',
            lineHeight: '29px',
            textAlign: 'center',
          }}
        >
          Play Now
        </a>
      </div>
    </div>
  );
};

export default LandingPages;
