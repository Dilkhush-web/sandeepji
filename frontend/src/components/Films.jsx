import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  ArrowRight, 
  Phone, 
  Camera, 
  Award, 
  ShieldCheck, 
  Clapperboard, 
  Volume2, 
  VolumeX, 
  Layers, 
  PhoneCall 
} from 'lucide-react';

export default function Films({ setActiveTab }) {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [mutedStates, setMutedStates] = useState({});
  const videoRefs = useRef([]);

  const premiumVideos = [
    {
      id: 1,
      title: "The Royal Vivah Legacy",
      category: "HERITAGE CINEMA",
      desc: "A celebration of regal heritage and sacred promises, etched forever in the chapters of our forever.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/v1792602031/COUPLE_xdnd8a.mp4"
    },
    {
      id: 2,
      title: "The Couture Pre-Wedding",
      category: "COUTURE NARRATIVE",
      desc: "Before the big day begins, a quiet celebration of the laughter, love, and magic we share.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787917004/Abhishek_SwatiShot_by_-_foreverstudios.in_zo_wed_shaadisquad_shaadisaga.official_wedmegoo_vqahr8.mp4"
    },
    {
      id: 3,
      title: "Marriage Anniversary ",
      category: "CELEBRATION CINEMA",
      desc: "Celebrating another year of beautiful tomorrows, endless love, and cherished moments together.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1791275179/Video-37941_umyuae.mp4"
    },
    {
      id: 4,
      title: "Varmala Royal Symphony",
      category: "SACRED ENCORE",
      desc: "Where two souls promise to walk together through every season of life with pure devotion.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787917023/Captured_emotions_not_just_moments_Book_your_wedding_now_zchs8l.mp4"
    },
    {
      id: 5,
      title: "Golden Hour Romance",
      category: "COUPLE PORTRAITURE",
      desc: "Captured across sacred locations during dusk with effortless unscripted glances.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/v1784910407/BOOK_UR_PRE-WEDDING_RIGHT_NOW_%EF%B8%8F.._Prewedding_couple_video_Prewedding_video_Varanasi_vide_nc7krt.mp4"
    },
    {
      id: 6,
      title: "The Palace Ritual Heritage",
      category: "TRADITIONAL VIVAH",
      desc: "A timeless celebration of heritage, family bonds, and the beautiful beginning of forever.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1784909330/Best_Cinematic_Teaser_--_Wedding_Teaser_--_2026_--_cinematic_shortsvideo_youtube_video_reel_1_vgxihz.mp4"
    }
  ];

  // 🎬 YAHAN APNE 6 ALAG-ALAG YOUTUBE VIDEOS KE LINKS DAL SAKTE HAIN
  const youtubeLinks = [
    { id: "yt1", title: "Cinematic Wedding Feature 2026", url: "https://youtu.be/7XsjmL-qFBg?si=eh2LEr1hVqXz1Pt0" },
    { id: "yt2", title: "Saharanpur Royal Destination Vows", url: "https://youtu.be/FtYUdiBnvFc?si=51v2IADLE2hmkLjL" },
    { id: "yt3", title: "Candid Pre-Wedding Story Reel", url: "https://youtu.be/mg-6Ap37Evg?si=Yg2eqs33iOGcstbt" },
    { id: "yt4", title: "Traditional Haldi & Sangeet Night", url: "https://youtu.be/M_pObkfidqk?si=4bN-jwkMDO7qrs3p" },
    { id: "yt5", title: "Grand Reception Highlights", url: "https://youtu.be/ZyxD_qvYhhY?si=MYujKGnH83iv-11Z" },
    { id: "yt6", title: "The Dev Photography Teaser Cut", url: "https://youtu.be/Cqb5qm5DsOg?si=1g7yntpbGGscxloy" }
  ];

  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    const initialMutes = {};
    premiumVideos.forEach((_, idx) => { initialMutes[idx] = true; });
    setMutedStates(initialMutes);
  }, []);

  const toggleAudio = (index) => {
    const willBeMuted = !mutedStates[index];
    videoRefs.current.forEach((vidEl, idx) => {
      if (vidEl) {
        if (idx === index) vidEl.muted = willBeMuted;
        else if (!willBeMuted) vidEl.muted = true;
      }
    });

    if (!willBeMuted) {
      const newStates = {};
      premiumVideos.forEach((_, idx) => { newStates[idx] = idx !== index; });
      setMutedStates(newStates);
    } else {
      setMutedStates(prev => ({ ...prev, [index]: true }));
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

        .cinema-glass-card {
          background: #FFFCF6;
          border-radius: 16px;
          border: 2px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 10px 25px rgba(184, 134, 11, 0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 640px) {
          .cinema-glass-card { border-radius: 24px; border-width: 2px; }
        }

        .cinema-glass-card:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.8);
          box-shadow: 0 20px 40px rgba(184, 134, 11, 0.12);
        }

        @keyframes float-light-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
          50% { transform: translate(30px, -50px) scale(1.1); opacity: 0.4; }
        }
        .ambient-light-1 { animation: float-light-1 8s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#FDF6E3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-32">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[24px] sm:rounded-3xl bg-[#FFFCF6] border-2 border-[#D4AF37]/50 p-6 sm:p-20 shadow-xl text-center">
          <div className="absolute top-[-15%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-400/30 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none ambient-light-1" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FDF6E3]/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <span className="font-mono-tech text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#B8860B] uppercase">
                The Dev Photography • Saharanpur
              </span>
            </div>

            <h1 className="font-bodoni text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#2C241D] tracking-tight leading-[1.1]">
              The Cinematic <br />
              <span className="font-script text-5xl sm:text-7xl text-[#B8860B] font-normal lowercase">motion archive.</span>
            </h1>

            <div className="w-12 sm:w-16 h-[2px] bg-[#C5A059] mx-auto shadow-[0_0_10px_#C5A059]" />

            <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
              At <strong>The Dev Photography</strong>, led by Sandeep Kumar, we believe every celebration is a living poem. Our cinematic approach blends documentary honesty with editorial elegance, preserving your most cherished milestones with absolute artistic depth across Saharanpur and PAN India.
            </p>
          </div>
        </section>

        {/* NATIVE VIDEO GRID (2 PER ROW) */}
        <section className="grid grid-cols-2 gap-3 sm:gap-12">
          {premiumVideos.map((video, idx) => {
            const isMuted = mutedStates[idx] ?? true;
            return (
              <div 
                key={video.id} 
                className="cinema-glass-card p-2 sm:p-8 flex flex-col justify-between text-left group"
              >
                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-950 relative shadow-inner mb-3 sm:mb-6 border-2 border-stone-800">
                  <video 
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={video.videoUrl} 
                    autoPlay muted={isMuted} loop playsInline preload="auto"
                    className="w-full h-full object-cover bg-stone-950 brightness-[0.95]"
                  />
                  
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
                    <button
                      onClick={() => toggleAudio(idx)}
                      className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-md border text-[8px] sm:text-xs font-mono-tech uppercase tracking-wider font-bold flex items-center gap-1 sm:gap-2 transition-all shadow-lg cursor-pointer ${
                        !isMuted 
                          ? 'bg-amber-500 text-stone-950 border-amber-300 animate-pulse' 
                          : 'bg-black/70 text-white border-white/20 hover:bg-black/90'
                      }`}
                    >
                      {!isMuted ? <Volume2 size={12} className="sm:w-[15px]" /> : <VolumeX size={12} className="sm:w-[15px]" />}
                      <span className="hidden sm:inline">{!isMuted ? 'Sound On' : 'Muted'}</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between px-1 sm:px-0">
                  <div className="space-y-1 sm:space-y-2">
                    <span className="text-[#B8860B] font-mono-tech text-[8px] sm:text-xs tracking-[0.2em] uppercase font-bold truncate pr-2 block">
                      {video.category}
                    </span>
                    <h3 className="font-bodoni text-xs leading-snug sm:text-3xl text-[#2C241D] font-bold group-hover:text-[#B8860B] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="font-sans-clean text-[#6B5B52] text-[9px] sm:text-sm leading-relaxed font-light hidden sm:block">
                      {video.desc}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedFilm(video)}
                      className="w-full py-1.5 sm:py-3 rounded-full bg-[#FDF6E3] hover:bg-[#C5A059] text-[#2C241D] hover:text-white font-sans-clean text-[9px] sm:text-xs tracking-wider uppercase font-bold transition-all duration-300 border-2 border-[#D4AF37]/40 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs"
                    >
                      <Clapperboard size={11} className="sm:w-[15px]" />
                      <span>Theater Mode</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* YOUTUBE SECTION WITH 6 CUSTOM LINKS */}
        <section className="space-y-6 sm:space-y-10">
          <div className="text-center space-y-2">
            <span className="font-mono-tech text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              DIGITAL PREMIERES
            </span>
            <h2 className="font-bodoni text-3xl sm:text-5xl font-bold text-[#2C241D] tracking-tight">
              YouTube Broadcasts
            </h2>
            <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-sm font-light">
              Click any frame to experience our fully produced YouTube masterworks in full screen.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {youtubeLinks.map((yt) => {
              const ytId = getYoutubeId(yt.url);
              const thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '';
              
              return (
                <div 
                  key={yt.id}
                  onClick={() => setSelectedFilm({ ...yt, isYoutube: true, ytId })}
                  className="cinema-glass-card p-2 sm:p-3 flex flex-col justify-center text-left group cursor-pointer"
                >
                  <div className="w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-stone-900 relative shadow-inner border-2 border-[#D4AF37]/30">
                    <img 
                      src={thumbUrl} 
                      alt={yt.title} 
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9] group-hover:brightness-105"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STUDIO METRICS */}
        <section className="cinema-glass-card p-6 sm:p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center mx-auto shadow-inner border-2 border-[#D4AF37]/30">
                <Camera size={18} className="sm:w-[22px]" />
              </div>
              <h4 className="font-bodoni text-lg sm:text-xl font-bold text-[#2C241D]">4K Prime Capture</h4>
              <p className="text-[10px] sm:text-xs text-[#6B5B52] font-sans-clean leading-relaxed">
                Shot on full-frame cinema rigs with prime optical glass for breathtaking depth of field.
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center mx-auto shadow-inner border-2 border-[#D4AF37]/30">
                <Award size={18} className="sm:w-[22px]" />
              </div>
              <h4 className="font-bodoni text-lg sm:text-xl font-bold text-[#2C241D]">Bespoke Color Science</h4>
              <p className="text-[10px] sm:text-xs text-[#6B5B52] font-sans-clean leading-relaxed">
                Hand-graded color palettes that retain rich skin tones and royal golden hues.
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center mx-auto shadow-inner border-2 border-[#D4AF37]/30">
                <ShieldCheck size={18} className="sm:w-[22px]" />
              </div>
              <h4 className="font-bodoni text-lg sm:text-xl font-bold text-[#2C241D]">Dual-Card Safety</h4>
              <p className="text-[10px] sm:text-xs text-[#6B5B52] font-sans-clean leading-relaxed">
                Simultaneous recording safeguards every single second of your sacred vows.
              </p>
            </div>
          </div>
        </section>

      </div>

      {selectedFilm && (
        <div
          className="fixed inset-0 z-[99999] bg-[#2C241D]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-8"
          onClick={() => setSelectedFilm(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono-tech text-[9px] sm:text-xs uppercase tracking-widest transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer border border-white/20"
            onClick={() => setSelectedFilm(null)}
          >
            <span>Close Theater</span>
            <X size={14} className="sm:w-4 sm:h-4" />
          </button>

          <div
            className="max-w-5xl w-full max-h-[85vh] relative flex flex-col items-center justify-center space-y-2 sm:space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              {selectedFilm.isYoutube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedFilm.ytId}?autoplay=1&rel=0`}
                  title="The Dev Photography YouTube"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedFilm.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            {!selectedFilm.isYoutube && (
              <div className="text-center text-white space-y-0.5 sm:space-y-1">
                <span className="font-mono-tech text-[9px] sm:text-xs tracking-widest text-[#E6C594] uppercase block font-bold">
                  {selectedFilm.category}
                </span>
                <h3 className="font-bodoni text-lg sm:text-3xl font-bold">{selectedFilm.title}</h3>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}