
import React from 'react';

const Trust: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Experience & Expertise</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
              Trusted by Thousands of Happy Clients
            </h2>
            <div className="mt-8 space-y-6 text-lg text-slate-600">
              <p>
                With over 10 years of clinical experience, GlowSkin Aesthetic Clinic is led by certified professionals dedicated to excellence in aesthetic care. We use FDA-approved equipment, follow strict safety protocols, and maintain the highest standards of hygiene.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                 <div className="flex items-start space-x-3">
                   <div className="flex-shrink-0 mt-1">
                     <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <p className="text-sm font-medium text-slate-700">FDA-Approved Equipment</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <div className="flex-shrink-0 mt-1">
                     <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <p className="text-sm font-medium text-slate-700">Strict Safety Protocols</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <div className="flex-shrink-0 mt-1">
                     <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <p className="text-sm font-medium text-slate-700">Personalized Plans</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <div className="flex-shrink-0 mt-1">
                     <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <p className="text-sm font-medium text-slate-700">Patient-First Approach</p>
                 </div>
              </div>
              <p className="mt-6 text-slate-600 font-light italic">
                Our results-driven approach focuses on real improvements, not temporary fixes.
              </p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 relative">
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/1000/1000?doctor" alt="Aesthetic Specialist" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-2xl hidden md:block">
               <p className="text-4xl font-serif font-bold text-gold">100%</p>
               <p className="text-xs uppercase tracking-widest mt-1 opacity-70">Client Satisfaction</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
