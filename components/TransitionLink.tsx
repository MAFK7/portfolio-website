"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
}

export default function TransitionLink({
  href,
  children,
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Don't intercept if modified click (new tab, right click, etc.)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey
    ) {
      return;
    }

    const targetUrl = typeof href === "string" ? href : href.pathname || "";
    // Only handle internal relative paths
    if (!targetUrl.startsWith("/") || targetUrl.startsWith("//")) {
      return;
    }

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      e.preventDefault();
      (document as unknown as { startViewTransition: (cb: () => void | Promise<void>) => void }).startViewTransition(
        async () => {
          router.push(targetUrl);
          await new Promise((resolve) => setTimeout(resolve, 60));
        }
      );
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
