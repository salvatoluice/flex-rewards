import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/flexi.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-8 pb-4 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <img src={logo} className='w-[100px] h-auto -ml-4' alt="" />
            <p className="text-gray-600 font-light text-[14px] mt-2 ">
              Flexi is a flexible payment system that allows you to make purchases and pay over time. We provide the best payment solutions for your needs.
            </p>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-[18px] font-medium mb-4">Company</h2>
            <ul className='text-gray-600 text-[14px]'>
              <li className="mb-2">
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Press</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-[18px] font-medium mb-4">Support</h2>
            <ul className='text-gray-600 text-[14px]'>
              <li className="mb-2">
                <a href="#" className="hover:underline">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t w-full flex items-center justify-between border-gray-200 pt-4">
          <p className="text-gray-600 font-light text-[15px]">&copy; 2024 <span className="text-primary">Flexi</span>. All rights reserved.</p>
          <p className="text-gray-600 font-light text-[15px]">Powered by <span className="text-primary font-medium cursor-pointer">Webmasters (K) Ltd</span>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
