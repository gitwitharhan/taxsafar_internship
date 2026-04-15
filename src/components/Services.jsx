import React, { useRef, useState, useEffect } from 'react';

const DISPLAY_FONT = { fontFamily: "'Playfair Display', Georgia, serif" };

// Custom hook for scroll animation
const useIntersection = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#0eb15b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
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
  const [ref, isVisible] = useIntersection(0.2);

  const TitleContent = (
    <div className={`w-full lg:w-5/12 transition-all duration-1000 transform opacity-0 ${isVisible ? 'translate-x-0 opacity-100' : (reverse ? 'translate-x-20' : '-translate-x-20')} mb-8 lg:mb-0`}>
      <h3 className="text-[30px] font-bold text-[#1f2e24] mb-2" style={DISPLAY_FONT}>{service.title}</h3>
      <p className="text-gray-500 text-[15px] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>{service.sub}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 border border-[#0eb15b] text-[#0eb15b] px-5 py-2.5 rounded-lg hover:bg-[#0eb15b] hover:text-white transition-all font-medium text-sm shadow-sm group">
          <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"></path></svg>
          Know More
        </button>
        <button className="bg-[#1fbd68] hover:bg-[#18a258] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Request a Call Back
        </button>
      </div>
    </div>
  );

  const PointsContent = (
    <div className={`w-full lg:w-6/12 transition-all duration-1000 delay-200 transform opacity-0 ${isVisible ? 'translate-x-0 opacity-100' : (reverse ? '-translate-x-20' : 'translate-x-20')}`}>
      <div className="flex flex-col gap-5">
        {service.points.map((point, idx) => (
          <div key={idx} className="flex gap-4 items-start pb-4 border-b border-[#cfe6d6] last:border-0 last:pb-0 hover:translate-x-2 transition-transform duration-300">
            <CheckIcon />
            <p className="text-[#3b4b41] text-[15px] font-medium leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={ref} className="border-b border-[#cfe6d6] py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between items-start gap-16 lg:gap-28`}>
          {TitleContent}
          {PointsContent}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [headerRef, isHeaderVisible] = useIntersection(0.1);


  return (
    <section className="bg-[#e8f6ed] w-full pt-14 pb-24">

      {/* Services Title — full-width lines with centered heading */}
      <div ref={headerRef} className="w-full mb-2">
        <div className={`flex items-center gap-0 transition-all duration-1000 opacity-0 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}>
          {/* Left line — full width up to text */}
          <div className="flex-1 h-px bg-slate-300"></div>
          {/* Heading */}
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1f2e24] whitespace-nowrap flex-shrink-0 px-10"
            style={DISPLAY_FONT}
          >
            Our Services?
          </h2>
          {/* Right line — full width after text */}
          <div className="flex-1 h-px bg-slate-300"></div>
        </div>
      </div>

      {/* Service Rows */}
      <div className="flex flex-col">
        {serviceData.map((service, index) => (
          <ServiceRow 
            key={index} 
            service={service} 
            reverse={index % 2 !== 0} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
