
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-soft-gold">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-white opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
              Reveal Your Natural Glow with <span className="text-gold italic">Advanced</span> Aesthetic Treatments
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              Experience safe, effective, and personalized skin care solutions designed to enhance your natural beauty. Our expert-led aesthetic treatments help you achieve healthy, radiant, and confident skin.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-gold hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-gold/20"
              >
                Book Free Consultation
              </a>
              <a
                href="tel:+92XXXXXXXXXX"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-base font-semibold rounded-full text-gold hover:bg-gold hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-4 opacity-75">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src={`https://picsum.photos/100/100?random=${i}`}
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">Trusted by 10,000+ Happy Clients</p>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative group">
            <div className="absolute -inset-4 bg-gold/10 rounded-2xl transform -rotate-3 transition group-hover:rotate-0 duration-700"></div>
            <img
              src="https://picsum.photos/800/1000?aesthetic+skin+care"
              alt="Skin Care Treatment"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] lg:h-[600px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-2">
                <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Expert Led Clinic</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Certified Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
