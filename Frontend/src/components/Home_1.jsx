import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import HeroCanvas3D from './HeroCanvas3D';

const Home_1 = () => {
  const containerRef = useRef(null);

  // Subtle mouse tracking for the hero visual on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden scene-hero"
      aria-label="Welcome and Hero Introduction"
    >
      {/* 3D Interactive Three.js Particle Canvas (Teal, Aqua, Coral, Peach) */}
      <HeroCanvas3D />

      {/* Radiant ambient glow orbs behind content */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] max-w-5xl h-[450px] bg-radial from-[#2A9D8F]/15 via-[#E76F51]/10 to-transparent blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-10 w-[35vw] h-[35vw] bg-[#F4A261]/12 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content (High Contrast Light Palette) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Pill / Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#2A9D8F]/25 shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#E76F51]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0F253E]">
                Registered NDIS Provider <span className="text-[#2A9D8F]">Victoria, Australia</span>
              </span>
            </motion.div>

            {/* Semantic Primary H1 (Clear Value Proposition & Brand Entity) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0F253E] leading-[1.08]">
                Compassionate NDIS Support &amp; Care <span className="text-gradient-coral">for Every Journey</span>
              </h1>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2A9D8F] leading-[1.15]">
                Empowering Abilities with <span className="text-[#0F253E]">Angel Assistance Care</span>
              </h2>
            </motion.div>

            {/* Preserved Authentic Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#475569] max-w-2xl font-normal leading-relaxed"
            >
              Angel Assistance Care is here to remind you that every journey is unique. With compassion, support, and care, we help transform challenges into triumphs for participants and families across Melton and Victoria.
            </motion.p>

            {/* Action Buttons with Light Warm Healthcare Polish */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/services"
                className="w-full sm:w-auto btn-magnetic-coral group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-extrabold shadow-md"
                data-cursor="explore"
                aria-label="Explore our NDIS Support Services"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/enquiries"
                className="w-full sm:w-auto btn-secondary-light inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 transform hover:-translate-y-0.5"
                aria-label="Get in touch with Angel Assistance Care"
              >
                <Heart className="w-4 h-4 text-[#E76F51]" />
                <span>Get In Touch</span>
              </Link>
            </motion.div>

            {/* Trust Metrics Pill Group (Australian English: Person-Centred) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-[#0F253E]/10 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl sm:text-3xl text-[#0F253E]">100%</span>
                <span className="text-xs text-[#2A9D8F] font-bold uppercase tracking-wider mt-0.5">Person-Centred</span>
              </div>
              <div className="flex flex-col border-x border-[#0F253E]/10 px-3 sm:px-6">
                <span className="font-display font-black text-2xl sm:text-3xl text-[#E76F51]">24/7</span>
                <span className="text-xs text-[#2A9D8F] font-bold uppercase tracking-wider mt-0.5">Support Staff</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl sm:text-3xl text-[#0F253E]">NDIS</span>
                <span className="text-xs text-[#2A9D8F] font-bold uppercase tracking-wider mt-0.5">Verified</span>
              </div>
            </motion.div>

          </div>

          {/* Right Layered Visual with Authentic Image `img_42` */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative w-[310px] h-[310px] sm:w-[390px] sm:h-[390px] md:w-[440px] md:h-[440px]"
            >
              {/* Animated luminous concentric rings */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-[#2A9D8F]/30 animate-[spin_50s_linear_infinite]" />
              <div className="absolute -inset-3 rounded-full border border-[#E76F51]/35 shadow-sm animate-pulse" />
              
              {/* Radial glow background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2A9D8F]/15 via-[#F4A261]/15 to-[#EEF7F7] rounded-full blur-xl -z-10" />

              {/* Main Authentic Image Portal with Descriptive Alt Text & Explicit Dimensions */}
              <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full rounded-full overflow-hidden p-3 bg-white/80 shadow-2xl border-2 border-white"
              >
                <img
                  src={assets.img_42}
                  alt="Angel Assistance Care support worker assisting an NDIS participant with compassionate care"
                  width="440"
                  height="440"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover rounded-full shadow-inner hover:scale-105 transition-transform duration-700 ease-out"
                  data-cursor="view"
                />
              </motion.div>

              {/* Authentic NDIS Accreditation Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-4 -right-2 sm:bottom-2 sm:right-0 bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-3xl shadow-lg border border-[#0F253E]/10 flex items-center gap-3.5"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EEF7F7] p-1 flex items-center justify-center shadow-xs border border-[#2A9D8F]/15">
                  <img
                    src={assets.ndis}
                    alt="National Disability Insurance Scheme Registered Provider Australia"
                    width="56"
                    height="56"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#E76F51] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2A9D8F] inline" />
                    Verified Provider
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#0F253E]">
                    NDIS Registered
                  </span>
                </div>
              </motion.div>

              {/* Floating Pulse Pill */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-[#2A9D8F]/30 items-center gap-2.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#2A9D8F] animate-ping" />
                <span className="text-xs font-bold text-[#0F253E]">Compassionate Care</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home_1;