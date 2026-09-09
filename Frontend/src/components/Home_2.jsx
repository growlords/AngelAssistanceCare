import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowRight, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const Home_2 = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const memoryImages = [
    { img: assets.img_27, title: 'Community Connection' },
    { img: assets.img_28, title: 'Joyful Moments' },
    { img: assets.img_29, title: 'Creative Activities' },
    { img: assets.img_30, title: 'Shared Milestones' },
    { img: assets.img_31, title: 'Supportive Friendships' },
    { img: assets.img_32, title: 'Everyday Independence' },
    { img: assets.img_33, title: 'Outdoor Engagement' },
    { img: assets.img_34, title: 'Skill Development' },
    { img: assets.img_35, title: 'Enriching Experiences' },
    { img: assets.img_36, title: 'Active Participation' },
    { img: assets.img_37, title: 'Warmth and Care' },
    { img: assets.img_38, title: 'Empowering Growth' },
    { img: assets.img_39, title: 'Together in Harmony' },
    { img: assets.img_40, title: 'Celebrating Life' },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 relative overflow-hidden scene-aqua" aria-label="Our Mission and Community Life">
      {/* Background ambient healthcare lighting */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[400px] bg-[#2A9D8F]/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[35vw] h-[350px] bg-[#F4A261]/12 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Section: Mission & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Feature Image `img_43` */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Luminous aura behind card */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#2A9D8F]/20 via-[#E76F51]/15 to-transparent rounded-3xl blur-xl -z-10" />
              
              <div className="light-glass-card p-3 sm:p-4 rounded-3xl overflow-hidden shadow-xl border border-[#2A9D8F]/20">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white">
                  <img
                    src={assets.img_43}
                    alt="Angel Assistance Care participant and support coordinator celebrating independence in Victoria"
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    data-cursor="view"
                  />
                  
                  {/* Floating Overlay Pill (Australian English: Person-Centred) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#0F253E]/10 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E76F51] to-[#F4A261] text-white flex items-center justify-center font-bold shadow-sm">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#0F253E] uppercase tracking-wider">Person-Centred Focus</p>
                        <p className="text-[11px] text-[#475569]">Tailored to every individual's goals and choices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Preserved Text Content (High Contrast Navy & Teal) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Subheading Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#2A9D8F]/30 text-[#2A9D8F] text-xs font-black uppercase tracking-wider mb-5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
                Angel Assistance Care Philosophy
              </div>

              {/* Semantic H2 */}
              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0F253E] tracking-tight leading-[1.15] mb-6">
                Transforming challenges into <span className="text-gradient-coral">triumphs</span>.
              </h2>

              {/* Preserved paragraphs */}
              <p className="text-lg sm:text-xl font-bold text-[#1E7B70] leading-relaxed mb-4">
                Supporting your loved ones through every challenge, offering care that empowers and uplifts.
              </p>

              <p className="text-base text-[#475569] leading-relaxed mb-8">
                At Angel Assistance Care, we create an environment where every individual is valued and has the freedom to thrive across Melbourne and regional Victoria.
              </p>

              {/* Feature check list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {[
                  'Empathetic & certified support staff',
                  'Fostering independence & life skills',
                  'Inclusive group & community programmes',
                  'Support tailored around your schedule',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#0F253E]">
                    <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  to="/about"
                  className="btn-magnetic-coral group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-extrabold shadow-md"
                  data-cursor="explore"
                  aria-label="Learn more about Angel Assistance Care"
                >
                  <span>Get to Know Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Authentic Memories & Moments Horizontal Drag Reel */}
        <div className="mt-28 lg:mt-36 pt-16 border-t border-[#0F253E]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#2A9D8F]">
                COMMUNITY LIFE &amp; CONNECTION
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-black text-[#0F253E] mt-1.5">
                Authentic Moments &amp; Memories
              </h3>
            </div>
            <p className="text-sm text-[#475569] max-w-md mt-2 md:mt-0 font-medium">
              A real glimpse into our vibrant daily community, shared adventures, and heartfelt bonds in Victoria.
            </p>
          </div>

          <div className="relative" data-cursor="drag">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                768: { slidesPerView: 3.2, spaceBetween: 24 },
                1024: { slidesPerView: 4.2, spaceBetween: 24 },
              }}
              loop={true}
              speed={700}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="pb-14"
            >
              {memoryImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group light-glass-card rounded-2xl overflow-hidden p-2.5 shadow-sm hover:border-[#E76F51] hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-white">
                      <img
                        src={item.img}
                        alt={`Angel Assistance Care community moments - ${item.title}`}
                        width="320"
                        height="288"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F253E]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-xs font-black tracking-wider uppercase drop-shadow-sm">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home_2;
