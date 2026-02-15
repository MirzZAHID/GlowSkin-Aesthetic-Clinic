
import React from 'react';

const reasons = [
  'Personalized treatment plans for every skin type',
  'Experienced and certified aesthetic professionals',
  'Advanced, medically approved technology',
  'Safe, hygienic, and comfortable environment',
  'Transparent pricing with no hidden costs'
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative group">
            <img 
              src="https://picsum.photos/800/800?luxury+clinic" 
              alt="Luxury Clinic Environment" 
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.02]" 
            />
            <div className="absolute inset-0 bg-gold/10 mix-blend-multiply rounded-3xl"></div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">The GlowSkin Advantage</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Why Clients Choose GlowSkin
            </h2>
            
            <div className="mt-10 space-y-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl border border-slate-50 hover:border-gold/30 hover:bg-soft-gold transition-colors duration-300">
                  <div className="flex-shrink-0 h-10 w-10 bg-gold rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-slate-700 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
