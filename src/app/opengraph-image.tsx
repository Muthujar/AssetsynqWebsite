import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOGO, PRODUCT_SCREENSHOTS } from "@/lib/brand";

export const alt =
  "AssetSynQ: pawn shop software for Indian gold loan shops";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function publicImage(src: string) {
  const data = await readFile(join(process.cwd(), "public", src));
  // Some files in public/ are JPEGs with a .png name, so sniff the real type.
  const type = data[0] === 0xff && data[1] === 0xd8 ? "jpeg" : "png";
  return `data:image/${type};base64,${data.toString("base64")}`;
}

export default async function Image() {
  const { dashboard } = PRODUCT_SCREENSHOTS;
  const [logo, screenshot] = await Promise.all([
    publicImage(LOGO.src),
    publicImage(dashboard.src),
  ]);
  const shotWidth = 580;
  const shotHeight = Math.round((shotWidth * dashboard.height) / dashboard.width);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 48,
          padding: "0 56px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #fdf2f8 55%, #f3e8ff 100%)",
          borderTop: "10px solid #eb008b",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 460 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={293} height={60} />
          <div
            style={{
              marginTop: 40,
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#1a2340",
            }}
          >
            Run your pawn shop without the register book
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              lineHeight: 1.35,
              color: "#64748b",
            }}
          >
            Pledges, interest and cash on phone or PC. Setup and training
            included.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 50px rgba(112, 33, 177, 0.18)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={screenshot} alt="" width={shotWidth} height={shotHeight} />
        </div>
      </div>
    ),
    size,
  );
}
