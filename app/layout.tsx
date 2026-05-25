import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Public Risk Tracker",
  description: "A lightweight public-record risk dashboard for elected officials."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
