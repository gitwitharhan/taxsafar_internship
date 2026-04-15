import React from 'react';

const FooterLink = ({ href = '#', children }) => (
  <li>
    <a
      href={href}
      className="text-slate-500 text-[15px] hover:text-[#0eb15b] transition-colors duration-200 hover:translate-x-1 inline-block"
    >
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 w-full">

      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-end gap-0 cursor-pointer">
              <span
                className="text-[42px] font-extrabold text-[#0047b3] leading-none tracking-tighter"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                TAX
              </span>
              <div className="flex flex-col">
                <span
                  className="text-[28px] font-semibold text-slate-800 leading-tight tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  safar
                </span>
                {/* Curved arrow decoration */}
                <svg viewBox="0 0 80 18" className="w-20 -mt-1 text-[#0047b3]" fill="none">
                  <path
                    d="M4 14 Q30 2 60 10 Q68 12 72 8"
                    stroke="#0047b3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polyline
                    points="66,5 72,8 68,13"
                    stroke="#0047b3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:support@taxsafar.com"
              className="text-[#0eb15b] font-semibold text-[15px] hover:underline hover:text-emerald-700 transition-colors"
            >
              support@taxsafar.com
            </a>

            {/* QR / dot grid decoration */}
            <div
              className="w-16 h-16 opacity-20 mt-1"
              style={{
                backgroundImage: 'radial-gradient(#1a2b21 30%, transparent 30%)',
                backgroundSize: '8px 8px',
              }}
            />
          </div>

          {/* Column 2: Services */}
          <div>
            <h4
              className="text-slate-900 font-bold text-[18px] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              <FooterLink>Return Filing</FooterLink>
              <FooterLink>GST Registration</FooterLink>
              <FooterLink>Virtual Accounting</FooterLink>
              <FooterLink>Consultancy Services</FooterLink>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4
              className="text-slate-900 font-bold text-[18px] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Blogs</FooterLink>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Contact</FooterLink>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4
              className="text-slate-900 font-bold text-[18px] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Support
            </h4>
            <ul className="flex flex-col gap-3.5">
              <FooterLink>Terms of Use</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Payment Policy</FooterLink>
              <FooterLink>Help Center</FooterLink>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* Left: legal links */}
          <div className="flex items-center gap-1 text-[14px] text-slate-500 font-medium">
            <a href="#" className="hover:text-[#0eb15b] transition-colors">Privacy &amp; Terms</a>
            <span className="text-slate-300 mx-2">|</span>
            <a href="#" className="hover:text-[#0eb15b] transition-colors">Contact Us</a>
          </div>

          {/* Center: copyright */}
          <p className="text-[14px] text-slate-400 font-medium">
            © 2026 TaxSafar. All rights reserved.
          </p>

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="text-slate-400 hover:text-[#25D366] transition-colors duration-200 hover:-translate-y-0.5 inline-block">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-[#E1306C] transition-colors duration-200 hover:-translate-y-0.5 inline-block">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Google */}
            <a href="#" aria-label="Google" className="text-slate-400 hover:text-[#4285F4] transition-colors duration-200 hover:-translate-y-0.5 inline-block">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-[#0077B5] transition-colors duration-200 hover:-translate-y-0.5 inline-block">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
