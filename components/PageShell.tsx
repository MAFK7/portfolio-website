"use client";

import { useEffect, useState } from "react";
import IntroLoader, { isIntroSeen } from "./IntroLoader";

export default function PageShell({ children }: { children: React.ReactNode }) {
  // Synchronous check: on repeat visits, reloads, or back-navigation,
  // isIntroSeen() is true immediately on the very first render.
  const [introComplete, setIntroComplete] = useState(() => {
    if (typeof window === "undefined") return false;
    return isIntroSeen();
  });

  useEffect(() => {
    if (isIntroSeen()) {
      setIntroComplete(true);
    }
  }, []);

  const handleDone = () => {
    setIntroComplete(true);
  };

  return (
    <>
      {!introComplete && <IntroLoader onDone={handleDone} />}
      <div id="page-content" className={!introComplete ? "hidden" : undefined}>
        {children}
      </div>
    </>
  );
}
