import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiaochun (Nora) Niu",
  description:
    "Postdoctoral researcher in Decision Sciences at Duke University, working across operations research, artificial intelligence, and data analytics.",
  keywords: [
    "operations research",
    "artificial intelligence",
    "data analytics",
    "network science",
    "federated learning",
  ],
  authors: [{ name: "Xiaochun (Nora) Niu" }],
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fdfcf9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
