"use client";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6F4EA2] to-[#2D233A] text-white py-12 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Address */}
        <div>
          <h3 className="text-lg font-bold mb-4">Address</h3>
          <div className="flex items-center mb-2">
            <FiPhone className="mr-2" /> +94262 25742
          </div>
          <div className="flex items-center mb-4">
            <FiMail className="mr-2" />
            digitaldeckoid@gmail.com
          </div>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://x.com/deckoidsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/deckoidsolution/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/deckoid_solution?igsh=ZXowbDMwbHUzeXVq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/digitaldeckoid/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-white/90">
            <li>› Social Media Management</li>
            <li>› Search Engine Optimization</li>
            <li>› Graphic Design</li>
            <li>› Website Design</li>
            <li>› Vedio Editing</li>
            <li>› Facebook Ads</li>
            <li>› Lead Generation</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90">
            <li>› About Us</li>
            <li>› Service</li>
            <li>› Protfolio</li>
            <li>› Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-full text-black w-full outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-white text-purple-700 font-semibold rounded-r-full hover:bg-purple-100 transition"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Deckoid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
