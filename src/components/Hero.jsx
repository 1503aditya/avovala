import React, { useState, useEffect } from "react";
import { CAROUSEL_DATA } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${CAROUSEL_DATA[index].image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          key={`text-${index}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {CAROUSEL_DATA[index].text}
          </h1>
          <button className="bg-avo-main hover:bg-avo-dark text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
            Explore Freshness
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
