import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrash, FaInbox, FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';

const View = () => {
  const endpoint = 'https://anonymous-back.onrender.com/view';
  const endpoint2 = 'https://anonymous-back.onrender.com/delete';

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null); // Track which message is being deleted

  useEffect(() => {
    setMounted(true);
    const myLogin = JSON.parse(localStorage.getItem('loginDetails'));

    axios.post(endpoint, myLogin)
      .then((result) => {
        setMessages(result.data.response || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Failed to load messages");
      });
  }, []);

  const deleteOne = (time, date, message, index) => {
    setDeletingIndex(index); // Start loading for this specific card

    axios.post(endpoint2, { time, date, message })
      .then((res) => {
        setMessages(res.data.newResult || []);
        toast.success("Message deleted successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete message");
      })
      .finally(() => {
        setDeletingIndex(null); // Reset loading state
      });
  };

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

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-bold text-white font-syne tracking-tight">
              Anonymous <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">Messages</span>
            </h1>
            <p className="text-white/60 mt-2 text-lg">
              All messages sent to you anonymously
            </p>
          </div>
          <div className="text-white/40 text-sm font-mono">
            {messages.length} message{messages.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Messages Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full" />
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-16 text-center">
            <div className="mx-auto w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 text-white/30">
              <FaInbox />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">No messages yet</h3>
            <p className="text-white/50 max-w-xs mx-auto">
              Oops! No one has sent you a message yet. Share your link to start receiving anonymous messages.
            </p>
          </div>
        ) : (
          <div className={`grid lg:grid-cols-2 gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {messages.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 hover:border-rose-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-rose-500 rounded-2xl flex items-center justify-center text-white text-xl">
                      🕶️
                    </div>
                    <div>
                      <div className="text-white/90 font-medium">Anonymous {index + 1}</div>
                      <div className="text-xs text-white/40 font-mono">Sender hidden</div>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteOne(item.myTime, item.myDate, item.message, index)}
                    disabled={deletingIndex === index}
                    className="text-rose-400 hover:text-rose-500 transition-all p-3 hover:bg-white/5 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {deletingIndex === index ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <FaTrash />
                    )}
                  </button>
                </div>

                {/* Message Text */}
                <div className="text-white/90 leading-relaxed text-[17px] mb-8 flex-1 overflow-y-auto max-h-[220px] pr-2 custom-scrollbar">
                  "{item.message}"
                </div>

                <div className="pt-6 border-t border-white/10 text-sm text-white/50 font-mono flex justify-between">
                  <div>🕒 {item.myTime}</div>
                  <div>{item.myDate}</div>
                </div>
              </div>
            ))}
          </div>
        )}
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

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(167, 139, 250, 0.4);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(167, 139, 250, 0.6);
        }
      `}</style>
    </div>
  );
};

export default View;