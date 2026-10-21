import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#101B2B", color: "#FCFAF6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 47, fontWeight: 700, borderBottom: "6px solid #336DB6" }}>B</div>, size);
}

