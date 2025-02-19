import React from 'react';
import Head from '../components/navbar/nav';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      {/* Navbar */}
      <div className="relative z-50">
        <Head />
      </div>

      {/* About Section */}
      <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <div className="relative w-full min-h-screen">
          <Image 
            src="/aboutback.jpg" 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full opacity-80"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-24 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 drop-shadow-lg">
              About Me
            </h2>

            <div className="max-w-3xl mt-6 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
                Hi, I'm <span className="font-bold text-white">Neha Fahim</span>, a passionate <span className="text-blue-300">frontend developer</span> with expertise in <span className="text-blue-400">React, Next.js, Tailwind CSS, and Sanity CMS</span>. I specialize in building highly performant, visually appealing, and user-friendly web applications that provide seamless user experiences.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mt-4">
                With a keen eye for design and a strong foundation in modern web technologies, I transform ideas into stunning digital experiences. Let's collaborate to bring innovative and scalable web solutions to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
