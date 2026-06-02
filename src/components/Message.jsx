import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPaperPlane, FaUserSecret, FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';

const Message = () => {
  const { username } = useParams();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const endpoint = 'https://anonymous-back.onrender.com/message';
  const maxLength = 200;

  const date = new Date();
  const myTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const myDate = date.toLocaleDateString();

  useEffect(() => {
    setMounted(true);
  }, []);

  const sendMessage = () => {
    if (!message.trim()) {
      toast.error("Please write a message before sending");
      return;
    }

    setLoading(true);

    const values = {
      username,
      message: message.trim(),
      myDate,
      myTime
    };

    axios.post(endpoint, values)
      .then((result) => {
        if (result.data.status === true) {
          setMessage('');
          toast.success("Your anonymous message has been sent!", {
            description: "Thank you for using ANON",
            duration: 3000,
          });
        } else {
          toast.error(result.data.message || "Failed to send message");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const charactersLeft = maxLength - message.length;

  return (
    <div className="min-h-screen bg-[#060912] relative overflow-hidden font-dmsans py-20 px-6 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(99,51,255,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_80%_70%,rgba(255,51,119,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_40%,rgba(0,200,255,0.12),transparent_70%)]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Floating Orbs */}
      <div className="absolute w-[420px] h-[420px] bg-violet-500/25 rounded-full blur-[110px] top-[-100px] left-[-100px] animate-float" />
      <div className="absolute w-[340px] h-[340px] bg-rose-500/20 rounded-full blur-[100px] bottom-[-120px] right-[-80px] animate-float delay-1000" />

      <div className={`w-full max-w-[520px] bg-white/5 backdrop-blur-3xl border border-white/10 
                      rounded-3xl p-10 shadow-2xl transition-all duration-700
                      ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-violet-600 to-rose-500 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-xl">
            <FaUserSecret />
          </div>
          <h1 className="text-4xl font-bold text-white font-syne tracking-tight mb-2">
            Send Anonymous Message
          </h1>
          <p className="text-white/60">
            To: <span className="text-rose-400 font-medium">@{username}</span>
          </p>
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={maxLength}
            placeholder="Write your anonymous message here..."
            className="w-full h-48 bg-white/5 border border-white/10 focus:border-violet-500 rounded-2xl p-6 text-white placeholder:text-white/40 resize-none focus:outline-none transition-all text-[17px] leading-relaxed"
          />
          
          {/* Character Count */}
          <div className="flex justify-end mt-2">
            <div className={`text-sm font-medium transition-colors ${charactersLeft < 30 ? 'text-rose-400' : 'text-white/50'}`}>
              {charactersLeft} characters left
            </div>
          </div>
        </div>

        {/* Send Button */}
        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="w-full bg-gradient-to-r from-rose-500 to-violet-600 hover:from-rose-600 hover:to-violet-700 
                     disabled:from-zinc-700 disabled:to-zinc-700 text-white font-bold py-5 rounded-2xl 
                     text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] font-syne tracking-wider shadow-xl shadow-rose-500/40 disabled:opacity-60"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" /> Sending Message...
            </>
          ) : (
            <>
              <FaPaperPlane /> Send Anonymously
            </>
          )}
        </button>

        <p className="text-center text-white/40 text-xs mt-8">
          Your identity is completely hidden • Message is end-to-end anonymous
        </p>
      </div>

      {/* Fonts & Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .font-syne { font-family: 'Syne', sans-serif; }
        .font-dmsans { font-family: 'DM Sans', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.06); }
        }
        .animate-float {
          animation: float 14s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default Message;