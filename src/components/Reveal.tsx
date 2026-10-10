"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** delay in ms */
  delay?: number;
  from?: "up" | "left" | "right" | "zoom";
  style?: CSSProperties;
};

/** Fades and slides content in when it scrolls into view. */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, from = "up", style }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dir = from === "up" ? "" : `reveal-${from}`;
  return (
    <Tag
      ref={ref}
      className={`reveal ${dir} ${className}`}
      style={{ ...style, ["--delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
