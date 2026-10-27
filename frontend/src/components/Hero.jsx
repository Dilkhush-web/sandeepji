import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Send, 
  Download, 
  Volume2, 
  VolumeX, 
  SkipForward, 
  ChevronDown, 
  Camera, 
  PhoneCall, 
  Layers, 
  X, 
  Heart, 
  Film,
  Maximize2 
} from 'lucide-react';

export default function Hero({ setActiveTab }) {
  const [bookingData, setBookingData] = useState({ name: '', phone: '', eventDate: '', serviceType: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // 🎬 Background Video Carousel Links
  const heroVideos = [
    "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1793072484/Video-17406_lwjeda.mp4",
    "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1793072488/Video-67311_h0eqxj.mp4"
  ];
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Exactly 6 Large Professional Photos
  const portfolioItems = [
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602467/2I0A4444-8mb_szkuyb.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602471/2I0A5812-8mb_nsdx3f.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602483/DEV00525_copy-8mb_ajj25t.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602521/2I0A5743-8mb_xnljec.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1791139206/7-8mb_vtcubj.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1788587742/IMG_3060.JPG_adw5r3.jpg" }
  ];

  const faqList = [
    {
      q: "What services does The Dev Photography provide for weddings?",
      a: "We specialize in end-to-end wedding documentation including cinematic wedding films, candid photography, traditional video coverage, pre-wedding couple shoots, and luxury customized physical albums."
    },
    {
      q: "Where is The Dev Photography located, and do you travel for destination events?",
      a: "Our studio is located in Behat Adda, Saharanpur, Uttar Pradesh. However, our team frequently travels across Delhi NCR, Uttarakhand, and PAN India for destination weddings."
    },
    {
      q: "How can we check your availability and book your team?",
      a: "You can easily check availability and reserve your date by filling out our quick booking form on this page or by directly visiting our Contact section to call or message us."
    },
    {
      q: "What is the turnaround time for receiving our wedding photos and video teaser?",
      a: "We provide social media ready teaser reels within 5 to 7 days of the event. The fully edited cinematic film and complete high-resolution photo gallery are delivered within 4 to 6 weeks."
    }
  ];

  const handleVideoEnded = () => {
    setActiveVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  const handleSkipVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      
      // Mapping message to 'address' so Mongoose database schema validation passes successfully
      const payload = {
        ...bookingData,
        address: bookingData.message ? bookingData.message : 'Saharanpur, Uttar Pradesh'
      };

      const response = await fetch(`${backendUrl}/api/bookings/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setBookingData({ name: '', phone: '', eventDate: '', serviceType: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server error response:", errorData);
        alert("Booking server par save nahi ho payi. Kripya dobara koshish karein.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error: Server se connect nahi ho pa raha hai.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBrochureDownload = async () => {
    try {
      const response = await fetch('https://res.cloudinary.com/doa6d6cyf/image/upload/v1792608175/01_-_The_Dev_Photography_1__page-0001_cdaysf.jpg');
      if (!response.ok) {
        alert("Studio Lookbook is currently updating. Contact Sandeep Kumar at Saharanpur.");
        return;
      }
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'The_Dev_Photography_Lookbook.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      alert("Please contact The Dev Photography directly for the lookbook.");
    }
  };

  return (
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans tracking-tight relative overflow-x-hidden selection:bg-[#E6C594] selection:text-[#2C241D]">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Snell+Roundhand:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .font-bodoni { font-family: 'Bodoni Moda', serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }
        .font-abril { font-family: 'Abril Fatface', serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }

        .luxury-card {
          background: #FFFCF6;
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          box-shadow: 0 15px 35px rgba(184, 134, 11, 0.05);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 640px) {
          .luxury-card {
            border-radius: 28px;
            box-shadow: 0 20px 40px rgba(184, 134, 11, 0.06);
          }
        }

        .luxury-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 25px 50px rgba(184, 134, 11, 0.12), 0 0 20px rgba(230, 197, 148, 0.3);
        }
      `}</style>

      {/* =========================================================================
          1. HERO SECTION (FULL SCREEN, MOBILE OPTIMIZED)
      ======================================================================== */}
      <section className="relative z-10 w-full h-[100svh] bg-[#1C1A17] flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/30">
        
        <video
          ref={videoRef}
          key={heroVideos[activeVideoIndex]}
          src={heroVideos[activeVideoIndex]}
          autoPlay
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.05] scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/90 via-[#1C1A17]/20 to-transparent pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#E6C594] shadow-xl">
            <span className="font-sans-clean text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#E6C594]">
              The Dev Photography • Saharanpur
            </span>
          </div>

          <h1 className="font-bodoni text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] drop-shadow-md">
            Every Wedding has a story <br />
            <span className="font-script text-5xl sm:text-7xl text-[#E6C594] font-normal lowercase">Let us frame yours.</span>
          </h1>

          <p className="font-sans-clean text-stone-200 text-xs sm:text-base max-w-[18rem] sm:max-w-lg mx-auto font-light leading-relaxed drop-shadow">
            Capturing authentic human emotion, heritage traditions, and cinematic poetry through master lenses in Saharanpur.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#booking-section"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-2xl transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>Book Your Session</span>
              <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
            </a>
          </div>
        </div>

        {/* Mobile-Friendly Video Controls */}
        <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleSkipVideo}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 font-sans-clean text-[9px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shadow-xl"
            title="Skip video"
          >
            <SkipForward size={14} className="text-[#E6C594] sm:w-[16px] sm:h-[16px]" />
            <span className="hidden sm:inline">Skip</span>
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 font-sans-clean text-[9px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shadow-xl"
          >
            {isMuted ? <VolumeX size={14} className="text-[#E6C594] sm:w-[16px] sm:h-[16px]" /> : <Volume2 size={14} className="text-[#E6C594] sm:w-[16px] sm:h-[16px]" />}
            <span>{isMuted ? 'Unmute' : 'Mute'}</span>
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 z-30 flex items-center gap-1.5 sm:gap-2">
          {heroVideos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVideoIndex(idx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                activeVideoIndex === idx ? 'w-6 sm:w-8 bg-[#C5A059]' : 'w-1.5 sm:w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. ACTION BAR & INTRO SECTION (TRUE CREAM THEME)
      ======================================================================== */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-16 max-w-7xl mx-auto">
        <div className="luxury-card p-6 sm:p-12 text-center space-y-4 sm:space-y-6">
          <span className="font-sans-clean text-[9px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
            THE DEV PHOTOGRAPHY • SAHARANPUR
          </span>
          <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] tracking-tight max-w-3xl mx-auto leading-tight">
            Preserving Sacred Traditions & Cinematic Human Poetry.
          </h2>
          <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Experience world-class visual documentation crafted with meticulous intention, elite prime lenses, and timeless color grading.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
            <button
              onClick={handleBrochureDownload}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FDF6E3] hover:bg-[#F4E6D1] text-[#2C241D] font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-105"
            >
              <Download size={14} className="text-[#B8860B] sm:w-[15px] sm:h-[15px]" />
              <span>Download Brochure</span>
            </button>

            <a
              href="#booking-section"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>Book Your Shoot</span>
              <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PORTFOLIO VAULT (2 IMAGES PER ROW ON MOBILE, 3 ON LAPTOP)
      ======================================================================== */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-16 max-w-7xl mx-auto border-b border-[#D4AF37]/20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 text-center sm:text-left">
          <div>
            <span className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block mb-1.5">
              Portfolio Archive
            </span>
            <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D]">
              Master Gallery
            </h2>
          </div>
          <button 
            onClick={() => setActiveTab && setActiveTab('portfolio')}
            className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-sans-clean font-bold uppercase tracking-widest text-[#B8860B] hover:text-[#2C241D] transition-colors cursor-pointer"
          >
            <span>Explore Complete Vault</span>
            <ArrowRight size={14} className="sm:w-[16px] sm:h-[16px]" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setLightboxImg(item)}
              className="luxury-card cursor-pointer group text-left p-1.5 sm:p-4"
            >
              <div className="w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4E6D1] shadow-inner relative">
                <img
                  src={item.url}
                  alt="The Dev Photography Masterpiece"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.98] group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-stone-900 shadow-xl">
                    <Maximize2 size={14} className="sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. UNSCRIPTED EMOTIONS (RESPONSIVE STACKING ON MOBILE)
      ======================================================================== */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-16 max-w-7xl mx-auto border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#FDF6E3] via-[#F4E6D1] to-[#FDF6E3] my-8 sm:my-10 rounded-2xl sm:rounded-3xl shadow-sm">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#B8860B]">
            {/* <Heart size={12} className="fill-[#B8860B] sm:w-[14px] sm:h-[14px]" /> */}
            <span className="font-sans-clean text-[9px] sm:text-xs font-bold uppercase tracking-widest">
              The Heart of Our Craft
            </span>
          </div>
          <h2 className="font-bodoni text-3xl sm:text-6xl font-bold text-[#2C241D] leading-[1.1]">
            Unscripted Emotions & Cinematic Mastery
          </h2>
          <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-lg max-w-2xl mx-auto font-light leading-relaxed px-2">
            We don’t just record events; we archive the unspoken soul of your celebrations. Every tear of joy, every quiet glance, and every grand ritual is preserved as a timeless work of art.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Card 1 */}
          <div className="luxury-card p-4 sm:p-8 space-y-4 sm:space-y-6">
            <div className="w-full aspect-[4/5] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4E6D1] shadow-inner">
              <img 
                src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602551/DEV09923-8mb_bvutai.jpg" 
                alt="Golden Hour Twilight Poise" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2 text-left">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#B8860B] font-mono-tech text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                <Camera size={12} className="sm:w-[14px] sm:h-[14px]" />
                <span>Golden Hour Intimacy</span>
              </div>
              <h3 className="font-bodoni text-2xl sm:text-3xl font-bold text-[#2C241D]">
                Poetic Silhouettes Along Scenic Backdrops
              </h3>
              <p className="font-sans-clean text-[11px] sm:text-sm text-[#6B5B52] leading-relaxed font-light">
                Utilizing natural twilight and calibrated prime optics, we frame romantic portraits that feel profoundly intimate, calm, and entirely untethered from artificial studio stiffness.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="luxury-card p-4 sm:p-8 space-y-4 sm:space-y-6">
            <div className="w-full aspect-[4/5] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4E6D1] shadow-inner">
              <img 
                src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602493/2I0A5750-8mb_egprrg.jpg" 
                alt="Vibrant Rituals & Haldi Glow" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2 text-left">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#B8860B] font-mono-tech text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                <Film size={12} className="sm:w-[14px] sm:h-[14px]" />
                <span>Heritage & Celebration</span>
              </div>
              <h3 className="font-bodoni text-2xl sm:text-3xl font-bold text-[#2C241D]">
                Vibrant Haldi Glow & Raw Family Laughter
              </h3>
              <p className="font-sans-clean text-[11px] sm:text-sm text-[#6B5B52] leading-relaxed font-light">
                From turmeric hues splashing across joyful faces to sacred Pheras under the starlit sky, our documentary ethos captures the true cultural rhythm of your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY HIRE US SECTION
      ======================================================================== */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-16 max-w-7xl mx-auto border-b border-[#D4AF37]/20">
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2 mb-8 sm:mb-12">
          <span className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
            WHY HIRE THE DEV PHOTOGRAPHY
          </span>
          <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D]">
            Uncompromising Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="luxury-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-3 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/30 text-[#B8860B] flex items-center justify-center font-bold font-bodoni text-lg sm:text-xl">01</div>
            <h4 className="font-bodoni text-xl sm:text-2xl font-bold text-[#2C241D]">Dual-Card Safety</h4>
            <p className="text-[11px] sm:text-xs text-[#6B5B52] leading-relaxed">Simultaneous backup recording on professional cinema cameras so your memories are 100% secure.</p>
          </div>

          <div className="luxury-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-3 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/30 text-[#B8860B] flex items-center justify-center font-bold font-bodoni text-lg sm:text-xl">02</div>
            <h4 className="font-bodoni text-xl sm:text-2xl font-bold text-[#2C241D]">Artisan Retouching</h4>
            <p className="text-[11px] sm:text-xs text-[#6B5B52] leading-relaxed">Hand-graded color palettes that highlight intricate lehenga embroidery, gold jewelry, and natural skin tones.</p>
          </div>

          <div className="luxury-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-3 text-left sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/30 text-[#B8860B] flex items-center justify-center font-bold font-bodoni text-lg sm:text-xl">03</div>
            <h4 className="font-bodoni text-xl sm:text-2xl font-bold text-[#2C241D]">Lifelong Digital Vault</h4>
            <p className="text-[11px] sm:text-xs text-[#6B5B52] leading-relaxed">Receive instant Instagram teasers along with a secure lifelong cloud link and luxury bound physical album.</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SERVICES HIGHLIGHT SECTION
      ======================================================================== */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-16 max-w-7xl mx-auto border-b border-[#D4AF37]/20">
        <div className="luxury-card p-8 sm:p-16 text-center space-y-4 sm:space-y-6">
          <span className="font-sans-clean text-[9px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
            MASTERPIECE PRODUCTIONS
          </span>
          <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] max-w-3xl mx-auto leading-tight">
            Explore Our Comprehensive Photography & Cinematic Packages
          </h2>
          <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            From intimate Haldi ceremonies to grand destination weddings across India, The Dev Photography delivers state-of-the-art visual packages tailored for your milestones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <button
              onClick={() => setActiveTab && setActiveTab('services')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <Layers size={14} className="sm:w-[16px] sm:h-[16px]" />
              <span>Explore Services</span>
            </button>

            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FDF6E3] hover:bg-[#F4E6D1] text-[#2C241D] font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-105"
            >
              <PhoneCall size={14} className="text-[#B8860B] sm:w-[16px] sm:h-[16px]" />
              <span>Contact Studio</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FAQ SECTION
      ======================================================================== */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-16 max-w-5xl mx-auto border-b border-[#D4AF37]/20">
        <div className="text-center space-y-1.5 sm:space-y-2 mb-8 sm:mb-12">
          <span className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
            COMMON INQUIRIES
          </span>
          <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="luxury-card rounded-xl sm:rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none bg-[#FFFCF6]"
              >
                <span className="font-bodoni text-lg sm:text-2xl font-bold text-[#2C241D] pr-2">
                  {faq.q}
                </span>
                <ChevronDown 
                  size={18} 
                  className={`text-[#B8860B] shrink-0 transition-transform duration-300 sm:w-[20px] sm:h-[20px] ${openFaq === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-[11px] sm:text-sm text-[#6B5B52] leading-relaxed font-sans-clean border-t border-[#D4AF37]/20 pt-3 sm:pt-4 bg-[#FFFCF6]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. DETAILED BOOKING FORM (API CONNECTED)
      ======================================================================== */}
      <section id="booking-section" className="relative z-10 py-16 sm:py-24 px-4 sm:px-16 flex items-center justify-center">
        <div className="relative z-10 max-w-3xl w-full luxury-card p-6 sm:p-12 shadow-2xl text-left border border-[#D4AF37]/50">
          <div className="text-center space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
            <span className="font-sans-clean text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
              SECURE YOUR DATE WITH THE DEV PHOTOGRAPHY
            </span>
            <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#2C241D]">
              Book Your Session
            </h2>
            <p className="font-sans-clean text-[10px] sm:text-xs text-[#6B5B52]">
              Connected to backend API. Submit your details below.
            </p>
          </div>

          {submitSuccess ? (
            <div className="p-5 sm:p-6 bg-[#FDF6E3] rounded-xl sm:rounded-2xl text-center space-y-2 border border-[#D4AF37]">
              <h3 className="font-bodoni text-xl sm:text-2xl font-bold text-[#2C241D]">Booking Request Sent!</h3>
              <p className="text-[11px] sm:text-xs text-[#6B5B52]">Our studio team will contact you on your mobile number shortly.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-3 sm:mt-4 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#C5A059] text-white text-[10px] sm:text-xs rounded-full uppercase tracking-wider font-bold cursor-pointer"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">Event Date</label>
                  <input
                    type="date"
                    required
                    value={bookingData.eventDate}
                    onChange={(e) => setBookingData({ ...bookingData, eventDate: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">What to get done? (Manual Type)</label>
                  <input
                    type="text"
                    required
                    value={bookingData.serviceType}
                    onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
                    placeholder="e.g. Royal Wedding, Pre-Wedding..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">Additional Venue / Requirements</label>
                <textarea
                  rows="3"
                  value={bookingData.message}
                  onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                  placeholder="Share venue location in Saharanpur or specific notes..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 sm:py-4 rounded-lg sm:rounded-xl bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={14} className="sm:w-[15px]" />
                <span>{submitting ? 'Transmitting to Server...' : 'SUBMIT BOOKING REQUEST'}</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL WITH CLOSE BUTTON
      ======================================================================== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[99999] bg-[#2C241D]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 sm:gap-2 font-mono-tech text-[9px] sm:text-xs uppercase tracking-widest backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            title="Close preview"
          >
            <span>Close</span>
            <X size={14} className="sm:w-[16px] sm:h-[16px]" />
          </button>

          <div className="max-w-4xl max-h-[85vh] relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.url}
              alt="The Dev Photography Masterpiece"
              loading="lazy"
              className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-3 sm:mt-4 text-center text-white space-y-0.5 sm:space-y-1">
              <span className="font-mono-tech text-[9px] sm:text-xs tracking-widest text-[#E6C594] uppercase block font-bold">
                {lightboxImg.category}
              </span>
              <h3 className="font-bodoni text-xl sm:text-2xl font-bold">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}