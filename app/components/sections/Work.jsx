"use client";

import React, { useEffect, useRef } from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { HoverEffect } from "../ui/card-hover-effect";
import { motion, useInView, useAnimation } from "framer-motion";

function WorkSection() {
  const imageProjects = [
    { image: "/img/websiteimg.jpeg" },
    { image: "/img/graphic1.jpeg" },
    { image: "/img/socialmedia.jpeg" },
    { image: "/img/facbook.jpeg" },
    { image: "/img/videoediting.jpeg" },
    { image: "/img/seo.jpeg" },
  ];

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#190d41] py-12 sm:py-20"
      aria-labelledby="work-section"
    >
      {/* Title Animation */}
      <motion.div
        className="mb-10 sm:mb-16 flex items-center justify-center px-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <TextHoverEffect text="Services" duration={0.3} className="text-3xl sm:text-4xl md:text-5xl" />
      </motion.div>

      {/* Grid Animation */}
      <motion.div
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Adjust card sizes via HoverEffect’s styling */}
        <HoverEffect
          items={imageProjects}
          cardClass="rounded-xl w-full sm:w-[280px] md:w-[320px] lg:w-[360px] h-[200px] md:h-[220px] lg:h-[240px]"
        />
      </motion.div>
    </section>
  );
}

export default WorkSection;
