
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/2000/1000?pattern" className="w-full h-full object-cover" alt="pattern" />
        </div>
        
        <div className="relative px-8 py-16 lg:py-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light mb-10">
            Take the first step toward healthier, more radiant skin with expert aesthetic care you can trust. Book your consultation today and let our specialists create a treatment plan just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="px-10 py-5 bg-gold text-white text-lg font-bold rounded-full hover:bg-opacity-90 transition-all shadow-xl shadow-gold/20 w-full sm:w-auto">
              Book Your Appointment Now
            </button>
            <div className="text-white text-left hidden sm:block">
              <p className="text-sm opacity-60 uppercase tracking-widest">Call for Instant Booking</p>
              <p className="text-xl font-serif font-bold">+92 XXX XXX XXXX</p>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-slate-400">
            Free initial consultation for new clients. Limited slots available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
