
import React from 'react';

const testimonials = [
  {
    name: 'Ayesha K.',
    text: "“GlowSkin completely transformed my skin. The staff is professional and the results are amazing. I've never felt more confident.”",
    role: 'Verified Patient',
    img: 'https://picsum.photos/100/100?random=11'
  },
  {
    name: 'Sarah M.',
    text: "“I felt comfortable and confident throughout my treatment. Highly recommended clinic for anyone looking for authentic results.”",
    role: 'Verified Patient',
    img: 'https://picsum.photos/100/100?random=12'
  },
  {
    name: 'Hina R.',
    text: "“The hydrafacial at GlowSkin is the best I've ever had. My skin feels so refreshed and glowing! Excellent service.”",
    role: 'Verified Patient',
    img: 'https://picsum.photos/100/100?random=13'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="relative p-10 rounded-3xl bg-soft-gold/50 border border-slate-100"
            >
              <div className="flex items-center space-x-1 text-gold mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl font-serif text-slate-800 leading-relaxed italic mb-8">
                {item.text}
              </p>
              <div className="flex items-center space-x-4">
                <img src={item.img} className="h-12 w-12 rounded-full object-cover" alt={item.name} />
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
