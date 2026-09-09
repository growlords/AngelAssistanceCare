import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquareHeart, 
  UserPlus, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Phone,
  Mail,
  Sparkles
} from 'lucide-react';

const Home_contact = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const onSubmit = async (data) => {
    setSubmissionError('');
    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://project-1-cz3t.onrender.com';
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        reset();
        setTimeout(() => setSubmissionSuccess(false), 5000);
      } else {
        const errText = await response.text();
        setSubmissionError(errText || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmissionError('Network error. Please try again later.');
    }
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 relative overflow-hidden scene-peach" aria-label="Contact and Consultation Form">
      {/* Radiant warm peach & aqua ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[500px] bg-radial from-[#E76F51]/12 via-[#2A9D8F]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Emotional & Storytelling Column (Warm Peach & Navy) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E76F51]/30 text-[#E76F51] text-xs font-black uppercase tracking-wider mb-6 shadow-xs">
                <MessageSquareHeart className="w-4 h-4" />
                Open Dialogue &amp; Care
              </div>

              {/* Semantic H2 */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F253E] tracking-tight leading-[1.15] mb-6">
                Learn more by contacting us and scheduling a visit with our supportive team.
              </h2>

              <p className="text-lg sm:text-xl font-bold text-[#1E7B70] mb-8 leading-relaxed">
                We create experiences that bring joy and enrich every moment for participants in Melton and across Victoria.
              </p>

              <div className="w-20 h-1.5 bg-gradient-to-r from-[#E76F51] to-[#2A9D8F] rounded-full mb-10" />

              {/* Trust Contact Card */}
              <div className="p-7 rounded-3xl bg-white/90 border border-[#0F253E]/10 shadow-md mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E76F51] to-[#F4A261] text-white flex items-center justify-center font-bold shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    {/* Semantic H3 */}
                    <h3 className="text-lg font-black text-[#0F253E]">Contact us today!</h3>
                    <p className="text-xs text-[#475569]">
                      Stay connected, because every great story begins with a conversation!
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#0F253E]/10">
                  <a
                    href="tel:0478591172"
                    className="flex items-center gap-2.5 text-xs font-bold text-[#0F253E] hover:text-[#2A9D8F] p-3 rounded-xl bg-[#FFF4ED] border border-[#E76F51]/20 transition-colors"
                    aria-label="Call Angel Assistance Care directly at 0478 591 172"
                  >
                    <Phone className="w-4 h-4 text-[#E76F51] shrink-0" />
                    <span>0478 591 172</span>
                  </a>

                  <a
                    href="mailto:enquiries@angelassistancecare.co"
                    className="flex items-center gap-2.5 text-xs font-bold text-[#0F253E] hover:text-[#2A9D8F] p-3 rounded-xl bg-[#FFF4ED] border border-[#E76F51]/20 transition-colors truncate"
                    aria-label="Email Angel Assistance Care at enquiries@angelassistancecare.co"
                  >
                    <Mail className="w-4 h-4 text-[#E76F51] shrink-0" />
                    <span className="truncate">enquiries@angelassistancecare.co</span>
                  </a>
                </div>
              </div>

              {/* Be One Of Us Button */}
              <div>
                <Link
                  to="/careers"
                  className="btn-magnetic-coral group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-black shadow-md text-white"
                  data-cursor="explore"
                  aria-label="Join our support care team in Victoria"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Be One Of Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form Card (Clean High-Contrast Form with Accessible Labels) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#0F253E]/10"
            >
              <div className="mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-[#2A9D8F]">
                  Direct Coordinator Channel
                </span>
                {/* Semantic H3 */}
                <h3 className="font-display text-2xl sm:text-4xl font-black text-[#0F253E] mt-1">
                  Get in Touch
                </h3>
              </div>

              {/* Submission Feedback */}
              {submissionSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3 text-sm font-bold" role="alert">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>You have successfully submitted. Our team will contact you shortly!</span>
                </div>
              )}

              {submissionError && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 flex items-center gap-3 text-sm font-bold" role="alert">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{submissionError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <input type="hidden" name="formType" value="contact" />

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="home-contact-name" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-1.5">
                      Name *
                    </label>
                    <input
                      id="home-contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                      {...register('username', {
                        required: "Name shouldn't be empty",
                        maxLength: 30,
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: 'Name should contain only alphabets (A-Z or a-z)',
                        },
                      })}
                    />
                    {errors.username && (
                      <p className="text-xs text-rose-600 font-bold mt-1">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="home-contact-phone" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="home-contact-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. 0478 591 172"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                      {...register('Phone_Number', {
                        required: 'Phone number is invalid',
                      })}
                    />
                    {errors.Phone_Number && (
                      <p className="text-xs text-rose-600 font-bold mt-1">
                        {errors.Phone_Number.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="home-contact-email" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="home-contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                    {...register('Email', {
                      required: 'Please fill the email field',
                    })}
                  />
                  {errors.Email && (
                    <p className="text-xs text-rose-600 font-bold mt-1">
                      {errors.Email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="home-contact-message" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="home-contact-message"
                    rows={4}
                    placeholder="How can our care team support your journey?"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner resize-y"
                    {...register('Message', {
                      required: 'Message cannot be empty',
                    })}
                  />
                  {errors.Message && (
                    <p className="text-xs text-rose-600 font-bold mt-1">
                      {errors.Message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-full font-black text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md ${
                      isSubmitting
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        : 'btn-magnetic-coral text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending your enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-5 h-5 text-white" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home_contact;