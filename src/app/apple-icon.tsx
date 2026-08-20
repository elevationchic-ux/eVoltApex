import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Crisp lightning-bolt mark (Heroicons "bolt" path) with a lime gradient.
const boltSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ecfccb"/><stop offset="45%" stop-color="#a3e635"/><stop offset="100%" stop-color="#4d7c0f"/></linearGradient></defs><path fill="url(#g)" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"/></svg>`;

const boltDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(boltSvg)}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 28%, #3f3f46 0%, #18181b 55%, #09090b 100%)",
          borderRadius: 40,
          border: "4px solid rgba(163,230,53,0.55)",
        }}
      >
        {/* Soft glow behind the bolt */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 118,
            height: 118,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(163,230,53,0.32) 0%, rgba(163,230,53,0) 70%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={boltDataUri}
            width={104}
            height={104}
            style={{ width: 104, height: 104 }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
