import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useForm } from "react-hook-form";
import { MdArrowForward } from "react-icons/md";
import { easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';


const Enquiries = () => {
  const [SubmissionSuccess, setSubmissionSuccess] = useState(false);
  const [cardHeight, setCardHeight] = useState('auto');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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

    try {
      const response = await fetch("https://project-1-cz3t.onrender.com/api/contact", { // Adjust to match your backend route
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send JSON data
      });

      if (response.ok) {
        setSubmissionSuccess(true); // Show success message
        setTimeout(() => setSubmissionSuccess(false), 2000);
        reset();
      } else {
        console.error("Failed to submit:", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
              backgroundPosition: 'center ',
              width: '100%'
            }}
            role="img"
            aria-label="Background image"
          />

          <div
            className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <motion.h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-wider"
              ref={ref}
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              YOUR POTENTIAL, OUR PURPOSE
            </motion.h1>
            <p className='mt-4 text-sm md:text-base w-full max-w-[35rem]'>
              Get in touch with us by completing the form below. Our friendly team will reach out to you shortly to assist with your inquiry.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[5rem] px-4">
          <form className="w-full max-w-[60rem] p-8" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex flex-col md:flex-row mb-4 gap-4">
              <div className="w-full md:w-1/2">
                <input
                  className="rounded focus:outline-none focus:ring-0 w-full"
                  placeholder="Name"
                  type="text"
                  {...register("username", { required: true, maxLength: 20, pattern: /^[A-Za-z\s]+$/ })}
                />
                <p className="w-full h-[1px] bg-[#dcdbdb] mt-5"></p>
              </div>
              <div className="w-full md:w-1/2">
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
            {SubmissionSuccess && <li className="pt-5 pl-2">You have Successfully Submitted</li>}
            <motion.div
              whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } }}
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100932.78588980011!2d144.39235493662972!3d-37.76309122635224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f3a6dc7b0159%3A0x1c045678462e3f60!2sEynesbury%20VIC%203338%2C%20Australia!5e0!3m2!1sen!2sin!4v1736178597374!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
   
  )
}

export default Enquiries;