import React from 'react';
import { FaEnvelope, FaHome, FaInfoCircle, FaCode, FaLaptopCode, FaBriefcase, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from "@/assets/HD_logo_only_png.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";



const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-8 pb-6 px-6"> {/* Reduced pt-12 to pt-8, pb-8 to pb-6 */}
  <div className="max-w-7xl mx-auto">
    {/* Call to Action Section - Made more compact */}
    <div className="text-center mb-8"> {/* Reduced mb-12 to mb-8 */}
      <h2 className="text-2xl font-bold mb-3">Ready to start your AI journey?</h2> {/* Reduced text-3xl to text-2xl */}
      <p className="text-gray-300 text-base max-w-2xl mx-auto mb-4"> {/* Reduced text-lg to text-base, mb-6 to mb-4 */}
        Don't see a perfect match? We're always open to passionate learners. 
        Reach out and let's talk about custom opportunities.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3"> {/* Reduced gap-4 to gap-3 */}
        <button className="bg-emerald-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"> {/* Reduced py-3 to py-2, px-8 to px-6 */}
          Apply Now
        </button>
        <button className="bg-emerald-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"> {/* Reduced py-3 to py-2, px-8 to px-6 */}
          Ask Questions
        </button>
      </div>
    </div>

    <hr className="border-gray-700 mb-6" /> {/* Reduced mb-10 to mb-6 */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Reduced gap-10 to gap-6 */}
      {/* Company Info */}
      <div>
        <div className="flex items-center mb-3"> {/* Reduced mb-4 to mb-3 */}
          <img
            src={logo}
            alt="LeafClutch Technologies"
            className="h-12 w-16 drop-shadow-lg"
          />
          <h3 className="text-xl font-bold">LeafClutch.dev</h3> {/* Reduced text-2xl to text-xl */}
        </div>
        <p className="text-gray-300 text-sm"> {/* Added text-sm */}
          We build intelligent AI & automation systems designed for business growth.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-emerald-400">Quick Links</h4> {/* Reduced text-xl to text-lg, mb-6 to mb-4 */}
        <ul className="space-y-2"> {/* Reduced space-y-3 to space-y-2 */}
          <li>
            <a href="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center text-sm"> {/* Added text-sm */}
              <FaHome className="mr-2" /> {/* Reduced mr-3 to mr-2 */} Home
            </a>
          </li>
          <li>
            <a href="/Pricing" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center text-sm"> {/* Added text-sm */}
              <FaBriefcase className="mr-2" /> {/* Reduced mr-3 to mr-2 */} pricing
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center text-sm"> {/* Added text-sm */}
              <FaInfoCircle className="mr-2" /> {/* Reduced mr-3 to mr-2 */} About
            </a>
          </li>
          <li>
            <a href="/Docs" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center text-sm"> {/* Added text-sm */}
              <FaLaptopCode className="mr-2" /> {/* Reduced mr-3 to mr-2 */} Docs
            </a>
          </li>
          <li>
            <a href="/Careers" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center text-sm"> {/* Added text-sm */}
              <FaCode className="mr-2" /> {/* Reduced mr-3 to mr-2 */} Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-emerald-400">Connect With Us</h4> {/* Reduced text-xl to text-lg, mb-6 to mb-4 */}
        <div className="flex items-center mb-3"> {/* Reduced mb-4 to mb-3 */}
          <MdEmail className="text-xl text-emerald-400 mr-2" /> {/* Reduced text-2xl to text-xl, mr-3 to mr-2 */}
          <div>
            <p className="text-gray-300 text-sm">Email:</p> {/* Added text-sm */}
            <a href="mailto:info@leafclutch.dev" className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm"> {/* Added text-sm */}
              info@leafclutch.dev
            </a>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="mt-4"> {/* Reduced mt-6 to mt-4 */}
          <p className="text-gray-300 mb-2 text-sm">Follow us:</p> {/* Added text-sm, reduced mb-3 to mb-2 */}
          <div className="flex space-x-3"> {/* Reduced space-x-4 to space-x-3 */}
            <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300 text-sm"> {/* Reduced w-10/h-10 to w-8/h-8 */}
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300 text-sm"> {/* Reduced w-10/h-10 to w-8/h-8 */}
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300 text-sm"> {/* Reduced w-10/h-10 to w-8/h-8 */}
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 pt-4 border-t border-gray-700 text-center"> {/* Reduced mt-12 to mt-8, pt-6 to pt-4 */}
      <p className="text-gray-400 text-sm"> {/* Added text-sm */}
        Copyright © 2015 LeafClutch.dev. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
