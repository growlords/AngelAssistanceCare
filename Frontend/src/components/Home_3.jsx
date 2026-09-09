import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { assets } from '../assets/assets';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home_3 = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const cards = [
    {
      id: '01',
      img: assets.Card_icon_6,
      heading: 'Assistance with travel/transport arrangements',
      para: 'We arrange and provide transportation for our participants, facilitating their participation in community, social, economic, and daily life activities across Melton and Victoria.',
      tag: 'Mobility & Freedom',
      accentColor: 'border-[#38A3D8]/30 bg-[#F0F7FA] text-[#2A9D8F]',
      badgeBg: 'bg-[#EEF7F7] text-[#1E7B70]',
      hoverGlow: 'group-hover:border-[#38A3D8]',
      iconAlt: 'Assistance with travel and transport icon',
    },
    {
      id: '02',
      img: assets.Card_icon_4,
      heading: 'Assistance with daily personal activities',
      para: 'We assist with daily living activities like personal hygiene, meal preparation, and mobility, enabling our participants to live as independently as possible both at home and within their community.',
      tag: 'Independence at Home',
      accentColor: 'border-[#E76F51]/30 bg-[#FFF4ED] text-[#E76F51]',
      badgeBg: 'bg-[#FFF4ED] text-[#E76F51]',
      hoverGlow: 'group-hover:border-[#E76F51]',
      iconAlt: 'Assistance with daily personal activities icon',
    },
    {
      id: '03',
      img: assets.Card_icon_9,
      heading: 'Group and Centre-based Activities',
      para: 'We encourage and support our participants in engaging in social and recreational activities within group settings, allowing them to meet new people, form friendships, and acquire new life skills.',
      tag: 'Social & Community',
      accentColor: 'border-[#2A9D8F]/30 bg-[#EEF7F7] text-[#2A9D8F]',
      badgeBg: 'bg-[#EEF7F7] text-[#1E7B70]',
      hoverGlow: 'group-hover:border-[#2A9D8F]',
      iconAlt: 'Group and centre-based activities icon',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 relative overflow-hidden scene-cream" aria-label="Featured Services Section">
      {/* Subtle warm geometric texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0F253E 1px, transparent 1px), linear-gradient(90deg, #0F253E 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Warm Ivory & Navy Hierarchy) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#2A9D8F]/30 text-[#1E7B70] text-xs font-black uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#E76F51]" />
            Core Support Services
          </motion.div>

          {/* Semantic H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-black text-[#0F253E] tracking-tight"
          >
            Featured NDIS Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl text-[#475569] font-medium leading-relaxed"
          >
            We are committed to delivering exceptional services tailored to meet each participant’s unique needs and aspirations.
          </motion.p>
        </div>

        {/* 3 Interactive Service Cards with White Acrylic & Pastel Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.18,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className={`bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#0F253E]/10 shadow-md ${service.hoverGlow} hover:shadow-xl transition-all duration-300 group`}
            >
              <div>
                {/* Top Icon & Watermark */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-18 h-18 rounded-2xl p-4 flex items-center justify-center border ${service.accentColor} group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                    <img
                      src={service.img}
                      alt={service.iconAlt}
                      width="40"
                      height="40"
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="font-display font-black text-4xl text-[#0F253E]/15 group-hover:text-[#2A9D8F]/30 transition-colors">
                    {service.id}
                  </span>
                </div>

                {/* Category Tag */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 ${service.badgeBg}`}>
                  {service.tag}
                </span>

                {/* Heading (Semantic H3) */}
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#0F253E] leading-snug mb-4 group-hover:text-[#2A9D8F] transition-colors">
                  {service.heading}
                </h3>

                {/* Body (Muted Slate) */}
                <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
                  {service.para}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-8 border-t border-[#0F253E]/10 flex items-center justify-between">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0F253E] group-hover:text-[#2A9D8F] transition-colors"
                  aria-label={`Explore plan details for ${service.heading}`}
                >
                  <span>Explore Plan Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <div className="w-2.5 h-2.5 rounded-full bg-[#E76F51] group-hover:scale-150 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Banner to Next Scene (Rich Healthcare Teal Gradient) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-24 rounded-3xl bg-gradient-to-r from-[#1E7B70] via-[#2A9D8F] to-[#1E7B70] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden border border-[#2A9D8F]/40"
        >
          {/* Subtle background ring */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-black uppercase tracking-wider mb-3 border border-white/20">
                <Compass className="w-4 h-4 text-[#FFF4ED]" />
                Comprehensive Support
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-black tracking-tight mb-2 text-white">
                Other Specialized NDIS Services
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
                We are dedicated to providing exceptional support services that fit each participant’s goals and daily schedule.
              </p>
            </div>

            <Link
              to="/services"
              className="btn-magnetic-coral shrink-0 group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-black shadow-lg text-white"
              data-cursor="explore"
              aria-label="See all disability support services we offer"
            >
              <span>See What Else We Offer</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home_3;