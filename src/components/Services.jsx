import React, { useRef, useState, useEffect } from 'react';

const DISPLAY = { fontFamily: "'Playfair Display', Georgia, serif" };

const useIntersection = (threshold = 0.15) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const Chevrons = () => (
  <svg className="w-4 h-4 text-[#0eb15b] flex-shrink-0 mt-0.5" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 5 20 12 13 19" />
    <polyline points="5 5 12 12 5 19" />
  </svg>
);

const serviceData = [
  {
    title: "Return Filing",
    sub: "GST, Income Tax, TDS, FSSAI & more",
    points: [
      "Expert-led return filing across all tax types.",
      "Ensure compliance with latest tax regulations.",
      "Fast, accurate, and stress-free submission.",
      "Dedicated support for error resolution and queries."
    ]
  },
  {
    title: "Assessment & Notice Resolution",
    sub: "Income Tax, GST, Professional Tax, Customs & more",
    points: [
      "Clear handling of income tax or GST notices.",
      "Case-specific consultation with experts.",
      "Drafting and filing replies to tax authorities.",
      "Support for scrutiny, assessments, and appeals."
    ]
  },
  {
    title: "Registrations & Compliance",
    sub: "Company Incorporation, GST, Trademark, MSME & more",
    points: [
      "Start-to-finish company and LLP incorporation.",
      "Annual filings, strike-off, and legal drafting.",
      "Registrations for GST, MSME, FSSAI, Copyright, etc.",
      "Comprehensive legal and compliance support."
    ]
  },
  {
    title: "Virtual Office Facilities",
    sub: "For GST, MCA Registrations & more",
    points: [
      "Professional address for registration purposes.",
      "Pan-India presence with instant setup.",
      "Courier handling and virtual assistant options.",
      "GST/MCA compliant documentation provided."
    ]
  },
  {
    title: "Virtual Accounting & Bookkeeping",
    sub: "Cloud & Client Based Services",
    points: [
      "Real-time cloud-based bookkeeping systems.",
      "Data protection & confidentiality assurance.",
      "Timely reports and monthly reconciliation.",
      "Accounts maintenance tailored to your business."
    ]
  },
  {
    title: "Loan Assistance & Documentation",
    sub: "Business, Home, Gold, Education & Personal Loans",
    points: [
      "Expert help in choosing the best loan offers.",
      "Documentation and eligibility support.",
      "Quick approval and smooth processing.",
      "Customized loan strategies based on need."
    ]
  },
  {
    title: "Financial Planning & Investment Advisory",
    sub: "Wealth Management & Investment Guidance",
    points: [
      "Tax-efficient investment strategies.",
      "Goal-based financial planning support.",
      "Mutual funds, ELSS, SIPs & portfolio management.",
      "Guidance by SEBI-registered advisors (optional)."
    ]
  }
];

const ServiceRow = ({ service, reverse }) => {
  const [ref, visible] = useIntersection(0.18);

  const fromLeft  = `transition-all duration-700 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`;
  const fromRight = `transition-all duration-700 ${visible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`;

  const TitleSide = (
    <div className={`w-full lg:w-5/12 ${reverse ? fromRight : fromLeft}`} style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
      <h3 className="text-[30px] font-bold text-[#1a2b21] mb-2 leading-tight" style={DISPLAY}>
        {service.title}
      </h3>
      <p className="text-slate-500 text-[15px] mb-7">{service.sub}</p>
      <div className="flex flex-wrap gap-3">
        <button className="btn-fill flex items-center gap-2 border border-[#0eb15b] text-[#0eb15b]
                           px-5 py-2.5 rounded-lg text-sm font-semibold
                           hover:-translate-y-0.5 transition-transform duration-300 group">
          <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"/>
          </svg>
          Know More
        </button>
        <button className="bg-[#0eb15b] hover:bg-[#0a8f48] text-white px-5 py-2.5 rounded-lg
                           font-semibold text-sm transition-all duration-300
                           hover:shadow-[0_8px_25px_rgba(14,177,91,0.35)] hover:-translate-y-0.5">
          Request a Call Back
        </button>
      </div>
    </div>
  );

  const PointsSide = (
    <div className={`w-full lg:w-[52%] ${reverse ? fromLeft : fromRight}`}
         style={{ transitionDelay: '150ms', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
      <div className="flex flex-col">
        {service.points.map((point, idx) => (
          <div key={idx}
               className="flex gap-4 items-start py-4.5 border-b border-[#cfe6d6] last:border-0 last:pb-0
                          group/point hover:pl-2 transition-all duration-300">
            <Chevrons />
            <p className="text-[#3b4b41] text-[15px] font-medium leading-relaxed
                          group-hover/point:text-[#1a2b21] transition-colors duration-200">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={ref} className="border-b border-[#cfe6d6] py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}
                        justify-between items-start gap-16 lg:gap-28`}>
          {TitleSide}
          {PointsSide}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [headerRef, headerVisible] = useIntersection(0.1);

  return (
    <section className="bg-[#e8f6ed] w-full pt-14 pb-24">

      {/* Full-width ruled heading */}
      <div ref={headerRef} className="w-full mb-2 overflow-hidden">
        <div className={`flex items-center transition-all duration-700
                        ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
             style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
          <div className="flex-1 h-px bg-slate-300" />
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a2b21] whitespace-nowrap flex-shrink-0 px-10"
              style={DISPLAY}>
            Our Services?
          </h2>
          <div className="flex-1 h-px bg-slate-300" />
        </div>
      </div>

      {/* Service rows */}
      <div className="flex flex-col">
        {serviceData.map((service, i) => (
          <ServiceRow key={i} service={service} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Services;
