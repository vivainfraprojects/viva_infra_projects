import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

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
          background: "#FFFFFF",
          borderRadius: 16,
          border: "2px solid #E51A1A",
          boxShadow: "inset 0 0 0 2px #009B3A",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontStyle: "italic",
          fontSize: 14,
          color: "#111111",
        }}
      >
        <span>V</span>
        <span style={{ color: "#009B3A" }}>i</span>
        <span>P</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
