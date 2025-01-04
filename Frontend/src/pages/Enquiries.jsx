import React from 'react'
import { assets } from '../assets/assets'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { MdArrowForward } from "react-icons/md";
import { easeInOut} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';


const Enquiries = () => {

  const [SubmissionSuccess, setSubmissionSuccess] = useState(false)
  const [cardHeight, setCardHeight] = useState('auto');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const handleTextareaChange = (e) => {
    setCardHeight(`${e.target.scrollHeight}px`);
  };

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
    setSubmissionSuccess(true); // Set success message state
    setTimeout(() => {
      setSubmissionSuccess(false); // Hide the message after 1 second
    }, 2000);
    reset();
  };

  const { ref, inView} = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  return (
    <div>
      <div className="relative h-[55vh] w-full">
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${assets.jpeg})`,
    opacity: 0.6,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left',
    width: '100%'
  }}
  role="img"
  aria-label="Background image"
/>

        <div 
          className="relative h-full flex flex-col items-center justify-center ">
        <motion.h1 className="text-5xl font-bold text-gray-800 tracking-wider"
        ref={ref}
        initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
            YOUR POTENTIAL, OUR PURPOSE
          </motion.h1>
          <p className='w-[35rem] flex flex-col text-center'>Get in touch with us by completing the form below. Our friendly team will reach out to you shortly to assist with your inquiry.</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[5rem]">
        <form className="w-[60rem] p-8 " onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <ul className="list-disc p-3">
              {errors.username?.type === "required" && (
                <li className="text-[#f93232] font-[450]">Name shouldn't be empty</li>
              )}
              {errors.username?.type === "pattern" && (
                <li className="text-[#f93232] font-[450]">Name should contain only alphabets (A-Z or a-z)</li>
              )}
              {errors.Phone_Number && (
                <li className="text-[#f93232] font-[450]">Phone number is invalid</li>
              )}
              {errors.Email?.type === "required" && (
                <li className="text-[#f93232] font-[450]">Please fill the email field</li>
              )}
              {errors.Message && (
                <li className="text-[#f93232] font-[450]">Message cannot be empty</li>
              )}
            </ul>
          </div>
          <div className="flex mb-4 gap-4">
            <div className="w-1/2">
              <input
                className="rounded focus:outline-none focus:ring-0 w-full"
                placeholder="Name"
                type="text"
                {...register("username", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/ })}
              />
              <p className="w-full h-[1px] bg-[#dcdbdb] mt-5"></p>
            </div>
            <div className="w-1/2">
              <input
                className="rounded focus:outline-none focus:ring-0 w-full"
                placeholder="Phone Number"
                type="tel"
                {...register("Phone_Number", { required: true })}
              />
              <p className="w-full h-[1px] bg-[#DCDCDB] mt-5"></p>
            </div>
          </div>

          <div className="mb-4">
            <input
              className="rounded focus:outline-none focus:ring-0 w-full"
              placeholder="Email Address"
              type="email"
              {...register("Email", { required: true })}
            />
            <p className="w-full h-[1px] bg-[#DCDCDB] mt-5"></p>
          </div>
          <div className="min-h-36">
            <textarea
              placeholder="Message"
              className="rounded focus:outline-none focus:ring-0 w-full min-h-[10rem]"
              onChange={handleTextareaChange}
              {...register("Message", { required: true })}
            ></textarea>
            <p className="w-full h-[1px] bg-[#DCDCDB]"></p>
          </div>
          {SubmissionSuccess && <li className="pt-5 pl-2">You have Succesfully Submitted</li>}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.9 }}
            className="w-full flex justify-center mt-6"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-lg px-20 py-3 rounded-full flex items-center ${isSubmitting
                  ? "bg-[#cccccc] text-[#888888] cursor-not-allowed"
                  : "bg-[#171756] text-white"
                }`}
            >
              Submit <MdArrowForward className="ml-2 text-lg" />
            </button>
          </motion.div>
        </form>
      </div>

      <div className='flex justify-center mt-[5rem]'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100932.68492457835!2d144.46584606329802!3d-37.7631652136669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f3a6dc7b0159%3A0x1c045678462e3f60!2sEynesbury%20VIC%203338%2C%20Australia!5e0!3m2!1sen!2sin!4v1735374330887!5m2!1sen!2sin"
    width="800"
    height="450"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade" // Corrected to camelCase
  ></iframe>
</div>


    </div>
  )
}

export default Enquiries
