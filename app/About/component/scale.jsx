"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PiStackSimpleBold } from "react-icons/pi";

const Scale = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative bg-white rounded-[2.5rem] py-20 px-6 md:px-24 shadow-[0_25px_80px_rgba(0,0,0,0.1)] overflow-hidden mt-15"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: "easeOut" },
        },
      }}
    >
      {/* Glowing blobs */}
      <motion.div
        className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-[#a78bfa] opacity-30 blur-[100px] rounded-full z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.3 } : {}}
        transition={{ delay: 0.2, duration: 1, ease: "backOut" }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-[#a78bfa] opacity-30 blur-[100px] rounded-full z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.3 } : {}}
        transition={{ delay: 0.3, duration: 1, ease: "backOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <PiStackSimpleBold className="text-5xl text-[#5e3ead]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Ready to <span className="text-[#5e3ead]">Scale</span> with Confidence?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="text-[#5e3ead] font-bold">Deckoid Solution</span> combines{" "}
          <span className="font-semibold">strategy, creativity, and technology</span> to deliver growth that matters.
          If you're ready to stop guessing and start growing, it’s time to connect.
        </motion.p>

        {/* Bottom Paragraph */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Dive into a custom growth plan today and let’s{" "}
          <span className="font-semibold">build your digital future—together.</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Scale;
