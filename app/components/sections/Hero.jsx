"use client";

import Link from "next/link";
import React from "react";

const Hero = ({
  company = "Digital Marketing Company",
  title = "Discover the Secrets Behind Rapid Growth",
  subtitle = "Smart. Scalable. Results-Driven.",
  bullets = [
    "Crafting Bold, memorable brand identities.",
    "Turning Online Presence into engagement.",
    "Boosting Visibility Through Targeted Marketing.",
  ],
  buttonText = "Get Your Growth Plan →",
  buttonLink = "#contact",
  videoSrc = "/img/MicrosoftTeams-video.mp4",
  videoAlt = "turtlevideo",
}) => {
  return (
    <section className="relative w-full overflow-hidden text-white bg-[#090736]">
      {/* Video background – visible only on large screens */}
      <div className="hidden lg:block absolute inset-0 w-full h-screen overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient fallback for mobile */}
      <div className="block lg:hidden absolute inset-0 w-full h-full bg-gradient-to-r from-[#6C469C] to-[#A58FD6] z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="uppercase tracking-widest text-sm mb-3">{company}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {title}
            </h1>
            <h2 className="text-xl font-semibold mb-6 text-[#E7DBFF]">
              {subtitle}
            </h2>
            <ul className="mb-8 list-disc list-inside space-y-2 text-left">
              {bullets.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <Link
              href={buttonLink}
              className="inline-block bg-white text-[#6E44FF] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition"
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Section – spacing only */}
          <div className="w-full lg:w-1/2" />
        </div>
      </div>

      {/* MARQUEE SECTION */}
      <div className="w-full py-2 overflow-hidden bg-[#090736] border-t border-[#6C469C] z-10 flex justify-center items-center">
        <div className="whitespace-nowrap animate-marquee text-white text-xl md:text-2xl font-semibold tracking-wide">
          <span className="mx-10">🚀 100+ Projects Delivered</span>
          <span className="mx-10">🏆 Award-Winning Digital Team</span>
          <span className="mx-10">📈 Boost Your Online Presence Today</span>
          <span className="mx-10">💡 Book Your Free Strategy Call Now</span>
          <span className="mx-10">🌐 Trusted by 50+ Brands</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
