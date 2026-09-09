import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';

const SplashScreen = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onFinish) onFinish();
      return;
    }

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const exitDelay = isMobile ? 1100 : 1800;
    const finishDelay = isMobile ? 1500 : 2400;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, exitDelay);

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, finishDelay);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const handleQuickSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 300);
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={handleQuickSkip}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0E1E38] cursor-pointer select-none overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle background ambient pulse */}
        <div className="absolute inset-0 bg-radial from-[#1E6091]/30 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center mb-6"
          >
            <img
              src={assets.favicon}
              alt="Angel Assistance Care"
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-white font-display text-2xl sm:text-3xl font-bold tracking-tight text-center"
          >
            Angel Assistance Care
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center gap-2 mt-2"
          >
            <span className="w-6 h-[1px] bg-[#C8963E]" />
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#8FBDD3]">
              With Care & Compassion
            </p>
            <span className="w-6 h-[1px] bg-[#C8963E]" />
          </motion.div>
        </div>

        {/* Bottom subtle indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 text-[11px] uppercase tracking-widest text-slate-400"
        >
          Click to enter
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
