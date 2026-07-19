import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #00D4A5, #00A67D)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "#0A0A0A",
            }}
          >
            AG
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>
            Asia Gate
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Поставки из Китая без границ и рисков
        </div>
        <div style={{ fontSize: 28, color: "#ADADAD", marginTop: 28 }}>
          Закупка · Контроль качества · Логистика · Таможня
        </div>
      </div>
    ),
    { ...size }
  );
}
