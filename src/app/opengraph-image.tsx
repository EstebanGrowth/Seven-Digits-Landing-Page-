import { ImageResponse } from "next/og";

export const alt = "Seven Digits — Marketing for contractors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, #163a8a 0%, #04060b 70%)",
          color: "#eef2fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 48 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, fontWeight: 800, color: "#fff" }}>
            7
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 6 }}>SEVEN DIGITS</div>
        </div>
        <div style={{ fontSize: 26, color: "#6ea4ff", letterSpacing: 5, marginBottom: 20 }}>MARKETING FOR CONTRACTORS</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
          <span>MORE QUALIFIED OPPORTUNITIES.</span>
          <span style={{ display: "flex" }}>
            <span style={{ background: "#2563eb", padding: "0 12px", borderRadius: 6 }}>MORE CHANCES TO CLOSE.</span>
          </span>
        </div>
      </div>
    ),
    size,
  );
}
