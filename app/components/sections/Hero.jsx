"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

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
}) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bulletsRef = useRef(null);

  useEffect(() => {
    // Title animation
    const splitTitle = SplitText.create(titleRef.current, {
      type: "words, chars",
      charsClass: "char",
    
    });

    gsap.from(splitTitle.chars, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.03,
      ease: "power4.out",
    });

    // Subtitle animation
    const splitSubtitle = SplitText.create(subtitleRef.current, {
      type: "words",
    });

    gsap.from(splitSubtitle.words, {
      opacity: 0,
      x: -40,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.3,
      ease: "power2.out",
    });

    // Bullets animation
    const bulletsList = bulletsRef.current.querySelectorAll("li");
    gsap.from(bulletsList, {
      opacity: 0,
      x: 60,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white bg-[#090736]">
      {/* Video background – large screens only */}
      <div className="hidden lg:block absolute inset-0 w-full h-screen overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-full"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Gradient fallback – mobile */}
      <div className="block lg:hidden absolute inset-0 w-full h-full bg-gradient-to-r from-[#6C469C] to-[#A58FD6] z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="uppercase tracking-widest text-lg mb-3">{company}</p>

            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            >
              {title}
            </h1>

            <h2
              ref={subtitleRef}
              className="text-xl font-semibold mb-6 text-[#E7DBFF]"
            >
              {subtitle}
            </h2>

            <ul
              ref={bulletsRef}
              className="mb-8 list-disc list-inside space-y-2 text-left"
            >
              {bullets.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                scroll={true}
                className="inline-block bg-white text-[#6E44FF] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition"
              >
                {buttonText}
              </Link>
              <a
                href="https://wa.me/919586536724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-3xl" />
                <span className="hidden sm:inline lg:text-xl font-bold">Whatsapp</span>
              </a>
            </div>
          </div>

          {/* Right Section – empty spacing */}
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
