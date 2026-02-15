
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ServiceAreas from './components/ServiceAreas';
import Trust from './components/Trust';
import CaseStudy from './components/CaseStudy';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './components/Blog';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="services"><Services /></div>
        <div id="gallery"><Gallery /></div>
        <div id="about"><About /></div>
        <ServiceAreas />
        <Trust />
        <div id="case-studies"><CaseStudy /></div>
        <WhyChooseUs />
        <div id="blog"><Blog /></div>
        <div id="faqs"><FAQs /></div>
        <Testimonials />
        <div id="contact"><ContactForm /></div>
        <CTA />
      </main>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/92XXXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-3.832c1.53.912 3.51 1.558 5.671 1.559 5.523 0 10.017-4.494 10.02-10.02.001-2.677-1.041-5.193-2.937-7.09-1.896-1.896-4.412-2.937-7.091-2.938-5.517 0-10.013 4.493-10.015 10.015-.001 2.1.543 4.146 1.571 5.956l-1.02 3.73 3.801-.997zm11.362-5.938c-.3-.149-1.777-.878-2.05-.978-.272-.1-.471-.148-.67.15-.197.297-.767.969-.94 1.169-.173.199-.347.223-.647.074-.3-.149-1.264-.465-2.408-1.486-.89-.792-1.49-1.77-1.665-2.068-.175-.299-.019-.459.13-.608.135-.133.298-.347.447-.52.149-.172.198-.298.298-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.041 1.016-1.041 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.777-.726 2.025-1.423.248-.696.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default App;
