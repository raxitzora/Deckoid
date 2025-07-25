"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "Results—Not Just OKRs",
    desc: "Every plan is anchored in clear KPIs: traffic lifts, lead growth, conversion gains—and we back your success with monthly performance reports.",
  },
  {
    title: "Client-Centric Mindset",
    desc: "Your goals drive everything we do. We customise strategies to solve your real challenges and help you win.",
  },
  {
    title: "Transparent Communication",
    desc: "Open collaboration, responsive support, and full visibility into metrics—so you’re always in control.",
  },
  {
    title: "Proven Expertise",
    desc: "Decades of combined experience, award-winning work, and success across industries—from startups to established businesses.",
  },
];

const Partner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-[#190E41] py-14 px-4 sm:px-8 md:px-12 lg:px-20 rounded-4xl"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Why Brands Partner with{" "}
          <span className="text-[#A78BFA]">Deckoid Solution</span>
        </h2>
        <p className="text-white mt-4 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto">
          We're committed to delivering tangible results and building lasting
          partnerships that drive your success.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="relative group p-[2px] rounded-2xl bg-gradient-to-tr from-[#ff00cc] via-[#3333ff] to-[#00ffff] animate-border hover:animate-borderGlow"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="rounded-[15px] bg-[#1F114E] p-6 md:p-8 h-full min-h-[300px] hover:shadow-[0_0_30px_#5e9ead99] transition-all duration-75 flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white mb-4 leading-snug">
                {item.title}
                <span className="block h-[2px] w-12 bg-[#A78BFA] mt-3"></span>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Partner;
