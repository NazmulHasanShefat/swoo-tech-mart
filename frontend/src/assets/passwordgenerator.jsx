"use client"
import { useState, useCallback } from "react";
 
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMS = "0123456789";
const SYMS = "!@#$%^&*()-_=+[]{}|;:,.<>?";
const ALL = UPPER + LOWER + NUMS + SYMS;
 
function generatePassword(length) {
  const required = [
    UPPER[Math.floor(Math.random() * UPPER.length)],
    LOWER[Math.floor(Math.random() * LOWER.length)],
    NUMS[Math.floor(Math.random() * NUMS.length)],
    SYMS[Math.floor(Math.random() * SYMS.length)],
  ];
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  const pw = Array.from(arr, (v) => ALL[v % ALL.length]);
  required.forEach((ch, i) => {
    pw[Math.floor(Math.random() * length)] = ch;
  });
  return pw.join("");
}
 
function getStrength(pw) {
  if (!pw) return null;
  let score = 0;
  if (pw.length >= 12) score++;
  if (pw.length >= 16) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return { label: "Weak", level: 1, color: "#e05c5c" };
  if (score <= 2) return { label: "Fair", level: 2, color: "#e09c3a" };
  if (score <= 3) return { label: "Good", level: 3, color: "#3aad7a" };
  return { label: "Strong", level: 4, color: "#6366f1" };
}
 
export default function PasswordGeneratorStrong() {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [shake, setShake] = useState(false);
 
  const strength = getStrength(password);
 
  const handleGenerate = useCallback(() => {
    const len = Math.min(64, Math.max(8, Number(length) || 16));
    setLength(len);
    setPassword(generatePassword(len));
    setShake(true);
    setTimeout(() => setShake(false), 400);
  }, [length]);
 
  const handleCopy = useCallback(() => {
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [password]);
 
  const handleLengthChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setLength(val === "" ? "" : Math.min(64, Number(val)));
  };
 
  const handleLengthBlur = () => {
    const val = Number(length);
    if (!val || val < 8) setLength(8);
    else if (val > 64) setLength(64);
  };
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=DM+Sans:wght@400;500;700&display=swap');
 
        .pg-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f0f11;
          padding: 24px;
        }
        .pg-card {
          width: 100%;
          max-width: 480px;
          background: #18181c;
          border: 1px solid #2a2a32;
          border-radius: 20px;
          padding: 36px 32px 32px;
        }
        .pg-heading {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366f1;
          margin: 0 0 8px;
        }
        .pg-title {
          font-size: 26px;
          font-weight: 700;
          color: #f0f0f5;
          margin: 0 0 28px;
          line-height: 1.2;
        }
 
        /* Length row */
        .pg-length-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .pg-length-label {
          font-size: 13px;
          color: #888;
          white-space: nowrap;
        }
        .pg-length-input {
          width: 60px;
          background: #0f0f11;
          border: 1px solid #2a2a32;
          border-radius: 8px;
          padding: 6px 10px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          color: #f0f0f5;
          text-align: center;
          outline: none;
          transition: border-color 0.15s;
        }
        .pg-length-input:focus { border-color: #6366f1; }
 
        /* Output + Generate row */
        .pg-input-row {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }
        .pg-output {
          flex: 1;
          background: #0f0f11;
          border: 1px solid #2a2a32;
          border-radius: 12px;
          padding: 14px 16px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          font-weight: 600;
          color: #f0f0f5;
          letter-spacing: 0.04em;
          word-break: break-all;
          min-height: 52px;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: border-color 0.15s;
          user-select: all;
        }
        .pg-output:hover { border-color: #3a3a48; }
        .pg-output.shake {
          animation: pg-shake 0.35s ease;
        }
        @keyframes pg-shake {
          0%   { transform: translateX(0); }
          20%  { transform: translateX(-4px); }
          40%  { transform: translateX(4px); }
          60%  { transform: translateX(-3px); }
          80%  { transform: translateX(3px); }
          100% { transform: translateX(0); }
        }
        .pg-placeholder { color: #444; font-weight: 400; }
 
        .pg-gen-btn {
          background: #6366f1;
          border: none;
          border-radius: 12px;
          padding: 0 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.15s, transform 0.1s;
          min-height: 52px;
        }
        .pg-gen-btn:hover { background: #4f52d9; }
        .pg-gen-btn:active { transform: scale(0.97); }
 
        /* Actions row */
        .pg-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .pg-copy-btn {
          background: none;
          border: 1px solid #2a2a32;
          border-radius: 8px;
          padding: 7px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: ${copied ? "#3aad7a" : "#aaa"};
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: border-color 0.15s, color 0.15s;
        }
        .pg-copy-btn:hover { border-color: #444; color: #f0f0f5; }
 
        /* Strength */
        .pg-strength-wrap { }
        .pg-strength-meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #555;
          margin-bottom: 6px;
        }
        .pg-strength-label { font-weight: 600; }
        .pg-bars {
          display: flex;
          gap: 5px;
        }
        .pg-bar {
          flex: 1;
          height: 3px;
          border-radius: 99px;
          background: #222;
          transition: background 0.3s;
        }
      `}</style>
 
      <div className="pg-root">
        <div className="pg-card">
          <p className="pg-heading">Security Tool</p>
          <h1 className="pg-title">Password Generator</h1>
 
          {/* Length */}
          <div className="pg-length-row">
            <span className="pg-length-label">Length</span>
            <input
              className="pg-length-input"
              type="text"
              inputMode="numeric"
              value={length}
              onChange={handleLengthChange}
              onBlur={handleLengthBlur}
              aria-label="Password length (8–64)"
            />
            <span className="pg-length-label" style={{ color: "#555" }}>chars (8–64)</span>
          </div>
 
          {/* Output + Generate */}
          <div className="pg-input-row">
            <div
              className={`pg-output${shake ? " shake" : ""}`}
              onClick={handleCopy}
              title={password ? "Click to copy" : ""}
              aria-label="Generated password"
            >
              {password
                ? password
                : <span className="pg-placeholder">Your password will appear here</span>
              }
            </div>
            <button className="pg-gen-btn" onClick={handleGenerate}>
              Generate
            </button>
          </div>
 
          {/* Copy + char count */}
          <div className="pg-actions">
            <button
              className="pg-copy-btn"
              onClick={handleCopy}
              disabled={!password}
              style={{ opacity: password ? 1 : 0.4, cursor: password ? "pointer" : "default" }}
            >
              {copied ? "✓ Copied!" : "Copy password"}
            </button>
            {password && (
              <span style={{ fontSize: 12, color: "#444" }}>
                {password.length} characters
              </span>
            )}
          </div>
 
          {/* Strength */}
          <div className="pg-strength-wrap">
            <div className="pg-strength-meta">
              <span>Strength</span>
              {strength && (
                <span className="pg-strength-label" style={{ color: strength.color }}>
                  {strength.label}
                </span>
              )}
            </div>
            <div className="pg-bars">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="pg-bar"
                  style={{
                    background: strength && i <= strength.level ? strength.color : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 