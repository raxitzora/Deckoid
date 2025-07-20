"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

const AwardSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
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
      ref={ref}
      className="bg-[#8C6CB5] text-white py-20 px-6"
      aria-labelledby="award-section"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h2
            id="award-section"
            className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
          >
            Recognized for Digital Brilliance
          </h2>
          <p className="italic text-lg mb-4">
            Award-Winning Digital Marketing Agency – Deckoid Solutions
          </p>
          <p className="text-base mb-8 leading-relaxed">
            At the Saurashtra IT-ITeS Excellence Awards 2024, presented by
            Rajkot Information Technology Association (RITA), Deckoid Solutions
            was honored for outstanding achievements in IT and Digital
            Marketing.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#6E44FE] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition"
          >
            Let&apos;s Talk →
          </Link>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            },
          }}
        >
          <Image
            src="/img/Digital-Brilliance.png"
            alt="Award Image"
            width={800}
            height={500}
            className="rounded-lg shadow-lg object-contain w-full h-auto max-w-[600px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AwardSection;
