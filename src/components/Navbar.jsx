import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 drop-shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#0eb15b] text-white py-1.5 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[13px] font-medium tracking-wide">
        <div className="flex items-center space-x-3 mb-2 md:mb-0">
          <span>Follow us:</span>
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-emerald-200 transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <a href="mailto:support@taxsafar.com" className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-300 group">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>support@taxsafar.com</span>
          </a>
          <a href="tel:+919784818899" className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-300 group">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 group-hover:scale-110 transition-transform"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>+91 97848 18899</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#ebf8f2] py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm relative z-10 w-full top-0">
        {/* Logo */}
        <div className="flex items-center cursor-pointer group mb-4 md:mb-0">
          <div className="relative">
             <span className="text-4xl font-extrabold text-[#0047b3] tracking-tighter">TAX</span>
             <span className="text-3xl font-semibold text-[#1f2937] tracking-tight">safar</span>
             {/* Simple arrow loop icon simulation as seen in logo */}
             <svg className="absolute -bottom-2 right-0 w-8 h-8 text-[#0047b3] -translate-x-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 md:space-x-10 text-[15px] font-bold text-gray-800 mb-4 md:mb-0">
          <a href="#" className="hover:text-[#0eb15b] transition-colors duration-300 relative group py-1">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0eb15b] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-[#0eb15b] transition-colors duration-300 relative group py-1">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0eb15b] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-[#0eb15b] transition-colors duration-300 relative group py-1">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0eb15b] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-[#0eb15b] transition-colors duration-300 relative group py-1">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0eb15b] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-6 text-[15px] font-bold">
          <a href="#" className="text-gray-800 hover:text-[#0eb15b] hover:-translate-y-0.5 transition-all duration-300">Login</a>
          <a href="#" className="text-gray-800 hover:text-[#0eb15b] hover:-translate-y-0.5 transition-all duration-300">Register Now</a>
          <button className="bg-[#0eb15b] text-white px-6 py-2.5 rounded-full hover:bg-[#0c9c4f] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md">
            Partner login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
