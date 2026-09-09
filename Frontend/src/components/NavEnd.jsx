import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';

const NavEnd = () => {
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { ref: footerRef } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = async (data) => {
    setSubscriptionError('');
    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://project-1-cz3t.onrender.com';
      const response = await fetch(`${apiBase}/api/subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubscriptionSuccess(true);
        reset();
        setTimeout(() => setSubscriptionSuccess(false), 5000);
      } else {
        setSubscriptionError('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscriptionError('Network error. Please try again later.');
    }
  };

  return (
    <footer ref={footerRef} className="relative scene-footer text-white pt-24 pb-12 overflow-hidden border-t border-white/15" aria-label="Site Footer and Contact Information">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/4 w-[45vw] h-[300px] bg-[#2A9D8F]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[35vw] h-[250px] bg-[#E76F51]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Contact Details Cards */}
        <div className="pb-16 border-b border-white/10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-white p-2.5 shadow-lg border border-white/30 mb-4 flex items-center justify-center">
              <img
                src={assets.favicon}
                alt="Angel Assistance Care Australian Disability Support Services Logo"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
              Contact Details &amp; Location
            </h2>
            <p className="text-sm text-slate-200 mt-2 font-medium">
              We are always here to listen, support, and guide your journey across Victoria, Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Address */}
            <div className="p-7 rounded-3xl bg-white/10 backdrop-blur-md flex flex-col items-center text-center border border-white/15 hover:border-[#2A9D8F]/50 transition-all duration-300 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-[#2A9D8F]/20 border border-[#2A9D8F]/40 flex items-center justify-center mb-4 text-[#52B788]">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-white mb-1">Victoria Support Hub</h3>
              <p className="text-sm text-slate-200 font-medium">Melton, Victoria 3338 Australia</p>
            </div>

            {/* Contact */}
            <div className="p-7 rounded-3xl bg-white/10 backdrop-blur-md flex flex-col items-center text-center border border-white/15 hover:border-[#E76F51]/50 transition-all duration-300 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-[#E76F51]/20 border border-[#E76F51]/40 flex items-center justify-center mb-4 text-[#F4A261]">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-white mb-1">Direct Hotline</h3>
              <a
                href="tel:0478591172"
                className="text-sm text-white font-bold hover:text-[#F4A261] transition-colors"
                aria-label="Call 0478 591 172"
              >
                0478 591 172
              </a>
            </div>

            {/* Email */}
            <div className="p-7 rounded-3xl bg-white/10 backdrop-blur-md flex flex-col items-center text-center border border-white/15 hover:border-[#2A9D8F]/50 transition-all duration-300 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-[#2A9D8F]/20 border border-[#2A9D8F]/40 flex items-center justify-center mb-4 text-[#52B788]">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-white mb-1">Email Coordinator</h3>
              <a
                href="mailto:enquiries@angelassistancecare.co"
                className="text-sm text-white font-bold hover:text-[#52B788] transition-colors"
                aria-label="Email enquiries@angelassistancecare.co"
              >
                enquiries@angelassistancecare.co
              </a>
            </div>

          </div>
        </div>

        {/* Traditional Owners Acknowledgement Section */}
        <div className="py-14 border-b border-white/10">
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl flex flex-col sm:flex-row items-center gap-8">
            <div className="w-32 sm:w-44 shrink-0 flex items-center justify-center bg-white/10 p-3 rounded-2xl border border-white/15">
              <img
                src={assets.img_18}
                alt="Australian Aboriginal and Torres Strait Islander Indigenous recognition art plaque"
                width="176"
                height="100"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain filter drop-shadow-md"
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#F4A261] block mb-1">
                Acknowledgement of Country
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                Angel Assistance Care acknowledges the traditional owners of the land upon which we live and work across Australia, and we pay our respects to the elders both past and present.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Split */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Authentic Graphic `img_19` */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden max-w-sm border-2 border-white/20 shadow-2xl">
                <img
                  src={assets.img_19}
                  alt="Stay updated with Angel Assistance Care newsletter and community programmes in Victoria"
                  width="384"
                  height="300"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Subscribe Form */}
            <div className="lg:col-span-7">
              <span className="text-xs font-black uppercase tracking-widest text-[#F4A261]">
                STAY UPDATED!
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-black text-white mt-2 mb-4">
                SUBSCRIBE TO US
              </h3>
              <p className="text-sm sm:text-base text-slate-200 mb-8 leading-relaxed max-w-xl font-medium">
                Make sure you stay updated with all our NDIS programmes, community events and disability services in Victoria. Enter your email address to subscribe.
              </p>

              {subscriptionSuccess && (
                <div className="mb-4 p-4 rounded-xl bg-emerald-900/60 border border-emerald-400 text-emerald-100 text-sm font-bold flex items-center gap-2" role="alert">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>You will be updated from now on!</span>
                </div>
              )}

              {subscriptionError && (
                <div className="mb-4 p-4 rounded-xl bg-rose-900/60 border border-rose-400 text-rose-100 text-sm font-bold" role="alert">
                  {subscriptionError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email address"
                      className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:bg-white/20"
                      {...register('Email', { required: 'Please enter your email address' })}
                    />
                    {errors.Email && (
                      <p className="text-xs text-rose-400 font-bold mt-1.5 pl-4">
                        {errors.Email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-magnetic-coral px-8 py-4 rounded-full text-sm font-black flex items-center justify-center gap-2 shrink-0 shadow-md text-white"
                    aria-label="Submit newsletter subscription"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* Quick Links & Accreditations */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
          <div>
            <span className="font-black uppercase tracking-wider text-[#F4A261] block mb-4">Navigation</span>
            <ul className="space-y-2.5 font-semibold text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/enquiries" className="hover:text-white transition-colors">Enquiries</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-black uppercase tracking-wider text-[#F4A261] block mb-4">Key NDIS Services</span>
            <ul className="space-y-2.5 font-semibold text-slate-300">
              <li>Personal Activities</li>
              <li>Travel &amp; Transport</li>
              <li>Group &amp; Centre Activities</li>
              <li>Household Assistance</li>
              <li>Life Skills Development</li>
            </ul>
          </div>

          <div>
            <span className="font-black uppercase tracking-wider text-[#F4A261] block mb-4">Accreditation</span>
            <div className="flex items-center gap-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <img
                src={assets.ndis}
                alt="National Disability Insurance Scheme Registered Provider Australia"
                width="44"
                height="44"
                loading="lazy"
                decoding="async"
                className="w-11 h-11 object-contain bg-white rounded-lg p-1"
              />
              <div className="text-[11px] text-slate-200 font-medium">
                <span className="font-black text-white block">NDIS Registered</span>
                Provider in Victoria
              </div>
            </div>
          </div>

          <div>
            <span className="font-black uppercase tracking-wider text-[#F4A261] block mb-4">Participant Hotline</span>
            <p className="text-slate-300 text-xs leading-relaxed mb-2 font-medium">
              Available 24/7 for participant support and enquiries in Victoria.
            </p>
            <a
              href="tel:0478591172"
              className="text-[#F4A261] font-black text-base hover:underline"
              aria-label="Call 0478 591 172"
            >
              0478 591 172
            </a>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left font-medium">
          <p>© Angel Assistance Care 2026. All Rights Reserved. Registered NDIS Provider Australia.</p>
          <p className="text-slate-400">
            Website by Sahil | Raman | +91 9034136066 | +91 8505002058
          </p>
        </div>

      </div>
    </footer>
  );
};

export default NavEnd;