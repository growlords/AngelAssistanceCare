import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';  
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import backgroundImage from '../assets/home2.png';// Import the background image


const Home_2 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once 
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  const { ref: Ref, inView: ComeInView } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  const images = [
    { img: assets.img_27 },
    { img: assets.img_28 },
    { img: assets.img_29 },
    { img: assets.img_30 },
    { img: assets.img_31 },
    { img: assets.img_32 },
    { img: assets.img_33 },
    { img: assets.img_34 },
    { img: assets.img_35 },
    { img: assets.img_36 },
    { img: assets.img_37 },
    { img: assets.img_38 },
    { img: assets.img_39 },
    { img: assets.img_40 },
  ]

  return (
    <div 
      className='0' 
      style={{
        backgroundImage: `linear-gradient(to bottom, #dde5f0, rgb(255, 255, 255)), url(${backgroundImage})`, // Add gradient effect on background image
        backgroundSize: 'cover',  // Ensures the image covers the entire screen and adjusts with screen size
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat',  // Prevents image from repeating
        width: '100%',
        height: '100%',  // Ensures the div takes up the full viewport height
      }}
    >
      <div className='flex flex-col sm:flex-row md:flex-col-reverse  lg:flex-row py-[12rem] lg:py-0'>
        <div className="left flex-1 flex justify-center sm:justify-start md:justify-center lg:justify-start">
          <div className="img md:mt-[5rem]">
            <motion.img
              ref={ref}
              className="overflow-hidden object-cover w-full sm:w-auto md:w-[25rem] lg:w-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0, // Fade in when in view
                scale: inView ? 1 : 0.5, // Scale up when in view
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={assets.img_9_2} // Your image source here
              alt="Animated Image"
            />
          </div>
        </div>

        <div className="right flex-1 relative sm:left-18 sm:top-10 w-full sm:w-auto px-5">
          <div className="line_1">
            <h5 className='font-semibold text-xl pb-2'>AngelAssistCare</h5>
          </div>
          <div className='uppercase text-[6vw] sm:text-[3vw] tracking-tight font-semibold pb-1 leading-snug'>Transforming challenges into triumphs.</div>
          <div className='text-lg sm:text-xl font-medium pb-2'>
            <p>
              Supporting your loved ones through every challenge, offering care that empowers and uplifts.
            </p>
          </div>
          <div className='pb-4'>
            <p>
              At Angel Assist Care, we create an environment where every individual is valued and has the freedom to thrive.
            </p>
          </div>
          <div className='btnAbt pt-2'>
            <motion.button ref={Ref} className="relative text-lg px-7 py-3 bg-[#171756] text-white rounded-full overflow-hidden group"
              initial={{ y: 80, opacity: 0 }}
              animate={ComeInView ? { y: 0, opacity: 1, } : { y: 80, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: ComeInView ? 1 : 0 }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to='/About'><span className="z-10 relative">Get to Know Us</span></Link>
              <span className="absolute inset-0 bg-gradient-to-r from-[#010166] via-[#010166] to-[#cc9832] group-hover:w-full w-0 transition-all duration-700 ease-in-out"></span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className='mt-20 sm:mt-[10rem]'>
        <div className='flex justify-center font-bold text-3xl sm:text-5xl mb-10 sm:mb-[3rem]'>Some Memories</div>
        <div className="Images overflow-hidden">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            loop={true}
            speed={800}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 3000, // Time in ms between slides (e.g., 3000ms = 3 seconds)
              disableOnInteraction: false, // Continue autoplay even if the user interacts with the slider
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className='bg-center bg-cover'>
                <img className='block object-contain w-full h-[20rem]' src={item.img} alt={`slide-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Home_2
