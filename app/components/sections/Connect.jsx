"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, useInView, useAnimation } from "framer-motion";

const images = [
  "/img/team img1.jpg",
  "/img/teamimg.jpg",
  "/img/team-1.jpg",
  "/img/team-2.jpg",
];

const ConnectSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12"
      aria-labelledby="connect-section"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Animated Carousel */}
        <motion.div
          className="w-full lg:w-1/2 relative group overflow-hidden rounded-lg shadow-md h-[350px] sm:h-[500px]"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <Image
                src={images[current]}
                alt="Team Image"
                fill
                priority
                className="object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition group-hover:opacity-100 opacity-0"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition group-hover:opacity-100 opacity-0"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </motion.div>

        {/* Right: Text & Contact */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
            },
          }}
        >
          <h2
            id="connect-section"
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4"
          >
            Let’s Connect
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Deckoid Solution is a full-service digital marketing your partner in India,
            powering growth-focused brands. We build marketing systems that perform for real—attracting targeted leads, boosting conversions, and guiding you toward growth with clarity and confidence. No wasted budgets. No empty promises.
          </p>
          <p className="text-gray-700 italic font-extrabold mb-4">
            Ready to take your brand to the next level? We’re just a message.
          </p>
          <p className="text-gray-600 mb-6">
            Big ideas, bold moves — let’s make them happen together. Drop us a line, we’d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="tel:9426225742"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-[#6E44FF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a3bd6] transition"
            >
              <PhoneIcon className="h-5 w-5" />
              9426225742
            </motion.a>
            <motion.a
              href="mailto:digitaldeckoid@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-[#6E44FF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a3bd6] transition"
            >
              <EnvelopeIcon className="h-5 w-5" />
              digitaldeckoid@gmail.com
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectSection;
