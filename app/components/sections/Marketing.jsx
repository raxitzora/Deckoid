"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import SplitText from "../ui/split-text"; // ✅ Ensure it's imported correctly

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const marketingData = [
  {
    title: "Winning Awards for 2024–2025 for",
    highlight: "Best Digitalmarketing company",
    desc: "Recognized as RITA (Saurastra IT-ITES award) for outstanding marketing results.",
    tag: "Awards Won",
    image: "/img/awardpic.png"
  },
  {
    title: "Boosting Website Traffic by",
    highlight: "200%",
    desc: "Amplified digital presence and engagement through strategic SEO, content, and performance-driven campaigns by Deckoid Solutions.",
    tag: "Website Traffic",
    image: "/img/traffic.jpg",
  },
  {
    title: "Driving",
    highlight: "2–5x Lead Growth",
    desc: "Achieved explosive lead generation through hyper-targeted campaigns — crafted by Deckoid Solutions to attract and convert your ideal audience.",
    tag: "Lead Growth",
    image: "/img/growth.jpg",
  },
  {
    title: "Generating",
    highlight: "200% Average ROI",
    desc: "Exceptional returns powered by data-driven marketing strategies — expertly crafted by Deckoid Solutions to maximize growth and impact.",
    tag: "Average ROI",
    image: "/img/roi.jpg",
  },
];

export default function MarketingSection() {
  const [splitKey, setSplitKey] = useState(0);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSplitKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      aria-labelledby="marketing-heading"
    >
      {/* Animated Text Section */}
      <motion.div
        className="text-center mb-12 space-y-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        <SplitText
          key={`heading-${splitKey}`}
          text="Proven Results. Powerful Growth."
          className="text-sm font-medium tracking-widest uppercase text-black"
          delay={100}
          duration={0.2}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <motion.h2
          key={`title-${splitKey}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-center"
          id="marketing-heading"
        >
          Numbers That Speak{" "}
          <span className="text-purple-600">Louder Than Promises</span>
        </motion.h2>

        <SplitText
          key={`desc-${splitKey}`}
          text="We don’t just aim for results — we deliver industry-defining outcomes that put brands ahead of the curve."
          className="text-2xl text-black font-bold max-w-4xl mx-auto"
          delay={100}
          duration={1.2}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </motion.div>

      {/* Animated Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.15,
              duration: 0.6,
              ease: "easeOut",
            },
          },
        }}
      >
        {marketingData.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow hover:shadow-gray-900 transition-shadow duration-300 hover:bg-gray-100"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* Text */}
            <div className="p-6 space-y-2">
              <h3 className="text-3xl font-bold text-black">
                {item.title}{" "}
                <span className="text-purple-600">{item.highlight}</span>
              </h3>
              <p className="text-lg text-gray-600">{item.desc}</p>
            </div>

            {/* Image with tag */}
            <div className="relative w-full h-60 sm:h-72 md:h-64 lg:h-72 xl:h-80">
              <Image
                src={item.image}
                alt={item.tag}
                fill
                className="object-contain"
                quality={90}
                loading="lazy"
              />
              <div className="absolute bottom-3 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow text-purple-700 text-xl font-bold">
                {item.tag}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
