import React, { useState, useEffect, useMemo } from 'react';

// Google Drive file ID extract karke direct renderable image URL banana
const getDirectDriveImageUrl = (urlOrId, size = 'w800') => {
  if (!urlOrId) return '';
  if (urlOrId.startsWith('http') && !urlOrId.includes('drive.google.com')) return urlOrId;
  let fileId = urlOrId;
  const match = urlOrId.match(/[-\w]{25,}/);
  if (match) fileId = match[0];
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
};

export default function ClientVault({ onLogout, clientId }) {
  const clientData = clientId; 
  
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // ---------------------------------------------------------------------------------
  // 📄 PAGINATION STATE
  // ---------------------------------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 30;

  // ---------------------------------------------------------------------------------
  // ⏱️ LIVE COUNTDOWN TIMER STATE
  // ---------------------------------------------------------------------------------
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });

  const activeDeadline = useMemo(() => {
    if (!clientData) return null;
    if (clientData.deadlineDate) {
      const adminDate = new Date(clientData.deadlineDate);
      adminDate.setHours(23, 59, 59, 999);
      return adminDate.toISOString();
    } else {
      const storageKey = `vault_deadline_${clientData.pin || 'default'}`;
      const storedDate = localStorage.getItem(storageKey);
      if (storedDate) return storedDate;
      const newDeadline = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString();
      localStorage.setItem(storageKey, newDeadline);
      return newDeadline;
    }
  }, [clientData]);

  // ---------------------------------------------------------------------------------
  // 🎬 LIGHTBOX (BIG SCREEN) STATE
  // ---------------------------------------------------------------------------------
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ==========================================
  // ⏱️ TIMER LOGIC
  // ==========================================
  useEffect(() => {
    if (!activeDeadline) return;
    const calculateTimeLeft = () => {
      const deadline = new Date(activeDeadline).getTime();
      const now = new Date().getTime(); 
      const distance = deadline - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false
      });
    };
    calculateTimeLeft(); 
    const timerId = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timerId); 
  }, [activeDeadline]);

  // ==========================================
  // 📂 AUTO-FETCH DRIVE PHOTOS
  // ==========================================
  useEffect(() => {
    if (clientData && clientData.driveLink) {
      handleFetchDrivePhotos(clientData.driveLink);
    }
  }, [clientData]);

  const handleFetchDrivePhotos = async (link) => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

      const response = await fetch(`${backendUrl}/api/client/fetch-drive`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folderLink: link })
      });
      const result = await response.json();
      if (result.success) {
        setPhotos(result.data);
      } else {
        alert("Studio team ne shayad galat link daala hai. Error: " + result.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // ==========================================
  // 📄 PAGINATION LOGIC
  // ==========================================
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(photos.length / photosPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Selection Logic
  const toggleSelection = (id, e) => {
    if (e) e.stopPropagation(); 
    if (timeLeft.expired) {
      alert("⚠️ Selection window has closed. Please contact The Dev Photography administration.");
      return;
    }
    const newSelection = new Set(selectedPhotos);
    if (newSelection.has(id)) newSelection.delete(id);
    else newSelection.add(id);
    setSelectedPhotos(newSelection);
  };

  // Final Submit
  const handleFinalSubmit = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

      const res = await fetch(`${backendUrl}/api/client/submit-selection`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          pin: clientData?.pin, 
          selectedCount: selectedPhotos.size,
          selectedIds: Array.from(selectedPhotos) 
        })
      });
      const data = await res.json();
      if (data.success) {
        alert(`Amazing! You've finalized ${selectedPhotos.size} photos. Sandeep Kumar's Studio Team (The Dev Photography) has been notified.`);
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection.");
    }
  };

  // ==========================================
  // 🎬 LIGHTBOX CONTROLS
  // ==========================================
  const openLightbox = (globalIndex) => {
    setCurrentIndex(globalIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextPhoto = (e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = (e) => {
    if(e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, photos.length]);

  return (
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans tracking-tight relative overflow-hidden min-h-screen pt-4 sm:pt-8 pb-20 selection:bg-[#E6C594] selection:text-[#B8860B]">
      
      {/* 🔮 MASTER LUXURY LIGHT THEME STYLING */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:ital,wght@0,400;0,600;1,400&family=Pinyon+Script&family=Snell+Roundhand:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
        
        .font-bodoni { font-family: 'Bodoni Moda', serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-tech { font-family: 'Space Grotesk', monospace; }

        .glass-vault-panel {
          background: #FFFCF6;
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 25px 50px -12px rgba(184, 134, 11, 0.1);
        }

        .tilt-photo-tile {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .tilt-photo-tile:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(184, 134, 11, 0.15);
        }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#FDF6E3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12 sm:space-y-16">

        {/* =========================================================================
            2. 👑 EXECUTIVE VAULT HEADER & SUBMISSION CONTROLS
        ========================================================================= */}
        <div className="glass-vault-panel rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF6E3] border border-[#D4AF37]/50 text-[#B8860B] font-mono-tech text-[10px] font-bold uppercase tracking-wider mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              PIN SECURED CLIENT REPOSITORY • THE DEV PHOTOGRAPHY
            </div>
            <h2 className="font-bodoni text-3xl sm:text-4xl text-[#2C241D] font-bold tracking-wide">
              Welcome, {clientData?.name || "VVIP Client"}
            </h2>
            <p className="font-sans-clean text-[#6B5B52] text-xs tracking-widest uppercase font-semibold">
              {clientData?.eventType || "Event"} Photo Selection Portal
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="text-center md:text-right px-4 py-2 bg-[#FDF6E3] border border-[#D4AF37]/40 rounded-2xl">
              <p className="text-[10px] font-mono-tech uppercase tracking-wider text-[#6B5B52] font-bold">Selected Stills</p>
              <p className="text-xl font-mono-tech font-bold text-[#B8860B]">{selectedPhotos.size} <span className="text-xs text-[#6B5B52] font-normal">/ {photos.length}</span></p>
            </div>

            <button 
              onClick={handleFinalSubmit}
              disabled={selectedPhotos.size === 0 || timeLeft.expired}
              className="bg-[#2C241D] hover:bg-[#B8860B] disabled:bg-stone-200 disabled:text-stone-400 text-white px-7 py-3.5 rounded-2xl text-xs font-sans-clean font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:shadow-none disabled:transform-none cursor-pointer"
            >
              {timeLeft.expired ? 'PORTAL LOCKED' : 'Submit Final Album ✦'}
            </button>

            <button 
              onClick={onLogout} 
              className="text-xs bg-rose-50 border border-rose-200 text-rose-800 px-5 py-3.5 rounded-2xl font-sans-clean font-bold uppercase tracking-widest hover:bg-rose-100 transition-all cursor-pointer shadow-2xs"
            >
              Logout
            </button>
          </div>
        </div>

        {/* =========================================================================
            3. ⏳ LIVE ARCHIVAL COUNTDOWN TIMER
        ========================================================================= */}
        {activeDeadline && (
          <div className={`glass-vault-panel rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border transition-colors duration-500 ${
            timeLeft.expired 
              ? 'bg-rose-50/90 border-rose-300 shadow-[0_0_30px_rgba(244,63,94,0.1)]' 
              : timeLeft.days < 2 
                ? 'bg-amber-50/90 border-amber-300 shadow-[0_0_30px_rgba(217,119,6,0.1)]' 
                : 'border-[#D4AF37]/40'
          }`}>
            <div className="text-center md:text-left space-y-1">
              <span className={`font-mono-tech text-[10px] tracking-[0.35em] uppercase font-bold block ${timeLeft.expired ? 'text-rose-800' : 'text-[#B8860B]'}`}>
                {timeLeft.expired ? '⚠️ SELECTION DEADLINE PASSED' : '[ACTION REQUIRED]'}
              </span>
              <h3 className="font-bodoni text-2xl sm:text-3xl text-[#2C241D] font-bold tracking-tight">
                {timeLeft.expired ? 'Selection Window Closed.' : 'Photo Selection Countdown'}
              </h3>
              <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-sm max-w-md leading-relaxed font-normal">
                {timeLeft.expired 
                  ? 'Your project timeline is currently paused. Please contact studio administration to reopen.' 
                  : 'Please finalize your selections before the countdown concludes so our grading team can begin album manufacturing.'}
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4">
              {[ { label: 'Days', value: timeLeft.days }, { label: 'Hours', value: timeLeft.hours }, { label: 'Mins', value: timeLeft.minutes }, { label: 'Secs', value: timeLeft.seconds } ].map((unit, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center rounded-2xl border shadow-2xs ${
                    timeLeft.expired 
                      ? 'bg-white border-rose-200 text-rose-800' 
                      : 'bg-white border-[#D4AF37]/40 text-[#2C241D]'
                  }`}>
                    <span className={`font-mono-tech text-xl sm:text-2xl font-bold ${
                      timeLeft.expired ? 'text-rose-700' : timeLeft.days < 2 ? 'text-[#B8860B]' : 'text-[#2C241D]'
                    }`}>
                      {String(unit.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#6B5B52] uppercase tracking-widest font-bold mt-2">{unit.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            4. 🲲 HIGH-DENSITY PAGINATED GALLERY GRID (3 OR 4 COLUMNS ON MOBILE)
        ========================================================================= */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((skel) => (
              <div key={skel} className="w-full h-64 bg-stone-200/60 animate-pulse rounded-2xl border border-stone-200"></div>
            ))}
          </div>
        ) : photos.length === 0 ? (
          <div className="glass-vault-panel rounded-3xl text-center py-20 border-2 border-dashed border-[#D4AF37]/50">
            <p className="font-bodoni text-xl text-[#6B5B52] uppercase tracking-widest font-bold">No photos found in your cloud vault.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 px-2">
              <h3 className="font-bodoni text-base font-bold text-[#2C241D] uppercase tracking-wider">
                Page {currentPage} of {totalPages}
              </h3>
              <span className="font-mono-tech text-xs text-[#6B5B52]">
                Displaying {indexOfFirstPhoto + 1} - {Math.min(indexOfLastPhoto, photos.length)} of {photos.length} High-Res Stills
              </span>
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 ${timeLeft.expired ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
              {currentPhotos.map((photo, index) => {
                const isSelected = selectedPhotos.has(photo.id);
                return (
                  <div 
                    key={photo.id} 
                    className={`relative group overflow-hidden rounded-2xl bg-stone-100 border-2 tilt-photo-tile cursor-pointer aspect-[4/5] ${
                      isSelected ? 'border-[#B8860B] ring-2 ring-[#B8860B]/30 shadow-md' : 'border-transparent shadow-xs'
                    }`}
                  >
                    <img 
                      src={getDirectDriveImageUrl(photo.id || photo.thumbUrl, 'w400')} 
                      onError={(e) => {
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = `https://lh3.googleusercontent.com/d/${photo.id}=s400`;
                      }}
                      alt="Vault Memory" 
                      onClick={() => openLightbox(indexOfFirstPhoto + index)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Overlay */}
                    <div className={`absolute inset-0 pointer-events-none transition-all duration-300 ${
                      isSelected ? 'bg-amber-800/15' : 'bg-stone-950/0 group-hover:bg-stone-950/20'
                    }`} />

                    {/* Selection Toggle Checkbox */}
                    <button 
                      onClick={(e) => toggleSelection(photo.id, e)}
                      className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-md border ${
                        isSelected 
                          ? 'bg-[#B8860B] text-white border-amber-600 scale-105' 
                          : 'bg-white/80 text-stone-400 border-stone-300 hover:bg-white hover:text-[#2C241D]'
                      }`}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isSelected && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />}
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* =========================================================================
                5. 📄 LUXURY PAGINATION CONTROLS
            ========================================================================= */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 pt-10 border-t border-[#D4AF37]/30">
                <button 
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1}
                  className="px-5 py-2.5 bg-white border border-stone-300 text-[#2C241D] rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 transition-all font-sans-clean text-xs uppercase font-bold shadow-2xs cursor-pointer"
                >
                  Prev
                </button>
                
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  if (pageNumber === 1 || pageNumber === totalPages || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
                    return (
                      <button 
                        key={pageNumber} 
                        onClick={() => paginate(pageNumber)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-mono-tech font-bold text-xs transition-all border cursor-pointer ${
                          currentPage === pageNumber 
                            ? 'bg-[#2C241D] text-white border-[#2C241D] shadow-sm' 
                            : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                    return <span key={pageNumber} className="text-stone-400 font-mono-tech text-xs px-1">...</span>;
                  }
                  return null;
                })}

                <button 
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                  className="px-5 py-2.5 bg-white border border-stone-300 text-[#2C241D] rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 transition-all font-sans-clean text-xs uppercase font-bold shadow-2xs cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* =========================================================================
          6. 🎞️ CINEMATIC HIGH-RES LIGHTBOX MODAL
      ========================================================================= */}
      {lightboxOpen && photos.length > 0 && (
        <div className="fixed inset-0 z-[99999] bg-stone-950/95 backdrop-blur-2xl flex flex-col items-center justify-center">
          
          <div className="absolute top-0 w-full p-6 flex justify-between items-center z-50 bg-gradient-to-b from-stone-950/90 to-transparent">
            <p className="text-stone-300 font-mono-tech tracking-widest text-xs uppercase font-semibold">
              Frame {currentIndex + 1} of {photos.length}
            </p>
            <button 
              onClick={closeLightbox} 
              className="text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="relative w-full max-w-7xl h-[75vh] flex items-center justify-center px-4 md:px-16 mt-10">
            <button 
              onClick={prevPhoto} 
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-stone-900/80 hover:bg-stone-900 p-4 rounded-full border border-white/20 transition-all z-50 cursor-pointer shadow-xl"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <img 
              key={photos[currentIndex].id}
              src={
                photos[currentIndex].thumbUrl 
                ? photos[currentIndex].thumbUrl.replace(/=s\d+/, '=s0') 
                : getDirectDriveImageUrl(photos[currentIndex].id, 'w1600')
              } 
              onError={(e) => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = `https://lh3.googleusercontent.com/d/${photos[currentIndex].id}`;
              }}
              alt="Vault High-Res View" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-fade-in border border-white/10"
              referrerPolicy="no-referrer"
            />
              
            <button 
              onClick={nextPhoto} 
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-stone-900/80 hover:bg-stone-900 p-4 rounded-full border border-white/20 transition-all z-50 cursor-pointer shadow-xl"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="absolute bottom-8 z-50 flex items-center gap-6">
            <button 
              onClick={() => toggleSelection(photos[currentIndex].id)}
              disabled={timeLeft.expired}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-sans-clean font-bold text-xs uppercase tracking-widest transition-all shadow-2xl cursor-pointer ${
                timeLeft.expired 
                  ? 'opacity-50 cursor-not-allowed bg-stone-800 text-stone-500 border-white/10' 
                  : selectedPhotos.has(photos[currentIndex].id) 
                    ? 'bg-[#B8860B] text-white border-2 border-amber-500 shadow-amber-900/50' 
                    : 'bg-stone-900/90 text-white border-2 border-white/20 hover:border-[#B8860B]/80'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedPhotos.has(photos[currentIndex].id) ? 'border-white' : 'border-white/50'
              }`}>
                {selectedPhotos.has(photos[currentIndex].id) && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
              </div>
              {timeLeft.expired ? 'PORTAL LOCKED' : selectedPhotos.has(photos[currentIndex].id) ? 'STILL SELECTED ✓' : 'SELECT STILL FOR ALBUM'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}