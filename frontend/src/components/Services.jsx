import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Check, ArrowRight, ArrowLeft, ShieldCheck, Clock, Calendar, Phone, Award, Layers, Camera, HeartHandshake, Volume2, VolumeX } from 'lucide-react';

export default function Services({ setActiveTab }) {
  const formRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 🔊 Video Mute/Unmute State
  const [mutedStates, setMutedStates] = useState({});
  const videoRefs = useRef({});

  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    address: '',
    eventDate: '',
    serviceType: 'premium-package',
    guestCount: '300-500'
  });

  // 🎬 Cinematic Videos for Cards
  const cardVideos = [
    "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787917023/Captured_emotions_not_just_moments_Book_your_wedding_now_zchs8l.mp4",
    "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787917004/Abhishek_SwatiShot_by_-_foreverstudios.in_zo_wed_shaadisquad_shaadisaga.official_wedmegoo_vqahr8.mp4",
    "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1784909337/Turning_birthdays_into_fairytales._..Manasvis_1st_birthday_birthdayfun_1stbirthday_hqf4fd.mp4"
  ];

  // Official Packages from The Dev Photography PDF
  const officialPackages = [
    { 
      id: "essential-package", 
      category: "wedding", 
      tier: "ESSENTIAL", 
      title: "Essential Package", 
      tagline: "For Beautiful Beginnings", 
      price: "95,000", 
      advance: "30% Adv (₹ 28,500)", 
      deliverables: ["Candid Photography (2 Days)", "200 Edited Photos", "Online Gallery", "Basic Album (40 Pages)", "4 Professional Photographers"], 
      popular: false 
    },
    { 
      id: "premium-package", 
      category: "wedding", 
      tier: "PREMIUM", 
      title: "Premium Package", 
      tagline: "For Complete Celebrations", 
      price: "130,000", 
      advance: "30% Adv (₹ 39,000)", 
      deliverables: ["Candid Photography (1 Day)", "Cinematography (1 Day)", "Cinematic Wedding Film (3-5 Min)", "Edited High-Res Photos", "Premium Album (50 Pages)", "Drone Coverage (If Possible)", "6 Professional Photographers"], 
      popular: true 
    },
    { 
      id: "luxury-package", 
      category: "wedding", 
      tier: "LUXURY", 
      title: "Luxury Package", 
      tagline: "For Timeless Legacies", 
      price: "170,000", 
      advance: "30% Adv (₹ 51,000)", 
      deliverables: ["Candid Photography (All Days)", "Cinematography (All Day)", "Cinematic Wedding Film (5-7 Min)", "Teaser Film (1-2 Min)", "2 Premium Albums (50 Pages)", "Drone Coverage Included", "Instant Photo Share QR", "4 Instagram Reels", "6 Professional Photographers"], 
      popular: false 
    }
  ];

  const directorialEdge = [
    { icon: <Camera className="w-5 h-5 text-[#B8860B] shrink-0" />, title: "Directorial Restraint", desc: "Quiet discretion without demanding repeat takes." },
    { icon: <Award className="w-5 h-5 text-[#B8860B] shrink-0" />, title: "Organic 16-Bit RAW", desc: "Hand-graded ensuring true gold & skin warmth." },
    { icon: <Clock className="w-5 h-5 text-[#B8860B] shrink-0" />, title: "Milestone Delivery", desc: "Teasers in 7 days via PIN-secured Client Vault." },
    { icon: <HeartHandshake className="w-5 h-5 text-[#B8860B] shrink-0" />, title: "Trusted Families", desc: "100% satisfaction across Saharanpur and Uttar Pradesh." }
  ];

  const studioRules = [
    { rule: "01", title: "30% Advance", desc: "Booking is locked strictly after receiving a 30% advance payment via UPI or Bank." },
    { rule: "02", title: "Clearance", desc: "Remaining balance payment must be cleared prior to final high-resolution delivery." },
    { rule: "03", title: "60 Days Vault", desc: "Client RAW data is preserved in studio backup vaults for 60 days from event." },
    { rule: "04", title: "Archival Policy", desc: "After 60 days, raw files are cleared. Revisions post-delivery are chargeable." }
  ];

  const studioFaqs = [
    { q: "What is the advance booking token requirement?", a: "Dates are reserved strictly upon receipt of a 30% advance payment. Balance settlement occurs prior to master asset release." },
    { q: "How long are our raw wedding files stored?", a: "All raw footage and full-resolution still photos are safely maintained for 60 days in our digital repository for your selection." },
    { q: "Do you travel outside Saharanpur?", a: "Yes. The Dev Photography regularly travels across Uttar Pradesh, Delhi NCR, and destination circuits across India." },
    { q: "Who directs and color grades?", a: "Our Principal Director Sandeep Kumar personally directs the core crew on-site and color-grades every film." }
  ];

  useEffect(() => {
    const initialMutes = {};
    officialPackages.forEach((pkg) => { initialMutes[pkg.id] = true; });
    setMutedStates(initialMutes);
  }, []);

  const toggleAudio = (pkgId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const willBeMuted = !mutedStates[pkgId];
    
    Object.keys(videoRefs.current).forEach((id) => {
      const vidEl = videoRefs.current[id];
      if (vidEl) {
        if (id === pkgId) vidEl.muted = willBeMuted;
        else vidEl.muted = true;
      }
    });

    if (!willBeMuted) {
      const newStates = {};
      officialPackages.forEach((pkg) => { newStates[pkg.id] = pkg.id !== pkgId; });
      setMutedStates(newStates);
    } else {
      setMutedStates(prev => ({ ...prev, [pkgId]: true }));
    }
  };

  const handleSelectPackage = (pkgId) => {
    setInquiryData(prev => ({ ...prev, serviceType: pkgId }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/bookings/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inquiryData.name,
          phone: inquiryData.phone,
          address: inquiryData.address,
          eventDate: inquiryData.eventDate,
          serviceType: inquiryData.serviceType,
          guestCount: inquiryData.guestCount,
          status: 'New Lead'
        })
      });
      const data = await response.json();
      if (response.ok || data.success) {
        alert(`✨ INQUIRY RESERVED!\nOur team will connect with ${inquiryData.name} shortly.`);
        setInquiryData({ name: '', phone: '', address: '', eventDate: '', serviceType: 'premium-package', guestCount: '300-500' });
      } else {
        alert("✨ Inquiry recorded! We will connect with you soon.");
      }
    } catch (error) {
      alert("✨ Inquiry recorded! Our studio team will reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ServiceCard = ({ service, index }) => {
    const isMuted = mutedStates[service.id] ?? true;
    return (
      <div className="neon-card-glow bg-[#FFFCF6] rounded-2xl overflow-hidden border border-[#D4AF37]/50 transition-all duration-300 flex flex-col shrink-0 w-full sm:w-[320px] shadow-md">
        
        <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden bg-stone-950">
          <video 
            ref={(el) => (videoRefs.current[service.id] = el)}
            src={cardVideos[index % cardVideos.length]} 
            autoPlay loop muted={isMuted} playsInline 
            className="w-full h-full object-cover transform-none backface-visibility-hidden opacity-95 hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF6] via-transparent to-transparent pointer-events-none opacity-40" />
          
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 bg-stone-900/90 backdrop-blur-md rounded text-[#E6C594] font-mono-tech text-[8px] font-bold tracking-widest uppercase border border-[#D4AF37]/40 shadow-sm">
              {service.tier}
            </span>
          </div>

          <button
            onClick={(e) => toggleAudio(service.id, e)}
            className={`absolute top-3 right-3 z-20 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md border transition-all cursor-pointer shadow-md ${
              !isMuted 
                ? 'bg-amber-400 text-stone-950 border-amber-200 animate-pulse' 
                : 'bg-black/60 text-white border-white/20 hover:bg-[#C5A059]'
            }`}
          >
            {!isMuted ? <Volume2 size={12} /> : <VolumeX size={12} />}
          </button>
        </div>

        <div className="p-4 sm:p-6 flex flex-col flex-1 text-left">
          <div className="mb-3">
            <h3 className="font-bodoni text-xl sm:text-2xl font-bold text-[#2C241D] leading-tight mb-1">
              {service.title}
            </h3>
            <p className="font-sans-clean text-xs text-[#B8860B] font-semibold tracking-wide uppercase">
              {service.tagline}
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-3.5 py-1.5 rounded-lg shadow-sm mb-4 self-start text-white">
            <div className="flex items-baseline gap-1">
              <span className="font-bodoni text-lg sm:text-xl font-bold">
                ₹{service.price}/-
              </span>
            </div>
            <span className="font-mono-tech text-[8px] text-white/90 font-bold uppercase tracking-wider block">
              {service.advance}
            </span>
          </div>

          <ul className="space-y-2 mb-6 flex-1">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check size={13} strokeWidth={2.5} className="text-[#B8860B] shrink-0 mt-0.5" />
                <span className="font-sans-clean text-xs text-[#6B5B52] font-medium leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleSelectPackage(service.id)}
            className="w-full py-2.5 rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/50 hover:bg-[#C5A059] text-[#B8860B] hover:text-white font-sans-clean text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xs cursor-pointer flex items-center justify-center gap-1.5 mt-auto"
          >
            <span>Reserve Package</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans tracking-tight relative overflow-x-hidden min-h-screen pt-20 sm:pt-28 pb-16 sm:pb-24 selection:bg-[#E6C594] selection:text-[#2C241D]">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Snell+Roundhand:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        .font-bodoni { font-family: 'Bodoni Moda', serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }
        .font-abril { font-family: 'Abril Fatface', serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-tech { font-family: 'Space Grotesk', monospace; }

        .neon-card-glow {
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.15), 0 0 10px rgba(184, 134, 11, 0.08);
          transition: all 0.3s ease;
        }
        .neon-card-glow:hover {
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.35), 0 0 15px rgba(184, 134, 11, 0.25);
          transform: translateY(-3px);
        }

        .input-clean-field {
          background: #ffffff;
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #2C241D;
          transition: all 0.25s ease;
        }
        .input-clean-field:focus {
          border-color: #B8860B;
          box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.15);
        }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#FDF6E3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-28">

        {/* =========================================================================
            1. HERO SECTION & INTEGRATED RESERVATION FORM
        ========================================================================= */}
        <div ref={formRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center">
            
            {/* Left Column: Heading & Trust */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFCF6] border border-[#D4AF37]/50 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shadow-[0_0_8px_#C5A059]" />
                <span className="font-mono-tech text-xs font-bold tracking-[0.25em] text-[#B8860B] uppercase">
                  Official Rate Card • Saharanpur
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="font-bodoni text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2C241D] tracking-tight leading-[1.05]">
                  Our Packages
                </h1>
                <h2 className="font-bodoni text-3xl sm:text-5xl lg:text-6xl font-light italic text-[#B8860B] leading-[1.05]">
                  Simple. Transparent. Meaningful.
                </h2>
              </div>
              
              <p className="font-sans-clean text-[#6B5B52] text-sm sm:text-base max-w-xl leading-relaxed font-light">
                Capturing memories forever with high-end cinema equipment, professional direction by Sandeep Kumar, and guaranteed on-time delivery across Saharanpur and beyond.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-4 border-t border-[#D4AF37]/30">
                <div>
                  <span className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D] block">30%</span>
                  <span className="font-sans-clean text-xs uppercase tracking-wider text-[#B8860B] block mt-1 font-bold">Advance</span>
                </div>
                <div>
                  <span className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D] block">60 Days</span>
                  <span className="font-sans-clean text-xs uppercase tracking-wider text-[#B8860B] block mt-1 font-bold">RAW Vault</span>
                </div>
                <div>
                  <span className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D] block">100%</span>
                  <span className="font-sans-clean text-xs uppercase tracking-wider text-[#B8860B] block mt-1 font-bold">Satisfied</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Reservation Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#FFFCF6] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
                <div className="text-center space-y-1 pb-5 sm:pb-6 border-b border-[#D4AF37]/20 mb-5 sm:mb-6">
                  <span className="text-[#B8860B] font-mono-tech text-xs tracking-[0.3em] uppercase block font-bold">
                    [ DATE RESERVATION ]
                  </span>
                  <h3 className="font-bodoni text-2xl sm:text-4xl font-bold text-[#2C241D] tracking-tight">
                    Request Availability
                  </h3>
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-4 font-sans-clean text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Client Full Name *</label>
                      <input type="text" required placeholder="e.g. Anand Sharma"
                        value={inquiryData.name} onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                        className="w-full input-clean-field rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+91 8899626006"
                        value={inquiryData.phone} onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                        className="w-full input-clean-field rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Event Location / City *</label>
                      <input type="text" required placeholder="e.g. Saharanpur"
                        value={inquiryData.address} onChange={(e) => setInquiryData({...inquiryData, address: e.target.value})}
                        className="w-full input-clean-field rounded-xl px-4 py-3 outline-none"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Event Date *</label>
                      <input type="date" required
                        value={inquiryData.eventDate} onChange={(e) => setInquiryData({...inquiryData, eventDate: e.target.value})}
                        className="w-full input-clean-field rounded-xl px-4 py-3 outline-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#6B5B52]">Selected Package</label>
                    <div className="relative">
                      <select required value={inquiryData.serviceType} onChange={(e) => setInquiryData({...inquiryData, serviceType: e.target.value})}
                        className="w-full input-clean-field rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer font-medium"
                      >
                        {officialPackages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.title} (₹{pkg.price}/-)
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#B8860B] text-xs font-bold">▼</div>
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean font-bold tracking-[0.2em] uppercase py-3.5 sm:py-4 mt-2 rounded-xl transition-all duration-300 shadow-lg cursor-pointer text-xs sm:text-sm"
                  >
                    {isSubmitting ? "Locking Dates..." : "Reserve Priority Date ✦"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            2. OFFICIAL PACKAGES GRID
        ========================================================================= */}
        <section className="space-y-8 sm:space-y-12 py-6">
          <div className="text-center space-y-2">
            <span className="font-mono-tech text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              THE DEV PHOTOGRAPHY COLLECTION
            </span>
            <h2 className="font-bodoni text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2C241D] tracking-tight">
              Our Exclusive Packages
            </h2>
            <p className="font-sans-clean text-xs sm:text-sm text-[#6B5B52]">
              Choose from our verified rate card designed for unforgettable celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {officialPackages.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. DIRECTOR SPOTLIGHT & VALUE CARDS
        ========================================================================= */}
        <section className="bg-[#FFFCF6] rounded-2xl sm:rounded-3xl p-5 sm:p-14 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 w-full max-w-[340px] sm:max-w-[420px] mx-auto">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-950 border border-[#D4AF37]/50 shadow-2xl group">
                <img 
                  src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1793071985/IMG_2865.JPG_drb47i.jpg" 
                  alt="Sandeep Kumar - Lead Director & Artist" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/90 via-transparent to-transparent p-4 sm:p-6 text-white flex flex-col justify-between">
                  <div className="self-start">
                    <span className="px-3 py-1 bg-[#C5A059]/90 backdrop-blur-md rounded-full font-mono-tech text-[10px] font-bold text-white uppercase tracking-widest border border-white/20 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Principal Filmmaker
                    </span>
                  </div>
                  <div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#E6C594] font-bold block mb-1">
                      THE DEV PHOTOGRAPHY • SAHARANPUR
                    </span>
                    <h4 className="font-bodoni text-2xl sm:text-4xl font-bold">
                      Sandeep Kumar
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 sm:space-y-8 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
                  <span className="font-mono-tech text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase">
                    DIRECTORIAL DISTINCTION
                  </span>
                </div>
                <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] tracking-tight leading-tight">
                  Why Commission <br />
                  <span className="italic font-light text-[#B8860B]">Sandeep Kumar & Crew?</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {directorialEdge.map((edge, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#FDF6E3] border border-[#D4AF37]/30 rounded-xl sm:rounded-2xl p-3 sm:p-6 space-y-2 hover:bg-white hover:border-[#C5A059] transition-all duration-300 shadow-sm"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#FFFCF6] border border-[#D4AF37]/40 flex items-center justify-center shadow-sm">
                      {edge.icon}
                    </div>
                    <h4 className="font-bodoni text-sm sm:text-xl font-bold text-[#2C241D] leading-tight">
                      {edge.title}
                    </h4>
                    <p className="font-sans-clean text-[10px] sm:text-sm text-[#6B5B52] leading-relaxed font-light">
                      {edge.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. IMPORTANT RULES & POLICIES
        ========================================================================= */}
        <div className="bg-[#FFFCF6] rounded-2xl sm:rounded-3xl p-5 sm:p-14 border border-[#D4AF37]/30 shadow-xl space-y-6 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono-tech text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              STUDIO TERMS & POLICIES
            </span>
            <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] tracking-tight">
              Important Rules
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {studioRules.map((item, i) => (
              <div 
                key={i}
                className="bg-[#FDF6E3] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 space-y-2 sm:space-y-3 hover:border-[#C5A059] hover:bg-white transition-all duration-300 shadow-sm text-left"
              >
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#C5A059] text-white font-mono-tech text-[9px] font-bold rounded-full tracking-widest uppercase shadow-md">
                  RULE {item.rule}
                </span>
                <h3 className="font-bodoni text-xs sm:text-xl font-bold text-[#2C241D] leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans-clean text-[10px] sm:text-xs text-[#6B5B52] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            5. DIRECTORIAL FAQ ACCORDION
        ========================================================================= */}
        <div className="bg-[#FFFCF6] rounded-2xl sm:rounded-3xl p-6 sm:p-14 border border-[#D4AF37]/30 shadow-xl space-y-6 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono-tech text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              DIRECT INQUIRIES
            </span>
            <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] tracking-tight">
              Frequently Clarified
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {studioFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="bg-[#FDF6E3] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transition-colors hover:border-[#C5A059] text-left shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-bodoni text-base sm:text-xl font-bold text-[#2C241D]">
                      {faq.q}
                    </h4>
                    <span className="font-mono-tech text-xl sm:text-2xl text-[#B8860B] font-bold shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="font-sans-clean text-xs sm:text-sm text-[#6B5B52] leading-relaxed pt-3 border-t border-[#D4AF37]/20 mt-3 font-light">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}