import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

const PinnedCareStory = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const steps = [
    {
      id: '01',
      tabTitle: '24/7 Dedicated Care',
      title: 'Care & Clinical Support',
      subtitle: 'Personalised Support & On-Call Registered Nurse',
      img: assets.img_25,
      imgAlt: 'Angel Assistance Care dedicated support worker assisting participant with daily personal care',
      paragraphs: [
        'We deliver personalised and inclusive care, guided by best practices. Our focus is on supporting participants to achieve their goals and desired outcomes, ensuring their physical health, mental well-being, and social connections are prioritized.',
        'We provide dedicated, compassionate support workers available on-site 24/7, with a registered nurse on-call around the clock to ensure continuous care and assistance across Victoria.',
      ],
      highlights: [
        'Compassionate support workers on-site 24/7',
        'Registered nurse on-call around the clock',
        'Individualised health & well-being monitoring',
        'Holistic emotional and physical support',
      ],
      icon: HeartPulse,
    },
    {
      id: '02',
      tabTitle: 'Vibrant Lifestyle',
      title: 'Active Lifestyle & Community',
      subtitle: 'Engaging Programmes & Community Excursions',
      img: assets.img_26,
      imgAlt: 'Angel Assistance Care participants enjoying vibrant lifestyle activities and social excursions',
      paragraphs: [
        'At Angel Assistance Care, every day is unique with the diverse range of activities and lifestyle options we offer. Whether it’s engaging in indoor activities, exploring the outdoors, or going on excursions, we ensure our participants have an enjoyable experience.',
        'We design personalised and group schedules tailored to their preferences, fostering friendship and self-confidence.',
      ],
      activities: [
        'Arts and Crafts',
        'Cooking/Baking',
        'Gardening',
        'Entertainment',
        'Indoor and Outdoor Games',
        'Tours/Travel',
      ],
      icon: Palette,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 relative overflow-hidden scene-mist" aria-label="Care and Lifestyle Ecosystem">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[45vw] h-[450px] bg-[#2A9D8F]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[40vw] h-[400px] bg-[#F4A261]/12 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#2A9D8F]/30 text-[#1E7B70] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
            Person-Centred Living
          </div>
          {/* Semantic H2 */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F253E] tracking-tight leading-[1.1]">
            A Complete Ecosystem of <span className="text-gradient-coral">Care &amp; Joy</span>
          </h2>
        </div>

        {/* Pinned / Interactive Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Story Navigator Tabs */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-medium">
              We focus on every dimension of our participants' lives — combining round-the-clock clinical care with enriching, cheerful lifestyle opportunities across Victoria.
            </p>

            <div className="space-y-4 pt-4" role="tablist" aria-label="Care and Lifestyle Stages">
              {steps.map((step, idx) => {
                const IconComp = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${step.id}`}
                    id={`tab-${step.id}`}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border flex items-center justify-between ${
                      isActive
                        ? 'bg-white text-[#0F253E] border-[#2A9D8F] shadow-lg scale-[1.02]'
                        : 'bg-white/70 text-[#475569] border-[#0F253E]/10 hover:bg-white hover:text-[#0F253E] hover:border-[#2A9D8F]/40 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black ${
                        isActive ? 'bg-[#2A9D8F] text-white' : 'bg-[#EEF7F7] text-[#2A9D8F]'
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-black uppercase tracking-wider block ${
                          isActive ? 'text-[#E76F51]' : 'text-[#475569]'
                        }`}>
                          STAGE {step.id}
                        </span>
                        <span className="font-display font-black text-lg sm:text-xl text-[#0F253E]">
                          {step.tabTitle}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-[#E76F51]' : 'text-[#475569] opacity-40'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                to="/services"
                className="btn-magnetic-coral inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-black shadow-md text-white"
                data-cursor="explore"
                aria-label="Read full NDIS service plan details"
              >
                <span>Read Full Service Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Stage */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                id={`tabpanel-${steps[activeStep].id}`}
                role="tabpanel"
                aria-labelledby={`tab-${steps[activeStep].id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0F253E]/10 shadow-xl"
              >
                {/* Visual Image with Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-8 bg-[#EEF7F7] border border-[#0F253E]/10">
                  <img
                    src={steps[activeStep].img}
                    alt={steps[activeStep].imgAlt}
                    width="640"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    data-cursor="view"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#0F253E]/10 text-xs font-black text-[#E76F51] shadow-xs">
                    STAGE {steps[activeStep].id}
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Semantic H3 */}
                  <h3 className="font-display text-3xl sm:text-4xl font-black text-[#0F253E] mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#1E7B70] mb-6">
                    {steps[activeStep].subtitle}
                  </p>

                  <div className="space-y-4 text-[#475569] text-base leading-relaxed mb-8">
                    {steps[activeStep].paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Highlights or Activities Grid */}
                  {steps[activeStep].highlights && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#0F253E]/10">
                      {steps[activeStep].highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#0F253E]">
                          <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {steps[activeStep].activities && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#475569] mb-3">
                        Featured Lifestyle Activities:
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {steps[activeStep].activities.map((act) => (
                          <div
                            key={act}
                            className="p-3 rounded-xl bg-[#EEF7F7] border border-[#2A9D8F]/20 text-xs font-bold text-[#0F253E] flex items-center gap-2 hover:bg-[#E2F2F2] hover:border-[#2A9D8F]/40 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PinnedCareStory;
