import React from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Top right gentle sky & aqua aura */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#2A9D8F]/10 via-[#38A3D8]/8 to-transparent blur-[80px] sm:blur-[120px] transform-gpu will-change-transform"
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Middle left warm sunlit peach & coral glow */}
      <motion.div
        className="absolute top-[35%] -left-[15%] w-[48vw] h-[48vw] rounded-full bg-gradient-to-tr from-[#E76F51]/8 via-[#F4A261]/8 to-transparent blur-[90px] sm:blur-[140px] transform-gpu will-change-transform"
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.96, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom right supportive soft mint/teal pulse */}
      <motion.div
        className="absolute -bottom-[15%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#52B788]/8 via-[#2A9D8F]/6 to-transparent blur-[80px] sm:blur-[130px] transform-gpu will-change-transform"
        animate={{
          x: [0, 20, -25, 0],
          y: [0, -20, 25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle healthcare fine mesh grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0F253E 1px, transparent 1px), linear-gradient(90deg, #0F253E 1px, transparent 1px)`,
          backgroundSize: '90px 90px',
        }}
      />
    </div>
  );
};

export default AmbientBackground;
