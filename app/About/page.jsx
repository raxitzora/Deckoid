"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaLightbulb, FaCog } from "react-icons/fa";
import SpotlightCard from "../components/ui/SpotLightCard";
import Circles from "./component/circles";
import ChooseUs from "./component/chooseUs";
import Why from "./component/Why";
import Partner from "./component/partnercard";
import Scale from "./component/scale";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const cardData = [
  {
    icon: <FaHome size={24} />,
    number: "01",
    title: "OUR APPROACH",
    description:
      "We craft customized strategies that align with your unique goals, combining innovation, expertise, and advanced technology to deliver exceptional results that drive growth and ensure long-term success.",
  },
  {
    icon: <FaLightbulb size={24} />,
    number: "02",
    title: "OUR VISION",
    description:
      'Our commitment to a "Yes" approach means we actively seek solutions and possibilities, empowering businesses with a can-do attitude and determination to overcome any obstacles.',
  },
  {
    icon: <FaCog size={24} />,
    number: "03",
    title: "OUR MISSION",
    description:
      "Our mission is to help businesses achieve their desired results within a specific timeframe. We're committed to being a part of our clients' journey towards reaching their digital goals.",
  },
];

const AboutCards = () => {
  return (
    <section
      className="bg-white py-20 px-6 md:px-12"
      aria-labelledby="about-cards-section"
    >
      {/* Spotlight Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cardData.map((card, index) => (
          <motion.div key={index} custom={index} variants={fadeUp}>
            <SpotlightCard
              spotlightColor="rgba(124, 58, 237, 0.8)"
              className="text-white p-8 text-center rounded-xl shadow-xl transition-all duration-300 ease-in-out cursor-pointer bg-[#170D27] hover:scale-[1.03]"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-purple-900 p-4 rounded-full">{card.icon}</div>
              </div>
              <h2 className="text-3xl font-bold">{card.number}</h2>
              <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
              <p className="mt-4 text-white/90">{card.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Other Components with Entrance Animations */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ChooseUs /> 
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Circles /> {/* Circles in About/component/*/}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Why /> {/* Why in About/component/*/}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Partner />  {/* partnercard in About/component/*/}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Scale />
      </motion.div>
    </section>
  );
};

export default AboutCards;
