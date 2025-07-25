"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaUsers, FaShoppingCart, FaTruck, FaDollarSign } from "react-icons/fa";
import SpotlightCard from "components/ui/SpotLightCard";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  {
    icon: <FaUsers size={22} className="text-purple-900" />,
    title: "Happy Clients",
    description: "Trusted by 125+ growing brands & businesses.",
    number: 125,
    color: "bg-[#362C67]",
    shadow: "hover:shadow-[0_0_25px_#362C67]",
  },
  {
    icon: <FaShoppingCart size={22} className="text-purple-900" />,
    title: "Campaigns Launched",
    description: "High-performing campaigns delivered with data-driven strategies.",
    number: 80,
    color: "bg-[#6E3F8C]",
    shadow: "hover:shadow-[0_0_25px_#6E3F8C]",
  },
  {
    icon: <FaTruck size={22} className="text-purple-900" />,
    title: "Leads Generated",
    description: "Consistently generating quality leads for client success.",
    number: 5500,
    color: "bg-[#362C67]",
    shadow: "hover:shadow-[0_0_25px_#362C67]",
  },
  {
    icon: <FaDollarSign size={22} className="text-purple-900" />,
    title: "Ad Spend Managed",
    description: "Over ₹1 Crore+ in digital ad spend successfully managed.",
    number: 100000,
    color: "bg-[#6E3F8C]",
    shadow: "hover:shadow-[0_0_25px_#6E3F8C]",
  },
];

const Circles = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
  if (!inView || reduceMotion) return;

  let intervalId;
  let timeoutId;

  const animate = () => {
    const steps = 60;
    const duration = 1500;
    const intervalTime = duration / steps;

    const targetValues = stats.map((stat) => stat.number);
    const increments = targetValues.map((num) => Math.ceil(num / steps));
    let currentValues = stats.map(() => 0);
    let frame = 0;

    intervalId = setInterval(() => {
      if (frame >= steps) {
        clearInterval(intervalId);

        // Reset after 3s
        timeoutId = setTimeout(() => {
          setCounts(stats.map(() => 0));
          if (inView && !reduceMotion) animate();
        }, 3000);
        return;
      }

      const newValues = currentValues.map((val, i) => {
        const next = val + increments[i];
        return next > targetValues[i] ? targetValues[i] : next;
      });

      currentValues = newValues;
      setCounts(newValues);
      frame++;
    }, intervalTime);
  };

  animate();

  return () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
  };
}, [inView, reduceMotion]);


 return (
  <div
    ref={sectionRef}
    className="w-full px-4 py-12 sm:px-6 md:px-8 lg:px-16 bg-[#190E41] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:grid-cols-2 sm:gap-8 place-items-center mt-10 rounded-4xl"
  >
    {stats.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.2 + index * 0.15,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="w-full flex justify-center"
      >
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.1)"
          className={`rounded-full ${item.color} ${item.shadow} shadow-xl hover:scale-105 transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-white text-center relative
            w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px]`}
        >
          {/* Icon Bubble */}
          <div className="absolute top-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-full shadow-md">
            <span className="text-purple-900 text-lg sm:text-xl md:text-2xl">
              {item.icon}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-sm sm:text-base md:text-lg mt-16 px-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[11px] sm:text-sm md:text-base mt-1 px-4 sm:px-5 md:px-6">
            {item.description}
          </p>

          {/* Count */}
          <div className="text-lg sm:text-xl md:text-2xl font-extrabold mt-3">
            {counts[index]}
            {item.number >= 1000 ? "+" : ""}
          </div>
        </SpotlightCard>
      </motion.div>
    ))}
  </div>
);

};

export default Circles;
