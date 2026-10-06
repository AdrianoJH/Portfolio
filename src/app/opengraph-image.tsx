import { ImageResponse } from "next/og";

export const alt = "Adriano Souza — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b0f17 0%, #141d31 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 88,
                height: 88,
                borderRadius: 22,
                background: "#0e131d",
                border: "2px solid #26324a",
                color: "#ffffff",
                fontSize: 54,
                fontWeight: 800,
              }}
            >
              A
            </div>
          </div>
          <div style={{ color: "#8b98ac", fontSize: 30 }}>adrianorsouza.dev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#3b82f6",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Desenvolvedor Full Stack
          </div>
          <div style={{ color: "#f8fafc", fontSize: 86, fontWeight: 800, lineHeight: 1.02 }}>
            Adriano Rodrigues
          </div>
          <div style={{ color: "#f8fafc", fontSize: 86, fontWeight: 800, lineHeight: 1.02 }}>
            de Souza
          </div>
        </div>

        <div style={{ color: "#8b98ac", fontSize: 30 }}>
          React · Next.js · Node.js · TypeScript · Flutter · AWS
        </div>
      </div>
    ),
    { ...size },
  );
}
