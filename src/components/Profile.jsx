import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import { FaCopy, FaEye, FaShareAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: 'Link Copied!',
          text: 'Share it anonymously',
          icon: 'success',
          background: '#0f172a',
          color: '#e2e8f0',
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        Swal.fire({
          title: 'Failed to copy',
          background: '#0f172a',
          color: '#f87171',
        });
      });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .profile-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #060912;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
          padding: 1.5rem;
        }

        .profile-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 20%, rgba(99,51,255,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 70% 70% at 80% 70%, rgba(255,51,119,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 40%, rgba(0,200,255,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .grid-lines {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
          animation: float 12s ease-in-out infinite;
        }
        .orb-1 { width: 380px; height: 380px; background: rgba(99,51,255,0.28); top: -100px; left: -100px; }
        .orb-2 { width: 300px; height: 300px; background: rgba(255,51,119,0.22); bottom: -80px; right: -80px; animation-delay: -5s; }
        .orb-3 { width: 220px; height: 220px; background: rgba(0,210,255,0.18); top: 45%; left: 15%; animation-delay: -8s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.06); }
        }

        .card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 520px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 28px;
          padding: 3.5rem 3rem;
          backdrop-filter: blur(28px);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.05),
            0 40px 80px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.12);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card.mounted { opacity: 1; transform: translateY(0); }

        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 12%; right: 12%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #6333ff, #ff3377, #00c8ff, transparent);
          border-radius: 0 0 6px 6px;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 2rem;
        }
        .logo-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #6333ff, #ff3377);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          box-shadow: 0 10px 30px rgba(99,51,255,0.5);
        }

        .heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 6vw, 2.6rem);
          color: #fff;
          line-height: 1.05;
          margin-bottom: 0.4rem;
        }
        .heading span {
          background: linear-gradient(90deg, #6333ff, #ff3377);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subheading {
          color: rgba(255,255,255,0.45);
          font-size: 0.95rem;
          margin-bottom: 2.5rem;
        }

        .link-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }
        .link-box:hover {
          border-color: rgba(99,51,255,0.4);
          background: rgba(99,51,255,0.06);
        }

        .link-text {
          font-family: 'DM Sans', monospace;
          color: #c4b5fd;
          word-break: break-all;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .copy-btn {
          margin-top: 12px;
          width: 100%;
          padding: 0.85rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: #e0e7ff;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .copy-btn:hover {
          background: #6333ff;
          border-color: #a78bfa;
          transform: translateY(-2px);
        }

        .action-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #ff3377, #6333ff);
          color: white;
          border: none;
          border-radius: 14px;
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 12px 32px rgba(255,51,119,0.4);
          transition: all 0.3s ease;
        }
        .action-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(255,51,119,0.5);
        }

        .corner-deco {
          position: absolute;
          top: -1px; right: 28px;
          width: 48px; height: 48px;
          border-right: 1px solid rgba(255,255,255,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          border-radius: 0 0 12px 0;
        }
      `}</style>

      <div className="profile-root">
        <div className="grid-lines" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className={`card ${mounted ? 'mounted' : ''}`}>
          <div className="corner-deco" />

          {/* Logo */}
          <div className="logo-area">
            <div className="logo-icon">🕶️</div>
            <div>
              <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.35rem', color: '#fff' }}>
                ANON
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                IDENTITY NETWORK
              </div>
            </div>
          </div>

          <h1 className="heading">Welcome back,<br /><span>{username}</span></h1>
          <p className="subheading">Your anonymous identity is active. Share your link freely.</p>

          {/* Share Link */}
          <div className="link-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <FaShareAlt style={{ color: '#a78bfa' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
                YOUR ANONYMOUS LINK
              </span>
            </div>
            <div className="link-text">{myLink}</div>

            <button onClick={copyLink} className="copy-btn">
              <FaCopy /> {copied ? 'COPIED!' : 'COPY LINK'}
            </button>
          </div>

          {/* View Messages Button */}
          <Link to="/view">
            <button className="action-btn">
              <FaEye /> View Anonymous Messages
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;