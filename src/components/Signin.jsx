import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import {toast, Toaster} from 'sonner'

const Signin = () => {
  const endpoint = 'https://anonymous-back.onrender.com/signin'
  let navigate = useNavigate()
  const [focused, setFocused] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  let formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: (values) => {
      setLoading(true)
      axios.post(endpoint, values)
        .then((response) => {
          setLoading(false)
          if (response.data.status == true) {
            localStorage.setItem('loginDetails', JSON.stringify(response.data.result))
            toast.success("Sign in successful.")
            navigate('/profile')
          } else {
            toast.error("Username or Password incorrect.")
            navigate('/signin')
          }
        })
        .catch((error) => {
          setLoading(false)
          console.log(error)
        })
    }
  })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .signin-root {
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

        /* Animated mesh background */
        .signin-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,51,255,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 80% 90%, rgba(255,51,119,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 60% 40%, rgba(0,200,255,0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* Floating grid lines */
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

        /* Orbs */
        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          animation: float 8s ease-in-out infinite;
        }
        .orb-1 {
          width: 320px; height: 320px;
          background: rgba(99,51,255,0.25);
          top: -80px; left: -80px;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 240px; height: 240px;
          background: rgba(255,51,119,0.2);
          bottom: -60px; right: -60px;
          animation-delay: -3s;
        }
        .orb-3 {
          width: 180px; height: 180px;
          background: rgba(0,210,255,0.15);
          top: 50%; right: 10%;
          animation-delay: -5s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-24px) scale(1.05); }
        }

        /* Card */
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

        /* Top accent bar */
        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #6333ff, #ff3377, #00c8ff, transparent);
          border-radius: 0 0 4px 4px;
        }

        /* Logo / Icon area */
        .logo-area {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2.5rem;
        }
        .logo-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6333ff, #ff3377);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          box-shadow: 0 8px 24px rgba(99,51,255,0.4);
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

        /* Heading */
        .heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 5vw, 2.2rem);
          color: #fff;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }
        .heading span {
          background: linear-gradient(90deg, #6333ff, #ff3377);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .subheading {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.38);
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        /* Input group */
        .input-group {
          margin-bottom: 1.25rem;
        }
        .input-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }
        .input-group.focused .input-label { color: #a78bfa; }

        .input-wrap {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%; transform: translateY(-50%);
          color: rgba(255,255,255,0.2);
          font-size: 15px;
          transition: color 0.2s;
          pointer-events: none;
        }
        .input-group.focused .input-icon { color: #a78bfa; }

        .input-field {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 0.875rem 1rem 0.875rem 2.6rem;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .input-field::placeholder { color: rgba(255,255,255,0.2); }
        .input-field:focus {
          border-color: rgba(99,51,255,0.6);
          background: rgba(99,51,255,0.06);
          box-shadow: 0 0 0 3px rgba(99,51,255,0.15), 0 4px 16px rgba(0,0,0,0.2);
        }

        /* Divider */
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin: 0.5rem 0 1.5rem;
        }

        /* Submit button */
        .submit-btn {
          width: 100%;
          padding: 0.9rem;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #6333ff 0%, #ff3377 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 8px 24px rgba(99,51,255,0.35);
          margin-bottom: 1.5rem;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,51,255,0.5);
        }
        .submit-btn:hover::before { opacity: 1; }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Spinner */
        .spinner {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-right: 8px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Footer */
        .footer-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 0.83rem;
        }
        .footer-text { color: rgba(255,255,255,0.3); }
        .footer-link {
          color: #a78bfa;
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
          background: #a78bfa;
          transform: scaleX(0);
          transition: transform 0.2s;
        }
        .footer-link:hover { color: #c4b5fd; }
        .footer-link:hover::after { transform: scaleX(1); }

        /* Corner decoration */
        .corner-deco {
          position: absolute;
          top: -1px; right: 24px;
          width: 40px; height: 40px;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          border-radius: 0 0 8px 0;
          pointer-events: none;
        }

        @media (max-width: 480px) {
          .card { padding: 2rem 1.5rem; border-radius: 18px; }
          .heading { font-size: 1.7rem; }
        }
      `}</style>

      <div className="signin-root">
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

          {/* Heading */}
          <h1 className="heading">Welcome<br /><span>back.</span></h1>
          <p className="subheading">Sign in to continue your anonymous session</p>

          <form onSubmit={formik.handleSubmit} noValidate>
            {/* Username */}
            <div className={`input-group ${focused === 'username' ? 'focused' : ''}`}>
              <label className="input-label">Username</label>
              <div className="input-wrap">
                <span className="input-icon">◈</span>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter your username"
                  name="username"
                  onChange={formik.handleChange}
                  onFocus={() => setFocused('username')}
                  onBlur={() => setFocused(null)}
                  value={formik.values.username}
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
                  placeholder="Enter your password"
                  name="password"
                  onChange={formik.handleChange}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused(null)}
                  value={formik.values.password}
                />
              </div>
            </div>

            <div className="divider" />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading && <span className="spinner" />}
              {loading ? 'Signing in...' : 'Sign In →'}
            </button>
          </form>

          <div className="footer-row">
            <span className="footer-text">New here?</span>
            <Link to="/signup" className="footer-link">Create an account</Link>
          </div>
        </div>
                <Toaster position="top-right" />
      </div>
    </>
  )
}

export default Signin