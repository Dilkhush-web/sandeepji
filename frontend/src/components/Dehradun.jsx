import React, { useState } from 'react';
import { ChevronDown, Maximize2, X, Camera, CheckCircle2, Star, Award, HeartHandshake } from 'lucide-react';

export default function Dehradun({ setActiveTab }) {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // 6 Portfolio items preview without external links
  const dehradunPortfolio = [
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602561/DSC02958_copy-8mb_ajyath.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602551/DEV09923-8mb_bvutai.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602485/DEV08874_copy-8mb_islgab.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602463/DEV05582-8mb_thyioc.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602442/DEV00663_copy-8mb_enj3s9.jpg" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1792602483/DEV00525_copy-8mb_ajj25t.jpg" }
  ];

  const dehradunFaqs = [
    {
      q: "Does The Dev Photography provide dedicated wedding services in Dehradun?",
      a: "Yes! While our primary headquarters is in Saharanpur, our elite production team regularly travels to Dehradun, Mussoorie, and surrounding hill destinations for destination weddings, pre-wedding shoots, and luxury events."
    },
    {
      q: "How do we book Sandeep Kumar and his team for a Dehradun event?",
      a: "You can easily check our date availability and reserve your session by visiting our Contact page and filling out the booking form."
    },
    {
      q: "Are travel and accommodation charges included for Dehradun destination weddings?",
      a: "For destination weddings in Dehradun and nearby hill stations, customized production estimates are provided transparently during consultation, covering travel and logistics with 100% price transparency."
    },
    {
      q: "What is the turnaround time for Dehradun wedding films and photo galleries?",
      a: "We deliver social-media-ready 4K teaser reels within 5 to 7 days of your event, while the fully graded cinematic feature film and complete high-resolution photo gallery are delivered within 4 to 6 weeks."
    },
    {
      q: "Can we arrange a pre-wedding shoot at scenic locations in Dehradun or Mussoorie?",
      a: "Absolutely. Sandeep Kumar personally scouts and directs pre-wedding shoots across picturesque backdrops in Dehradun, luxury resorts, and scenic hills near Mussoorie."
    }
  ];

  const experiencePoints = [
    {
      icon: <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#B8860B]" />,
      title: "Cinematic Excellence",
      desc: "Using high-end 4K cinema cameras and advanced lighting to capture every single emotion crystal clear."
    },
    {
      icon: <HeartHandshake className="w-4 h-4 sm:w-6 sm:h-6 text-[#B8860B]" />,
      title: "Personalized Attention",
      desc: "Every couple receives dedicated artistic direction tailored uniquely to their love story and traditions."
    },
    {
      icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 text-[#B8860B]" />,
      title: "Trusted Legacy",
      desc: "Hundreds of successful luxury weddings documented across Uttar Pradesh, Dehradun, and Uttarakhand."
    }
  ];

  return (
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans tracking-tight relative overflow-x-hidden selection:bg-[#E6C594] selection:text-[#2C241D] pt-16 sm:pt-28 pb-20 sm:pb-24">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Snell+Roundhand:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        .font-bodoni { font-family: 'Bodoni Moda', serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }
        .font-abril { font-family: 'Abril Fatface', serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-tech { font-family: 'Space Grotesk', monospace; }

        .luxury-card {
          background: #FFFCF6;
          border-radius: 16px;
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
          transform: translateY(-4px);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 25px 50px rgba(184, 134, 11, 0.12), 0 0 20px rgba(230, 197, 148, 0.3);
        }
      `}</style>

      {/* =========================================================================
          1. HERO SECTION
      ======================================================================== */}
      <section className="relative z-10 py-8 sm:py-16 px-3 sm:px-16 max-w-7xl mx-auto text-center">
        <div className="luxury-card p-5 sm:p-12 relative overflow-hidden bg-[#FFFCF6]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-400/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF6E3] border border-[#D4AF37]/40 shadow-sm">
              <span className="font-mono-tech text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#B8860B] uppercase">
                The Dev Photography • Dehradun 
              </span>
            </div>

            <h1 className="font-bodoni text-2xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2C241D] leading-[1.1]">
              Crafting Visual Poetry <br />
              <span className="font-script text-3xl sm:text-6xl text-[#B8860B] font-normal lowercase">in Dehradun & hills.</span>
            </h1>

            <div className="w-10 h-[2px] bg-[#C5A059] mx-auto shadow-[0_0_10px_#C5A059]" />

            <p className="font-sans-clean text-[#6B5B52] text-[11px] sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Bringing our world-class luxury wedding documentation, cinematic filmmaking, and fine-art pre-wedding storytelling directly to Dehradun and surrounding scenic venues.
            </p>

            <div className="pt-1.5">
              <div className="inline-block px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#FDF6E3] via-[#F3E5AB] to-[#FDF6E3] border-2 border-[#C5A059] text-[#5A4521] font-sans-clean text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold cursor-default select-none shadow-md">
                Please visit the Contact page to book your session
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT THE DIRECTOR SECTION (SANDEEP KUMAR)
      ======================================================================== */}
      <section className="relative z-10 py-10 sm:py-20 px-3 sm:px-16 max-w-7xl mx-auto border-b border-[#D4AF37]/20">
        <div className="luxury-card p-5 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/5] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#FDF6E3] border border-[#D4AF37]/40 relative group">
                <img 
                  src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1793071985/WhatsApp_Image_2026-10-27_at_9.02.30_AM_iyo1pb.jpg" 
                  alt="Sandeep Kumar Master Photographer" 
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white text-left">
                  <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#E6C594] uppercase block font-bold">Lead Visionary & Founder</span>
                  <h3 className="font-bodoni text-xl sm:text-2xl font-bold">Sandeep Kumar</h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6E3] border border-[#D4AF37]/40 text-[#B8860B] text-[10px] sm:text-xs font-mono-tech uppercase tracking-wider sm:tracking-widest font-bold">
                <Camera size={13} />
                <span>Master Director</span>
              </div>

              <h2 className="font-bodoni text-2xl sm:text-5xl font-bold text-[#2C241D] leading-[1.15]">
                Directed Personally by Sandeep Kumar
              </h2>

              <p className="font-sans-clean text-[#6B5B52] text-[11px] sm:text-base leading-relaxed font-light">
                With years of mastery in luxury wedding documentation and fine-art storytelling, Sandeep Kumar personally oversees every production. Whether capturing grand celebrations in Saharanpur or intimate mountain-backdrop romances in Dehradun, his signature aesthetic ensures your legacy is preserved with uncompromising elegance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="flex items-start gap-2.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/20">
                  <CheckCircle2 className="text-[#B8860B] shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="font-bodoni text-sm sm:text-base font-bold text-[#2C241D]">On-Site Direction</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5B52] font-sans-clean mt-0.5">Personal supervision across all premier assignments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/20">
                  <CheckCircle2 className="text-[#B8860B] shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="font-bodoni text-sm sm:text-base font-bold text-[#2C241D]">Elite Craftsmanship</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5B52] font-sans-clean mt-0.5">Bespoke color grading and cinematic precision.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PORTFOLIO PREVIEW SECTION
      ======================================================================== */}
      <section className="relative z-10 py-10 sm:py-20 px-3 sm:px-16 max-w-7xl mx-auto border-b border-[#D4AF37]/20">
        <div className="text-center mb-6 sm:mb-12 space-y-1.5 sm:space-y-2">
          <span className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
            Dehradun Masterpieces
          </span>
          <h2 className="font-bodoni text-2xl sm:text-5xl font-bold text-[#2C241D]">
            Featured Gallery Preview
          </h2>
          <p className="font-sans-clean text-[11px] sm:text-sm text-[#6B5B52] max-w-md mx-auto">
            A glimpse of our finest frames captured across scenic landscapes and luxury venues.
          </p>
        </div>

        {/* 2 cols on mobile, 3 cols on laptop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8">
          {dehradunPortfolio.map((item, index) => (
            <div
              key={index}
              onClick={() => setLightboxImg(item)}
              className="luxury-card cursor-pointer group text-left p-1 sm:p-4"
            >
              <div className="w-full aspect-[4/5] rounded-lg sm:rounded-2xl overflow-hidden bg-[#F4E6D1] shadow-inner relative">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.98] group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-stone-900 shadow-xl">
                    <Maximize2 size={12} className="sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. THE DEV EXPERIENCE (3 CARDS IN 1 ROW ON MOBILE)
      ======================================================================== */}
      <section className="relative z-10 py-10 sm:py-20 px-3 sm:px-16 max-w-7xl mx-auto border-b border-[#D4AF37]/20">
        <div className="text-center mb-6 sm:mb-14 space-y-1.5 sm:space-y-2">
          <span className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
            WHY CHOOSE US
          </span>
          <h2 className="font-bodoni text-2xl sm:text-5xl font-bold text-[#2C241D]">
            The Dev Experience
          </h2>
          <p className="font-sans-clean text-[11px] sm:text-sm text-[#6B5B52] max-w-xl mx-auto">
            We don't just take photographs; we curate an effortless, luxurious journey that preserves your most cherished milestones.
          </p>
        </div>

        {/* Grid: 3 columns even on mobile screens so all three appear in one row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          {experiencePoints.map((pt, idx) => (
            <div key={idx} className="luxury-card p-3 sm:p-8 text-left space-y-2 sm:space-y-4 bg-[#FFFCF6] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/40 flex items-center justify-center shadow-xs mb-2 sm:mb-0">
                  {pt.icon}
                </div>
                <h3 className="font-bodoni text-xs sm:text-2xl font-bold text-[#2C241D] leading-tight">
                  {pt.title}
                </h3>
              </div>
              <p className="font-sans-clean text-[9px] sm:text-sm text-[#6B5B52] leading-relaxed hidden sm:block">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. FAQ SECTION (COMPACT & CLEAN MOBILE DISPLAY)
      ======================================================================== */}
      <section className="relative z-10 py-10 sm:py-20 px-3 sm:px-16 max-w-5xl mx-auto">
        <div className="text-center space-y-1.5 sm:space-y-2 mb-6 sm:mb-12">
          <span className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
            DEHRADUN INQUIRIES
          </span>
          <h2 className="font-bodoni text-2xl sm:text-5xl font-bold text-[#2C241D]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2 sm:space-y-4">
          {dehradunFaqs.map((faq, idx) => (
            <div key={idx} className="luxury-card rounded-xl sm:rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-3.5 sm:p-6 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none bg-[#FFFCF6]"
              >
                <span className="font-bodoni text-xs sm:text-xl font-bold text-[#2C241D] pr-2 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`text-[#B8860B] shrink-0 transition-transform duration-300 sm:w-5 sm:h-5 ${openFaq === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              {openFaq === idx && (
                <div className="px-3.5 pb-3.5 sm:px-6 sm:pb-6 text-[11px] sm:text-sm text-[#6B5B52] leading-relaxed font-sans-clean border-t border-[#D4AF37]/20 pt-3 sm:pt-4 bg-[#FFFCF6]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL
      ======================================================================== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[99999] bg-[#2C241D]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <span>Close</span>
            <X size={16} />
          </button>

          <div className="max-w-4xl max-h-[85vh] relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.url}
              alt={lightboxImg.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <span className="font-mono-tech text-xs tracking-widest text-[#E6C594] uppercase block font-bold">
                {lightboxImg.category}
              </span>
              <h3 className="font-bodoni text-2xl font-bold">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}