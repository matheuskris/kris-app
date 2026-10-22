import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { siteConfig } from "@/lib/content/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const photoData = await readFile(join(process.cwd(), "public/profile-pic.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c1014",
          padding: "64px 72px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingRight: 48,
          }}
        >
          <div
            style={{
              color: "#b4bec6",
              fontSize: 22,
              marginBottom: 20,
            }}
          >
            {siteConfig.roleTitle}
          </div>
          <div
            style={{
              color: "#e8ecef",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              marginBottom: 24,
            }}
          >
            {siteConfig.brandName}
          </div>
          <div
            style={{
              width: 72,
              height: 1,
              background: "#8aa8b3",
              marginBottom: 24,
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#b4bec6",
              fontSize: 22,
              lineHeight: 1.5,
              maxWidth: 520,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>
        <img
          src={photoSrc}
          alt={siteConfig.brandName}
          width={280}
          height={360}
          style={{
            objectFit: "cover",
            objectPosition: "center 18%",
            borderRadius: 16,
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
