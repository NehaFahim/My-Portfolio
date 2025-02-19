"use client"; 
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-100 py-6 flex justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/blurpic.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
          className="blur-md opacity-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif">NEHA FAHIM</h1>
        <p className="text-2xl md:text-3xl text-lime-200 mt-2 font-mono">
          Multidisciplinary Teacher & Web Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
