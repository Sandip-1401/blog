import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevPulse | Modern Engineering Blog",
  description:
    "A clean, recruiter-grade developer portfolio & blog built with Next.js App Router.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 flex flex-col justify-between">
        <Navbar />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
          Built with Next.js 15+ App Router • Designed for Recruiters & Engineers
        </footer>
      </body>
    </html>
  );
}
