import type { Metadata } from "next";
import { Libre_Caslon_Text, Space_Grotesk } from "next/font/google";
import "./globals.css";

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Morpheo — AI Dream Journal | Your Dreams, Decoded",
  description:
    "Capture, analyze, and understand your dreams with AI. Voice recording, pattern detection, and personalized insights. Free on iOS & Apple Watch.",
  metadataBase: new URL("https://buraka.github.io/morpheo-app"),
  openGraph: {
    title: "Morpheo — AI Dream Journal | Your Dreams, Decoded",
    description:
      "Capture, analyze, and understand your dreams with AI. Voice recording, pattern detection, and personalized insights.",
    url: "https://buraka.github.io/morpheo-app",
    siteName: "Morpheo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morpheo — AI Dream Journal",
    description:
      "Capture, analyze, and understand your dreams with AI. Free on iOS & Apple Watch.",
  },
  other: {
    "apple-itunes-app": "app-id=6760588166",
    "theme-color": "#060E1B",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreCaslon.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
