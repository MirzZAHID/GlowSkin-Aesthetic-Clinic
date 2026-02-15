
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
      >
        <span className="text-xl font-serif font-bold text-slate-900">{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "Is aesthetic treatment safe?",
      answer: "Yes, all treatments are performed using clinically approved equipment by trained professionals. We follow strict hygiene and safety standards to ensure the best care for your skin."
    },
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions depends on your skin condition and treatment goals. For example, laser hair removal usually requires 6-8 sessions, while some facials show immediate results."
    },
    {
      question: "Is there any downtime after treatment?",
      answer: "Most treatments have little to no downtime, allowing you to resume daily activities quickly. Some specialized peels might have 2-3 days of mild redness."
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes, we provide professional consultations to recommend the best treatment plan for you. Our experts will analyze your skin type and concerns before starting any treatment."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Got Questions?</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="bg-white px-8 lg:px-12 py-4 rounded-3xl shadow-sm border border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
