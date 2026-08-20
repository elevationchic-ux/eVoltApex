import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Crisp lightning-bolt mark (Heroicons "bolt" path) with a lime gradient.
const boltSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ecfccb"/><stop offset="45%" stop-color="#a3e635"/><stop offset="100%" stop-color="#4d7c0f"/></linearGradient></defs><path fill="url(#g)" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"/></svg>`;

const boltDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(boltSvg)}`;

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 50% 30%, #27272a 0%, #09090b 85%)",
          borderRadius: 7,
          border: "1px solid rgba(163,230,53,0.55)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={boltDataUri}
          width={22}
          height={22}
          style={{ width: 22, height: 22 }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
