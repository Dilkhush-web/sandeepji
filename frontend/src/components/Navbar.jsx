import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Film, 
  Image, 
  Briefcase, 
  PhoneCall, 
  Lock, 
  LogOut, 
  ArrowRight, 
  X,
  Menu,
  MapPin
} from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onLogout, activeTab, setActiveTab, openLoginModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navTabs = [
    { id: 'home', label: 'Home', icon: <Home size={15} /> },
    { id: 'films', label: 'Films', icon: <Film size={15} /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Image size={15} /> },
    { id: 'services', label: 'Tariffs', icon: <Briefcase size={15} /> },
    { id: 'contact', label: 'Contact', icon: <PhoneCall size={15} /> }
  ];

  const mobileQuickTabs = [
    { id: 'home', label: 'Home', icon: <Home size={17} /> },
    { id: 'films', label: 'Films', icon: <Film size={17} /> },
    { id: 'portfolio', label: 'Gallery', icon: <Image size={17} /> },
    { id: 'services', label: 'Services', icon: <Briefcase size={17} /> },
    { id: 'contact', label: 'Book', icon: <PhoneCall size={17} /> }
  ];

  const handleTabSelect = (id) => {
    if (setCurrentView) setCurrentView('public');
    if (setActiveTab) setActiveTab(id);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        .font-brand-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-brand-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-brand-mono { font-family: 'Space Grotesk', monospace; }

        .pro-glass-bar {
          background: rgba(253, 251, 247, 0.96);
          backdrop-filter: blur(28px) saturate(200%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 20px 40px -10px rgba(184, 134, 11, 0.1);
        }

        .mobile-glass-dock {
          background: rgba(28, 25, 23, 0.96);
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(212, 175, 55, 0.2);
        }

        @keyframes fadeInDrawer {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-drawer { animation: fadeInDrawer 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* =========================================================================
          1. DESKTOP ULTRA-PROFESSIONAL TOP NAVBAR (THE DEV PHOTOGRAPHY)
      ======================================================================== */}
      <nav className={`hidden lg:flex fixed top-[4px] left-[8px] right-[8px] z-[9000] items-center justify-between px-8 rounded-3xl pro-glass-bar transition-all duration-500 ${
        scrolled ? 'py-2.5 shadow-2xl bg-white/98 border-amber-500/60' : 'py-3.5'
      }`}>
        
        {/* Brand Logo Image (Direct Replacement) */}
        <div 
          onClick={() => handleTabSelect('home')}
          className="flex items-center cursor-pointer group shrink-0"
        >
          <div className="h-12 w-auto min-w-[140px] flex items-center justify-start group-hover:scale-105 transition-transform">
            <img 
              src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1793016024/The_Dev_Photography_Logo_etrnog.png" 
              alt="The Dev Photography Logo" 
              className="h-full w-auto object-contain drop-shadow-sm"
              onError={(e) => {
                e.target.style.display = 'none';
              }} 
            />
          </div>
        </div>

        {/* Center Pro Nav Items */}
        <div className="flex items-center gap-1.5 bg-[#FAF8F5] p-1.5 rounded-full border border-[#D4AF37]/30 shadow-inner">
          {currentView === 'public' ? (
            navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-brand-sans font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C5A059] to-[#B8860B] text-white shadow-md scale-105'
                      : 'text-[#6B5B52] hover:text-[#2C241D] hover:bg-[#F0E6D2]/60'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#B8860B]'}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })
          ) : (
            <div className="px-5 py-1 text-xs font-brand-mono text-[#B8860B] font-bold uppercase tracking-wider">
              Portal Mode: {currentView}
            </div>
          )}
        </div>

        {/* Right Actions (Vault & CTA) */}
        <div className="flex items-center gap-3">
          {currentView === 'public' ? (
            <>
              <button
                onClick={openLoginModal}
                className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#F0E6D2] text-[#6B5B52] hover:text-[#B8860B] border border-[#D4AF37]/30 flex items-center justify-center shadow-xs transition-all cursor-pointer"
                title="Client Vault / Admin Portal"
              >
                <Lock size={14} className="text-[#B8860B]" />
              </button>

              <button
                onClick={() => handleTabSelect('contact')}
                className="px-5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-brand-sans text-xs font-bold uppercase tracking-widest shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2 border border-white/20"
              >
                <span>Book Shoot</span>
                <ArrowRight size={13} />
              </button>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="px-5 py-2 rounded-full bg-rose-600 text-white font-brand-sans text-xs uppercase font-bold tracking-wider hover:bg-rose-700 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <LogOut size={13} />
              <span>Disconnect</span>
            </button>
          )}
        </div>
      </nav>

      {/* =========================================================================
          2. LUXURY MOBILE TOP BRAND HEADER
      ======================================================================== */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-[8998] px-4 py-3 bg-[#1C1917]/98 backdrop-blur-2xl border-b border-[#D4AF37]/40 flex items-center justify-between text-stone-100 shadow-xl">
        <div 
          onClick={() => handleTabSelect('home')}
          className="flex items-center cursor-pointer shrink-0"
        >
          <div className="h-9 w-auto flex items-center justify-start">
            <img 
              src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1793016024/The_Dev_Photography_Logo_etrnog.png" 
              alt="Logo" 
              className="h-full w-auto object-contain filter invert"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {currentView === 'public' && (
            <button
              onClick={openLoginModal}
              className="px-3 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#E6C594] text-[10px] font-brand-mono font-bold uppercase tracking-wider flex items-center gap-1 active:scale-95 transition-transform shadow-xs"
            >
              <Lock size={11} />
              <span>Vault</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-900 border border-[#D4AF37]/50 text-[#D4AF37] cursor-pointer active:scale-95 transition-transform shadow-xs"
            aria-label="Open Full Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* =========================================================================
          3. MOBILE FLOATING GLASS BOTTOM DOCK
      ======================================================================== */}
      <div className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[8999] w-[94%] max-w-sm pointer-events-auto">
        <div className="mobile-glass-dock rounded-2xl p-2 flex items-center justify-around shadow-2xl">
          {mobileQuickTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-stone-950 font-bold shadow-lg scale-105'
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-[9px] font-brand-mono uppercase tracking-wider mt-0.5">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          4. FULL-SCREEN EDITORIAL MOBILE DRAWER
      ======================================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-[#1C1917]/99 backdrop-blur-3xl p-6 flex flex-col justify-between text-stone-100 overflow-y-auto animate-drawer">
          
          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4">
            <div className="flex items-center text-left">
              <div className="h-10 w-auto flex items-center justify-start">
                <img 
                  src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1793016024/The_Dev_Photography_Logo_etrnog.png" 
                  alt="Logo" 
                  className="h-full w-auto object-contain filter invert"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-stone-200 hover:text-white cursor-pointer active:scale-95 transition-transform"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-3 py-6 text-left">
            <span className="text-[10px] font-brand-mono tracking-[0.3em] text-[#D4AF37] uppercase font-bold block">
              STUDIO DIRECTORY
            </span>

            <div className="flex flex-col space-y-2">
              {navTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabSelect(tab.id)}
                    className={`w-full text-left py-3.5 px-4 rounded-xl flex items-center justify-between font-brand-serif text-lg tracking-wide transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#D4AF37]/30 to-[#B8860B]/20 text-[#E6C594] font-bold border border-[#D4AF37]/50 shadow-md' 
                        : 'text-stone-300 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={isActive ? 'text-[#D4AF37]' : 'text-stone-500'}>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </div>
                    <ArrowRight size={14} className={isActive ? 'text-[#D4AF37]' : 'text-stone-600'} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/30 space-y-3.5 pb-8">
            <button
              onClick={() => handleTabSelect('contact')}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#996515] text-stone-950 font-brand-sans font-bold uppercase text-xs tracking-widest rounded-xl shadow-xl cursor-pointer active:scale-95 transition-transform flex items-center justify-center gap-2 border border-amber-200/50"
            >
              <span>Book Appointment</span>
              <ArrowRight size={14} />
            </button>

            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Dev+Photography+Saharanpur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-stone-900 border border-[#D4AF37]/40 text-stone-300 text-xs font-brand-mono font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <MapPin size={14} className="text-[#D4AF37]" />
              <span>Saharanpur, Uttar Pradesh</span>
            </a>

            <p className="text-center text-[10px] font-brand-mono text-stone-400 uppercase tracking-widest pt-1">
              The Dev Photography © 2026 • Sandeep Kumar
            </p>
          </div>

        </div>
      )}
    </>
  );
}