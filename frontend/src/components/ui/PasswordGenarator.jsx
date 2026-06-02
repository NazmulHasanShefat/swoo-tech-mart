"use client";

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

  required.forEach((ch) => {
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

  if (score <= 1)
    return { label: "Weak", level: 1, color: "#ef4444" };

  if (score <= 2)
    return { label: "Fair", level: 2, color: "#f59e0b" };

  if (score <= 3)
    return { label: "Good", level: 3, color: "#22c55e" };

  return { label: "Strong", level: 4, color: "#6366f1" };
}

export default function PasswordGenerator() {
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
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-4px);
          }
          40% {
            transform: translateX(4px);
          }
          60% {
            transform: translateX(-3px);
          }
          80% {
            transform: translateX(3px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .shake {
          animation: shake 0.35s ease;
        }
      `}</style>

      <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
        <div className="w-full max-w-[480px] rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[0.12em] text-indigo-500">
            Security Tool
          </p>

          <h1 className="mb-7 text-[26px] font-bold leading-tight text-slate-900">
            Password Generator
          </h1>

          {/* Length */}
          <div className="mb-4 flex items-center gap-3">
            <span className="whitespace-nowrap text-[13px] text-slate-500">
              Length
            </span>

            <input
              className="w-[60px] rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-center font-mono text-sm font-semibold text-slate-900 outline-none transition-colors focus:border-indigo-500"
              type="text"
              inputMode="numeric"
              value={length}
              onChange={handleLengthChange}
              onBlur={handleLengthBlur}
              aria-label="Password length (8–64)"
            />

            <span className="text-[13px] text-slate-400">
              chars (8–64)
            </span>
          </div>

          {/* Output + Generate */}
          <div className="mb-3 flex gap-2.5">
            <div
              className={`flex min-h-[52px] flex-1 cursor-pointer items-center break-all rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-mono text-[13px] font-semibold tracking-wide text-slate-900 transition-colors hover:border-slate-400 select-all ${
                shake ? "shake" : ""
              }`}
              onClick={handleCopy}
              title={password ? "Click to copy" : ""}
              aria-label="Generated password"
            >
              {password ? (
                password
              ) : (
                <span className="font-normal text-slate-400">
                  Your password will appear here
                </span>
              )}
            </div>

            <button
              className="min-h-[52px] whitespace-nowrap rounded-xl bg-indigo-500 px-5 text-sm font-bold text-white transition-all hover:bg-indigo-600 active:scale-95"
              onClick={handleGenerate}
            >
              Generate
            </button>
          </div>

          {/* Copy + Character Count */}
          <div className="mb-5 flex items-center justify-between">
            <button
              className={`flex items-center gap-1.5 rounded-lg border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                copied
                  ? "border-green-300 text-green-600"
                  : "border-slate-300 text-slate-500 hover:border-slate-400 hover:text-slate-900"
              }`}
              onClick={handleCopy}
              disabled={!password}
              style={{
                opacity: password ? 1 : 0.4,
                cursor: password ? "pointer" : "default",
              }}
            >
              {copied ? "✓ Copied!" : "Copy password"}
            </button>

            {password && (
              <span className="text-xs text-slate-400">
                {password.length} characters
              </span>
            )}
          </div>

          {/* Strength */}
          <div>
            <div className="mb-1.5 flex justify-between text-xs text-slate-500">
              <span>Strength</span>

              {strength && (
                <span
                  className="font-semibold"
                  style={{ color: strength.color }}
                >
                  {strength.label}
                </span>
              )}
            </div>

            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-[4px] flex-1 rounded-full bg-slate-200 transition-colors"
                  style={{
                    background:
                      strength && i <= strength.level
                        ? strength.color
                        : undefined,
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