"use client"
import { useState } from "react";

// ✅ Reusable RadioFilterGroup Component
export default function RadioBox({ title, options, name, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue ?? options[0]?.value);

  const handleSelect = (val) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <div style={{ width: "100%", fontFamily: "sans-serif" }}>
      {title && (
        <p style={{ fontWeight: "bold", marginBottom: 10, fontSize: 14, color: "#333" }}>
          {title}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
        {options.map((opt) => {
          const isActive = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 8,
                border: `2px solid ${isActive ? opt.color ?? "#22c55e" : "#d1d5db"}`,
                backgroundColor: "#fff",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
              }}
            >
              {/* Radio Circle */}
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2px solid ${isActive ? opt.color ?? "#22c55e" : "#9ca3af"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                }}
              >
                {isActive && (
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      backgroundColor: opt.color ?? "#22c55e",
                    }}
                  />
                )}
              </span>
              {/* Label */}
              <span
                style={{
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? opt.color ?? "#22c55e" : "#6b7280",
                  transition: "all 0.2s ease",
                }}
              >
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}