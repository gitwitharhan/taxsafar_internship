import React, { useEffect, useState } from 'react';

const NavLink = ({ children }) => (
  <a href="#"
     className="relative text-[15px] font-semibold text-slate-700 py-1 group
                hover:text-[#0eb15b] transition-colors duration-300">
    {children}
    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#0eb15b] rounded-full
                     group-hover:w-full transition-all duration-300" />
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-500">

      {/* Top bar — collapses on scroll */}
      <div
        className={`bg-[#0eb15b] text-white px-4 md:px-12 flex flex-col md:flex-row
                    justify-between items-center text-[13px] font-medium tracking-wide
                    overflow-hidden transition-all duration-500
                    ${scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-1.5 opacity-100'}`}
      >
        <div className="flex items-center space-x-3">
          <span>Follow us:</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:opacity-70 hover:scale-110 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:opacity-70 hover:scale-110 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:opacity-70 hover:scale-110 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="hover:opacity-70 hover:scale-110 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"/></svg>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a href="mailto:support@taxsafar.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            support@taxsafar.com
          </a>
          <a href="tel:+919784818899" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            +91 97848 18899
          </a>
        </div>
      </div>

      {/* Main nav — glassmorphism on scroll */}
      <nav className={`px-4 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center
                       w-full transition-all duration-500
                       ${scrolled
                         ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
                         : 'bg-[#ebf8f2]'}`}>

        {/* Logo */}
        <div className="flex items-end cursor-pointer mb-4 md:mb-0 group">
          <span className="text-[38px] font-extrabold text-[#0047b3] leading-none tracking-tighter
                           group-hover:text-[#003a94] transition-colors duration-300">TAX</span>
          <div className="flex flex-col ml-0.5">
            <span className="text-[26px] font-semibold text-slate-800 leading-tight">safar</span>
            <svg viewBox="0 0 80 14" className="w-[72px] -mt-0.5" fill="none">
              <path d="M4 10 Q30 2 58 8 Q66 10 70 6" stroke="#0047b3" strokeWidth="2.5" strokeLinecap="round"/>
              <polyline points="64,3 70,6 66,10" stroke="#0047b3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-8 mb-4 md:mb-0">
          <NavLink>Home</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact</NavLink>
        </div>

        {/* Auth */}
        <div className="flex items-center space-x-5 text-[15px] font-semibold">
          <a href="#" className="text-slate-700 hover:text-[#0eb15b] transition-colors duration-300
                                 hover:-translate-y-0.5 inline-block">Login</a>
          <a href="#" className="text-slate-700 hover:text-[#0eb15b] transition-colors duration-300
                                 hover:-translate-y-0.5 inline-block">Register Now</a>
          <button className="btn-fill border-2 border-[#0eb15b] text-[#0eb15b] px-6 py-2.5
                             rounded-full font-bold text-[14px] hover:-translate-y-0.5
                             transition-transform duration-300
                             hover:shadow-[0_8px_25px_rgba(14,177,91,0.3)]">
            Partner login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
