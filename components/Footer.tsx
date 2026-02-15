
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="text-3xl font-serif font-bold tracking-tight text-slate-900">
              Glow<span className="text-gold">Skin</span>
            </a>
            <p className="mt-6 text-slate-500 font-light leading-relaxed">
              Advanced skin and aesthetic solutions with expert care and proven results. Our clinic combines science and art to enhance your natural beauty.
            </p>
            <div className="mt-8 flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <a key={social} href="#" className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-gold hover:bg-soft-gold transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Case Studies', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-gold transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Services</h4>
            <ul className="space-y-4">
              {['Laser Hair Removal', 'Hydrafacial', 'Chemical Peels', 'Botox & Fillers', 'Acne Treatment'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-500 hover:text-gold transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-8">Contact Information</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-gold">📍</span>
                <span className="text-slate-500">GlowSkin Plaza, Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-gold">📞</span>
                <a href="tel:+92XXXXXXXXXX" className="text-slate-500 hover:text-gold">+92 XXX XXX XXXX</a>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-gold">✉️</span>
                <a href="mailto:info@glowskinclinic.com" className="text-slate-500 hover:text-gold">info@glowskinclinic.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-50 pt-10 text-center">
          <p className="text-sm text-slate-400">
            © 2026 GlowSkin Aesthetic Clinic | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
