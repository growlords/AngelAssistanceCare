import React from 'react'
import { BsSearch } from "react-icons/bs";
import { assets } from '../assets/assets';
import { easeInOut, motion } from "framer-motion";
import { Link } from 'react-router-dom'


const Home_1 = () => {
  return (
    <div className='divM w-full h-screen flex flex-col lg:flex-row lg:mt-[6rem]' >
      <div className="divL flex-1 flex flex-col items-center md:items-start sm:px-10">
        <div className="mt-[6rem] px-4 sm:px-0 leading-[4vw] flex flex-col items-center sm:items-start">
          <div>
            <h1 className='uppercase text-[6vw] sm:text-[2vw] md:text-[4vw] lg:text-[1.6vw] tracking-tight sm:leading-none md:leading-tight leading-8 font-semibold'>Welcome to Angel Assist Care</h1>
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
          <p className="quote w-full sm:w-[50vw] mt-3 text-base md:text-[1.2rem] lg:text-[1rem]">Angel Assist Care is here to remind you that every journey is unique. With compassion, support, and care, we help transform challenges into triumphs for those who need it most.</p>
        </div>

        <div className="buttons flex items-center mt-6 px-4 sm:px-0">
          <div className="button">
            <motion.button className="relative text-xl px-9 py-5 bg-[#171756] text-white rounded-full overflow-hidden group "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link to='/JoinUs'><span className="z-10 relative">Be One Of Us</span></Link>
              <span className="absolute inset-0 bg-gradient-to-r from-[#010166] via-[#010166] to-[#cc9832] group-hover:w-full w-0 transition-all duration-700 ease-in-out"></span>
            </motion.button>
          </div>
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
      </div>
    </div>
  )
}

export default Home_1