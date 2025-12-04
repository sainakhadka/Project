import React from 'react';
import { FaEnvelope, FaHome, FaInfoCircle, FaCode, FaLaptopCode, FaBriefcase, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from "@/assets/HD_logo_only_png.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";



const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Call to Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to start your AI journey?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Don't see a perfect match? We're always open to passionate learners. 
            Reach out and let's talk about custom opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
                         <button className=" bg-emerald-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">

                             Apply Now
                           </button>
                      
            <button className=" bg-emerald-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Ask Questions
            </button>
          </div>
        </div>

        <hr className="border-gray-700 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
               <img
                src={logo}
                alt="LeafClutch Technologies"
                className="h-15 w-20 drop-shadow-lg"
              />
              <h3 className="text-2xl font-bold">LeafClutch.dev</h3>
            </div>
            <p className="text-gray-300">
              We build intelligent AI & automation systems designed for business growth.

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <FaHome className="mr-3" /> Home
                </a>
              </li>
              <li>
                <a href="/Pricing" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <FaBriefcase className="mr-3" /> pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <FaInfoCircle className="mr-3" /> About
                </a>
              </li>
                <li>
                <a href="/Docs" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <FaLaptopCode className="mr-3" /> Docs
                </a>
              </li>
              <li>
                <a href="/Careers" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <FaCode className="mr-3" /> Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-400">Connect With Us</h4>
            <div className="flex items-center mb-4">
              <MdEmail className="text-2xl text-emerald-400 mr-3" />
              <div>
                <p className="text-gray-300">Email:</p>
                <a href="mailto:info@leafclutch.dev" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                  info@leafclutch.dev
                </a>
              </div>
            </div>
            
            {/* Social Media Icons (Optional) */}
            <div className="mt-6">
              <p className="text-gray-300 mb-3">Follow us:</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            Copyright © 2015 LeafClutch.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
