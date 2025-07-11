"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaUserAlt, FaChartLine, FaUsers, FaUserFriends } from "react-icons/fa";

const features = [
  {
    icon: <FaUserAlt size={40} className="text-black" />,
    title: "Expertise & Experience",
    desc: "Innovative, trend-driven solutions backed by deep industry knowledge.",
  },
  {
    icon: <FaChartLine size={40} className="text-black" />,
    title: "Measurable Results",
    desc: "We focus on key KPIs and track real performance improvements.",
  },
  {
    icon: <FaUsers size={40} className="text-black" />,
    title: "Transparency & Communication",
    desc: "Clear, regular updates and real-time insights throughout the journey.",
  },
  {
    icon: <FaUserFriends size={40} className="text-black" />,
    title: "Client-Centric Approach",
    desc: "We understand your unique challenges and tailor strategies that grow your brand.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-[#f9f8f8] py-20 px-6 sm:px-10 lg:px-24 rounded-full"
      aria-labelledby="choose-us-heading"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          id="choose-us-heading"
          className="text-4xl font-extrabold text-gray-900"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          Why Choose Us?
        </motion.h2>

        <motion.p
          className="mt-5 text-lg text-gray-800 font-medium"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
          }}
        >
          We deliver reliable, innovative solutions tailored to your needs.
          <br />
          With a commitment to quality, transparency, and customer satisfaction,
          <br />
          you're not just a client — you're a long-term partner.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white hover:bg-[#f0f0f0] transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl rounded-2xl p-8 text-center flex flex-col items-center min-h-[320px]"
            variants={cardVariants}
          >
            <motion.div
              className="bg-white rounded-full p-5 shadow-md mb-6"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-md text-gray-800 font-medium mt-3">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ChooseUs;
