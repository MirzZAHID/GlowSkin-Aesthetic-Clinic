
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact-form" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-gold hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Reserve Your Slot</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Book Your Free Professional Consultation
            </h2>
            <p className="text-lg text-slate-600 mb-10 font-light max-w-lg">
              Our experts are ready to design your path to perfect skin. Fill out the form and we will reach out within 24 hours to confirm your appointment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Call Directly</p>
                  <p className="text-xl font-serif font-bold">+92 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Clinic Hours</p>
                  <p className="text-xl font-serif font-bold">Mon - Sat: 10AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none text-slate-800" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none text-slate-800" placeholder="+92 3XX XXXXXXX" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Interested Treatment</label>
                <select className="w-full px-4 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none text-slate-800 appearance-none">
                  <option>Laser Hair Removal</option>
                  <option>Hydrafacial</option>
                  <option>Chemical Peel</option>
                  <option>Botox / Fillers</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-4 bg-slate-50 border-0 rounded-2xl focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none text-slate-800 resize-none" placeholder="Tell us more about your concerns..."></textarea>
              </div>
              
              <button className="w-full py-5 bg-gold text-white text-lg font-bold rounded-2xl hover:bg-opacity-90 transition-all shadow-xl shadow-gold/20 transform active:scale-[0.98]">
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
