
import React from 'react';

const services = [
  {
    title: 'Laser Hair Removal',
    description: 'Advanced laser technology for long-term hair reduction with safe and precise results.',
    image: 'https://images.unsplash.com/photo-1598911584262-50321ce7d042?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Hydrafacial Treatment',
    description: 'Deep cleansing, exfoliation, and hydration for instantly glowing and refreshed skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Chemical Peels',
    description: 'Improves skin texture, reduces pigmentation, and promotes skin renewal.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Botox & Dermal Fillers',
    description: 'Minimally invasive treatments to reduce fine lines and restore facial volume.',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Acne & Scar Treatment',
    description: 'Targeted solutions to treat active acne and reduce the appearance of scars.',
    image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'PRP Skin Therapy',
    description: 'Natural skin rejuvenation using platelet-rich plasma for youthful radiance.',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Specialized Treatments</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Our Aesthetic Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-light">
            Clinically-proven solutions tailored to your unique skin concerns.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center text-gold font-semibold hover:underline group/link"
                >
                  Book Session
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
