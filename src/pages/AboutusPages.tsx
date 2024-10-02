'use client';

import Image from 'next/image';
import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <section className="relative w-full h-[900px]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <Image
            src="/assets/school_second_floor_by_mb0sco_ddl6odu-transformed.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className=' bg-blend-darken'
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Transition Gradient */}
     

      {/* Title */}
      <div className="absolute w-full top-[320px] flex justify-center">
        <h1 className="font-inter font-bold text-[48px] md:text-[96px] leading-[58px] md:leading-[116px] text-white text-center">
          About Us
        </h1>
      </div>

      {/* Description */}
      <div className="absolute w-full top-[450px] md:top-[500px] flex justify-center px-4">
        <p className="font-inter font-semibold text-[16px] md:text-[24px] leading-[22px] md:leading-[29px] text-center text-[#ADAAAA] max-w-[1050px]">
          Founded in 2023, RPLThree Games is a small team from Indonesia. We set out to create the
          most unique, genre-defining games and provide some of the best game interactions in the
          industry.
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;
