import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
