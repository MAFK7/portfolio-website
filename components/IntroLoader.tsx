"use client";

import { useEffect, useState } from "react";

type Line = {
  text: string;
  color?: "primary" | "text" | "muted";
  typed?: boolean;
  delayAfter?: number;
};

const SCRIPT: Line[] = [
  { text: "[user@root_dev ~]$ whoami", typed: true, color: "primary" },
  { text: "MAFK", color: "text", delayAfter: 250 },
  { text: "", color: "text" },
  { text: "[user@root_dev ~]$ cat profile.json", typed: true, color: "primary" },
  { text: "{", color: "text" },
  { text: '  "name": "M. Asad Farhan Khomeini",', color: "text" },
  { text: '  "role": "Informatics Engineering Student",', color: "text" },
  { text: '  "status": "loading portfolio..."', color: "text", delayAfter: 400 },
  { text: "}", color: "text" },
];

export const INTRO_SESSION_KEY = "portfolio_intro_seen_v1";

export function isIntroSeen(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function setIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("needs-intro");
    }
  } catch { }
}

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [typingText, setTypingText] = useState("");
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // If already seen in this session, skip immediately
    if (isIntroSeen()) {
      onDone();
      return;
    }

    let cancelled = false;

    async function run() {
      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        const line = SCRIPT[i];

        if (line.typed) {
          // Type the command character by character
          for (let c = 1; c <= line.text.length; c++) {
            if (cancelled) return;
            setTypingText(line.text.slice(0, c));
            await sleep(18);
          }
          await sleep(120);
          setVisibleLines((prev) => [...prev, line.text]);
          setTypingText("");
        } else {
          setVisibleLines((prev) => [...prev, line.text]);
        }

        await sleep(line.delayAfter ?? 90);
      }

      if (cancelled) return;
      setShowFinalCursor(true);
      await sleep(650);

      if (cancelled) return;
      setLeaving(true);
      await sleep(500);

      if (cancelled) return;
      // Mark as seen ONLY after the animation has completely finished
      setIntroSeen();
      onDone();
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [onDone]);

  // If already seen in this session, render nothing
  if (isIntroSeen()) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-bg px-4 transition-opacity duration-500 ${leaving ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="pointer-events-none absolute top-6 left-6 text-[10px] tracking-widest text-primary/70 font-mono">
        SECURITY PROTOCOL: ACTIVE
      </div>
      <div className="pointer-events-none absolute bottom-6 right-6 text-[10px] tracking-widest text-text-faint font-mono">
        SESSION KEY: 0x7E4...B2
      </div>

      <div className="w-full max-w-xl rounded-md border border-border bg-bg-elevated shadow-2xl shadow-black/50 overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-black/30">
          <span className="h-2.5 w-2.5 rounded-full bg-text-faint/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-faint/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-faint/60" />
          <span className="flex-1 text-center text-[11px] text-text-muted font-mono">
            ~/projects/root_dev
          </span>
        </div>

        <div className="min-h-[220px] px-5 py-5 font-mono text-[13px] leading-relaxed">
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className={
                line.startsWith("[user@")
                  ? "text-primary"
                  : line === "ROOT_DEV"
                    ? "text-text"
                    : "text-text/90"
              }
            >
              {line || "\u00A0"}
            </div>
          ))}
          {typingText && <div className="text-primary">{typingText}</div>}
          {showFinalCursor && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-primary">[user@root_dev ~]$</span>
              <span className="inline-block h-4 w-2 bg-primary cursor-blink" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[10px] text-text-faint font-mono">
          <span>BASH · ROOT_DEV_V1.0.4</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
