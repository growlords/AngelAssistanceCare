import React, { useState } from 'react';
import { IoIosContacts } from "react-icons/io";
import { useForm } from "react-hook-form";
import { MdArrowForward } from "react-icons/md";
import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home_contact = () => {
  const [cardHeight, setCardHeight] = useState('auto');
  const [SubmissionSuccess, setSubmissionSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(1.5);

    try {
      const response = await fetch("http://localhost:3000/api/contact", { // Adjust to match your backend route
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

  const handleTextareaChange = (e) => {
    setCardHeight(`${e.target.scrollHeight}px`);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: Ref, inView: ComeInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className='flex flex-col sm:flex-row mt-36 px-4 sm:px-0'>
      <div className='left w-full sm:w-[45rem] sm:ml-36'>
        <motion.div ref={ref} className='text-4xl font-medium text-center sm:text-left'
          initial={{ x: -80, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -180, opacity: 0 }}
          transition={{ duration: 1.2, ease: easeInOut }}
        >
          Learn more by contacting us and scheduling a visit with our supportive team.
        </motion.div>

        <div className='mt-10 sm:mt-28 text-lg'>
          We create experiences that bring joy and enrich every moment.
        </div>
        <p className='w-8 md:w-[10rem] h-[1.7px] bg-[#414141] mt-10'></p>
        <div className="logo mt-10 sm:mt-24 flex items-center">
          <IoIosContacts className="text-7xl" />
          <div className="flex flex-col justify-center ml-10">
            <div className="text-lg font-semibold">Contact us today!</div>
            <div className="text-sm">Stay connected, because every great story begins with a conversation!</div>
          </div>
        </div>
      </div>
      <div className='right w-full sm:w-auto'>
        <motion.div ref={Ref}
          className="card mt-5 w-full sm:w-[22rem] mx-auto"
          initial={{ y: "18rem", opacity: 0 }}
          animate={ComeInView ? { y: 0, opacity: 1 } : { y: "18rem", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ height: cardHeight, border: '2px solid black', borderRadius: '1.5rem', padding: '1rem' }}
        >
          <div className='text-center font-semibold text-2xl mt-3 tracking-tighter mb-5'>Get in Touch</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="formType" value="contact" />
            <div className='mb-5'>
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
            <div className='flex flex-col sm:flex-row mb-4 gap-4'>
              <div className='w-full'>
                <input className='rounded focus:outline-none focus:ring-0 w-full' placeholder="Name" type="text" {...register("username", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/ })} />
                <p className='w-full h-[1px] bg-[#dcdbdb] mt-5'></p>
              </div>
              <div className='w-full'>
                <input className='rounded focus:outline-none focus:ring-0 w-full' placeholder='Phone Number' type="tel" {...register("Phone_Number", { required: true })} />
                <p className='w-full h-[1px] bg-[#DCDCDB] mt-5'></p>
              </div>
            </div>
            <div className='mb-4'>
              <input className='rounded focus:outline-none focus:ring-0 w-full' placeholder='Email Address' type="email" {...register("Email", { required: true })} />
              <p className='w-full h-[1px] bg-[#DCDCDB] mt-5'></p>
            </div>
            <div className='min-h-36'>
              <textarea placeholder='Message' className='rounded focus:outline-none focus:ring-0 w-full min-h-[10rem]' onChange={handleTextareaChange} {...register("Message", { required: true })}></textarea>
              <p className='w-full h-[1px] bg-[#DCDCDB]'></p>
            </div>
            {SubmissionSuccess && <li className='pt-5 pl-2'>You have successfully submitted</li>}
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
        </motion.div>
      </div>
    </div>
  );
}

export default Home_contact;