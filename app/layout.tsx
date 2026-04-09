import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tejaswini Kanike | Portfolio",
  description: "A modern, professional Developer OS portfolio showcasing high-end frontend engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased dark`}>
      <body className="bg-background text-foreground min-h-screen">
        <div className="desktop-bg fixed inset-0 z-[-1]">
          <div className="mesh-gradient" />
        </div>
        {children}
      </body>
    </html>
  );
}
