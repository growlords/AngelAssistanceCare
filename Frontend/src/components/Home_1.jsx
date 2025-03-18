import React from 'react'
import { BsSearch } from "react-icons/bs";
import { assets } from '../assets/assets';
import { easeInOut, motion } from "framer-motion";
import backgroundImage from '../assets/Untitled design.png'
 // Import the next background image

const Home_1 = () => {
  return (
    <div 
      className="divM w-full h-screen flex flex-col sm:flex-row" 
      style={{
        margin: '0',
        padding: '0',
        backgroundImage: `url(${backgroundImage})`, // Set the background image without gradient
        backgroundSize: 'cover',  // Ensures the image covers the entire screen and adjusts with screen size
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat',  // Prevents image from repeating
        width: '100%',
        height: '100%',  // Ensures the div takes up the full viewport height
      }}
    >
    <div className='divM w-full h-screen flex flex-col lg:flex-row lg:mt-[6rem]' >
      <div className="divL flex-1 flex flex-col items-center md:items-start sm:px-10">
        <div className="mt-[6rem] px-4 sm:px-0 leading-[4vw] flex flex-col items-center sm:items-start">
          <div>
            <h1 className='uppercase text-[6vw] sm:text-[2vw] md:text-[4vw] lg:text-[1.6vw] tracking-tight sm:leading-none md:leading-tight leading-8 font-semibold'>Welcome to Angel Assistance Care</h1>
          </div>

          <div className='flex items-center mt-4 sm:mt-0'>
            <motion.img
              initial={{ width: 0 }}
              animate={{ width: "6rem", height: "3rem" }}
              transition={{
                ease: [0.5, 0, 0.75, 0],
                duration: 0.6,
                delay: 2.1
              }}
              className='w-[6rem] h-[3rem] mt-3 rounded-xl' src={assets.img_2} alt="" />
              <div>
            <h1 className='uppercase text-[8vw] sm:text-[4vw] tracking-tight  leading-8 sm:leading-none font-semibold lg:text-[3rem]'>Empowering Abilities</h1></div>
          </div>

          <div>
            <h1 className='uppercase text-[8vw] sm:text-[4vw] mt-5 tracking-tight leading-8 sm:leading-none font-semibold lg:text-[3rem]'>With Care and Compassion</h1>
          </div>
        </div>

        <div className='mt-5 px-4 sm:px-0'>
          <p className="quote w-full sm:w-[50vw] mt-3 text-base md:text-[1.2rem] lg:text-[1rem]">Angel Assistance Care is here to remind you that every journey is unique. With compassion, support, and care, we help transform challenges into triumphs for those who need it most.</p>
        </div>

        
      </div>
      <div className="divR flex-1 relative top-16 rounded-full flex justify-center sm:justify-end md:justify-center ">
        <motion.div className="imgB w-[275px] h-[275px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover rounded-full overflow-hidden flex justify-center items-center"
          animate={{
            scale: [1, 1.1, 1.1, 1],
            rotate: [180, 180, 0, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.5, 1],
            repeat: 0
          }}>
          <img
            className="w-full h-full"
            src={assets.img_1}
            alt="Image"
          />
        </motion.div>
        <motion.div 
          className='absolute top-[12rem] right-[4.5rem] sm:top-[18rem] sm:right-[3rem] md:top-[17rem] md:right-[10rem] lg:top-[21rem] lg:right-[4.5rem]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
        >
          <img 
            className='w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem]' 
            src={assets.ndis} 
            alt="not found" 
          />
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default Home_1