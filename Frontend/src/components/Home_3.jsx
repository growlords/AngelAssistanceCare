import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { assets } from '../assets/assets';
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/home2.png' // Import the background image

const Home_3 = () => {
  const cards = [
    {
      img: assets.Card_icon_3,
      heading: "Supported Independent Living (SIL)",
      para: "Engaging programs that foster social connections and skill development in a safe, supportive environment."
    },
    {
      img: assets.Card_icon_2,
      heading: "Short Term Accommodation or Respite (STA)",
      para: "Engaging programs that foster social connections and skill development in a safe, supportive environment."
    },
    {
      img: assets.Card_icon_1,
      heading: "Medium Term Accommodation (MTA)",
      para: "Engaging programs that foster social connections and skill development in a safe, supportive environment."
    }
  ];

  return (
    <div 
      className='mt-40 px-4 sm:px-0'
      style={{
        backgroundImage: `linear-gradient(to top, #8fbdd3, rgb(255, 255, 255)),url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover',  // Ensures the image covers the entire screen and adjusts with screen size
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat',  // Prevents image from repeating
        width: '100%',
        height: '100%',  // Ensures the div takes up the full viewport height
      }}
    >
      <div className="heading flex w-full justify-center">
        <div className='w-full flex flex-col items-center'>
          <div className='text-5xl font-semibold mb-5 text-center'>Featured Services</div>
          <div className='text-lg max-w-[90%] sm:max-w-[45rem] text-center'>We are committed to delivering exceptional services tailored to meet each participant’s unique needs.</div>
        </div>
      </div>
      <div className="cards flex flex-wrap justify-center mt-16 gap-5">
        {cards.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className="card w-full sm:w-[19rem] h-fit border-2 border-black rounded-3xl pb-16 px-2"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: index * 0.4,
              }}
              whileHover={{
                translateY: -3,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              style={{
                perspective: 1000,
                transformOrigin: "left center",
              }}
            >
              <img src={item.img} alt={item.heading} className="w-2rem h-14 object-cover ml-9 mt-10 filter invert" />
              <div className="heading mt-3 tracking-wider p-3 font-semibold text-2xl">{item.heading}</div>
              <p className="p-3 break-words">{item.para}</p>
              <p className='w-8 md:w-[14rem] h-[1.5px] bg-[#414141] ml-8 mt-10'></p>
              <Link to='/Services'>
                <button className='mt-5 ml-8 hover:text-yellow-200 font-medium mb-6 flex'>Learn More <MdArrowForward className='ml-2 text-lg mt-1' /></button>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="OtherServices m-auto flex flex-col items-center text-center mt-28 transition-transform duration-500 ease-in-out hover:-translate-y-1">
        <div className="text-2xl font-medium mb-4 inline-block">Other Services</div>
        <div className="inline-block">
          We are dedicated to providing exceptional services that will sure fit each participant’s needs.
        </div>
        <div className="button mt-4 font-medium inline-block hover:text-yellow-300">
          <Link to='/Services'>
            <button className='flex items-center justify-center text-center'>See What Else We Offer <MdArrowForward className='ml-2 text-lg mt-1' /></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home_3