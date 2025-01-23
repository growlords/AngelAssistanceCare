import React from 'react';
import { useState } from 'react';
import { assets } from "../assets/assets";
import { MdOutlinePlayCircle } from "react-icons/md";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';

const About = () => {

  const [isVideoVisssible, setisVideoVisssible] = useState(false);
  const toggleVideo = () => {
    setisVideoVisssible(!isVideoVisssible);
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger one time
  });

  const { ref:Ref, inView:ComeInView } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  const { ref:ImageRef, inView:ImageInView } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.5, // Trigger animation when 30% of the element is visible
  });

  const { ref:Ref1, inView:InView1 } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  const { ref:Ref2, inView:InView2 } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  const { ref:Ref3, inView:InView3 } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <div className="relative h-[55vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${assets.img_bg_2})`,
            opacity: 0.8
          }}
          role="img"
          aria-label="Background image"
        />
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-0" ref={Ref}>
          <motion.h1
            className="text-3xl sm:text-5xl font-bold text-gray-800 tracking-wider"
            initial={{ y: -50, opacity: 0 }}
            animate={ComeInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            WHO WE ARE
          </motion.h1>
          <p className="w-full lg:w-[60rem] md:w-[40rem] text-center mt-4 sm:mt-0">
            Our journey began with a shared commitment to improving the quality of care for those we serve. We believe in a holistic approach, focusing not only on physical health but also on emotional and social well-being. Our goal is to provide tailored support that meets the unique needs of everyone, fostering independence and enhancing quality of life.
          </p>
        </div>
      </div>

      <div className='mt-[5rem] flex flex-col px-4 sm:px-[10rem] justify-center text-center font-medium text-lg gap-[3rem] leading-[2.5rem] tracking-wide'>
        <p>We understand the challenges faced by participants and their families, and we are here to guide you through the NDIS process. Our team is committed to advocating for your rights and ensuring you receive the services and support you deserve.</p>
        <p>Together, let’s create a brighter future, built on trust, respect, and collaboration. We look forward to being a part of your journey!</p>
        <div className='flex justify-center cursor-pointer mb-[5rem]'>
          <MdOutlinePlayCircle className='text-[4rem]' onClick={toggleVideo} />
          {isVideoVisssible && (
            <div className="absolute w-[20rem] sm:w-[30rem] h-[13rem] items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/RuDsBrSczis?autoplay=1"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-col mt-[5rem]'>
        <div className='flex justify-center' ref={ImageRef}>
          <motion.img 
           initial={{ y: "30rem", opacity: 0 }}
           animate={ImageInView ? { y: 0, opacity: 1 } : { y: "30rem", opacity: 0 }}
           transition={{ duration: 1.2 }}
          className='h-[20rem] sm:h-[30rem] w-full sm:w-[50rem]' src={assets.img_20} alt="" />
        </div>
        <div className='flex flex-col justify-center text-center p-4 sm:p-[4rem] gap-5 bg-slate-500 mx-4 sm:mx-[6rem] rounded-xl relative top-[-5rem]'>
          <h1 className='text-2xl sm:text-4xl font-bold tracking-wider'>And our VALUES define us:</h1>
          <ul className='flex flex-col gap-5 text-lg'>
            <li>A - Accountability: Ensuring the well-being and support of individuals with compassion and responsibility.</li>
            <li>N - Nurturing: Providing care that promotes growth, comfort, and independence for everyone.</li>
            <li>G - Guidance: Offering personalized support and guidance tailored to individual needs.</li>
            <li>E - Empathy: Approaching each individual with understanding and kindness.</li>
            <li>L - Leadership: Leading with expertise and a commitment to making a positive impact.</li>
            <li>A - Advocacy: Advocating for the rights and empowerment of individuals with disabilities.</li>
            <li>S - Safety: Maintaining a safe and secure environment for all participants.</li>
            <li>S - Support: Providing consistent and compassionate support to enhance quality of life.</li>
            <li>I - Inclusion: Embracing diversity and ensuring all individuals feel valued and respected.</li>
            <li>T - Trust: Building trust through integrity, respect, and genuine care.</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-5 px-4 sm:px-0'>
      <motion.div className='flex justify-center items-center gap-5 p-8 rounded-lg bg-slate-400' ref={Ref1}
        initial={{ x: isMobile ? -20 : -120, opacity: 0 }}
        animate={InView1 ? { x: 0, opacity: 1 } : { x: isMobile ? -20 : -120, opacity: 0 }}
        transition={{ duration: 1.2, ease: easeInOut }}
      >
        <div> <img className='w-[5rem] h-[3.5rem]' src={assets.img_22} alt="" /></div>
        <div>
          <h1 className='text-xl font-semibold'>Experienced Professionals</h1>
          <p>Dedicated professionals committed to exceptional, compassionate care.</p>
        </div>
      </motion.div>

      <motion.div className='flex justify-center items-center gap-5 p-8 rounded-lg bg-slate-400' ref={Ref2}
        initial={{ x: isMobile ? 20 : 0, opacity: 0 }}
        animate={InView2 ? { x: 0, opacity: 1 } : { x: isMobile ? 20 : 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: easeInOut }}
      >
        <div> <img className='w-[5rem] h-[3.5rem]' src={assets.img_21} alt="" /></div>
        <div>
          <h1 className='text-xl font-semibold'>Our Growth Journey</h1>
          <p>Evolving to enhance support for individuals with disabilities.</p>
        </div>
      </motion.div>

      <motion.div className='flex justify-center items-center gap-5 p-8 rounded-lg bg-slate-400' ref={Ref3}
        initial={{ x: isMobile ? -20 : 120, opacity: 0 }}
        animate={InView3 ? { x: 0, opacity: 1 } : { x: isMobile ? -20 : 120, opacity: 0 }}
        transition={{ duration: 1.2, ease: easeInOut }}
      >
        <div> <img className='w-[5rem] h-[3.5rem]' src={assets.img_23} alt="" /></div>
        <div>
          <h1 className='text-xl font-semibold'>Innovative Solutions</h1>
          <p>Inspiring solutions to improve lives and enhance care.</p>
        </div>
      </motion.div>
    </div>

      <div className="mt-[10rem] flex flex-col sm:flex-row justify-center px-4 sm:px-0">
        <div className="h-[20rem] sm:h-[30rem] w-full sm:w-[40rem] overflow-hidden">
          <img className="object-contain w-full h-full" src={assets.img_24} alt="" />
        </div>

        <div className="flex flex-col max-w-full sm:max-w-[30rem] gap-5 mt-8 sm:mt-0 sm:ml-8">
          <h1 className="font-medium text-lg">Why Choose Us</h1>
          <p className="text-2xl sm:text-4xl font-bold">Partnering with Esteemed Organizations in Disability Care</p>
          <p className="tracking-wider leading-8 text-lg">
            Choose us for personalized, compassionate care tailored to individual needs. Our experienced team is dedicated to empowering individuals with disabilities, fostering independence, and enhancing quality of life through innovative support services.
          </p>
        </div>
      </div>

      <div className='bg-slate-500 flex justify-center '>
        <div className='flex flex-col sm:flex-row flex-wrap gap-12 p-4 sm:p-[5rem] md:justify-center '>
          <div ref={ref} className='flex flex-col gap-4 items-center'>
            <p className='text-2xl sm:text-4xl font-bold'>
              {inView && <CountUp start={0} end={100} duration={1} suffix="k" />}
            </p>
            <p className='text-base sm:text-lg'>Happy Clients</p>
          </div>

          <div ref={ref} className='flex flex-col gap-4 items-center'>
            <p className='text-2xl sm:text-4xl font-bold'>
              {inView && <CountUp start={0} end={250} duration={1} suffix="+" />}
            </p>
            <p className='text-base sm:text-lg'>Completed Initiatives</p>
          </div>

          <div ref={ref} className='flex flex-col gap-4 items-center'>
            <p className='text-2xl sm:text-4xl font-bold'>
              {inView && <CountUp start={0} end={60} duration={1} suffix="+" />}
            </p>
            <p className='text-base sm:text-lg'>Expert People</p>
          </div>

          <div ref={ref} className='flex flex-col gap-4 items-center'>
            <p className='text-2xl sm:text-4xl font-bold'>
              {inView && <CountUp start={0} end={250} duration={1} suffix="+" />}
            </p>
            <p className='text-base sm:text-lg'>Portfolios</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;