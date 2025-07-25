"use client";

import React, { useEffect, useRef } from "react";
import { TextHoverEffect } from "components/ui/text-hover-effect";
import { HoverEffect } from "components/ui/card-hover-effect";
import { motion, useInView, useAnimation } from "framer-motion";

function ServiceSection() {
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
      className="bg-[#190d41] py-8 sm:py-12"
      aria-labelledby="work-section"
    >
      {/* Title */}
      <motion.div
        className="mb-6 flex items-center justify-center px-4"
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
        <TextHoverEffect
          text="Services"
          duration={0.3}
          className="text-2xl sm:text-3xl md:text-5xl"
        />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="mx-auto px-4 sm:px-6 lg:px-12"
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
        <HoverEffect
          items={imageProjects}
          cardClass="rounded-xl w-full sm:w-[260px] md:w-[300px] lg:w-[340px] h-[180px] md:h-[200px] lg:h-[220px]"
        />
      </motion.div>
    </section>
  );
}

export default ServiceSection;
