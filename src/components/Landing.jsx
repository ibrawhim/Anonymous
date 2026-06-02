import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeadSideMask } from 'react-icons/fa';

const Landing = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#060912] flex items-center justify-center p-6 relative overflow-hidden font-dmsans">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(99,51,255,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_80%_70%,rgba(255,51,119,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_40%,rgba(0,200,255,0.12),transparent_70%)]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Floating Orbs */}
      <div className="absolute w-[420px] h-[420px] bg-violet-500/25 rounded-full blur-[100px] top-[-120px] left-[-120px] animate-float" />
      <div className="absolute w-[340px] h-[340px] bg-rose-500/20 rounded-full blur-[100px] bottom-[-100px] right-[-100px] animate-float delay-700" />
      <div className="absolute w-[260px] h-[260px] bg-cyan-400/15 rounded-full blur-[90px] top-[50%] left-[10%] animate-float delay-1500" />

      <div
        className={`w-full max-w-[480px] bg-white/5 backdrop-blur-3xl border border-white/10 
                    rounded-3xl p-12 shadow-2xl text-center transition-all duration-700
                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Top Accent */}
        <div className="h-0.5 w-3/4 mx-auto bg-gradient-to-r from-transparent via-violet-500 via-rose-500 to-cyan-400 rounded-full mb-10" />

        {/* Icon */}
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-violet-600 to-rose-500 rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-2xl shadow-violet-500/50">
          <FaHeadSideMask />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-none mb-4 font-syne tracking-tight">
          Welcome to <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">ANON</span>
        </h1>

        <h2 className="text-white/70 text-xl md:text-2xl font-light max-w-[340px] mx-auto leading-tight">
          Send and receive messages <span className="text-rose-400">completely anonymously</span>
        </h2>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4">
          <Link to="/signup" className="block">
            <button className="w-full bg-gradient-to-r from-rose-500 to-violet-600 hover:from-rose-600 hover:to-violet-700 
                             text-white font-bold py-5 rounded-2xl text-lg font-syne tracking-wider
                             shadow-xl shadow-rose-500/40 transition-all active:scale-95">
              CREATE ACCOUNT
            </button>
          </Link>

          <Link to="/signin" className="block">
            <button className="w-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white 
                             font-medium py-5 rounded-2xl text-lg transition-all active:scale-95">
              SIGN IN
            </button>
          </Link>
        </div>

        <p className="text-white/40 text-sm mt-8">
          No tracking • No logs • Pure anonymity
        </p>
      </div>

      {/* Fonts & Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .font-syne {
          font-family: 'Syne', sans-serif;
        }
        .font-dmsans {
          font-family: 'DM Sans', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.06); }
        }
        .animate-float {
          animation: float 14s ease-in-out infinite;
        }
        .delay-700 { animation-delay: 700ms; }
        .delay-1500 { animation-delay: 1.5s; }
      `}</style>
    </div>
  );
};

export default Landing;