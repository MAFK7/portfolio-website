"use client";

import { useEffect, useState } from "react";

export default function TypedText({
  text,
  speed = 45,
  startDelay = 0,
  className = "",
  showCursorAfter = true,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursorAfter?: boolean;
}) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let i = 0;

    const start = setTimeout(function tick() {
      const interval = setInterval(() => {
        if (cancelled) {
          clearInterval(interval);
          return;
        }
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {shown}
      <span
        className={`inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-primary cursor-blink ${
          done && !showCursorAfter ? "hidden" : ""
        }`}
        aria-hidden="true"
      />
      <span className="sr-only">{text}</span>
    </span>
  );
}
