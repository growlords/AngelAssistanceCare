import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  HandHeart, 
  ShieldCheck, 
  Sparkles, 
  Play, 
  X, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoUrl = ''; // Configurable if available

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: narrativeRef, inView: narrativeInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: chooseRef, inView: chooseInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const careValues = [
    {
      letter: 'C',
      title: 'Compassionate hearts',
      desc: 'Compassionate hearts that truly share',
      icon: Heart,
      accentBorder: 'border-[#E76F51]/40',
      iconBg: 'bg-[#E76F51] text-white',
      letterColor: 'text-[#E76F51]',
      cardBg: 'bg-white',
    },
    {
      letter: 'A',
      title: 'Assisting hands',
      desc: 'Assisting hands that show we care',
      icon: HandHeart,
      accentBorder: 'border-[#2A9D8F]/40',
      iconBg: 'bg-[#2A9D8F] text-white',
      letterColor: 'text-[#2A9D8F]',
      cardBg: 'bg-white',
    },
    {
      letter: 'R',
      title: 'Reliable support',
      desc: "Reliable support that's always there",
      icon: ShieldCheck,
      accentBorder: 'border-[#48B5A3]/40',
      iconBg: 'bg-[#48B5A3] text-white',
      letterColor: 'text-[#48B5A3]',
      cardBg: 'bg-white',
    },
    {
      letter: 'E',
      title: 'Empowering lives',
      desc: 'Empowering lives with love and repair',
      icon: Sparkles,
      accentBorder: 'border-[#F4A261]/40',
      iconBg: 'bg-[#F4A261] text-white',
      letterColor: 'text-[#F4A261]',
      cardBg: 'bg-white',
    },
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.angelassistancecare.com.au/about#webpage",
        "url": "https://www.angelassistancecare.com.au/about",
        "name": "About Angel Assistance Care | Disability & Community Support Australia",
        "description": "Learn about Angel Assistance Care, our mission, person-centred philosophy, and core C-A-R-E values supporting NDIS participants in Victoria, Australia.",
        "isPartOf": {
          "@id": "https://www.angelassistancecare.com.au/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.angelassistancecare.com.au/about#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.angelassistancecare.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://www.angelassistancecare.com.au/about"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full pt-20">
      <SEO
        title="About Angel Assistance Care | Disability & Community Support Australia"
        description="Learn about Angel Assistance Care, our person-centred philosophy, and core C-A-R-E values providing trusted NDIS disability support services in Victoria, Australia."
        keywords="About Angel Assistance Care, Angel Assistance, Angel Assist, disability care Australia, NDIS support organisation Victoria, CARE values"
        canonical="/about"
        jsonLd={aboutJsonLd}
      />
      
      {/* SCENE 01: Hero with Authentic `img_44` (Single Clear H1) */}
      <section ref={heroRef} className="relative py-28 lg:py-36 overflow-hidden scene-hero" aria-label="About Angel Assistance Care Hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#2A9D8F]/30 text-xs font-black uppercase tracking-widest text-[#2A9D8F] mb-6 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#E76F51]" />
            Our Identity &amp; Purpose
          </motion.div>

          {/* Semantic Single H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-7xl font-black tracking-tight text-[#0F253E]"
          >
            About Angel Assistance Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-[#475569] leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Our journey began with a shared commitment to improving the quality of care for those we serve across Australia. We believe in a holistic approach, focusing not only on physical health but also on emotional and social well-being. Our goal is to provide tailored support that meets the unique needs of everyone, fostering independence and enhancing quality of life.
          </motion.p>

          {/* Hero Authentic Image Frame with Descriptive Alt & Dimensions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-4xl mx-auto aspect-[21/9]"
          >
            <img
              src={assets.img_44}
              alt="Angel Assistance Care compassionate support team assisting participant with respectful disability care"
              width="896"
              height="384"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* SCENE 02: Narrative & Video Section (Soft Aqua Scene) */}
      <section ref={narrativeRef} className="py-24 lg:py-32 scene-aqua relative" aria-label="Our Mission and Story">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-[#0F253E] text-lg sm:text-xl font-medium leading-relaxed">
            <p className="text-[#475569]">
              We understand the challenges faced by participants and their families, and we are here to guide you through the NDIS process in Victoria. Our team is committed to advocating for your rights and ensuring you receive the services and support you deserve.
            </p>
            <p className="font-extrabold text-[#0F253E] text-xl sm:text-2xl">
              Together, let’s create a brighter future, built on trust, respect, and collaboration. We look forward to being a part of your journey!
            </p>
          </div>

          {/* Video Trigger Pill */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsVideoVisible(true)}
              className="group inline-flex items-center gap-3.5 px-8 py-4 rounded-full bg-white hover:bg-[#EEF7F7] text-[#0F253E] border border-[#2A9D8F]/30 font-black text-sm transition-all duration-300 shadow-md transform hover:scale-105"
              aria-label="Watch Angel Assistance Care story video"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#E76F51] to-[#F4A261] text-white flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 ml-0.5 text-white" />
              </span>
              <span>Watch Our Story Video</span>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F253E]/75 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoVisible(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Story Video Player"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0F253E]/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoVisible(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/5 text-[#0F253E] hover:bg-black/10 transition-colors"
                aria-label="Close video dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video rounded-2xl bg-white flex flex-col items-center justify-center text-[#0F253E] text-center p-8 mt-4 border border-[#0F253E]/10 shadow-inner">
                {videoUrl ? (
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={`${videoUrl}?autoplay=1`}
                    title="Angel Assistance Care Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[#FFF4ED] border border-[#E76F51]/30 flex items-center justify-center text-[#E76F51] mx-auto mb-4">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <h4 className="font-display font-black text-xl mb-1 text-[#0F253E]">Our Story Video</h4>
                    <p className="text-sm text-[#475569] font-medium">Currently being updated for the 2026 season.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCENE 03: C-A-R-E Values in Warm Cream Scene with Authentic `img_20` */}
      <section ref={valuesRef} className="py-24 lg:py-36 scene-cream relative overflow-hidden" aria-label="Our Core Values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#2A9D8F]">
              GUIDING PRINCIPLES
            </span>
            {/* Semantic H2 */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F253E] tracking-tight mt-2">
              Our C-A-R-E Values Define Us
            </h2>
          </div>

          {/* Authentic image `img_20` featured */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-[#0F253E]/10">
              <div className="rounded-2xl overflow-hidden max-h-[440px] bg-white">
                <img
                  src={assets.img_20}
                  alt="Angel Assistance Care values in action with active participant engagement"
                  width="864"
                  height="440"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  data-cursor="view"
                />
              </div>
            </div>
          </div>

          {/* C-A-R-E Cards in Light Acrylic Healthcare Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.letter}
                  initial={{ opacity: 0, y: 25 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className={`${val.cardBg} rounded-3xl p-8 border ${val.accentBorder} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-display font-black text-5xl ${val.letterColor}`}>
                        {val.letter}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${val.iconBg} shadow-xs`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    {/* Semantic H3 */}
                    <h3 className="font-display font-black text-xl text-[#0F253E] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0F253E]/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">Core Value</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SCENE 04: Why Choose Us Section with Authentic `img_46` */}
      <section ref={chooseRef} className="py-24 lg:py-36 scene-mist relative" aria-label="Why Choose Angel Assistance Care">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Authentic `img_46` */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={chooseInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-[#0F253E]/10"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white">
                  <img
                    src={assets.img_46}
                    alt="Angel Assistance Care partnering with esteemed disability care organisations in Australia"
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    data-cursor="view"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right: Preserved Text (Australian English: organisations, personalised) */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={chooseInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block text-xs font-black uppercase tracking-wider text-[#1E7B70] bg-[#EEF7F7] border border-[#2A9D8F]/20 px-4 py-1.5 rounded-full mb-4">
                  Why Choose Us
                </span>

                {/* Semantic H2 */}
                <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0F253E] tracking-tight leading-[1.15] mb-6">
                  Partnering with Esteemed Organisations in Disability Care
                </h2>

                <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-8 font-medium">
                  Choose us for personalised, compassionate care tailored to individual needs in your own environment. Our experienced team is dedicated to empowering individuals with disabilities, fostering independence, and enhancing quality of life through innovative support services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/enquiries"
                    className="btn-magnetic-coral inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-black shadow-md text-white"
                    aria-label="Connect with our disability support team"
                  >
                    <span>Connect with Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/services"
                    className="btn-secondary-light inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold shadow-xs"
                    aria-label="Explore all NDIS support services"
                  >
                    <span>Explore All Services</span>
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;