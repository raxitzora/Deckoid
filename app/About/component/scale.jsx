"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Strategic SEO",
    desc: "From white-hat audit and keyword mapping to backlink building and technical optimisation—our SEO tactics bring your site to the forefront of search.",
    impact: ["More organic visibility", "More qualified traffic", "More trust"],
  },
  {
    title: "Eye-Catching Graphic Design",
    desc: "Whether it’s logos, infographics, 3D packaging mock-ups or social creatives, our visual storytelling makes your brand unforgettable.",
    impact: ["Stronger brand recall", "Immediate visual impact", "Deeper audience engagement"],
  },
  {
    title: "Website Design & Development",
    desc: "Responsive, secure, lightning-fast websites built on modern platforms—designed with UX-first thinking.",
    impact: ["Visitors convert", "Bounce rates drop", "ROI multiplies"],
  },
  {
    title: "Social Media Management",
    desc: "Strategic content calendars, polished visuals, community management and performance-driven campaigns.",
    impact: ["Greater brand presence", "Meaningful audience growth"],
  },
  {
    title: "Facebook Ads & Lead Gen",
    desc: "Scroll-stopping creatives, smart audience targeting, constant optimisation & transparent analytics.",
    impact: ["Higher-quality leads at lower CPL", "Scale faster"],
  },
  {
    title: "Video Editing",
    desc: "Professional, attention-grabbing brand videos—from concept to final cut.",
    impact: ["Videos that connect", "Convert, and elevate your message"],
  },
];

const Card3D = ({ children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetRotation = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={cardRef}
      className="transform-gpu will-change-transform transition-transform duration-200 ease-out rounded-xl backface-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      {children}
    </div>
  );
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Why = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={sectionRef} className="bg-white py-14 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
          What We Do at{" "}
          <motion.span
            initial={{ scale: 0.95 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-[#5e3ead] inline-block"
          >
            Deckoid Solution
          </motion.span>
        </h2>
        <p className="text-black mt-4 text-sm sm:text-base md:text-lg">
          Empowering your brand with cutting-edge digital solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={!reduceMotion ? cardVariant : {}}>
            <Card3D>
              <div className="border border-[#5e3ead] bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 min-h-[320px] flex flex-col justify-between">
                <h3 className="text-xl font-bold text-[#5e3ead] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{service.desc}</p>
                <hr className="mb-4 border-gray-300" />
                <p className="text-sm font-semibold text-gray-800 mb-1">Your Impact:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {service.impact.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </Card3D>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Why;
