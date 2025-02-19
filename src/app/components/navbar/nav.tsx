"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-yellow-200 h-16 px-4 md:px-10 shadow-md'>
      <div className='flex justify-between items-center h-full'>
        <h1 className='text-2xl font-serif font-semibold'>My Portfolio</h1>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className='hidden md:flex gap-6 font-extrabold font-serif text-white'>
          <li><a className='hover:text-teal-400' href='/home'>Home</a></li>
          <li><a className='hover:text-teal-400' href='/about'>About</a></li>
          <li><a className='hover:text-teal-400' href='/resume'>Resume</a></li>
          <li><a className='hover:text-teal-400' href='/projects'>Projects</a></li>
          <li><a className='hover:text-teal-400' href='/contact'>Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center py-5 space-y-4 shadow-lg'>
          <li><a className='hover:text-teal-400' href='/home'>Home</a></li>
          <li><a className='hover:text-teal-400' href='/about'>About</a></li>
          <li><a className='hover:text-teal-400' href='/resume'>Resume</a></li>
          <li><a className='hover:text-teal-400' href='/projects'>Projects</a></li>
          <li><a className='hover:text-teal-400' href='/contact'>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Head;

