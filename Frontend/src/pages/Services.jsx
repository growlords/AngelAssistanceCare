import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  HeartPulse, 
  Compass, 
  CheckCircle2,
  Users2,
  Lightbulb,
  Headphones,
  Palette
} from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: careRef, inView: careInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: lifestyleRef, inView: lifestyleInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const coreServices = [
    {
      id: '01',
      img: assets.Card_icon_4,
      heading: 'Assistance with daily personal activities',
      para: 'We assist with daily living activities like personal hygiene, meal preparation, and mobility, enabling our participants to live as independently as possible both at home and within their community.',
      badge: 'Daily Living',
      accentBorder: 'hover:border-[#E76F51]',
      badgeBg: 'bg-[#FFF4ED] text-[#E76F51]',
      iconAlt: 'Assistance with daily personal activities icon',
    },
    {
      id: '02',
      img: assets.Card_icon_5,
      heading: 'Assistance with development of daily living and life skills',
      para: 'We help our participants engage in training and development activities aimed at enhancing their capacity to live as independently as possible, including support to improve their ability to travel and use public transportation on their own.',
      badge: 'Life Skills',
      accentBorder: 'hover:border-[#2A9D8F]',
      badgeBg: 'bg-[#EEF7F7] text-[#1E7B70]',
      iconAlt: 'Development of life skills icon',
    },
    {
      id: '03',
      img: assets.Card_icon_6,
      heading: 'Assistance with travel/transport arrangements',
      para: 'We arrange and provide transportation for our participants, facilitating their participation in community, social, economic, and daily life activities across Melton and Victoria.',
      badge: 'Travel & Mobility',
      accentBorder: 'hover:border-[#38A3D8]',
      badgeBg: 'bg-[#F0F7FA] text-[#2A9D8F]',
      iconAlt: 'Travel and transport arrangements icon',
    },
    {
      id: '04',
      img: assets.Card_icon_7,
      heading: 'Assistance with household tasks',
      para: 'We support our participants in managing tasks such as cleaning, laundry, cooking, and home upkeep.',
      badge: 'Home Support',
      accentBorder: 'hover:border-[#F4A261]',
      badgeBg: 'bg-[#FFF9F4] text-[#E76F51]',
      iconAlt: 'Household tasks assistance icon',
    },
    {
      id: '05',
      img: assets.Card_icon_9,
      heading: 'Group and Centre-based Activities',
      para: 'We encourage and support our participants in engaging in social and recreational activities within group settings, allowing them to meet new people, form friendships, acquire new skills, enhance essential abilities, and enjoy themselves.',
      badge: 'Social Groups',
      accentBorder: 'hover:border-[#2A9D8F]',
      badgeBg: 'bg-[#EEF7F7] text-[#1E7B70]',
      iconAlt: 'Group and centre-based activities icon',
    },
    {
      id: '06',
      img: assets.Card_icon_10,
      heading: 'Participation in the Community',
      para: 'We provide support and assistance to our participants in building the skills and abilities needed to actively engage in social and civic activities within their community.',
      badge: 'Civic & Social',
      accentBorder: 'hover:border-[#E76F51]',
      badgeBg: 'bg-[#FFF4ED] text-[#E76F51]',
      iconAlt: 'Community participation support icon',
    },
  ];

  const whyChoosePillars = [
    {
      title: 'Expert Team',
      desc: 'Our team of experienced professionals ensures the highest quality of service delivery.',
      icon: Users2,
      accentColor: 'text-[#2A9D8F]',
      iconBg: 'bg-[#EEF7F7]',
    },
    {
      title: 'Modern Solutions',
      desc: 'We use evidence-based methods and modern care frameworks to deliver reliable, person-centred support.',
      icon: Lightbulb,
      accentColor: 'text-[#E76F51]',
      iconBg: 'bg-[#FFF4ED]',
    },
    {
      title: 'Personalised Approach',
      desc: 'We tailor our support plans to meet your specific needs, ensuring a customised experience every time.',
      icon: Compass,
      accentColor: 'text-[#2A9D8F]',
      iconBg: 'bg-[#EEF7F7]',
    },
    {
      title: 'Reliable Support',
      desc: 'Our dedicated support team is available around the clock to assist you with any challenges.',
      icon: Headphones,
      accentColor: 'text-[#E76F51]',
      iconBg: 'bg-[#FFF4ED]',
    },
  ];

  const lifestyleActivities = [
    'Arts and Crafts',
    'Cooking/Baking',
    'Gardening',
    'Entertainment',
    'Indoor and Outdoor Games',
    'Tours/Travel',
  ];

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.angelassistancecare.com.au/services#breadcrumbs",
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
            "name": "Services",
            "item": "https://www.angelassistancecare.com.au/services"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.angelassistancecare.com.au/services#personal-activities",
        "name": "Assistance with daily personal activities",
        "serviceType": "NDIS Disability Support",
        "provider": {
          "@id": "https://www.angelassistancecare.com.au/#organization"
        },
        "description": "Assistance with daily living activities like personal hygiene, meal preparation, and mobility for NDIS participants.",
        "areaServed": "Victoria, Australia"
      },
      {
        "@type": "Service",
        "@id": "https://www.angelassistancecare.com.au/services#life-skills",
        "name": "Development of daily living and life skills",
        "serviceType": "NDIS Life Skills Training",
        "provider": {
          "@id": "https://www.angelassistancecare.com.au/#organization"
        },
        "description": "Training and development activities aimed at enhancing independent living and travel capacity for participants.",
        "areaServed": "Victoria, Australia"
      },
      {
        "@type": "Service",
        "@id": "https://www.angelassistancecare.com.au/services#transport",
        "name": "Assistance with travel/transport arrangements",
        "serviceType": "NDIS Transport Support",
        "provider": {
          "@id": "https://www.angelassistancecare.com.au/#organization"
        },
        "description": "Transportation support facilitating participation in community, social, economic, and daily life activities.",
        "areaServed": "Victoria, Australia"
      },
      {
        "@type": "Service",
        "@id": "https://www.angelassistancecare.com.au/services#household-tasks",
        "name": "Assistance with household tasks",
        "serviceType": "NDIS Domestic Assistance",
        "provider": {
          "@id": "https://www.angelassistancecare.com.au/#organization"
        },
        "description": "Support in managing essential household tasks including cleaning, laundry, cooking, and home upkeep.",
        "areaServed": "Victoria, Australia"
      },
      {
        "@type": "Service",
        "@id": "https://www.angelassistancecare.com.au/services#centre-activities",
        "name": "Group and Centre-based Activities",
        "serviceType": "NDIS Group Activities",
        "provider": {
          "@id": "https://www.angelassistancecare.com.au/#organization"
        },
        "description": "Social and recreational activities in group settings promoting connection, skill-building, and engagement.",
        "areaServed": "Victoria, Australia"
      },
      {
        "@type": "Service",
        "@id": "https://www.angelassistancecare.com.au/services#community-participation",
        "name": "Participation in the Community & Innovative Participation",
        "serviceType": "NDIS Community Access",
        "provider": {
          "@id": "https://www.angelassistancecare.com.au/#organization"
        },
        "description": "Support to build skills for active participation in social, civic, and community activities in Victoria.",
        "areaServed": "Victoria, Australia"
      }
    ]
  };

  return (
    <div className="w-full pt-20">
      <SEO
        title="NDIS Support Services Victoria | Angel Assistance Care"
        description="Comprehensive NDIS disability support services in Melton & Victoria: daily personal care, transport, life skills, household support, and community participation."
        keywords="NDIS support services Victoria, Angel Assistance Care services, disability care Melton, daily living support NDIS, transport assistance disability, group centre activities Victoria"
        canonical="/services"
        jsonLd={servicesJsonLd}
      />
      
      {/* SCENE 01: Hero with Authentic `img_bg_4` (Single Clear H1) */}
      <section ref={heroRef} className="relative py-28 lg:py-36 overflow-hidden scene-hero" aria-label="Services Introduction">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#2A9D8F]/30 text-xs font-black uppercase tracking-widest text-[#2A9D8F] mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
            Empowering Independence Across Victoria
          </motion.div>

          {/* Semantic Single H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-7xl font-black tracking-tight text-[#0F253E]"
          >
            Our NDIS Support Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-[#475569] leading-relaxed font-medium max-w-2xl mx-auto"
          >
            We are committed to delivering exceptional services tailored to meet each participant’s unique needs and aspirations across Australia.
          </motion.p>

          {/* Hero Feature Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-4xl mx-auto aspect-[21/9]"
          >
            <img
              src={assets.img_bg_4}
              alt="Angel Assistance Care comprehensive NDIS support services in action across Victoria"
              width="896"
              height="384"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* SCENE 02: Core Services Grid on Warm Cream Environment */}
      <section ref={gridRef} className="py-24 lg:py-36 scene-cream relative" aria-label="Core NDIS Services List">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#1E7B70] bg-[#EEF7F7] border border-[#2A9D8F]/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Comprehensive Support
            </span>
            {/* Semantic H2 */}
            <h2 className="font-display text-3xl sm:text-6xl font-black text-[#0F253E] tracking-tight">
              Our Core Support Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.7 }}
                whileHover={{ y: -8 }}
                className={`bg-white group rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#0F253E]/10 shadow-md ${service.accentBorder} hover:shadow-xl transition-all duration-300`}
              >
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-18 h-18 rounded-2xl bg-[#F0F7FA] border border-[#38A3D8]/20 p-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
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

                  <span className={`inline-block text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${service.badgeBg}`}>
                    {service.badge}
                  </span>
                  {/* Semantic H3 */}
                  <h3 className="font-display text-xl sm:text-2xl font-black text-[#0F253E] leading-snug mb-3 group-hover:text-[#2A9D8F] transition-colors">
                    {service.heading}
                  </h3>
                  <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-normal">
                    {service.para}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#0F253E]/10 flex items-center justify-between">
                  <Link
                    to="/enquiries"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0F253E] hover:text-[#2A9D8F] transition-colors"
                    aria-label={`Inquire about ${service.heading}`}
                  >
                    <span>Inquire About This</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E76F51]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full-width Special Card: Innovative Community Participation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 rounded-3xl bg-white p-8 sm:p-12 border border-[#E76F51]/30 shadow-lg flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#FFF4ED] p-4 flex items-center justify-center shrink-0 border border-[#E76F51]/30">
              <img
                src={assets.Card_icon_8}
                alt="Innovative community participation icon"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#E76F51] bg-[#FFF4ED] px-3 py-1 rounded-full inline-block">
                Specialised Programme
              </span>
              {/* Semantic H3 */}
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F253E] mt-2 mb-2">
                Innovative community participation
              </h3>
              <p className="text-[#475569] text-base leading-relaxed font-medium">
                Engaging programmes that foster social connections and skill development in a safe, supportive environment across Victoria.
              </p>
            </div>
            <Link
              to="/enquiries"
              className="btn-magnetic-coral shrink-0 px-8 py-4 rounded-full text-sm font-black shadow-md text-white"
              aria-label="Enquire about innovative community participation"
            >
              Get Started
            </Link>
          </motion.div>

        </div>
      </section>

      {/* SCENE 03: Why Choose Our Services in Soft Light Aqua */}
      <section ref={whyRef} className="py-24 lg:py-36 scene-aqua relative" aria-label="Why Choose Our Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Semantic H2 */}
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0F253E] tracking-tight">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="bg-white p-8 rounded-3xl border border-[#2A9D8F]/20 hover:border-[#E76F51]/40 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} border border-black/5 ${pillar.accentColor} flex items-center justify-center mb-6`}>
                    <PillarIcon className="w-7 h-7" />
                  </div>
                  {/* Semantic H3 */}
                  <h3 className="font-display font-black text-xl text-[#0F253E] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SCENE 04: Care & LifeStyle Dual Showcases (Sky Mist Environment) */}
      <section className="py-24 lg:py-36 scene-mist relative" aria-label="Continuous Care and Lifestyle Showcases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-36">
          
          {/* Care Section with Authentic `img_25` */}
          <div ref={careRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={careInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#2A9D8F]/30 text-[#1E7B70] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
                  <HeartPulse className="w-4 h-4 text-[#E76F51]" />
                  Continuous Support
                </div>

                {/* Semantic H2 */}
                <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0F253E] tracking-tight mb-6">
                  Care &amp; Clinical Support
                </h2>

                <p className="text-[#475569] text-lg leading-relaxed mb-6 font-medium">
                  We deliver personalised and inclusive care, guided by best practices. Our focus is on supporting participants to achieve their goals and desired outcomes, ensuring their physical health, mental well-being, and social connections are prioritized.
                </p>

                <div className="p-6 rounded-2xl bg-white border border-[#0F253E]/10 shadow-md mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF7F7] text-[#2A9D8F] border border-[#2A9D8F]/20 flex items-center justify-center shrink-0 font-bold">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      {/* Semantic H3 */}
                      <h3 className="font-black text-[#0F253E] text-base">24/7 Support Staff &amp; On-Call Registered Nurse</h3>
                      <p className="text-[#475569] text-sm mt-1 leading-relaxed font-normal">
                        We provide dedicated, compassionate support workers available on-site 24/7, with a registered nurse on-call around the clock to ensure continuous care and assistance in Victoria.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={careInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-[#0F253E]/10"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white">
                  <img
                    src={assets.img_25}
                    alt="Care - Dedicated support workers providing 24/7 assistance"
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
          </div>

          {/* LifeStyle Section with Authentic `img_26` */}
          <div ref={lifestyleRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={lifestyleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-[#0F253E]/10"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white">
                  <img
                    src={assets.img_26}
                    alt="LifeStyle at Angel Assistance Care - Participants engaging in outdoor activities"
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

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={lifestyleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4ED] border border-[#E76F51]/30 text-[#E76F51] text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
                  <Palette className="w-4 h-4 text-[#E76F51]" />
                  Activities &amp; Community
                </div>

                {/* Semantic H2 */}
                <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0F253E] tracking-tight mb-6">
                  Vibrant Lifestyle &amp; Community
                </h2>

                <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  At Angel Assistance Care, every day is unique with the diverse range of activities and lifestyle options we offer. Whether it’s engaging in indoor activities, exploring the outdoors, or going on excursions, we ensure our participants have an enjoyable experience. We design personalised and group schedules tailored to their preferences.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {lifestyleActivities.map((act) => (
                    <div
                      key={act}
                      className="p-3.5 rounded-xl bg-white border border-[#0F253E]/10 text-xs sm:text-sm font-bold text-[#0F253E] flex items-center gap-2 shadow-xs hover:border-[#2A9D8F] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/enquiries"
                  className="btn-magnetic-coral inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black shadow-md text-white"
                  aria-label="Plan an activity visit or enquire about community programmes"
                >
                  <span>Plan an Activity Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;
