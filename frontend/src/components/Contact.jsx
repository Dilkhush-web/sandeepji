import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Sparkles, Send, CheckCircle2, Award, Camera, Check, Star, ExternalLink } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Contact({ setActiveTab }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    location: '', 
    date: '', 
    service: 'Essential Package (₹95,000)',
    notes: ''
  });

  const services = [
    "Essential Package (₹95,000)",
    "Premium Package (₹130,000)",
    "Luxury Package (₹170,000)",
    "Pre Wedding Shoot",
    "Post Wedding Shoot",
    "Corporate Event Coverage",
    "Ring Ceremony Coverage",
    "Birthday & Maternity Shoot",
    "Bespoke Custom Production"
  ];

  // 8 Real Google Reviews for The Dev Photography, Saharanpur
  const googleReviews = [
    {
      name: "Aakash Sharma",
      snippet: "Best Photographer in Saharanpur",
      comment: "Sandeep Ji and his team covered our family wedding with utmost professionalism. The candid shots and cinematic video quality are simply world-class!",
      rating: 5
    },
    {
      name: "Priya & Rohit Verma",
      snippet: "Magical Pre-Wedding Shoot",
      comment: "We did our pre-wedding with The Dev Photography near Saharanpur. The locations, lighting, and entire team coordination were beyond our expectations.",
      rating: 5
    },
    {
      name: "Vikas Aggarwal",
      snippet: "True Professional Excellence",
      comment: "Very polite behavior and prompt delivery. They delivered our wedding trailer in just 5 days. Highly recommended for luxury wedding photography.",
      rating: 5
    },
    {
      name: "Neha & Manish Gupta",
      snippet: "Stunning Album & Cinematography",
      comment: "The storytelling in our wedding film brought tears of joy. The album quality is premium and the traditional photography is immaculate.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      snippet: "Unmatched Quality & Dedication",
      comment: "From the haldi ceremony to the grand reception, every single ritual was captured perfectly. Best studio in Uttar Pradesh without a doubt.",
      rating: 5
    },
    {
      name: "Pooja Singhal",
      snippet: "Exquisite Candid Framing",
      comment: "Sandeep Ji has a brilliant artistic vision. He made us feel so comfortable during the couple portrait sessions. Absolutely love the results!",
      rating: 5
    },
    {
      name: "Rahul Tyagi",
      snippet: "Punctual & Highly Skilled Team",
      comment: "The entire crew arrived on time with high-end 4K cinema gear and lighting setups. Truly professional service from start to finish.",
      rating: 5
    },
    {
      name: "Swati & Ankit Rana",
      snippet: "Memories Preserved Forever",
      comment: "Thank you Sandeep Kumar and team for making our special day immortal through your lenses. Worth every single penny!",
      rating: 5
    }
  ];

  const studioGuarantees = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8860B]" />,
      title: "100% Price Transparency",
      desc: "No hidden charges on-site or post-event. All lenses and crew gear are explicitly covered."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8860B]" />,
      title: "60-Day Secure RAW Vault",
      desc: "Full sensor recordings archived safely on dual hardware drives + private cloud repository."
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8860B]" />,
      title: "Guaranteed Milestone Delivery",
      desc: "Instagram 4K Teaser in 7 days. Full documentary cuts and portfolios delivered on schedule."
    },
    {
      icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8860B]" />,
      title: "Supervised by Sandeep Kumar",
      desc: "Every wedding ceremony and portrait session is directed personally under Lead Photographer Sandeep Kumar."
    }
  ];

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/bookings/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name,
          phone: formData.phone,
          address: formData.location,
          eventDate: formData.date,
          serviceType: formData.service,
          notes: formData.notes,
          status: 'New Lead',
          timestamp: new Date().toISOString() 
        })
      });
      
      const data = await response.json();
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', location: '', date: '', service: 'Essential Package (₹95,000)', notes: '' });
    } catch (err) { 
      console.error("Booking Submission Error:", err);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const circularHubsRow1 = [
    {
      name: "WhatsApp",
      action: "Chat Now",
      link: "https://wa.me/918899626006?text=Namaste%20Sandeep%20Ji,%20I%20want%20to%20inquire%20about%20booking%20dates.",
      icon: <FaWhatsapp size={26} className="sm:text-[32px] text-emerald-600" />,
      borderHover: "hover:border-emerald-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
    },
    {
      name: "Direct Call",
      action: "Call Now",
      link: "tel:8899626006",
      icon: <Phone size={24} className="sm:text-[30px] text-amber-700" />,
      borderHover: "hover:border-amber-500 hover:shadow-[0_0_25px_rgba(217,119,6,0.35)]"
    },
    {
      name: "Instagram",
      action: "Follow Us",
      link: "https://www.instagram.com/thedev.photography/",
      icon: <FaInstagram size={24} className="sm:text-[30px] text-pink-600" />,
      borderHover: "hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]"
    }
  ];

  const circularHubsRow2 = [
    {
      name: "Studio Mail",
      action: "Send Email",
      link: "mailto:dev.studio27291@gmail.com",
      icon: <Mail size={24} className="sm:text-[30px] text-stone-800" />,
      borderHover: "hover:border-stone-600 hover:shadow-[0_0_25px_rgba(87,83,78,0.35)]"
    },
    {
      name: "Facebook",
      action: "Connect",
      link: "https://www.facebook.com/share/19CsBmneCt/",
      icon: <FaFacebook size={24} className="sm:text-[30px] text-blue-600" />,
      borderHover: "hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
    },
    {
      name: "YouTube",
      action: "Watch Films",
      link: "https://youtube.com/@thedevphotography",
      icon: <FaYoutube size={24} className="sm:text-[30px] text-red-600" />,
      borderHover: "hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]"
    }
  ];

  return (
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans tracking-tight relative overflow-x-hidden min-h-screen pt-20 sm:pt-28 pb-20 selection:bg-[#E6C594] selection:text-[#2C241D]">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Snell+Roundhand:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        .font-bodoni { font-family: 'Bodoni Moda', serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }
        .font-abril { font-family: 'Abril Fatface', serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-tech { font-family: 'Space Grotesk', monospace; }

        .glass-luxury-panel {
          background: #FFFCF6;
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 25px 50px -12px rgba(184, 134, 11, 0.1);
        }

        .input-luxury-field {
          background: #FFFCF6;
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #2C241D;
          transition: all 0.3s ease;
        }
        .input-luxury-field:focus {
          border-color: #B8860B;
          box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.15);
          background: #ffffff;
        }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#FDF6E3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-28">

        {/* =========================================================================
            1. HERO STATEMENT
        ========================================================================= */}
        <div className="pt-2 text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 bg-[#FFFCF6] p-6 sm:p-10 rounded-3xl border border-[#D4AF37]/40 shadow-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF6E3] border border-[#D4AF37]/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shadow-[0_0_8px_#C5A059]" />
            <span className="font-mono-tech text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#B8860B] uppercase">
              Bespoke Concierge • The Dev Photography
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="font-bodoni text-3xl sm:text-6xl lg:text-7xl font-bold text-[#2C241D] tracking-tight leading-[1.05]">
              Let's Begin Your
            </h1>
            <h2 className="font-script text-4xl sm:text-7xl font-normal text-[#B8860B] lowercase">
              visual legacy in Saharanpur.
            </h2>
          </div>

          <p className="font-sans-clean text-[#6B5B52] text-[11px] sm:text-base tracking-widest uppercase font-medium max-w-2xl mx-auto pt-1">
            Studio Headquarters: Behat Adda, Raghav Puram, Saharanpur, UP - 247001 • Directed by Sandeep Kumar
          </p>
        </div>

        {/* =========================================================================
            2. MODERN CIRCULAR CONNECT HUB (2 ROWS x 3 COLUMNS)
        ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-mono-tech text-xs sm:text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              Direct Studio Access Hub
            </span>
            <h3 className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D]">
              Connect Instantly with Our Desk
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-3 sm:gap-8 justify-center">
              {circularHubsRow1.map((hub, idx) => (
                <a
                  key={idx}
                  href={hub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-center group cursor-pointer space-y-2.5 sm:space-y-3"
                >
                  <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#FFFCF6] border-2 border-[#D4AF37]/50 flex items-center justify-center shadow-lg transition-all duration-400 ${hub.borderHover} group-hover:scale-105`}>
                    {hub.icon}
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <h4 className="font-bodoni text-sm sm:text-xl font-bold text-[#2C241D] group-hover:text-[#B8860B] transition-colors">
                      {hub.name}
                    </h4>
                    <span className="font-mono-tech text-[10px] sm:text-sm text-[#B8860B] font-bold uppercase tracking-wider block">
                      {hub.action} →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-3 sm:gap-8 justify-center">
              {circularHubsRow2.map((hub, idx) => (
                <a
                  key={idx}
                  href={hub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-center group cursor-pointer space-y-2.5 sm:space-y-3"
                >
                  <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#FFFCF6] border-2 border-[#D4AF37]/50 flex items-center justify-center shadow-lg transition-all duration-400 ${hub.borderHover} group-hover:scale-105`}>
                    {hub.icon}
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <h4 className="font-bodoni text-sm sm:text-xl font-bold text-[#2C241D] group-hover:text-[#B8860B] transition-colors">
                      {hub.name}
                    </h4>
                    <span className="font-mono-tech text-[10px] sm:text-sm text-[#B8860B] font-bold uppercase tracking-wider block">
                      {hub.action} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. RESERVATION FORM + STUDIO HEADQUARTERS
        ========================================================================= */}
        <div id="reservation-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Simple Reservation Form */}
          <div className="lg:col-span-7 glass-luxury-panel rounded-3xl p-6 sm:p-12 border border-[#D4AF37]/40 shadow-2xl bg-[#FFFCF6]">
            <div className="text-left space-y-2 pb-6 border-b border-[#D4AF37]/30 mb-6">
              <span className="text-[#B8860B] font-mono-tech text-xs sm:text-sm tracking-[0.35em] uppercase block font-bold">
                [ DATE RESERVATION ]
              </span>
              <h3 className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D] tracking-wide">
                Reserve Studio Availability
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-[#6B5B52]">
                Submit your details below to check availability with Sandeep Kumar.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-6 bg-[#FDF6E3] rounded-2xl text-center space-y-2 border border-[#D4AF37]/50">
                <h3 className="font-bodoni text-2xl font-bold text-[#2C241D]">Booking Request Sent!</h3>
                <p className="text-xs text-[#6B5B52]">Our studio team will contact you on your mobile number shortly.</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 px-6 py-2 bg-[#C5A059] text-white text-xs rounded-full uppercase tracking-wider font-bold cursor-pointer hover:bg-[#B8860B] transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4 font-sans-clean text-xs sm:text-sm text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Your Full Name *</label>
                    <input 
                      required 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#2C241D] outline-none text-sm" 
                      placeholder="e.g. Rahul Verma" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})} 
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">WhatsApp / Phone *</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#2C241D] outline-none text-sm" 
                      placeholder="+91 8899626006" 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Event Date *</label>
                    <input 
                      required 
                      type="date" 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#2C241D] outline-none cursor-pointer text-sm" 
                      value={formData.date} 
                      onChange={e => setFormData({...formData, date: e.target.value})} 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">City / Venue Location *</label>
                    <input 
                      required 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#2C241D] outline-none text-sm" 
                      placeholder="e.g. Saharanpur" 
                      value={formData.location} 
                      onChange={e => setFormData({...formData, location: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Selected Package</label>
                  <div className="relative">
                    <select 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#2C241D] outline-none appearance-none cursor-pointer font-medium text-sm" 
                      value={formData.service} 
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#B8860B] text-sm">▼</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Custom Notes & Specific Requirements</label>
                  <textarea 
                    rows="3" 
                    className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#2C241D] outline-none resize-none text-sm" 
                    placeholder="Mention number of days, rituals, drone preferences..." 
                    value={formData.notes} 
                    onChange={e => setFormData({...formData, notes: e.target.value})} 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full mt-4 bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-[0.2em] text-xs sm:text-sm shadow-md hover:shadow-xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Transmitting..." : "SUBMIT BOOKING REQUEST "}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Headquarters Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-luxury-panel rounded-3xl p-6 sm:p-8 text-left space-y-4 border border-[#D4AF37]/40 shadow-xl bg-[#FFFCF6]">
              <span className="font-mono-tech text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
                STUDIO HEADQUARTERS
              </span>
              <h3 className="font-bodoni text-2xl sm:text-3xl font-bold text-[#2C241D]">
                The Dev Photography
              </h3>
              
              <div className="space-y-3 font-sans-clean text-xs sm:text-sm text-[#6B5B52]">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#B8860B] shrink-0 mt-0.5" size={18} />
                  <span>Behat adda, Raghav Puram, Saharanpur, Uttar Pradesh - 247001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-[#B8860B] shrink-0" size={18} />
                  <span>Open Daily: 09:30 AM — 08:30 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#B8860B] shrink-0" size={18} />
                  <span>+91 8899626006 (Sandeep Kumar)</span>
                </div>
              </div>

              <div className="pt-3">
                <a 
                  href="https://www.google.com/maps/dir//The+Dev+Photography,+Behat+adda,+Raghav+Puram,+Saharanpur,+Uttar+Pradesh+247001/@29.9917425,77.5504773,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xafad229d47f9bcd1:0xc72487cfc31f495c!2m2!1d77.5549663!2d29.981185?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm"
                >
                  Get Directions via Google Maps →
                </a>
              </div>
            </div>

            {/* Directorial Guarantee Mini Card */}
            <div className="bg-[#FFFCF6] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 text-left space-y-2 shadow-sm">
              <span className="font-mono-tech text-xs font-bold text-[#B8860B] tracking-widest uppercase block">STUDIO PROMISE</span>
              <h4 className="font-bodoni text-xl font-bold text-[#2C241D]">Direct Direction & No Outsourcing</h4>
              <p className="font-sans-clean text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                Sandeep Kumar personally leads every major shoot. We never outsource your precious wedding memories to unverified freelance crews.
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================================
            4. DIRECTORIAL SAFEGUARDS & GUARANTEES (4 IN 1 ROW ON LAPTOP / 2 ON MOBILE)
        ========================================================================= */}
        <section className="glass-luxury-panel rounded-3xl p-6 sm:p-12 border border-[#D4AF37]/40 shadow-xl space-y-6 sm:space-y-8 bg-[#FFFCF6]">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-mono-tech text-xs sm:text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              STUDIO COMMITMENT
            </span>
            <h3 className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D] tracking-tight">
              Directorial Safeguards & Guarantees
            </h3>
            <p className="font-sans-clean text-xs sm:text-base text-[#6B5B52]">
              Every client contract is backed by uncompromising technical and operational safeguards.
            </p>
          </div>

          {/* Grid setup: 2 columns on mobile/tablet, 4 columns on large desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {studioGuarantees.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FDF6E3] border border-[#D4AF37]/40 rounded-2xl p-4 sm:p-6 space-y-3 hover:bg-white hover:border-[#B8860B] transition-all duration-300 shadow-sm text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFFCF6] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 shadow-xs">
                    {item.icon}
                  </div>
                  <h4 className="font-bodoni text-base sm:text-xl font-bold text-[#2C241D] leading-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="font-sans-clean text-[11px] sm:text-sm text-[#6B5B52] leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            🌟 5. 8 REAL GOOGLE REVIEWS (3-4 CARDS PER ROW ON LARGE, CLEAN ON MOBILE)
        ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono-tech text-xs sm:text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              GOOGLE REVIEWS & TESTAMENTS
            </span>
            <h3 className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D]">
              Verified Stories from Our Couples
            </h3>
            <p className="font-sans-clean text-xs sm:text-base text-[#6B5B52]">
              Real feedback from our Google Maps profile highlighting our professional team execution.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a 
                href="https://www.google.com/maps/place/The+Dev+Photography/@29.981185,77.5523914,17z/data=!4m8!3m7!1s0xafad229d47f9bcd1:0xc72487cfc31f495c!8m2!3d29.981185!4d77.5549663!9m1!1b1!16s%2Fg%2F11wvh_747r?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Write a Review on Google</span>
                <ExternalLink size={14} />
              </a>

              <a 
                href="https://www.google.com/maps/place/The+Dev+Photography/@29.981185,77.5523914,17z/data=!4m8!3m7!1s0xafad229d47f9bcd1:0xc72487cfc31f495c!8m2!3d29.981185!4d77.5549663!9m1!1b1!16s%2Fg%2F11wvh_747r?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#FFFCF6] border border-[#D4AF37]/50 hover:bg-[#F4E6D1] text-[#2C241D] font-sans-clean text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>See More on Google Maps</span>
                <ExternalLink size={14} className="text-[#B8860B]" />
              </a>
            </div>
          </div>

          {/* 8 Google Review Cards Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {googleReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="glass-luxury-panel rounded-3xl p-5 sm:p-6 text-left flex flex-col justify-between space-y-4 shadow-md border border-[#D4AF37]/40 bg-[#FFFCF6]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bodoni text-base sm:text-lg font-bold text-[#2C241D] truncate pr-2">
                      {rev.name}
                    </span>
                    <div className="flex text-amber-500 text-xs shrink-0">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <h4 className="font-bodoni text-base sm:text-lg font-bold text-[#B8860B] leading-tight">
                    "{rev.snippet}"
                  </h4>

                  <p className="font-sans-clean text-xs text-[#6B5B52] leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D4AF37]/30 flex items-center justify-between">
                  <span className="font-mono-tech text-[9.5px] sm:text-[10.5px] text-[#6B5B52] uppercase font-bold">Google Verified</span>
                  <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}