import type { Metadata } from "next";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins, Merriweather } from "next/font/google";
import { theme } from "./styles/vars.css";

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "James Brooks",
  description: "Software Engineer at Starling Bank",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(poppins.variable, merriweather.variable, theme)}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
