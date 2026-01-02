import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RapsMedia — What's Now and What's Next in Hip-Hop",
  description: "Discover what's next in Hip-Hop. RapsMedia highlights rising artists, interviews, and culture — plus promotion tools for upcoming talent.",
  openGraph: {
    title: "RapsMedia — What's Now and What's Next in Hip-Hop",
    description: "Discover what's next in Hip-Hop. RapsMedia highlights rising artists, interviews, and culture — plus promotion tools for upcoming talent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
