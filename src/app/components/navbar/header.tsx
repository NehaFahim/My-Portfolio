"use client"; 
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { HomeIcon, UserIcon, DocumentTextIcon, FolderIcon, BriefcaseIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="fixed top-5 left-5 md:hidden text-white text-3xl z-50"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Navbar */}
      <div className={`fixed md:relative top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}>
        <div className="mb-4 flex flex-col items-center">
          <Image src="/wats1.jpg" alt="Profile" width={150} height={150} className="rounded-full" />
          <h2 className="mt-2 text-xl font-semibold text-white">Neha Fahim</h2>
          <p className="text-teal-100 text-center text-sm">Teacher by Profession | Developer by Passion</p>
        </div>

        <nav className="mt-4 flex flex-col space-y-6">
          <a href="/" className="flex items-center text-amber-300 hover:text-white"><HomeIcon className="w-5 h-5 mr-2" /> Home</a>
          <a href="/about" className="flex items-center text-amber-300 hover:text-white"><UserIcon className="w-5 h-5 mr-2" /> About</a>
          <a href="/resume" className="flex items-center text-amber-300 hover:text-white"><DocumentTextIcon className="w-5 h-5 mr-2" /> Resume</a>
          <a href="/projects" className="flex items-center text-amber-300 hover:text-white"><FolderIcon className="w-5 h-5 mr-2" /> Projects</a>
          {/* <a href="/services" className="flex items-center text-cyan-400 hover:text-white"><BriefcaseIcon className="w-5 h-5 mr-2" /> Services</a> */}
          <a href="/contact" className="flex items-center  text-amber-300 hover:text-white"><PhoneIcon className="w-5 h-5 mr-2" /> Contact</a>
        </nav>

        <div className="mt-6 flex space-x-4  ">
          <a href="https://github.com/NehaFahim" target="_blank" className="text-purple-600 hover:text-white"><FaGithub className="text-2xl" /></a>
          <a href="https://www.linkedin.com/in/nehafahim/" target="_blank" className="text-blue-600 hover:text-white"><FaLinkedin className="text-2xl" /></a>
          <a href="https://instagram.com/" target="_blank" className="text-red-500 hover:text-white"><FaInstagram className="text-2xl" /></a>
          <a href="https://x.com/FahimNeha33515" target="_blank" className="text-blue-400 hover:text-white"><FaTwitter className="text-2xl" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


