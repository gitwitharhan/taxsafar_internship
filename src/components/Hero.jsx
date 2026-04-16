import React, { useEffect, useState } from 'react';
import heroImg from '../assets/hero.png';

const FloatingTag = ({ children, className = '' }) => (
  <span
    className={`bg-white text-slate-700 px-4 py-2 rounded-full shadow-md text-sm font-semibold
                whitespace-nowrap hidden lg:block cursor-pointer border border-slate-100
                hover:-translate-y-2 hover:shadow-xl hover:text-[#0eb15b] hover:scale-105
                transition-all duration-300 ${className}`}
  >
    {children}
  </span>
);

const Avatar = ({ bg, children }) => (
  <div className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center
                   text-white font-bold text-sm shadow-sm ${bg}`}>
    {children}
  </div>
);

const StatIcon = ({ color, icon }) => (
  <div className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md flex-shrink-0
                   group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ${color}`}>
    {icon}
  </div>
);

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for navbar (passed up through context ideally, but self-contained here)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="bg-[#e8f6ed] w-full relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-28 lg:pt-36 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* ── Left Content ── */}
          <div className="w-full lg:w-[46%] z-10">

            <h1
              className="text-[58px] md:text-[68px] lg:text-[76px] font-black leading-[1.06]
                         mb-7 text-[#1a2b21] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              We Provide<br />
              Your Business<br />
              Solutions.
            </h1>

            <p className="text-slate-500 text-[17px] font-medium mb-10 max-w-[90%] leading-relaxed">
              Simplifying compliance, boosting profits — tech-driven consultancy helps your
              business run smarter and faster.
            </p>

            {/* Search */}
            <div className="bg-white p-1.5 rounded-full flex items-center shadow-md max-w-[460px]
                            mb-7 w-full ring-1 ring-transparent hover:ring-[#0eb15b]/20
                            hover:shadow-lg transition-all duration-300">
              <input
                type="text"
                placeholder="Search job, title etc...."
                className="flex-1 bg-transparent border-none outline-none px-5 text-slate-600
                           placeholder-slate-400 text-[15px]"
              />
              <button
                className="bg-[#0eb15b] hover:bg-[#0a8f48] text-white px-7 py-3 rounded-full
                           font-bold text-sm transition-all duration-300
                           hover:shadow-[0_6px_20px_rgba(14,177,91,0.4)] hover:scale-105 active:scale-95"
              >
                Search
              </button>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-x-1 text-[14px] font-medium">
              <span className="font-bold text-slate-800 mr-1">Populer:</span>
              {['Return Filling,', 'Registrations,', 'Financial Planning,', 'VCompliances'].map((tag, i) => (
                <span key={i}
                  className="text-slate-500 hover:text-[#0eb15b] cursor-pointer transition-colors duration-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Image Area ── */}
          <div className="w-full lg:w-[50%] relative flex justify-center lg:justify-end mt-10 lg:mt-0 group/scene">

            {/* Arch */}
            <div className="absolute top-4 right-0 w-[78%] h-[105%] bg-[#c8e8d4] rounded-t-full -z-[1]
                            transition-transform duration-700 group-hover/scene:scale-[1.02]" />

            {/* Diagonal texture */}
            <div className="absolute bottom-[25%] left-[18%] z-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(135deg, #1f2e24 0, #1f2e24 1px, transparent 1px, transparent 10px)',
                width: 80, height: 90
              }}
            />

            {/* Hero Image */}
            <img
              src={heroImg}
              alt="Business Consultants"
              className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-2xl
                         group-hover/scene:-translate-y-2
                         group-hover/scene:drop-shadow-[0_35px_45px_rgba(14,177,91,0.2)]
                         transition-all duration-500 animate-float-img"
            />

            {/* Call Now card */}
            <div className="absolute bottom-[28%] -left-4 lg:-left-10 bg-white rounded-2xl shadow-2xl
                            px-5 py-4 flex items-center gap-4 z-20 cursor-pointer
                            hover:scale-105 hover:-translate-y-2 border border-emerald-50
                            hover:shadow-[0_20px_50px_rgba(14,177,91,0.3)]
                            transition-all duration-300 group/call">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#0eb15b]/20"
                     style={{ animation: 'pulseRing 2s ease-out infinite' }} />
                <div className="bg-[#0eb15b] rounded-full p-2.5 text-white relative
                                group-hover/call:rotate-12 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.25l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-slate-900 font-extrabold text-[15px] leading-tight
                               group-hover/call:text-[#0eb15b] transition-colors duration-200">CALL NOW</p>
                <p className="text-slate-400 text-[11px] font-semibold tracking-wider">To Our Experts</p>
              </div>
            </div>

            {/* Floating tags */}
            <FloatingTag className="absolute top-[4%] right-[26%] z-20">Registrations</FloatingTag>
            <FloatingTag className="absolute top-[6%] right-[-2%] z-20">GST</FloatingTag>
            <FloatingTag className="absolute top-[24%] right-[33%] z-20">Income Tax</FloatingTag>
            <FloatingTag className="absolute top-[24%] right-[-1%] z-20">Consultancy</FloatingTag>
            <FloatingTag className="absolute top-[44%] right-[17%] z-20">Accounting</FloatingTag>
            <FloatingTag className="absolute top-[44%] right-[-8%] z-20">Notice</FloatingTag>
            <FloatingTag className="absolute top-[62%] right-[-2%] z-20">Virtual Office</FloatingTag>
          </div>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div className="w-full bg-[#e8f6ed] border-t border-[#cfe6d6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-7
                        grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#cfe6d6]">

          {/* CA Freelancers */}
          <div className="flex items-center gap-4 px-6 py-4 md:py-0 group
                          hover:bg-white/40 rounded-xl transition-colors duration-300">
            <div className="flex -space-x-2.5 flex-shrink-0">
              <Avatar bg="bg-blue-500">A</Avatar>
              <Avatar bg="bg-rose-400">S</Avatar>
              <Avatar bg="bg-emerald-500">R</Avatar>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200
                              flex items-center justify-center text-slate-600 font-bold text-xs">+</div>
            </div>
            <div>
              <p className="text-[26px] font-extrabold text-[#1a2b21] leading-none mb-0.5"
                 style={{ fontFamily: "'Playfair Display', serif" }}>50+</p>
              <p className="text-[12px] text-slate-500 font-medium leading-tight">Individual CA<br/>Freelancers</p>
            </div>
          </div>

          {/* Happy Clients */}
          <div className="flex items-center gap-4 px-6 py-4 md:py-0 group
                          hover:bg-white/40 rounded-xl transition-colors duration-300">
            <StatIcon
              color="bg-gradient-to-br from-emerald-400 to-teal-500"
              icon={<svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>}
            />
            <div>
              <p className="text-[26px] font-extrabold text-[#1a2b21] leading-none mb-0.5"
                 style={{ fontFamily: "'Playfair Display', serif" }}>10,000+</p>
              <p className="text-[12px] text-slate-500 font-medium leading-tight">Happy Clients<br/>Served</p>
            </div>
          </div>

          {/* A+ Rating */}
          <div className="flex items-center gap-4 px-6 py-4 md:py-0 group
                          hover:bg-white/40 rounded-xl transition-colors duration-300">
            <StatIcon
              color="bg-gradient-to-br from-yellow-400 to-amber-500"
              icon={<svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>}
            />
            <div>
              <p className="text-[26px] font-extrabold text-[#1a2b21] leading-none mb-0.5"
                 style={{ fontFamily: "'Playfair Display', serif" }}>A+ Rating</p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[11px] text-slate-500 font-semibold ml-1">4.78 (10k+)</span>
              </div>
            </div>
          </div>

          {/* Years */}
          <div className="flex items-center gap-4 px-6 py-4 md:py-0 group
                          hover:bg-white/40 rounded-xl transition-colors duration-300">
            <StatIcon
              color="bg-gradient-to-br from-violet-500 to-purple-600"
              icon={<svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>}
            />
            <div>
              <p className="text-[26px] font-extrabold text-[#1a2b21] leading-none mb-0.5"
                 style={{ fontFamily: "'Playfair Display', serif" }}>8+ Years</p>
              <p className="text-[12px] text-slate-500 font-medium leading-tight">Trusted Industry<br/>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
