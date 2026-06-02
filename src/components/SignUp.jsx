import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import {toast, Toaster} from 'sonner'
import { FiLoader } from 'react-icons/fi'

const SignUp = () => {
  const [exist, setExist] = useState('')
  const [loader, setLoader] = useState(false)
  const [focused, setFocused] = useState(null)
  const [mounted, setMounted] = useState(false)
  let endpoint = 'https://anonymous-back.onrender.com/signup'
  let navigate = useNavigate()

  useEffect(() => {
    setMounted(true)
  }, [])

  let formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    onSubmit: (values) => {
      setLoader(true)
      setExist('')
      axios.post(endpoint, values)
        .then((response) => {
          if (response.data.status == false) {
            setExist(response.data.message)
          } else {
            toast.success("Sign up successful.")
            navigate('/signin')
          }
          setLoader(false)
        })
        .catch((error) => {
          toast.error("Sign up error.")
          console.log(error)
          setLoader(false)
        })
    }
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .signup-root {
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

        .signup-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 80% 10%, rgba(99,51,255,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 10% 90%, rgba(255,51,119,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 40% 50%, rgba(0,200,255,0.07) 0%, transparent 50%);
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
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          animation: float 8s ease-in-out infinite;
        }
        .orb-1 { width: 300px; height: 300px; background: rgba(99,51,255,0.22); top: -60px; right: -60px; animation-delay: 0s; }
        .orb-2 { width: 220px; height: 220px; background: rgba(255,51,119,0.18); bottom: -40px; left: -40px; animation-delay: -4s; }
        .orb-3 { width: 160px; height: 160px; background: rgba(0,210,255,0.12); top: 40%; left: 8%; animation-delay: -2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.04); }
        }

        .card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 440px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          backdrop-filter: blur(24px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            0 32px 64px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.1);
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .card.mounted { opacity: 1; transform: translateY(0); }

        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff3377, #6333ff, #00c8ff, transparent);
          border-radius: 0 0 4px 4px;
        }

        .corner-deco {
          position: absolute;
          top: -1px; left: 24px;
          width: 40px; height: 40px;
          border-left: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          border-radius: 0 0 0 8px;
          pointer-events: none;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2.5rem;
        }
        .logo-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ff3377, #6333ff);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          box-shadow: 0 8px 24px rgba(255,51,119,0.4);
        }
        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: #fff;
          letter-spacing: 0.05em;
        }
        .logo-sub {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 5vw, 2.2rem);
          color: #fff;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }
        .heading span {
          background: linear-gradient(90deg, #ff3377, #6333ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .subheading {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.38);
          margin-bottom: 2rem;
          font-weight: 300;
        }

        /* Error banner */
        .error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(248,113,113,0.08);
          border: 1px solid rgba(248,113,113,0.25);
          border-radius: 10px;
          padding: 0.65rem 0.9rem;
          margin-bottom: 1.25rem;
          font-size: 0.82rem;
          color: #fca5a5;
          animation: shake 0.35s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }

        /* Steps indicator */
        .steps {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 1.75rem;
        }
        .step-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          transition: all 0.3s;
        }
        .step-dot.active {
          width: 24px;
          border-radius: 3px;
          background: linear-gradient(90deg, #ff3377, #6333ff);
        }

        .input-group {
          margin-bottom: 1.1rem;
        }
        .input-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.45rem;
          transition: color 0.2s;
        }
        .input-group.focused .input-label { color: #c084fc; }

        .input-wrap { position: relative; }
        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%; transform: translateY(-50%);
          color: rgba(255,255,255,0.2);
          font-size: 14px;
          transition: color 0.2s;
          pointer-events: none;
        }
        .input-group.focused .input-icon { color: #c084fc; }

        .input-field {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 0.85rem 1rem 0.85rem 2.6rem;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .input-field::placeholder { color: rgba(255,255,255,0.18); }
        .input-field:focus {
          border-color: rgba(192,132,252,0.5);
          background: rgba(192,132,252,0.05);
          box-shadow: 0 0 0 3px rgba(192,132,252,0.12), 0 4px 16px rgba(0,0,0,0.2);
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin: 0.75rem 0 1.25rem;
        }

        .submit-btn {
          width: 100%;
          padding: 0.9rem;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #ff3377 0%, #6333ff 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 8px 24px rgba(255,51,119,0.35);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(255,51,119,0.5); }
        .submit-btn:hover::before { opacity: 1; }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .spin { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .footer-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 0.83rem;
        }
        .footer-text { color: rgba(255,255,255,0.3); }
        .footer-link {
          color: #c084fc;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.2s;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 1px;
          background: #c084fc;
          transform: scaleX(0);
          transition: transform 0.2s;
        }
        .footer-link:hover { color: #e9d5ff; }
        .footer-link:hover::after { transform: scaleX(1); }

        /* Floating badge */
        .privacy-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 1.5rem;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
        }
        .privacy-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(99,51,255,0.6);
        }

        @media (max-width: 480px) {
          .card { padding: 2rem 1.5rem; border-radius: 18px; }
          .heading { font-size: 1.7rem; }
        }
      `}</style>

      <div className="signup-root">
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
              <div className="logo-text">ANON</div>
              <div className="logo-sub">Identity Network</div>
            </div>
          </div>

          {/* Step dots */}
          <div className="steps">
            <div className="step-dot active" />
            <div className="step-dot" />
            <div className="step-dot" />
          </div>

          <h1 className="heading">Create your<br /><span>identity.</span></h1>
          <p className="subheading">Join anonymously — no trace, no noise</p>

          {/* Error */}
          {exist && (
            <div className="error-banner">
              <span>⚠</span>
              <span>{exist}</span>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} noValidate>
            {/* Username */}
            <div className={`input-group ${focused === 'username' ? 'focused' : ''}`}>
              <label className="input-label">Username</label>
              <div className="input-wrap">
                <span className="input-icon">◈</span>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Choose a username"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  onFocus={() => setFocused('username')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            {/* Email */}
            <div className={`input-group ${focused === 'email' ? 'focused' : ''}`}>
              <label className="input-label">Email</label>
              <div className="input-wrap">
                <span className="input-icon">◎</span>
                <input
                  type="email"
                  className="input-field"
                  placeholder="Enter your email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            {/* Password */}
            <div className={`input-group ${focused === 'password' ? 'focused' : ''}`}>
              <label className="input-label">Password</label>
              <div className="input-wrap">
                <span className="input-icon">◉</span>
                <input
                  type="password"
                  className="input-field"
                  placeholder="Create a password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div className="divider" />

            <button type="submit" className="submit-btn" disabled={loader}>
              {loader
                ? <><FiLoader className="spin" /> Creating account...</>
                : 'Create Account →'
              }
            </button>
          </form>

          <div className="footer-row">
            <span className="footer-text">Already have an account?</span>
            <Link to="/signin" className="footer-link">Sign in</Link>
          </div>

          <div className="privacy-note">
            <div className="privacy-dot" />
            <span>End-to-end anonymous · No tracking</span>
            <div className="privacy-dot" />
          </div>
        </div>
                <Toaster position="top-right" />
      </div>
    </>
  )
}

export default SignUp