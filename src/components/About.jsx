import React, { useEffect, useState } from 'react';

const About = () => {
  const [mounted, setMounted] = useState(false);

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

      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse" />
            <span className="uppercase tracking-[3px] text-sm text-white/50 font-medium">Learn More</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-syne tracking-tight">
            About <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">ANON</span>
          </h1>
          <p className="text-white/60 mt-4 text-lg max-w-md mx-auto">
            A space for honest expression, built on anonymity.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* About Section */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-10 hover:border-violet-500/30 transition-all group">
            <div className="h-1.5 w-16 bg-gradient-to-r from-violet-500 to-rose-500 rounded-full mb-8" />
            
            <h2 className="text-4xl font-bold text-white font-syne mb-6">About Us</h2>
            
            <div className="text-white/80 leading-relaxed text-[17px] space-y-6">
              <p>
                Welcome to ANON — a platform where your voice matters, and your identity remains a secret.
              </p>
              <p>
                We believe everyone should have the freedom to express themselves without fear of judgment, 
                discrimination, or exposure. Share thoughts, seek advice, and engage in candid conversations — 
                all while staying completely anonymous.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-xs uppercase tracking-widest text-white/40">
              Built with privacy at the core
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-10 hover:border-rose-500/30 transition-all group">
            <div className="h-1.5 w-16 bg-gradient-to-r from-rose-500 to-cyan-400 rounded-full mb-8" />
            
            <h2 className="text-4xl font-bold text-white font-syne mb-6">Our Mission</h2>
            
            <div className="text-white/80 leading-relaxed text-[17px] space-y-6">
              <p>
                At ANON, our mission is to create a safe and supportive environment for open and honest communication.
              </p>
              <p>
                We understand there are moments when you want to discuss personal matters, explore ideas, 
                or connect with like-minded people — without revealing who you are. 
                That’s why we built a platform that puts your privacy first while fostering meaningful connections.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4 text-xs uppercase tracking-widest text-white/40">
              <div className="flex-1 h-px bg-white/10" />
              No tracking • No logs • No compromise
              <div className="flex-1 h-px bg-white/10" />
            </div>
          </div>
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

export default About;