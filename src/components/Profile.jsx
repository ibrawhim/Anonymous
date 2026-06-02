import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import { FaCopy, FaEye, FaShareAlt } from 'react-icons/fa';
import { toast } from 'sonner';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const myDetails = JSON.parse(localStorage.getItem("loginDetails"));
    if (myDetails?.username) {
      setUsername(myDetails.username);
    }
    setMounted(true);
  }, []);

  const myLink = `https://regal-dasik-41ecda.netlify.app/message/${username}`;

  const copyLink = () => {
    copy(myLink)
      .then(() => {
        setCopied(true);
        toast.success('Link copied successfully!', {
          description: 'Share it anonymously',
          duration: 2000,
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        toast.error('Failed to copy link');
      });
  };

  return (
    <div className="min-h-screen bg-[#060912] flex items-center justify-center p-6 relative overflow-hidden font-dmsans">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(99,51,255,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_80%_70%,rgba(255,51,119,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_40%,rgba(0,200,255,0.12),transparent_70%)]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Floating Orbs */}
      <div className="absolute w-[380px] h-[380px] bg-violet-500/30 rounded-full blur-[90px] top-[-100px] left-[-100px] animate-float" />
      <div className="absolute w-[300px] h-[300px] bg-rose-500/25 rounded-full blur-[90px] bottom-[-80px] right-[-80px] animate-float delay-1000" />
      <div className="absolute w-[220px] h-[220px] bg-cyan-400/20 rounded-full blur-[90px] top-[45%] left-[15%] animate-float delay-2000" />

      <div
        className={`w-full max-w-[520px] bg-white/5 backdrop-blur-3xl border border-white/10 
                    rounded-3xl p-10 shadow-2xl transition-all duration-700
                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Top Accent Line */}
        <div className="h-0.5 w-4/5 mx-auto bg-gradient-to-r from-transparent via-violet-500 via-rose-500 to-cyan-400 rounded-full mb-8" />

        {/* Logo */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-rose-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-violet-500/50">
            🕶️
          </div>
          <div>
            <div className="text-[28px] font-bold text-white tracking-[-0.02em] font-syne">ANON</div>
            <div className="text-xs text-white/40 tracking-[3px] uppercase font-medium">Identity Network</div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-3 font-syne">
          Welcome back,<br />
          <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">{username}</span>
        </h1>
        <p className="text-white/50 text-[17px] mb-10">
          Your anonymous identity is active
        </p>

        {/* Link Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 hover:border-violet-500/40 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <FaShareAlt className="text-violet-400" />
            <span className="uppercase text-xs tracking-widest font-medium text-white/50">Your Anonymous Link</span>
          </div>

          <div className="font-mono text-sm text-violet-200 break-all mb-5 leading-relaxed">
            {myLink}
          </div>

          <button
            onClick={copyLink}
            className="w-full bg-white/10 hover:bg-violet-600 border border-white/10 hover:border-violet-400 
                       text-white py-4 rounded-2xl flex items-center justify-center gap-3 
                       transition-all active:scale-95 font-semibold text-[15px]"
          >
            <FaCopy />
            {copied ? 'COPIED SUCCESSFULLY ✓' : 'COPY LINK'}
          </button>
        </div>

        {/* View Messages Button */}
        <Link to="/view" className="block">
          <button className="w-full bg-gradient-to-r from-rose-500 to-violet-600 hover:from-rose-600 hover:to-violet-700 
                           text-white font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 
                           shadow-xl shadow-rose-500/40 transition-all active:scale-[0.98] font-syne tracking-wide">
            <FaEye className="text-xl" />
            VIEW ANONYMOUS MESSAGES
          </button>
        </Link>
      </div>

      {/* Font Imports & Animations */}
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
          50% { transform: translateY(-25px) scale(1.05); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default Profile;