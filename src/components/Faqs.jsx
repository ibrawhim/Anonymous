import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Faqs = () => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is my message really anonymous as a sender?",
      answer: "Yeah, absolutely! No one, including the receiver of your message, would find out who you are."
    },
    {
      question: "Can I send a picture anonymously?",
      answer: "Not yet. This feature is planned for future updates."
    },
    {
      question: "How long before the message is delivered?",
      answer: "Instantly — as soon as you hit send."
    },
    {
      question: "Who can I send my anonymous message link to?",
      answer: "Absolutely anyone. Share it freely on social media, with friends, or even strangers."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#060912] relative overflow-hidden font-dmsans py-20 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(99,51,255,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_80%_70%,rgba(255,51,119,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_40%,rgba(0,200,255,0.10),transparent_70%)]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Floating Orbs */}
      <div className="absolute w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[100px] top-[-80px] left-[-80px] animate-float" />
      <div className="absolute w-[320px] h-[320px] bg-rose-500/20 rounded-full blur-[100px] bottom-[-120px] right-[-100px] animate-float delay-1000" />
      <div className="absolute w-[280px] h-[280px] bg-cyan-400/15 rounded-full blur-[90px] top-[40%] left-[15%] animate-float delay-2000" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="uppercase tracking-[3px] text-sm text-violet-400 font-medium">Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-syne tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-white/60 mt-4 text-lg">
            Everything you need to know about ANON
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`space-y-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-white text-[17px] font-medium pr-6">
                  {faq.question}
                </span>
                <div className="text-violet-400 transition-transform duration-300">
                  {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-white/80 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-white/40 text-sm">
          Still have questions? Reach out to us anonymously.
        </div>
      </div>

      {/* Fonts & Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .font-syne { font-family: 'Syne', sans-serif; }
        .font-dmsans { font-family: 'DM Sans', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        .animate-float {
          animation: float 13s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default Faqs;