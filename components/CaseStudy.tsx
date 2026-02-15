
import React from 'react';

const cases = [
  {
    category: 'Acne Rejuvenation',
    title: 'Severe Acne & Texture Correction',
    beforeImg: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1512290901920-6d97034ec813?auto=format&fit=crop&q=80&w=600',
    concern: 'Active acne, post-inflammatory hyperpigmentation, and uneven texture.',
    plan: 'Chemical Peel Series + Medical Grade Extractions',
    duration: '10 Weeks',
    result: '90% reduction in active lesions and significantly smoother skin surface.'
  },
  {
    category: 'Anti-Aging',
    title: 'Fine Lines & Volume Restoration',
    beforeImg: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600',
    concern: 'Deep nasolabial folds and loss of cheek volume.',
    plan: 'Dermal Fillers + Microneedling with PRP',
    duration: 'Single Session + Healing',
    result: 'Restored facial symmetry and youthful radiance with natural-looking volume.'
  }
];

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Transformation Gallery</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Real Results. Real Confidence.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Witness the visible impact of our personalized treatment plans through these verified client journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 flex flex-col h-full">
              <div className="grid grid-cols-2 gap-1 p-3">
                <div className="relative overflow-hidden rounded-l-2xl">
                  <img src={item.beforeImg} alt="Before Treatment" className="w-full h-72 object-cover" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-tighter">Before</div>
                </div>
                <div className="relative overflow-hidden rounded-r-2xl">
                  <img src={item.afterImg} alt="After Treatment" className="w-full h-72 object-cover" />
                  <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-tighter">After</div>
                </div>
              </div>
              
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-soft-gold text-gold text-xs font-bold rounded-full uppercase tracking-wider">{item.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 text-xs font-medium">{item.duration} Journey</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{item.title}</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex border-b border-slate-50 pb-3">
                    <span className="w-24 flex-shrink-0 font-bold text-slate-900">Concern:</span>
                    <span className="text-slate-600 font-light">{item.concern}</span>
                  </div>
                  <div className="flex border-b border-slate-50 pb-3">
                    <span className="w-24 flex-shrink-0 font-bold text-slate-900">Plan:</span>
                    <span className="text-slate-600 font-light">{item.plan}</span>
                  </div>
                  <div className="flex border-b border-slate-50 pb-3">
                    <span className="w-24 flex-shrink-0 font-bold text-slate-900">Outcome:</span>
                    <span className="text-slate-600 font-light">{item.result}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50">
                  <a href="#contact" className="inline-flex items-center text-gold font-bold hover:underline group">
                    View Full Clinical Case 
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 italic font-light mb-8">
            *Individual results may vary. Consult with our specialists for a personalized assessment.
          </p>
          <a href="#contact" className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl">
            Start Your Own Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
