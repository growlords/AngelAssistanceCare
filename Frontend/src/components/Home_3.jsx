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
          img: assets.Card_icon_6,
          heading: "Assistance with travel/transport arrangements",
          para: "We arrange and provide transportation for our participants, facilitating their participation in community, social, economic, and daily life activities.",
        },
        {
              img: assets.Card_icon_4,
              heading: "Assistance with daily personal activities",
              para: "We assist with daily living activities like personal hygiene, meal preparation, and mobility, enabling our participants to live as independently as possible both at home and within their community.",
            },
        {
          img: assets.Card_icon_9,
          heading: "Group and Centre- based Activities",
          para: "We encourage and support our participants in engaging in social and recreational activities within group settings, allowing them to meet new people, form friendships, acquire new skills, enhance essential abilities, and enjoy themselves.",
        }
  ];

  const cardRefs = cards.map(() => useInView({ triggerOnce: true, threshold: 0.3 }));

  const { ref: CareRef, inView: CareinView } = useInView({
      triggerOnce: true, // Animation will trigger one time
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    });

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-[12rem] md:px-[2rem] items-center justify-center">
      {cards.map((service, index) => {
        const { ref, inView } = cardRefs[index];

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, transform: "rotateY(130deg)" }}
            animate={inView ? { opacity: 1, transform: "rotateY(0deg)" } : {}}
            transition={{
              delay: index * 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05, y: 2 }}
            className="bg-white p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 w-full sm:w-[20rem] min-h-[30rem] h-fit border-2 rounded-3xl px-2 mb-4"
            style={{ backgroundColor: '#D2E5EE' }}
          >
            <img src={service.img} alt="error" className="w-2rem h-12 object-cover ml-5 mt-5" />
            <h3 className="heading mt-5 p-3 font-semibold text-2xl min-h-[8rem]">{service.heading}</h3>
            <p className="p-3 break-words" style={{ minHeight: "calc(100% - 8rem)" }}>{service.para}</p>
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