import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Loader2, 
  HeartHandshake,
  Clock,
  GraduationCap
} from 'lucide-react';
import SEO from '../components/SEO';

const JoinUs = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      clearErrors('file');
      if (file.type !== 'application/pdf') {
        setError('file', {
          type: 'manual',
          message: 'Please upload a valid PDF file',
        });
        setSelectedFileName('');
      } else {
        setSelectedFileName(file.name);
      }
    } else {
      setSelectedFileName('');
    }
  };

  const onSubmit = async (data) => {
    setSubmissionError('');
    try {
      const formData = new FormData();
      formData.append('username', data.username);
      formData.append('LastName', data.LastName);
      formData.append('Location', data.Location);
      formData.append('Email', data.Email);
      formData.append('Phone_Number', data.Phone_Number);
      if (data.file && data.file[0]) {
        formData.append('file', data.file[0]);
      }

      const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://project-1-cz3t.onrender.com';
      const response = await fetch(`${apiBase}/api/send-mail`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setSelectedFileName('');
        reset();
        setTimeout(() => setSubmissionSuccess(false), 5000);
      } else {
        const text = await response.text();
        setSubmissionError(text || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting CV:', error);
      setSubmissionError('Network error. Please try again later.');
    }
  };

  const careersJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.angelassistancecare.com.au/careers#webpage",
        "url": "https://www.angelassistancecare.com.au/careers",
        "name": "Careers in Disability Support | Angel Assistance Care Australia",
        "description": "Join our compassionate disability support worker team in Victoria. Enjoy flexible rosters, empathetic culture, and professional NDIS career development.",
        "isPartOf": {
          "@id": "https://www.angelassistancecare.com.au/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.angelassistancecare.com.au/careers#breadcrumbs",
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
            "name": "Careers",
            "item": "https://www.angelassistancecare.com.au/careers"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full pt-20">
      <SEO
        title="Careers in Disability Support | Angel Assistance Care Australia"
        description="Join Angel Assistance Care as a dedicated disability support worker or coordinator in Melton & Victoria. Meaningful work, flexible rosters, and ongoing NDIS training."
        keywords="Careers Angel Assistance Care, disability support worker jobs Victoria, NDIS employment Melton, healthcare support jobs Australia, care careers Victoria"
        canonical="/careers"
        jsonLd={careersJsonLd}
      />
      
      {/* SCENE 01: Hero with Authentic `img_bg_5` (Single Clear H1) */}
      <section ref={heroRef} className="relative py-28 lg:py-36 overflow-hidden scene-hero" aria-label="Careers Hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#2A9D8F]/30 text-xs font-black uppercase tracking-widest text-[#2A9D8F] mb-6 shadow-xs"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#E76F51]" />
            Careers at Angel Assistance Care Australia
          </motion.div>

          {/* Semantic Single H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-7xl font-black tracking-tight text-[#0F253E]"
          >
            Careers in Disability Support
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-[#475569] leading-relaxed font-medium max-w-2xl mx-auto"
          >
            We would love to have you on our team. Your skills, empathy, and passion will be an invaluable addition to participants across Victoria.
          </motion.p>

          {/* Hero Feature Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-4xl mx-auto aspect-[21/9]"
          >
            <img
              src={assets.img_bg_5}
              alt="Angel Assistance Care team members collaborating on participant support in Victoria"
              width="896"
              height="384"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* SCENE 02: Career Application Portal (Warm Peach / Human Touch Environment) */}
      <section ref={formRef} className="py-24 lg:py-36 scene-peach relative" aria-label="Career Application Portal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Why Work With Us */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#E76F51] bg-[#FFF4ED] border border-[#E76F51]/30 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
                  Join Our Mission
                </span>
                {/* Semantic H2 */}
                <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0F253E]">
                  Make a Meaningful Impact
                </h2>
                <p className="text-[#475569] text-sm sm:text-base mt-2 leading-relaxed font-medium">
                  We are looking for dedicated support workers, lifestyle coordinators, and caring individuals who want to uplift lives across Victoria.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-[#0F253E]/10 shadow-sm flex items-start gap-4 hover:border-[#E76F51] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] text-[#E76F51] border border-[#E76F51]/20 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    {/* Semantic H3 */}
                    <h3 className="font-black text-[#0F253E] text-base">Empathetic Culture</h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed font-medium">
                      A respectful, supportive environment that values every team member’s voice and well-being.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#0F253E]/10 shadow-sm flex items-start gap-4 hover:border-[#2A9D8F] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF7F7] text-[#2A9D8F] border border-[#2A9D8F]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    {/* Semantic H3 */}
                    <h3 className="font-black text-[#0F253E] text-base">Flexible Rosters</h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed font-medium">
                      Shift schedules designed to support your work-life balance, family commitments, and lifestyle.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#0F253E]/10 shadow-sm flex items-start gap-4 hover:border-[#E76F51] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] text-[#E76F51] border border-[#E76F51]/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    {/* Semantic H3 */}
                    <h3 className="font-black text-[#0F253E] text-base">Professional Development</h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed font-medium">
                      Ongoing NDIS training, first aid certifications, and specialised disability care accreditation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form (High Contrast Light Card with Accessible Labels) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0F253E]/10 shadow-xl"
              >
                {/* Semantic H3 */}
                <h3 className="font-display text-2xl sm:text-4xl font-black text-[#0F253E] mb-2">
                  Apply to Join Our Team
                </h3>
                <p className="text-[#64748B] text-sm mb-8 font-medium">
                  Please provide your details below and attach your CV in PDF format.
                </p>

                {submissionSuccess && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-black flex items-center gap-3" role="alert">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>You have successfully submitted your application. Our recruitment team will review your CV!</span>
                  </div>
                )}

                {submissionError && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-sm font-black flex items-center gap-3" role="alert">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>{submissionError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <input type="hidden" name="formType" value="cv" />

                  {/* Name and Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="careers-firstname" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                        First Name *
                      </label>
                      <input
                        id="careers-firstname"
                        type="text"
                        autoComplete="given-name"
                        placeholder="First name"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                        {...register('username', {
                          required: "First name shouldn't be empty",
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

                    <div>
                      <label htmlFor="careers-lastname" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                        Last Name *
                      </label>
                      <input
                        id="careers-lastname"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Last name"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                        {...register('LastName', {
                          required: "Last name shouldn't be empty",
                          maxLength: 30,
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: 'Last name should contain only alphabets (A-Z or a-z)',
                          },
                        })}
                      />
                      {errors.LastName && (
                        <p className="text-xs text-rose-600 font-bold mt-1.5">
                          {errors.LastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location and Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="careers-location" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                        Location / Suburb *
                      </label>
                      <input
                        id="careers-location"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="e.g. Melton, Victoria"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0F253E]/15 bg-[#FBF9F5] text-[#0F253E] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white transition-all shadow-inner"
                        {...register('Location', {
                          required: "Location shouldn't be empty",
                          maxLength: 40,
                          pattern: {
                            value: /^[A-Za-z0-9\s,]+$/,
                            message: 'Please enter a valid suburb or city',
                          },
                        })}
                      />
                      {errors.Location && (
                        <p className="text-xs text-rose-600 font-bold mt-1.5">
                          {errors.Location.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="careers-phone" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="careers-phone"
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

                  {/* Email Address */}
                  <div>
                    <label htmlFor="careers-email" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="careers-email"
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

                  {/* File Upload (PDF) */}
                  <div>
                    <label htmlFor="careers-cv-file" className="block text-xs font-black uppercase tracking-wider text-[#0F253E] mb-2">
                      Upload Resume / CV (PDF format) *
                    </label>
                    <div className="relative border-2 border-dashed border-[#0F253E]/20 hover:border-[#2A9D8F] rounded-2xl p-6 text-center bg-[#FBF9F5] hover:bg-white transition-all">
                      <input
                        id="careers-cv-file"
                        type="file"
                        accept=".pdf"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        {...register('file', {
                          required: 'Please upload your CV in PDF format',
                        })}
                        onChange={handleFileChange}
                        aria-label="Upload your resume in PDF format"
                      />
                      <div className="flex flex-col items-center pointer-events-none">
                        <UploadCloud className="w-12 h-12 text-[#2A9D8F] mb-2" />
                        <span className="text-sm font-black text-[#0F253E]">
                          {selectedFileName ? (
                            <span className="flex items-center gap-1.5 text-emerald-700 font-black">
                              <FileText className="w-5 h-5" />
                              {selectedFileName}
                            </span>
                          ) : (
                            'Click or drag your CV here (PDF only)'
                          )}
                        </span>
                        <span className="text-xs text-[#64748B] font-medium mt-1">Maximum file size 10MB</span>
                      </div>
                    </div>
                    {errors.file && (
                      <p className="text-xs text-rose-600 font-bold mt-1.5">
                        {errors.file.message}
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
                      aria-label="Submit career application"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
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

    </div>
  );
};

export default JoinUs;