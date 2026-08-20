import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Brand logo SVG matching the placeholder design (circles + lightning bolt)
const brandSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a1a1f"/><stop offset="100%" stop-color="#0d0d10"/></linearGradient><linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c8ff00"/><stop offset="100%" stop-color="#a0cc00"/></linearGradient></defs><rect width="192" height="192" rx="48" fill="url(#bg)"/><g transform="translate(96,80)"><circle cx="0" cy="0" r="42" fill="none" stroke="url(#accent)" stroke-width="1.5" opacity="0.3"/><circle cx="0" cy="0" r="32" fill="none" stroke="url(#accent)" stroke-width="1" opacity="0.2"/><path d="M-14,-22 L-7,-7 L7,-7 L14,-22 L10,-7 L14,7 L7,0 L-7,0 L-14,7 L-10,-7 Z" fill="url(#accent)" opacity="0.7"/><path d="M-6,10 L0,24 L6,10" fill="none" stroke="url(#accent)" stroke-width="1.5" opacity="0.5"/></g><text x="96" y="148" text-anchor="middle" fill="#c8ff00" font-family="system-ui,sans-serif" font-size="11" font-weight="700" letter-spacing="3" opacity="0.7">EVOLT APEX</text></svg>`;

const brandDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(brandSvg)}`;

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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brandDataUri}
          width={32}
          height={32}
          style={{ width: 32, height: 32 }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
