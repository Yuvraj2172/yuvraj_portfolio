import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#ef4444",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#fbbf24",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#22c55e",
              display: "flex",
            }}
          />
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, display: "flex" }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: "#38bdf8",
            marginTop: 22,
            display: "flex",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#a1a1aa",
            marginTop: 30,
            maxWidth: 920,
            display: "flex",
          }}
        >
          {siteConfig.summary}
        </div>
      </div>
    ),
    { ...size }
  );
}
