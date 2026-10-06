import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/lib/content/projects";

export const alt = "Case — Portfólio de Adriano Souza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  const title = project?.title ?? "Projeto";
  const summary = project?.summary.pt ?? "";
  const tech = (project?.tech ?? []).slice(0, 6);

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
          padding: "68px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              color: "#3b82f6",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Case · Portfólio
          </div>
          <div style={{ color: "#8b98ac", fontSize: 28 }}>adrianorsouza.dev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f8fafc",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            {title}
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 32, lineHeight: 1.35, maxWidth: 1000 }}>
            {summary.length > 150 ? `${summary.slice(0, 147)}…` : summary}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {tech.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                color: "#cbd5e1",
                background: "#17233b",
                border: "1px solid #26324a",
                borderRadius: 999,
                padding: "8px 20px",
                fontSize: 26,
                marginRight: 14,
                marginTop: 14,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
