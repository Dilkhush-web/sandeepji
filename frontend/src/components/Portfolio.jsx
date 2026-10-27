import React, { useState } from 'react';
import { ArrowRight, Maximize2, Sparkles, Camera, Award, ShieldCheck, Send, Clock, CheckCircle2, Layers, PhoneCall, BookOpen, X } from 'lucide-react';

export default function Portfolio({ setActiveTab }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [bookingData, setBookingData] = useState({ name: '', phone: '', eventDate: '', serviceType: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 👑 Clean Category Tiers for The Dev Photography (Haldi replaced with Birthday Parties)
  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'wedding', label: 'Royal Vivah' },
    { id: 'prewedding', label: 'Couture Pre-Wedding' },
    { id: 'birthday', label: 'Birthday Parties' },
    { id: 'Metrnity', label: 'Metrnity' }
  ];

  // 📈 High-Resolution Dataset tailored for Saharanpur & Beyond (Instant HD Loading with f_auto,q_auto)
  const portfolioItems = [
    { id: 1, category: "wedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602483/DEV00525_copy-8mb_ajj25t.jpg" },
    { id: 2, category: "wedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602521/2I0A5743-8mb_xnljec.jpg" },
    { id: 3, category: "wedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602493/2I0A5750-8mb_egprrg.jpg" },
    { id: 4, category: "wedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602471/2I0A5812-8mb_nsdx3f.jpg" },
    { id: 5, category: "wedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1788587743/IMG_3058.JPG_n0uvy4.jpg" },
    { id: 6, category: "wedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602485/DEV08874_copy-8mb_islgab.jpg" },

    { id: 7, category: "prewedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602514/DEV09947-8mb_ck1vmm.jpg" },
    { id: 8, category: "prewedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602489/DEV05774-8mb_y7fbaz.jpg" },
    { id: 9, category: "prewedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602442/DEV00663_copy-8mb_enj3s9.jpg" },
    { id: 10, category: "prewedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602463/DEV05582-8mb_thyioc.jpg" },
    { id: 11, category: "prewedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602433/DEV00595_copy-8mb_envayo.jpg" },
    { id: 12, category: "prewedding", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602424/01_7-8mb_eqz3q8.jpg" },

    { id: 13, category: "birthday", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602561/DSC02958_copy-8mb_ajyath.jpg" },
    { id: 14, category: "birthday", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602554/DSC00686aa-8mb_ksduz8.jpg" },
    { id: 15, category: "birthday", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602553/DSC02878_copy-8mb_xxmndx.jpg" },
    { id: 16, category: "birthday", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602552/DSC02738_copy-8mb_oa6bty.jpg" },
    { id: 17, category: "birthday", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792602515/DSC00650a_1-8mb_bumedg.jpg" },
    { id: 18, category: "birthday", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792606339/DSC02896_copy-8mb_o2ok9g.jpg" },

    { id: 19, category: "Metrnity", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792607278/DSC01442-8mb_emlwho.jpg" },
    { id: 20, category: "Metrnity", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792607227/DSC03503-8mb_yyhqkw.jpg" },
    { id: 21, category: "Metrnity", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792607310/DSC03581-8mb_qxlnps.jpg" },
    { id: 22, category: "Metrnity", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792607285/13-8mb_p9ckmq.jpg" },
    { id: 23, category: "Metrnity", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792607396/DSC01541-8mb_tzuojp.jpg" },
    { id: 24, category: "Metrnity", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/f_auto,q_auto/v1792607311/DSC01507_copy-8mb_vxetdz.jpg" }
  ];

  const getFilteredItems = () => {
    if (activeFilter === 'all') return portfolioItems;
    return portfolioItems.filter(item => item.category === activeFilter);
  };

  const dynamicRenderPool = getFilteredItems();

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

  return (
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans selection:bg-[#E6C594] selection:text-[#2C241D] overflow-x-hidden relative w-full min-h-screen pt-20 sm:pt-28 pb-24">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Snell+Roundhand:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
        
        .font-bodoni { font-family: 'Bodoni Moda', serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }
        .font-abril { font-family: 'Abril Fatface', serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-tech { font-family: 'Space Grotesk', monospace; }

        .portfolio-glass-card {
          background: #FFFCF6;
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          box-shadow: 0 15px 30px rgba(184, 134, 11, 0.05);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 640px) {
          .portfolio-glass-card { border-radius: 32px; box-shadow: 0 20px 40px rgba(184, 134, 11, 0.06); }
        }

        .portfolio-glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.7);
          box-shadow: 0 30px 60px rgba(184, 134, 11, 0.15), 0 0 25px rgba(230, 197, 148, 0.4);
        }

        @keyframes float-light-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
          50% { transform: translate(30px, -50px) scale(1.1); opacity: 0.4; }
        }
        .ambient-light-1 { animation: float-light-1 8s ease-in-out infinite; }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#FDF6E3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-32">

        {/* =========================================================================
            1. DYNAMIC HERO SECTION (THE DEV PHOTOGRAPHY)
        ========================================================================= */}
        <section className="relative overflow-hidden rounded-[24px] sm:rounded-3xl bg-[#FFFCF6] border border-[#D4AF37]/50 p-6 sm:p-20 shadow-xl text-center">
          <div className="absolute top-[-15%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-400/30 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none ambient-light-1" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#FDF6E3]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <Sparkles size={12} className="text-[#B8860B] sm:w-3.5 sm:h-3.5" />
              <span className="font-mono-tech text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#B8860B] uppercase">
                The Dev Photography Master Vault • Saharanpur
              </span>
            </div>

            <h1 className="font-bodoni text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#2C241D] tracking-tight leading-[1.1]">
              The Fine-Art <br />
              <span className="font-script text-5xl sm:text-7xl text-[#B8860B] font-normal lowercase">photography gallery.</span>
            </h1>

            <div className="w-12 sm:w-16 h-[2px] bg-[#C5A059] mx-auto shadow-[0_0_10px_#C5A059]" />

            <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-light bg-[#FFFCF6]/40 backdrop-blur-sm rounded-xl p-2">
              Explore our curated optical archives showcasing royal weddings, candid pre-wedding romances, and vibrant birthday celebrations captured with immaculate fine-art precision by Sandeep Kumar.
            </p>

            {/* Category Filter Pills */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-mono-tech uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    activeFilter === cat.id
                      ? 'bg-[#C5A059] text-white shadow-md scale-105'
                      : 'bg-[#FFFCF6]/80 backdrop-blur-md text-[#6B5B52] hover:text-[#2C241D] border border-[#D4AF37]/30 hover:border-[#C5A059] shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. UNIFORM EQUAL-SIZED IMAGE CARDS GRID (LIGHTNING FAST 2-SECOND HD LOADING)
        ========================================================================= */}
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {dynamicRenderPool.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setLightboxImg(item)}
              className="portfolio-glass-card p-1.5 sm:p-4 rounded-xl sm:rounded-3xl overflow-hidden cursor-pointer group text-left relative"
            >
              <div className="w-full aspect-[4/5] rounded-lg sm:rounded-2xl overflow-hidden bg-[#FDF6E3] relative shadow-inner">
                <img
                  src={item.img}
                  alt="The Dev Photography Masterpiece"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.98] group-hover:brightness-105"
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
        </section>

        {/* =========================================================================
            3. HEIRLOOM ALBUM COLLECTION
        ========================================================================= */}
        <section className="portfolio-glass-card p-6 sm:p-16 bg-[#FFFCF6] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
            
            <div className="lg:col-span-5">
              <div className="w-full aspect-square sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#FDF6E3] border border-[#D4AF37]/40 relative group">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzuiOx0cW9svbl1HR9uEn47OeIQHKPcrzrJmRqBW-1A&s=10" 
                  alt="Signature Heirloom Albums" 
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white text-left">
                  <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.25em] text-[#E6C594] uppercase block">Museum Grade</span>
                  <h3 className="font-bodoni text-xl sm:text-2xl font-bold">Heirloom Albums</h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#FDF6E3] border border-[#D4AF37]/40 text-[#B8860B] text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest font-bold">
                <BookOpen size={12} className="sm:w-3.5 sm:h-3.5" />
                <span>Tangible Memories</span>
              </div>

              <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] leading-[1.15]">
                The Signature Heirloom Collection
              </h2>

              <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base leading-relaxed font-light">
                Digital files fade into the archives of time, but a finely crafted album becomes a generational artifact. Our Signature Heirloom Albums are handcrafted using archival-grade, acid-free cotton paper that guarantees true-to-life color reproduction for over a century. Featuring bespoke leather covers, elegant gold embossing, and lay-flat panoramic binding, each album is a physical testament to your legacy.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/20 shadow-sm">
                  <h4 className="font-bodoni text-base sm:text-lg font-bold text-[#2C241D]">Archival Paper</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5B52] font-sans-clean mt-0.5">100+ years fade-resistant print.</p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/20 shadow-sm">
                  <h4 className="font-bodoni text-base sm:text-lg font-bold text-[#2C241D]">Lay-Flat Binding</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5B52] font-sans-clean mt-0.5">Seamless panoramic viewing.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. WHY HIRE US SECTION (WITH SANDEEP KUMAR PHOTO)
        ========================================================================= */}
        <section className="portfolio-glass-card p-6 sm:p-16 bg-[#FFFCF6]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#FDF6E3] border border-[#D4AF37]/40 text-[#B8860B] text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest font-bold">
                <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                <span>Excellence in Photographic Mastery</span>
              </div>

              <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] leading-[1.1]">
                Why Entrust Your Sacred Milestones to The Dev Photography?
              </h2>

              <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base leading-relaxed font-light">
                Led by Sandeep Kumar in Saharanpur, our studio sets the benchmark for high-end wedding documentation. We combine generational expertise with cutting-edge 4K cinema gear to ensure your memories are captured with absolute perfection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/20">
                  <CheckCircle2 className="text-[#B8860B] shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="font-bodoni text-base sm:text-lg font-bold text-[#2C241D]">Master Lighting</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5B52] font-sans-clean mt-0.5">Expertise in handling complex venue architecture & golden hour lighting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FDF6E3] border border-[#D4AF37]/20">
                  <CheckCircle2 className="text-[#B8860B] shrink-0 mt-0.5" size={16} />
                  <div>
                    <h4 className="font-bodoni text-base sm:text-lg font-bold text-[#2C241D]">Zero Data Loss</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5B52] font-sans-clean mt-0.5">Dual-card redundancy cameras recording every single ritual simultaneously.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#FDF6E3] border border-[#D4AF37]/40 relative group">
                <img 
                  src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1793071985/WhatsApp_Image_2026-10-27_at_9.02.30_AM_iyo1pb.jpg" 
                  alt="Sandeep Kumar Master Photographer" 
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white text-left">
                  <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.25em] text-[#E6C594] uppercase block">Lead Visionary</span>
                  <h3 className="font-bodoni text-xl sm:text-2xl font-bold">Sandeep Kumar</h3>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. BOOKING FORM SECTION (API CONNECTED TO LIVE INQUIRY)
        ======================================================================== */}
        <section id="booking-section" className="relative z-10 py-6 sm:py-12 px-1 flex items-center justify-center">
          <div className="max-w-3xl w-full portfolio-glass-card p-6 sm:p-12 shadow-2xl text-left bg-[#FFFCF6]">
            <div className="text-center space-y-2 mb-6 sm:mb-8">
              <span className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
                SECURE YOUR DATE WITH THE DEV PHOTOGRAPHY
              </span>
              <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-[#2C241D]">
                Book Your Session
              </h2>
              <p className="font-sans-clean text-[11px] sm:text-xs text-[#6B5B52]">
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
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/50 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/50 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">Event Date</label>
                    <input
                      type="date"
                      required
                      value={bookingData.eventDate}
                      onChange={(e) => setBookingData({ ...bookingData, eventDate: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/50 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1">What to get done?</label>
                    <input
                      type="text"
                      required
                      value={bookingData.serviceType}
                      onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
                      placeholder="e.g. Royal Wedding, Birthday..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/50 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FDF6E3] border border-[#D4AF37]/50 text-xs sm:text-sm text-[#2C241D] focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[10px] sm:text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} className="sm:w-[15px] sm:h-[15px]" />
                  <span>{submitting ? 'Transmitting to Server...' : 'SUBMIT BOOKING REQUEST'}</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </div>

      {/* =========================================================================
          LIGHTBOX VIEWER (INSTANT OPEN & HD RENDERING)
      ======================================================================== */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[999999] bg-[#2C241D]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono-tech text-[10px] sm:text-xs uppercase tracking-widest transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer border border-white/20"
            onClick={() => setLightboxImg(null)}
          >
            <span>Close Viewer</span>
            <X size={14} className="sm:w-4 sm:h-4" />
          </button>
          
          <div 
            className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImg.img} 
              alt="The Dev Photography Frame" 
              loading="eager"
              decoding="async"
              className="max-w-full max-h-[74vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/20" 
            />
            <div className="text-center text-white space-y-0.5 sm:space-y-1">
              <span className="font-mono-tech text-[9px] sm:text-xs tracking-widest text-[#E6C594] uppercase block font-bold">
                {lightboxImg.category} Archive
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}