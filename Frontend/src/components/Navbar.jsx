import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';
import { ArrowRight, Menu, X, Phone, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Enquiries', path: '/enquiries' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-scrolled py-3'
            : 'bg-white/55 backdrop-blur-md border-b border-[#0F253E]/5 py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Title */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] rounded-2xl p-1"
              aria-label="Angel Assistance Care - Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1.5 shadow-sm border border-[#0F253E]/10 group-hover:scale-105 group-hover:border-[#2A9D8F]/40 transition-all duration-300">
                <img
                  src={assets.favicon}
                  alt="Angel Assistance Care Australian Disability Support Logo"
                  width="44"
                  height="44"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#0F253E] group-hover:text-[#2A9D8F] transition-colors">
                  Angel Assistance Care
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[#2A9D8F] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F51] animate-ping" />
                  NDIS Support Services Australia
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Light Glass Pill) */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#0F253E]/10 shadow-sm"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative px-5 py-2.5 min-h-[44px] flex items-center text-sm font-bold tracking-wide rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[#2A9D8F] shadow-sm shadow-[#2A9D8F]/30'
                        : 'text-[#475569] hover:text-[#0F253E] hover:bg-[#EEF7F7]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action / CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0478591172"
                className="flex items-center gap-2 text-xs font-bold text-[#0F253E] hover:text-[#2A9D8F] px-4 py-2.5 min-h-[44px] rounded-full border border-[#0F253E]/12 bg-white/80 hover:bg-[#EEF7F7] shadow-xs transition-all duration-200"
                title="Call 0478 591 172"
                aria-label="Call Angel Assistance Care at 0478 591 172"
              >
                <Phone className="w-3.5 h-3.5 text-[#E76F51]" />
                <span>0478 591 172</span>
              </a>

              <Link
                to="/about"
                className="btn-magnetic-coral group relative inline-flex items-center gap-2 px-6 py-2.5 min-h-[44px] rounded-full text-sm font-extrabold shadow-md"
                data-cursor="explore"
                aria-label="Explore more about Angel Assistance Care"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/about"
                className="px-3.5 py-2 min-h-[40px] flex items-center rounded-full bg-gradient-to-r from-[#E76F51] to-[#F4A261] text-white text-xs font-black shadow-sm"
                aria-label="Explore About page"
              >
                Explore
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#0F253E] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] transition-colors"
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Choreographed Mobile Navigation Drawer (Accessible Touch Targets) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0F253E]/40 backdrop-blur-md md:hidden flex justify-end"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="w-[85vw] max-w-sm h-full bg-[#FBF9F5] border-l border-[#0F253E]/10 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#0F253E]/10">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={assets.favicon}
                      alt="Angel Assistance Care Logo"
                      width="36"
                      height="36"
                      className="w-9 h-9 object-contain bg-white rounded-lg p-1 border border-[#0F253E]/10"
                    />
                    <span className="font-display font-extrabold text-[#0F253E] text-base">
                      Angel Assistance Care
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#475569] hover:text-[#0F253E] hover:bg-black/5"
                    aria-label="Close navigation drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav aria-label="Mobile Drawer Navigation" className="mt-8 flex flex-col space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-2xl text-base font-bold transition-all ${
                            isActive
                              ? 'bg-[#2A9D8F] text-white shadow-sm'
                              : 'text-[#475569] hover:bg-[#EEF7F7] hover:text-[#0F253E]'
                          }`
                        }
                      >
                        {link.name}
                        <ArrowRight className="w-4 h-4 opacity-60" />
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom Quick Contact on Mobile */}
              <div className="pt-6 border-t border-[#0F253E]/10 flex flex-col gap-3">
                <a
                  href="tel:0478591172"
                  className="flex items-center justify-center gap-2 py-3.5 min-h-[48px] rounded-2xl bg-white border border-[#0F253E]/10 text-[#0F253E] font-bold text-sm hover:bg-[#EEF7F7] transition-colors shadow-xs"
                  aria-label="Direct Phone 0478 591 172"
                >
                  <Phone className="w-4 h-4 text-[#E76F51]" />
                  0478 591 172
                </a>

                <Link
                  to="/enquiries"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-magnetic-coral flex items-center justify-center gap-2 py-3.5 min-h-[48px] rounded-2xl text-sm font-extrabold shadow-md"
                  aria-label="Get in touch with our team"
                >
                  <Heart className="w-4 h-4 text-white" />
                  Get in Touch
                </Link>

                <p className="text-[11px] text-center text-[#475569] mt-2">
                  Melton, Victoria 3338 Australia
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;