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
  videoAlt = "turtplevideo",
}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white ">
      {/* Background Video for lg and above */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden lg:block absolute inset-0 w-full h-full object-contain z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Purple background for small screens */}
      <div className="block lg:hidden absolute inset-0 w-full h-full bg-gradient-to-r from-[#6C469C] to-[#A58FD6] z-0"></div>

      {/* Optional dark overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="uppercase tracking-widest text-sm mb-3">{company}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
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

          {/* Placeholder for layout balance (no side video anymore) */}
          <div className="lg:w-1/2 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
