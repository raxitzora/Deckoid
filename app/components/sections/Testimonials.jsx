"use client";

import React, { useEffect, useState, useRef } from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "JM SAPARIYA",
    review:
      "Really impressed with their work! The team is professional, knows their stuff, and delivers solid results. Their approach is strategic and well-planned, making a real impact. Great experience working with them!",
    time: "8 weeks ago",
    stars: 4,
    image: "/img/testimonial-1.jpg",
  },
  {
    name: "Jaydeep Sangani",
    review:
      "Impeccable digital marketing services. They really understand the services they offer such as SEO, ads, and content. Highly recommend!",
    time: "11 weeks ago",
    stars: 5,
    image: "/img/testimonial-2.jpg",
  },
  {
    name: "Ravi Patel",
    review:
      "Deckoid helped us double our leads in a short time. Communication was great and execution was spot on. Very happy with the results.",
    time: "6 weeks ago",
    stars: 5,
    image: "/img/testimonial-3.jpg",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="text-yellow-400 flex gap-[2px]">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            ★
          </motion.span>
        ))}
    </div>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-0 px-0" aria-labelledby="testimonials-heading">
      {/* Heading Section */}
      <div className="h-[22rem] flex items-center justify-center bg-[#190E41]">
        <TextHoverEffect text="Testimonial" duration={0.1} />
      </div>

      {/* Testimonial Section with background */}
      <div
        className="py-16 px-4 bg-cover bg-center bg-no-repeat relative min-h-[600px]"
        style={{ backgroundImage: `url('/img/tes.jpg')` }}
      >
        <div className="relative z-10">
          <motion.div
            className="flex justify-center items-center gap-4 mt-10"
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              hidden: { opacity: 0, y: 60 },
            }}
          >
            {/* Left Arrow */}
            <motion.button
              onClick={handlePrev}
              whileTap={{ scale: 0.85 }}
              className="text-purple-500 hover:text-purple-700 text-7xl"
              aria-label="Previous testimonial"
            >
              ←
            </motion.button>

            {/* Testimonial Card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl w-full border border-purple-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-purple-500"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-extrabold text-lg text-black">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeIndex].time}
                  </p>
                </div>
              </div>
              <StarRating count={testimonials[activeIndex].stars} />
              <p className="text-gray-800 font-medium mt-4 leading-relaxed">
                “{testimonials[activeIndex].review}”
              </p>
            </motion.div>

            {/* Right Arrow */}
            <motion.button
              onClick={handleNext}
              whileTap={{ scale: 0.85 }}
              className="text-purple-500 hover:text-purple-700 text-7xl"
              aria-label="Next testimonial"
            >
              →
            </motion.button>
          </motion.div>

          <motion.p
            className="text-center italic text-white mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Google Review
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
