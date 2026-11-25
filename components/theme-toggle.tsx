"use client";

import { type MouseEvent, type ReactNode } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle(): ReactNode {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const currentTheme =
      document.documentElement.classList.contains("dark") ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(nextTheme);
    setTheme(nextTheme);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const supportsViewTransition =
      typeof document.startViewTransition === "function";

    if (reducedMotion || !supportsViewTransition) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy),
    );

    document.documentElement.style.setProperty("--theme-cx", `${cx}px`);
    document.documentElement.style.setProperty("--theme-cy", `${cy}px`);
    document.documentElement.style.setProperty("--theme-r", `${radius}px`);
    document.documentElement.dataset.themeAnim = "1";

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.finished.finally(() => {
      delete document.documentElement.dataset.themeAnim;
    });
  };

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-zinc-100 transition-colors hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20.985 12.486A9 9 0 1 1 11.514 3a7 7 0 0 0 9.471 9.486Z" />
        </svg>
      )}
    </button>
  );
}
