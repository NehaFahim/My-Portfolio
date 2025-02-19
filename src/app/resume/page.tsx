import React from 'react';
import Head from '../components/navbar/nav';
import Image from 'next/image';
import { FaGithub, FaDownload } from 'react-icons/fa';

export default function Resume() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Navbar */}
      <div className="relative z-50">
        <Head />
      </div>

      {/* Background Image - Responsive */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image 
          src="/resume back.avif" 
          alt="background" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      {/* Resume Image - Centered & Responsive */}
      <div className="flex justify-center mt-20 md:mt-28">
        <Image 
          src="/resume.jpg" 
          alt="resumepic" 
          width={1400} 
          height={1300} 
          className="max-w-full w-11/12 md:w-8/12"
        />
      </div>

      {/* GitHub & Download CV Buttons - Responsive */}
      <div className="flex justify-center items-center gap-6 mt-10">
        {/* GitHub Button */}
        <a href="https://github.com/NehaFahim/my-resume.git" target="_blank">
          <button className="px-6 py-2 bg-blue-700 text-white text-lg font-bold rounded-lg hover:bg-emerald-400 transition duration-300 flex items-center gap-2">
            <FaGithub className="text-xl" />
            GitHub Link
          </button>
        </a>

        {/* Download CV Button */}
        <a href="/resume.jpg.pdf" download="NehaFahim_CV.pdf">
          <button className="px-6 py-2 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition duration-300 flex items-center gap-2">
            <FaDownload className="text-xl" />
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}
