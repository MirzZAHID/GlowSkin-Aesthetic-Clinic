
import React from 'react';

const ServiceAreas: React.FC = () => {
  const areas = ['Lahore', 'Islamabad', 'Karachi', 'DHA', 'Gulberg'];
  
  return (
    <section className="py-20 bg-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Areas We Serve</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-white/90 mb-12">
          GlowSkin Aesthetic Clinic proudly provides professional skin and aesthetic treatments across major cities. Our clinic is trusted by clients seeking reliable, high-quality aesthetic care close to home.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <div 
              key={area}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xl font-serif font-medium"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
