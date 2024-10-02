"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CharacterCardProps {
  name: string;
  nickname: string;
  description: string;
  bgColor: string;
  imgSrc: string;
  textColor: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  nickname,
  description,
  bgColor,
  imgSrc,
  textColor,
}) => {
  return (
    <div
      className={`relative w-full max-w-[1135px] h-[500px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] ${bgColor} rounded-[20px] mx-auto flex items-center p-8`}
    >
      <div className="w-[240px] h-[357px] flex-shrink-0">
        <Image
          src={imgSrc}
          alt={name}
          width={240}
          height={357}
          style={{objectFit:"contain"}}
        />
      </div>

      <div className="flex-1 ml-8">
        <div className="font-inter italic font-black text-[24px] text-white">
          {name}
        </div>
        <div
          className={`font-inter italic font-semibold text-[20px] ${textColor} mt-2`}
        >
          {nickname}
        </div>
        <p className="font-inter italic font-light text-[24px] text-white text-center mt-6">
          {description}
        </p>
      </div>
    </div>
  );
};

const KisahsekolahPages = () => {
  const characters = [
    {
      name: "Reva Revaldi",
      nickname: "Rere",
      description:
        "Yo, kenalin nama gua Reza Revaldi, tapi panggil aja Rere, bro. Gua adalah orang yang selalu update sama segala hal, makanya orang-orang suka nyebut gua 'si paling tahu'.",
      bgColor: "bg-[#344996]",
      imgSrc: "/assets/Rere.png",
      textColor: "text-[#b0c3ff]",
    },
    {
      name: "Tifanny Stellar Fanny",
      nickname: "Fanny",
      description:
        "Hai, nama aku Tifanny Stellar, tapi panggil aku Fanny saja ya. Banyak yang bilang aku tipe cewek yang santai dan cuek.",
      bgColor: "bg-[#C74E8F]",
      imgSrc: "/assets/Fanny.png",
      textColor: "text-[#fcb0d4]",
    },
    {
      name: "Kellyana Marlin Kelly",
      nickname: "Kelly",
      description:
        "Hai, aku Kellyana Marlin, ketua OSIS SMAN 69 Wakanda, tapi cukup panggil aku Kelly. Aku orang yang sibuk, banyak urusan di OSIS, tapi aku tetap ramah kok.",
      bgColor: "bg-[#6B3496]",
      imgSrc: "/assets/Kelly.png",
      textColor: "text-[#d6b0fc]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === characters.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? characters.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative text-center">
      <div className="font-inter font-black text-[24px] leading-[29px] text-white mt-[100px] mb-8">
        CHARACTER
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.3a1 1 0 0 1 0 1.4L5.4 8l5.9 5.3a1 1 0 1 1-1.4 1.4l-7-6.3a1 1 0 0 1 0-1.4l7-6.3a1 1 0 0 1 1.4 0z"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.7 1.3a1 1 0 0 0 0 1.4L10.6 8 4.7 13.3a1 1 0 1 0 1.4 1.4l7-6.3a1 1 0 0 0 0-1.4l-7-6.3a1 1 0 0 0-1.4 0z"
          />
        </svg>
      </button>

      <div className="relative overflow-hidden w-full max-w-[1135px] h-[500px] mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <CharacterCard {...characters[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KisahsekolahPages;