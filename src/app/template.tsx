"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Global session memory across remounts
let sessionPageViews = 0;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [viewCount, setViewCount] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    // [REAL-WORLD USE CASE #1: Analytics Logger]
    // Layout me ye useEffect sirf 1 baar chalta site load pe.
    // Template har navigation pe remount hota hai, isliye har route change pe trigger hota hai!
    sessionPageViews += 1;
    setViewCount(sessionPageViews);
    setTimestamp(new Date().toLocaleTimeString());

    console.log(
      `📊 [Analytics Event]: Logged page view for "${pathname}" at ${new Date().toLocaleTimeString()} (Visit #${sessionPageViews})`
    );
  }, [pathname]);

  return (
    <div className="relative flex flex-col min-h-full">
      {/* [REAL-WORLD USE CASE #2: Route Transition Progress Bar] */}
      {/* Har route change pe ye naya mount hokar 0% -> 100% sweep karta hai */}
      <div className="fixed top-0 left-0 right-0 z-100 h-1 from-blue-500 via-indigo-500 to-emerald-400 animate-progress" />

      {/* [REAL-WORLD USE CASE #1: Live Analytics Card (Bottom-Right)] */}
      <div className="fixed bottom-6 right-6 z-40 max-w-sm rounded-xl border border-zinc-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/95">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
              Analytics Event Logger
            </span>
          </div>
          <span className="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            Visit #{viewCount || 1}
          </span>
        </div>

        <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
          Tracked:{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
            {pathname}
          </code>{" "}
          at <span className="font-mono text-zinc-700 dark:text-zinc-300">{timestamp || "Logging..."}</span>
        </p>

        <p className="mt-2 border-t border-zinc-100 pt-2 text-[10px] text-zinc-400 dark:border-zinc-800/80">
          ⚡ <strong>Why Template?</strong> If this was in <code>layout.tsx</code>, it would fire once and never again. In <code>template.tsx</code>, it tracks every route.
        </p>
      </div>

      {/* Main page content with fresh entrance animation */}
      <div className="animate-template-enter flex-1">{children}</div>
    </div>
  );
}
