
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 mt-12 lg:mt-0">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/600/800?medical+clinic+1" className="rounded-2xl h-80 w-full object-cover shadow-lg" alt="Clinic Interior" />
               <img src="https://picsum.photos/600/800?medical+clinic+2" className="rounded-2xl h-64 w-full object-cover mt-16 shadow-lg" alt="Treatment Room" />
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Advanced Skin Care</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Advanced Aesthetic Skin Care You Can Trust
            </h2>
            <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Aesthetic skin treatments are modern, non-surgical procedures designed to improve skin health, texture, and appearance. These treatments address concerns such as acne, pigmentation, aging, uneven skin tone, and dullness using clinically proven techniques.
              </p>
              <p className="font-light">
                At GlowSkin Aesthetic Clinic, we combine medical expertise with advanced technology to deliver safe, effective, and long-lasting results. Every treatment is customized based on your skin type, concerns, and goals to ensure natural-looking outcomes and complete client satisfaction.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold">10+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-medium mt-1">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold">15k+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-medium mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
