import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const JoinUs = () => {
  const [SubmissionSuccess, setSubmissionSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
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
    await delay(2);

    try {
      // Prepare FormData
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("LastName", data.LastName);
      formData.append("Location", data.Location);
      formData.append("Email", data.Email);
      formData.append("Phone_Number", data.Phone_Number);
      formData.append("file", data.file[0]); // File input is an array, use the first element

      const response = await fetch("http://localhost:3000/api/send-mail", {
        method: "POST",
        body: formData, // Send FormData directly
      });

      const res = await response.text();

      setSubmissionSuccess(true); // Show success message
      setTimeout(() => setSubmissionSuccess(false), 2000);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      clearErrors("file"); // Clear any existing file errors
      if (file.type !== "application/pdf") {
        setError("file", {
          type: "manual",
          message: "Please upload a valid PDF file",
        });
      }
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger one time
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  return (
    <div>
      <div className="relative h-[55vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${assets.img_bg_2})`,
            opacity: 0.8,
          }}
          role="img"
          aria-label="Background image"
        />
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            ref={ref}
            className="w-full max-w-[45rem] text-3xl sm:text-5xl font-bold text-gray-800 tracking-wider text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            WE WOULD LOVE TO HAVE YOU ON OUR TEAM
          </motion.h1>
          <p className="w-full max-w-[35rem] text-center mt-4">
            Your skills and passion would be an invaluable addition.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-[5rem] px-4">
        <div className="w-full max-w-[45rem] text-2xl sm:text-5xl items-center text-center font-medium tracking-wide">
          Fill up our form below
        </div>
      </div>

      <div className="flex items-center justify-center px-4">
        <form className="w-full max-w-[40rem] p-8" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="formType" value="cv" />
          <div className="mb-5"></div>
          <div className="flex flex-col gap-5">
            <div className="w-full">
              <div className="font-bold text-xs tracking-wide">Name</div>
              <input
                className="rounded focus:outline-none focus:ring-0 w-full bg-slate-200 p-2"
                type="text"
                {...register("username", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors.username?.type === "required" && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  Name shouldn't be empty
                </p>
              )}
              {errors.username?.type === "pattern" && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  Name should contain only alphabets (A-Z or a-z)
                </p>
              )}
            </div>

            <div className="w-full">
              <div className="font-bold text-xs tracking-wide">Last Name</div>
              <input
                className="rounded focus:outline-none focus:ring-0 w-full bg-slate-200 p-2"
                type="text"
                {...register("LastName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors.LastName?.type === "required" && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  Last Name shouldn't be empty
                </p>
              )}
              {errors.LastName?.type === "pattern" && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  Last Name should contain only alphabets (A-Z or a-z)
                </p>
              )}
            </div>

            <div className="w-full">
              <div className="font-bold text-xs tracking-wide">Location</div>
              <input
                className="rounded focus:outline-none focus:ring-0 w-full bg-slate-200 p-2"
                type="text"
                {...register("Location", { required: true, maxLength: 20 })}
              />
              {errors.Location?.type === "required" && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  Location shouldn't be empty
                </p>
              )}
            </div>

            <div className="w-full">
              <div className="font-bold text-xs tracking-wide">Email Address</div>
              <input
                className="rounded focus:outline-none focus:ring-0 w-full bg-slate-200 p-2"
                type="email"
                {...register("Email", { required: true })}
              />
              {errors.Email?.type === "required" && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  Please fill the email field
                </p>
              )}
            </div>

            <div className="w-full">
              <div className="font-bold text-xs tracking-wide">Phone Number</div>
              <input
                className="rounded focus:outline-none focus:ring-0 w-full bg-slate-200 p-2"
                type="tel"
                {...register("Phone_Number", { required: true })}
              />
              {errors.Phone_Number && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  Phone number is invalid
                </p>
              )}
            </div>

            <div className="w-full">
              <div className="font-bold text-xs tracking-wide">Upload CV File</div>
              <input
                type="file"
                accept=".pdf"
                className="mt-1"
                {...register("file", { 
                  required: "Please Upload your CV",
                })}
                onChange={handleFileChange}
              />
              {errors.file && (
                <p className="text-[#f93232] font-[450] bg-red-50 mt-2">
                  {errors.file.message}
                </p>
              )}
            </div>

          </div>
          {SubmissionSuccess && (
            <li className="pt-5 pl-2">You have Successfully Submitted</li>
          )}
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
              className={`text-lg px-20 py-3 rounded-full flex items-center ${
                isSubmitting
                  ? "bg-[#cccccc] text-[#888888] cursor-not-allowed"
                  : "bg-[#171756] text-white"
              }`}
            >
              Submit <MdArrowForward className="ml-2 text-lg" />
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;