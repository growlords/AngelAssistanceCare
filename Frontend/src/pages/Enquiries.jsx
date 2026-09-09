import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Sparkles,
  ShieldCheck 
} from 'lucide-react';
import SEO from '../components/SEO';

const Enquiries = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
        const text = await response.text();
        setSubmissionError(text || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmissionError('Network error. Please try again later.');
    }
  };

  const enquiriesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.angelassistancecare.com.au/enquiries#webpage",
        "url": "https://www.angelassistancecare.com.au/enquiries",
        "name": "Contact & Enquiries | Angel Assistance Care Australia",
        "description": "Contact Angel Assistance Care for NDIS disability support enquiries in Victoria. Call 0478 591 172 or email enquiries@angelassistancecare.co.",
        "isPartOf": {
          "@id": "https://www.angelassistancecare.com.au/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.angelassistancecare.com.au/enquiries#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.angelassistancecare.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Enquiries & Contact",
            "item": "https://www.angelassistancecare.com.au/enquiries"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full pt-20">
      <SEO
        title="Contact & Enquiries | Angel Assistance Care Australia"
        description="Get in touch with Angel Assistance Care for NDIS disability support enquiries in Melton & Victoria. Call 0478 591 172 or email our coordinator team."
        keywords="Contact Angel Assistance Care, NDIS enquiries Victoria, disability support Melton contact, Angel Assistance phone, NDIS care consultation"
        canonical="/enquiries"
        jsonLd={enquiriesJsonLd}
      />
      
      {/* SCENE 01: Hero with Authentic `img_bg_6` (Single Clear H1) */}
      <section ref={heroRef} className="relative py-28 lg:py-36 overflow-hidden scene-hero" aria-label="Contact and Enquiries Hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#2A9D8F]/30 text-xs font-black uppercase tracking-widest text-[#2A9D8F] mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
            Connect With Our Team Across Victoria
          </motion.div>

          {/* Semantic Single H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-7xl font-black tracking-tight text-[#0F253E]"
          >
            Your Potential, Our Purpose
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-[#475569] leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Get in touch with us by completing the form below. Our friendly team will reach out to you promptly to assist with your inquiry.
          </motion.p>

          {/* Hero Feature Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-4xl mx-auto aspect-[21/9]"
          >
            <img
              src={assets.img_bg_6}
              alt="Angel Assistance Care contact and consultation team ready to assist NDIS participants in Victoria"
              width="896"
              height="384"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* SCENE 02: Main Form & Contact Hub (Soft Healthcare Aqua Environment) */}
      <section ref={formRef} className="py-24 lg:py-36 scene-aqua relative" aria-label="Enquiry Form and Direct Contact Channels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#1E7B70] bg-[#EEF7F7] border border-[#2A9D8F]/30 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
                  Reach Out Directly
                </span>
                {/* Semantic H2 */}
                <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0F253E]">
                  We're Here For You
                </h2>
                <p className="text-[#475569] text-sm sm:text-base mt-2 leading-relaxed font-medium">
                  Have a question regarding NDIS plans, supported independent living, or social activities? We respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Phone Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#0F253E]/10 shadow-sm flex items-start gap-4 hover:border-[#2A9D8F] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF7F7] text-[#2A9D8F] border border-[#2A9D8F]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    {/* Semantic H3 */}
                    <h3 className="font-black text-[#0F253E] text-base">Phone Enquiries</h3>
                    <p className="text-xs text-[#64748B] mb-1">Direct participant support</p>
                    <a
                      href="tel:0478591172"
                      className="text-base font-black text-[#2A9D8F] hover:underline"
                      aria-label="Call 0478 591 172"
                    >
                      0478 591 172
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#0F253E]/10 shadow-sm flex items-start gap-4 hover:border-[#E76F51] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF4ED] text-[#E76F51] border border-[#E76F51]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    {/* Semantic H3 */}
                    <h3 className="font-black text-[#0F253E] text-base">Email Enquiries</h3>
                    <p className="text-xs text-[#64748B] mb-1">Send us an enquiry anytime</p>
                    <a
                      href="mailto:enquiries@angelassistancecare.co"
                      className="text-sm font-bold text-[#E76F51] hover:underline break-all"
                      aria-label="Email enquiries@angelassistancecare.co"
                    >
                      enquiries@angelassistancecare.co
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#0F253E]/10 shadow-sm flex items-start gap-4 hover:border-[#2A9D8F] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF7F7] text-[#2A9D8F] border border-[#2A9D8F]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    {/* Semantic H3 */}
                    <h3 className="font-black text-[#0F253E] text-base">Headquarters</h3>
                    <p className="text-xs text-[#64748B] mb-1">Victoria Support Hub</p>
                    <p className="text-sm text-[#0F253E] font-bold">
                      Melton, Victoria 3338 Australia
                    </p>
                  </div>
                </div>

                {/* Response Guarantee Pill */}
                <div className="p-4 rounded-2xl bg-white border border-[#E76F51]/30 shadow-xs flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#E76F51] shrink-0" />
                  <span className="text-xs font-black text-[#0F253E]">
                    NDIS Verified Provider with rapid coordinator response.
                  </span>
                </div>

              </div>
            </div>

            {/* Right: Contact Form (High Contrast Light Card with Accessible Labels) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0F253E]/10 shadow-xl"
              >
                {/* Semantic H3 */}
                <h3 className="font-display text-2xl sm:text-4xl font-black text-[#0F253E] mb-2">
                  Send Your Enquiry
                </h3>
                <p className="text-[#64748B] text-sm mb-8 font-medium">
                  Fill out the form details below and our coordinator team will contact you.
                </p>

                {submissionSuccess && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-black flex items-center gap-3" role="alert">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>You have successfully submitted your enquiry. We will be in touch shortly!</span>
                  </div>
                )}

                {submissionError && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-sm font-black flex items-center gap-3" role="alert">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>{submissionError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                        Name *
                      </label>
                      <input
                        id="enquiry-name"
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
                        <p className="text-xs text-rose-600 font-bold mt-1.5">
                          {errors.username.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="e.g. 0478 591 172"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                        {...register('Phone_Number', {
                          required: 'Phone number is invalid',
                        })}
                      />
                      {errors.Phone_Number && (
                        <p className="text-xs text-rose-600 font-bold mt-1.5">
                          {errors.Phone_Number.message}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      autoComplete="email"
                      placeholder="example@mail.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                      {...register('Email', {
                        required: 'Please fill the email field',
                      })}
                    />
                    {errors.Email && (
                      <p className="text-xs text-rose-600 font-bold mt-1.5">
                        {errors.Email.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={5}
                      placeholder="Tell us about the participant's goals or questions you have..."
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner resize-y"
                      {...register('Message', {
                        required: 'Message cannot be empty',
                      })}
                    />
                    {errors.Message && (
                      <p className="text-xs text-rose-600 font-bold mt-1.5">
                        {errors.Message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-full font-black text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md ${
                        isSubmitting
                          ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                          : 'btn-magnetic-coral text-white'
                      }`}
                      aria-label="Submit your NDIS enquiry"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
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

          {/* Authentic Google Map Embed Card (Clean White Frame) */}
          <div className="mt-20">
            {/* Semantic H2 */}
            <h2 className="text-xs font-black uppercase tracking-widest text-[#2A9D8F] text-center mb-4">
              Our Location in Melton, Victoria
            </h2>
            <div className="rounded-3xl overflow-hidden p-3 sm:p-4 shadow-xl bg-white border border-[#0F253E]/10">
              <div className="rounded-2xl overflow-hidden aspect-[21/9] min-h-[400px]">
                <iframe
                  title="Angel Assistance Care Victoria Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100932.78588980011!2d144.39235493662972!3d-37.76309122635224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f3a6dc7b0159%3A0x1c045678462e3f60!2sEynesbury%20VIC%203338%2C%20Australia!5e0!3m2!1sen!2sin!4v1736178597374!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Enquiries;