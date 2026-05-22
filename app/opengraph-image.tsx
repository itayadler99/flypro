import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FlyPro — השיטה למצוא טיסות זולות";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #0e1d3b 60%, #0b3a6b 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
          direction: "rtl",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#67e8f9",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          FlyPro
        </div>
        <div
          style={{
            fontSize: 82,
            fontWeight: 900,
            marginTop: 20,
            lineHeight: 1.05,
            textAlign: "right",
          }}
        >
          השיטה למצוא
          <br />
          טיסות זולות ב-50%
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 30,
            color: "#cbd5e1",
            textAlign: "right",
          }}
        >
          12 מודולים · בוט התראות · קהילת ישראלים
        </div>
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          flypro.co.il
        </div>
      </div>
    ),
    { ...size }
  );
}
