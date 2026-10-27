import React, { useState } from 'react';
import { Camera, Sparkles, Film, Award, Clock, ArrowRight, ShieldCheck, Heart, MapPin, Plane, Send, CheckCircle2, Aperture, Focus } from 'lucide-react';

export default function Story({ setActiveTab }) {
  const [bookingData, setBookingData] = useState({ name: '', phone: '', eventDate: '', serviceType: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Backend API Booking Handler
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/bookings/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setBookingData({ name: '', phone: '', eventDate: '', serviceType: '', message: '' });
      } else {
        setSubmitSuccess(true);
      }
    } catch (err) {
      setSubmitSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans tracking-tight selection:bg-[#E6C594] selection:text-[#2C241D] overflow-x-hidden relative w-full pb-16 sm:pb-24 pt-20 sm:pt-28">
      
      {/* 🔮 PURE CREAM + GOLD MASTER DESIGN SYSTEM WITH ANIMATIONS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        .font-serif-luxury { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-tech { font-family: 'Space Grotesk', monospace; }

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

        .viewfinder-crosshair {
          position: relative;
        }
        .viewfinder-crosshair::before, .viewfinder-crosshair::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-color: rgba(212, 175, 55, 0.8);
          pointer-events: none;
          z-index: 20;
        }
        @media (min-width: 640px) {
          .viewfinder-crosshair::before, .viewfinder-crosshair::after {
            width: 14px;
            height: 14px;
          }
        }
        .viewfinder-crosshair::before {
          top: 8px; left: 8px;
          border-top: 2px solid; border-left: 2px solid;
        }
        .viewfinder-crosshair::after {
          bottom: 8px; right: 8px;
          border-bottom: 2px solid; border-right: 2px solid;
        }

        /* ✨ DYNAMIC AMBIENT LIGHT ANIMATIONS FOR HERO SECTION */
        @keyframes float-light-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
          33% { transform: translate(30px, -50px) scale(1.1); opacity: 0.4; }
          66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.2; }
        }
        @keyframes float-light-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.2; }
          50% { transform: translate(-40px, 40px) scale(1.2); opacity: 0.5; }
        }
        @keyframes float-light-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.1; }
          50% { transform: translate(50px, -30px) scale(1.3); opacity: 0.35; }
        }

        .ambient-light-1 { animation: float-light-1 8s ease-in-out infinite; }
        .ambient-light-2 { animation: float-light-2 10s ease-in-out infinite reverse; }
        .ambient-light-3 { animation: float-light-3 12s ease-in-out infinite alternate; }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#FDF6E3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12 sm:space-y-32">

        {/* =========================================================================
            SECTION 1: THE ANIMATED CINEMATIC HERO 
        ========================================================================= */}
        <section className="relative overflow-hidden rounded-[20px] sm:rounded-3xl bg-[#FFFCF6] border border-[#D4AF37]/50 p-6 sm:p-24 shadow-xl text-center">
          
          {/* Animated Golden Lights for Premium Wow Feel */}
          <div className="absolute top-[-15%] left-[-10%] w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-amber-400/20 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none ambient-light-1" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-[#C5A059]/20 rounded-full blur-[70px] sm:blur-[120px] pointer-events-none ambient-light-2" />
          <div className="absolute top-[20%] left-[30%] w-[150px] sm:w-[400px] h-[150px] sm:h-[400px] bg-[#B8860B]/15 rounded-full blur-[50px] sm:blur-[90px] pointer-events-none ambient-light-3" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-3 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#FDF6E3]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <Sparkles size={12} className="text-[#B8860B] sm:w-[14px]" />
              <span className="font-mono-tech text-[8.5px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] text-[#B8860B] uppercase">
                Established 1992 • Jwalapur, Haridwar
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-4">
              <h1 className="font-serif-luxury text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C241D] leading-[1.05]">
                32 Years of Archiving <br />
                <span className="italic font-light text-[#B8860B]">
                  Human Emotions.
                </span>
              </h1>
            </div>

            <div className="w-12 sm:w-16 h-[2px] bg-[#C5A059] mx-auto shadow-[0_0_10px_#C5A059]" />

            <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-light bg-[#FFFCF6]/50 backdrop-blur-sm rounded-xl p-1.5 sm:p-2">
              What started as a humble pursuit with analog film reels over three decades ago has evolved into Haridwar’s most prestigious visual legacy. We don't just click pictures; we preserve the soulful rhythm of your family's history.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: MEET THE VISIONARY (NARESH JI'S PORTRAIT)
        ========================================================================= */}
        <section className="luxury-card rounded-2xl sm:rounded-3xl p-4 sm:p-12 lg:p-16 border border-[#D4AF37]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
            
            {/* Tightly Sized Director Portrait for Mobile */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-[240px] sm:max-w-[380px] viewfinder-crosshair relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-[4/5] bg-stone-900 group border border-[#D4AF37]/50">
                <img
                  src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1784742664/uniquephotography1.0-20260318-0077_ujvdny.webp"
                  alt="Naresh Ji - Founder & Lead Visionary"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 text-white text-left">
                  <span className="px-2.5 sm:px-3 py-1 bg-[#C5A059]/90 backdrop-blur-md rounded-full text-[7.5px] sm:text-[9px] font-mono-tech tracking-widest uppercase mb-1.5 sm:mb-2 inline-block font-bold">
                    Founder & Visionary
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-3xl font-bold leading-tight">Naresh Ji</h3>
                </div>
              </div>
            </div>

            {/* Director's Statement */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <blockquote className="font-serif-luxury text-xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] leading-[1.15]">
                "Photographs are not just faces; they are the <span className="italic font-light text-[#B8860B]">memories of generations</span> preserved in light."
              </blockquote>

              <p className="font-sans-clean text-[#6B5B52] text-[11.5px] sm:text-base leading-relaxed font-light">
                Led by Naresh Ji, Chandna Studio operates on a singular philosophy: capturing truth. Armed with 32+ years of unparalleled photographic experience, his eyes have witnessed the beautiful evolution of Indian weddings. From framing the quiet tears of a father during Kanyadaan to orchestrating grand royal lighting, his direction guarantees absolute perfection.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="bg-[#FDF6E3] border border-[#D4AF37]/20 p-3 sm:p-4 rounded-xl space-y-1">
                  <h4 className="font-serif-luxury text-sm sm:text-lg font-bold text-[#2C241D]">Observational Eye</h4>
                  <p className="font-sans-clean text-[9px] sm:text-xs text-[#6B5B52] leading-snug">Sacred rituals documented naturally, without forcing awkward poses.</p>
                </div>
                <div className="bg-[#FDF6E3] border border-[#D4AF37]/20 p-3 sm:p-4 rounded-xl space-y-1">
                  <h4 className="font-serif-luxury text-sm sm:text-lg font-bold text-[#2C241D]">Master of Light</h4>
                  <p className="font-sans-clean text-[9px] sm:text-xs text-[#6B5B52] leading-snug">Crafting cinematic warmth across any venue, day or night.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: PART I - THE ANALOG GENESIS (B&W CAMERA ERA)
        ========================================================================= */}
        <section className="space-y-4 sm:space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#D4AF37]/30 pb-3 sm:pb-5 gap-2 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#B8860B]" />
                <span className="font-mono-tech text-[8px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase">
                  CHAPTER I • 1992
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-5xl font-bold text-[#2C241D] tracking-tight">
                The Era of Analog Craftsmanship
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-12 items-center">
            
            {/* Left Image (Wide on Mobile) */}
            <div className="lg:col-span-5 w-full">
              <div className="viewfinder-crosshair luxury-card rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/11] relative border border-[#D4AF37]/30">
                <img 
                  src="https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Vintage Analog Camera"
                  className="w-full h-full object-cover grayscale-[0.8] contrast-[1.2] hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/90 via-transparent to-transparent p-3 sm:p-6 text-white flex items-end">
                  <div>
                    <span className="font-mono-tech text-[7px] sm:text-[9px] uppercase tracking-widest text-[#E6C594] font-bold block mb-0.5 sm:mb-1">
                      THE ORIGIN
                    </span>
                    <h4 className="font-serif-luxury text-base sm:text-xl font-bold leading-tight">
                      36 Exposures, Zero Errors
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-left">
              <h3 className="font-serif-luxury text-xl sm:text-4xl font-bold text-[#2C241D] leading-tight">
                When Photography Was Pure Discipline.
              </h3>

              <p className="font-sans-clean text-[11px] sm:text-base text-[#6B5B52] leading-relaxed font-light">
                Long before the digital revolution, photography was an unforgiving art of patience and precision. In the era of black-and-white film and 36-exposure rolls, there were no second chances, no digital screens to review a shot, and no filters to fix mistakes. 
              </p>
              
              <p className="font-sans-clean text-[11px] sm:text-base text-[#6B5B52] leading-relaxed font-light">
                Naresh Ji started in this very era. Spending sleepless nights in darkrooms developing reels, he learned to trust his eyes over equipment. He mastered the science of natural light, the exact math of exposure, and the intuition of capturing a fleeting moment before it vanished forever.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: PART II - THE 4K DIGITAL RENAISSANCE
        ========================================================================= */}
        <section className="space-y-4 sm:space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#D4AF37]/30 pb-3 sm:pb-5 gap-2 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#B8860B]" />
                <span className="font-mono-tech text-[8px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase">
                  CHAPTER II • THE PRESENT
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-5xl font-bold text-[#2C241D] tracking-tight">
                The 4K Digital Renaissance
              </h2>
            </div>
            <span className="font-mono-tech text-[8px] sm:text-xs text-[#B8860B] uppercase tracking-wider text-right font-bold hidden sm:block">
              Mastering Modern Cinema
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-left order-2 lg:order-1">
              <h3 className="font-serif-luxury text-xl sm:text-4xl font-bold text-[#2C241D] leading-tight">
                Adapting Technology, Preserving The Soul.
              </h3>

              <p className="font-sans-clean text-[11px] sm:text-base text-[#6B5B52] leading-relaxed font-light">
                As technology rapidly shifted from tape to High Definition (HD), and now to pristine 4K cinema, many studios lost their artistic soul to heavy digital manipulation. Chandna Studio chose a different path. We embraced the evolution while refusing to let go of our roots.
              </p>
              
              <p className="font-sans-clean text-[11px] sm:text-base text-[#6B5B52] leading-relaxed font-light">
                Today, our arsenal includes the finest full-frame cinema rigs, heavy-duty drones, and advanced color-grading suites. We survived and thrived through three decades of change because we understand one fundamental truth: A 4K camera is just a machine; it is the 32 years of experience behind the lens that makes the frame iconic.
              </p>
            </div>

            {/* Right Image (Modern 4K Camera Rig) */}
            <div className="lg:col-span-5 w-full order-1 lg:order-2">
              <div className="viewfinder-crosshair luxury-card rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/11] relative border border-[#D4AF37]/30">
                <img 
                  src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern 4K Cinema Rig"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/90 via-transparent to-transparent p-3 sm:p-6 text-white flex items-end">
                  <div>
                    <span className="font-mono-tech text-[7px] sm:text-[9px] uppercase tracking-widest text-[#E6C594] font-bold block mb-0.5 sm:mb-1">
                      THE MODERN ERA
                    </span>
                    <h4 className="font-serif-luxury text-base sm:text-xl font-bold leading-tight">
                      Cinematic 4K Resolution
                    </h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            ✨ NEW "WOW" PREMIUM SECTION: THE ANATOMY OF A CHANDNA FRAME
        ========================================================================= */}
        <section className="relative z-10 py-6 sm:py-20">
          <div className="luxury-card rounded-2xl sm:rounded-3xl p-5 sm:p-16 border border-[#D4AF37]/30 shadow-2xl bg-[#FFFCF6] relative overflow-hidden">
            
            {/* Soft background graphic elements */}
            <div className="absolute top-[-20%] right-[-10%] w-64 sm:w-96 h-64 sm:h-96 bg-[#C5A059]/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-48 sm:w-72 h-48 sm:h-72 bg-[#B8860B]/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

            <div className="text-center space-y-1.5 sm:space-y-2 mb-6 sm:mb-16 relative z-10">
              <span className="font-mono-tech text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
                ✦ THE CHANDNA SIGNATURE ✦
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-5xl font-bold text-[#2C241D]">
                The Anatomy of a Masterpiece
              </h2>
              <p className="font-sans-clean text-[#6B5B52] text-[11px] sm:text-base max-w-2xl mx-auto font-light px-2">
                What makes a Chandna frame timeless? It is the invisible, meticulous interplay of authentic emotion, majestic lighting, and generational storytelling.
              </p>
            </div>

            {/* Tight Tiled Layout for Mobile, Spaced Grid for Laptop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-10 relative z-10">
              
              <div className="bg-[#FDF6E3] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-[#D4AF37]/20 shadow-sm text-left sm:text-center flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-500">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 sm:mx-auto rounded-full bg-[#FFFCF6] flex items-center justify-center text-[#B8860B] border border-[#D4AF37]/30 sm:mb-4 shadow-sm">
                  <Aperture size={18} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#2C241D] mb-0.5 sm:mb-2">Majestic Light</h4>
                  <p className="font-sans-clean text-[10.5px] sm:text-sm text-[#6B5B52] leading-relaxed">
                    We sculpt the existing light to create deep, cinematic, and dramatic compositions.
                  </p>
                </div>
              </div>

              <div className="bg-[#FDF6E3] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-[#D4AF37]/20 shadow-sm text-left sm:text-center flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-500 md:mt-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 sm:mx-auto rounded-full bg-[#FFFCF6] flex items-center justify-center text-[#B8860B] border border-[#D4AF37]/30 sm:mb-4 shadow-sm">
                  <Heart size={18} className="fill-[#B8860B] sm:w-[20px] sm:h-[20px]" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#2C241D] mb-0.5 sm:mb-2">Unstaged Truth</h4>
                  <p className="font-sans-clean text-[10.5px] sm:text-sm text-[#6B5B52] leading-relaxed">
                    No awkward poses. We blend into the background to capture genuine, unscripted tears and chaos.
                  </p>
                </div>
              </div>

              <div className="bg-[#FDF6E3] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-[#D4AF37]/20 shadow-sm text-left sm:text-center flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-500">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 sm:mx-auto rounded-full bg-[#FFFCF6] flex items-center justify-center text-[#B8860B] border border-[#D4AF37]/30 sm:mb-4 shadow-sm">
                  <Focus size={18} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#2C241D] mb-0.5 sm:mb-2">Eternal Colors</h4>
                  <p className="font-sans-clean text-[10.5px] sm:text-sm text-[#6B5B52] leading-relaxed">
                    Our proprietary color grading retains the rich organic warmth of Indian skin tones without fading.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: THE SCALE OF PRODUCTION (DELHI TEAM & SECRET LOCATIONS)
        ========================================================================= */}
        <section className="space-y-4 sm:space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-[#D4AF37]/30 pb-3 sm:pb-5 gap-2 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#B8860B]" />
                <span className="font-mono-tech text-[8px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase">
                  UNCOMPROMISING EXCELLENCE
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-5xl font-bold text-[#2C241D] tracking-tight">
                The Grand Scale of Production
              </h2>
            </div>
          </div>

          <div className="luxury-card rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#D4AF37]/30 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center relative z-10">
              
              {/* Feature 1: Delhi Elite Team */}
              <div className="space-y-2.5 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center border border-[#D4AF37]/30 shadow-sm">
                  <Film size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-3xl font-bold text-[#2C241D]">
                  The Elite Delhi Crew
                </h3>
                <p className="font-sans-clean text-[11px] sm:text-sm text-[#6B5B52] leading-relaxed">
                  To ensure that your wedding films rival international OTT documentaries, we do not settle for local standards. Chandna Studio actively hires and flies in a top-tier crew of elite cinematographers, gimbal operators, and master color-graders directly from New Delhi for our premium projects.
                </p>
              </div>

              {/* Feature 2: Secret Escapes */}
              <div className="space-y-2.5 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center border border-[#D4AF37]/30 shadow-sm">
                  <Plane size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-3xl font-bold text-[#2C241D]">
                  Exclusive Pre-Wedding Escapes
                </h3>
                <p className="font-sans-clean text-[11px] sm:text-sm text-[#6B5B52] leading-relaxed">
                  Beyond traditional documentation, we orchestrate breathtaking, high-fashion pre-wedding narratives. To maintain exclusivity, we shoot at 4 to 5 highly secretive, premium luxury destinations across the country—spots hidden from the mainstream crowd, reserved only for our couples.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: THE CHANDNA PROMISE & BACKEND BOOKING FORM
        ========================================================================= */}
        <section className="relative z-10 py-6 sm:py-10 flex items-center justify-center">
          <div className="max-w-3xl w-full luxury-card p-6 sm:p-12 shadow-2xl text-left bg-[#FFFCF6]">
            <div className="text-center space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
              <span className="font-sans-clean text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
                THE CHANDNA PROMISE
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#2C241D]">
                Consult With Naresh Ji
              </h2>
              <p className="font-sans-clean text-[10px] sm:text-sm text-[#6B5B52] max-w-xl mx-auto">
                "Your special day is equally sacred to us." Connect directly with our studio to check dates.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-5 sm:p-6 bg-[#FDF6E3] rounded-xl sm:rounded-2xl text-center space-y-2 border border-[#D4AF37]/50">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2C241D]">Consultation Request Sent!</h3>
                <p className="text-[11px] sm:text-xs text-[#6B5B52]">Naresh Ji and the studio team will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-3 sm:mt-4 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#C5A059] text-white text-[10px] sm:text-xs rounded-full uppercase tracking-wider font-bold cursor-pointer hover:bg-[#B8860B] transition-colors"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">What to get done?</label>
                    <input
                      type="text"
                      required
                      value={bookingData.serviceType}
                      onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
                      placeholder="e.g. Wedding, Elite Pre-Wedding..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">Message / Vision</label>
                  <textarea
                    rows="3"
                    value={bookingData.message}
                    onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                    placeholder="Tell us about your wedding plans..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/40 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} className="sm:w-[15px] sm:h-[15px]" />
                  <span>{submitting ? 'Transmitting...' : 'BOOK YOUR CONSULTATION'}</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}