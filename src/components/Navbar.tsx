"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  // Ye state layout.tsx ke andar hai, isliye navigation par PERSIST karegi (kabhi reset nahi hogi)
  const [layoutInput, setLayoutInput] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white font-mono text-sm font-bold shadow-xs transition-transform group-hover:scale-105 dark:bg-zinc-100 dark:text-zinc-900">
            DP
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              DevPulse
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">
              ENGINEERING BLOG
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? "text-zinc-950 font-semibold dark:text-white"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/60 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/60"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-zinc-900 rounded-full dark:bg-zinc-100" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Layout State Demo Box (In Header) */}
        <div className="hidden md:flex items-center gap-2">
          <input
            type="text"
            value={layoutInput}
            onChange={(e) => setLayoutInput(e.target.value)}
            placeholder="[Layout State] Type here... (Persists)"
            className="w-48 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            title="Ye input layout.tsx me hai — page badalne par bhi iska text rahega!"
          />
        </div>
      </div>
    </header>
  );
}
