import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { FiFacebook, FiYoutube, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { MdArrowForward } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import backgroundImage from '../assets/home2.png' ;

const NavEnd = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const isMobile = window.innerWidth < 640;


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

  const { ref: Ref, inView: ComeInView } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);

    try {
      const response = await fetch("https://project-1-cz3t.onrender.com/api/subscription", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send JSON data
      });

      console.log("Form Data:", data);

      setSubmissionSuccess(true); // Show success message
      setTimeout(() => setSubmissionSuccess(false), 2000);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (

    <div className='sm:px-0 '   style={{
      backgroundImage: ` linear-gradient(to bottom, #dde5f0, rgb(255, 255, 255)),url(${backgroundImage})`, // Add gradient effect on background image
      backgroundSize: 'cover',  // Ensures the image covers the entire screen and adjusts with screen size
      backgroundPosition: 'center',  // Centers the image
      backgroundRepeat: 'no-repeat',  // Prevents image from repeating
      width: '100%',
      height: '100%',  // Ensures the div takes up the full viewport height
    }}>
       <div className='pt-[5rem]' >
      <div className="top ">
        <div className='flex flex-col items-center gap-4 mb-5'>
          <div className="img"><img className='w-[8rem] h-[8rem]' src={assets.favicon} alt="network error" /></div>
          <div className='text-4xl sm:text-6xl font-semibold'>Contact Details</div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between mt-24 gap-10 sm:gap-0 px-[1] px-[4rem]'>
          <div className='gap-4 flex flex-col items-center'>
            <div className=''><img className='w-[2rem] h-[2rem]' src={assets.addressIcon} alt="Network Error" /></div>
            <div className='font-semibold text-xl'>Address</div>
            <div className='text-base'>Melton, Victoria 3338 Australia</div>
          </div>

          <div className='gap-4 flex flex-col items-center'>
            <div className=''><FiPhone className='w-[2rem] h-[2rem]' /> </div>
            <div className='font-semibold text-xl'>Contact</div>
            <div className='text-base font-medium'>0478 591 172</div>
          </div>

          <div className='gap-4 flex flex-col items-center'>
            <div className=''><TfiEmail className='w-[2rem] h-[2rem]' /></div>
            <div className='font-semibold text-xl'>Email</div>
            <div className='text-base'>enquiries@angelassistancecare.co</div>
          </div>
        </div>

        {/* <motion.div className='flex flex-col items-center mt-[4rem]'
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <ul className='flex gap-[1.2rem] text-2xl'>
            <li className='bg-[#a4a4c7] p-3 text-3xl rounded-3xl w-[4rem] h-[4rem] flex justify-center items-center'><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FiFacebook /></a></li>
            <li className='bg-[#a4a4c7] p-3 text-3xl rounded-3xl w-[4rem] h-[4rem] flex justify-center items-center'><a href="https://www.instagram.com/rizzz.raman?igsh=MWZhanNtczFsbG4y&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li className='bg-[#a4a4c7] p-3 text-3xl rounded-3xl w-[4rem] h-[4rem] flex justify-center items-center'><a href="https://www.youtube.com/watch?v=Kd57YHWqrsI&list=RDB0f4xyZSfvU&index=27" target="_blank" rel="noopener noreferrer"><FiYoutube /></a></li>
          </ul>
        </motion.div> */}
      </div>

      <div className="center_1 gap-4 flex flex-col justify-center items-center mt-14">
  <motion.div className="img"
    ref={Ref}
    initial={{ x: isMobile ? 50 : 100, opacity: 0 }}
    animate={ComeInView ? { x: 0, opacity: 1 } : { x: isMobile ? 50 : 100, opacity: 0 }}
    transition={{ ease: "easeInOut", duration: isMobile ? 0.6 : 1 }}
  >
    <img className='w-[10rem] h-[4rem]' src={assets.img_18} alt="" />
  </motion.div>

  <motion.div className='px-4 sm:px-[5rem] md:px-[10rem] lg:px-[15rem] text-center text-lg font-medium'
    ref={Ref}
    initial={{ x: isMobile ? -100 : -350, opacity: 0 }}
    animate={ComeInView ? { x: 0, opacity: 1 } : { x: isMobile ? -100 : -350, opacity: 0 }}
    transition={{ ease: "easeInOut", duration: isMobile ? 0.9 : 1.5 }}
  >
    Angel Assistance Care acknowledges the traditional owners of the land upon which we live and work, and we pay our respects to the elders both past and present.
  </motion.div>
</div>


      <div className="center_2 mt-14 sm:mt-[15rem] flex flex-col md:flow-col lg:flex-row items-center">
        <div className='left w-full sm:w-auto'>
          <img className='h-auto lg:h-[35rem] w-full lg:w-[45rem] ' src={assets.img_19} alt="" />
        </div>
        <div className="right mt-10 sm:mt-[5rem] flex flex-col gap-3 sm:ml-[4rem] justify-center items-center sm:items-start">
          <div className='text-lg font-medium tracking-widest'>STAY UPDATED!</div>
          <div className='text-4xl font-medium text-center sm:text-left'>SUBSCRIBE TO US</div>
          <div className='leading-7 w-full sm:w-[35rem] text-center sm:text-left px-5'>Make sure you stay updated with all our programs, events and services. Enter your email address to subscribe to us.</div>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full sm:w-auto'>
            {errors.Email?.type === "required" && (
              <li className="text-[#f93232] font-[450]">Please fill the email Address</li>
            )}
            <div className='mb-4 px-5'>
              <input className='rounded focus:outline-none focus:ring-0 w-full' placeholder='Email Address' type="email" {...register("Email", { required: true })} />
              <p className='w-full h-[1px] bg-[#DCDCDB] mt-5'></p>
            </div>
            {submissionSuccess && <li className='pt-5 pl-2'>You Will Be Updated From Now On</li>}
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className='w-full flex justify-center mt-6'>
              <button
                type='submit'
                disabled={isSubmitting}
                className={`text-lg px-20 py-3 rounded-full flex items-center ${isSubmitting
                  ? "bg-[#cccccc] text-[#888888] cursor-not-allowed"
                  : "bg-[#171756] text-white"
                  }`}
              >
                Submit <MdArrowForward className='ml-2 text-lg' />
              </button>
            </motion.div>
          </form>
        </div>
      </div>

      <div className="bottom flex justify-center items-center p-10 sm:p-[5rem]">
        <div className='flex flex-col gap-3 font-light text-center'>
          <p>©AngelAssistanceCare 2024. All Rights Reserved.</p>
          <p>Website by Sahil | Raman | +91 9034136066 | +91 8505002058</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavEnd;