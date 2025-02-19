import React from 'react';
import Head from '../components/navbar/nav';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Navbar on top */}
      <div className="relative z-50">
        <Head />
      </div>

      {/* Background Image - Hidden on small screens */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 hidden md:block ">
        <Image 
          src="/contactus.jpg" 
          alt="background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      {/* Contact Form Section */}
      <section className="flex items-center justify-center h-full px-4 md:px-0">
        <div className="w-full max-w-2xl md:max-w-xl p-6 md:p-8 shadow-lg rounded-lg
                        bg-yellow-500 md:bg-opacity-100 bg-opacity-90 transition-all duration-500 
                        absolute md:top-32 top-20 md:right-auto md:left-auto left-1/2 transform -translate-x-1/2">
          
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xl md:text-2xl text-black font-medium">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name here"
                  className="mt-1 p-3 border border-gray-900 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xl md:text-2xl text-black font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email address"
                  className="mt-1 p-3 border border-gray-900 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-xl md:text-2xl text-black font-medium">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Write your thoughts or questions here..."
                className="mt-1 p-3 border border-gray-900 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mt-6 text-center">
              <button 
                type="submit" 
                className="px-6 py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 shadow-lg">
                Send Message
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://github.com/NehaFahim" target="_blank" className="hover:text-violet-800 transition duration-300">
                <FaGithub className="text-4xl md:text-5xl" />
              </a>
              <a href="https://www.linkedin.com/in/nehafahim/" target="_blank" className="hover:text-blue-600 transition duration-300">
                <FaLinkedin className="text-4xl md:text-5xl" />
              </a>
              <a href="https://instagram.com/" target="_blank" className="hover:text-red-500 transition duration-300">
                <FaInstagram className="text-4xl md:text-5xl" />
              </a>
              <a href="https://x.com/FahimNeha33515" target="_blank" className="hover:text-blue-400 transition duration-300">
                <FaTwitter className="text-4xl md:text-5xl" />
              </a>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;



