import React from 'react';
import { FaEnvelope, FaHome, FaInfoCircle, FaCode, FaLaptopCode, FaBriefcase, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from "@/assets/HD_logo_only_png.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";




const Footer = () => {
  return (
    <footer className="bg-transparent from-gray-900 to-gray-800 text-white pt-4 px-6 ">
  <div className="max-w-7xl mx-auto ">
    {/* Call to Action Section - Made more compact */}
    <div className="text-center mb-8"> 
      <h2 className="text-black text-2xl font-bold mb-3">Ready to start your AI journey?</h2> 
      <p className="text-black text-base max-w-2xl mx-auto mb-4"> 
        Don't see a perfect match? We're always open to passionate learners. 
        Reach out and let's talk about custom opportunities.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
   
         <Link to="/contact">
           <button className="bg-blue-900 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
               Apply Now
          </button>
          </Link>

        <button className="bg-blue-900 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"> {/* Reduced py-3 to py-2, px-8 to px-6 */}
          Ask Questions
        </button>
      </div>
    </div>

    <hr className="border-gray-700 mb-6" /> 

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
      {/* Company Info */}
      <div>
        <div className="flex items-center mb-3"> 
          <img
            src={logo}
            alt="LeafClutch Technologies"
            className=" relative h-12 w-16 object-contain"
          />
          <h3 className="text-black text-xl font-bold">LeafClutch Technologies</h3> 
        </div>
        <p className="text-black text-sm">
          We build intelligent AI & automation systems designed for business growth.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-black">Quick Links</h4> 
        <ul className="space-y-2"> 
          <li>
            <a href="/" className="text-black hover:text-blue-700  transition-colors duration-300  flex items-center text-sm"> 
              Home
            </a>
          </li>
          <li>
            <a href="/Pricing" className="text-black hover:text-blue-700 transition-colors duration-300 flex items-center text-sm"> 
                pricing
            </a>
          </li>
          <li>
            <a href="/about" className="text-black  hover:text-blue-700 transition-colors duration-300 flex items-center text-sm"> 
             About
            </a>
          </li>
          <li>
            <a href="/Docs" className="text-black  hover:text-blue-700 transition-colors duration-300 flex items-center text-sm"> 
                Docs
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-black">Connect With Us</h4> 
        <div className="flex items-center mb-3"> 
          <MdEmail className="text-xl text-black mr-2" /> 
         
            <p className="text-black text-sm">Email:</p> 
            <a href="mailto:info@leafclutch.dev" className="text-black hover:text-blue-700 font-semibold text-sm"> {/* Added text-sm */}
              info@leafclutch.dev
            </a>
        
        </div>
        
        {/* Social Media Icons */}
        <div className="mt-4"> 
          <p className="text-black mb-2 text-sm">Follow us:</p> 
          <div className="flex space-x-3"> 
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center transition-colors duration-300 text-sm"> {/* Reduced w-10/h-10 to w-8/h-8 */}
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center transition-colors duration-300 text-sm"> {/* Reduced w-10/h-10 to w-8/h-8 */}
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center transition-colors duration-300 text-sm"> {/* Reduced w-10/h-10 to w-8/h-8 */}
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className=" mt-2 py-2 border-t border-gray-700 text-center">
      <p className="text-black text-sm"> 
        Copyright © 2015 LeafClutch.dev. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
