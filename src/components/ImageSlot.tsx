"use client";

import { useEffect, useRef, useState } from "react";
import { getImage } from "@/data/images";

type Props = {
  /** File name inside public/images, for example "hero-developer-profile.jpg" */
  file: string;
  /** Extra class names for the wrapper (aspect ratio, rounding, etc.) */
  className?: string;
  /** Fit inside the box: "cover" fills it, "contain" shows the full picture */
  fit?: "cover" | "contain";
  priority?: boolean;
  /** Small caption shown on the placeholder, helps you see which image goes here */
  label?: string;
};

/**
 * Shows /images/<file>. While the file does not exist yet, a soft animated placeholder is shown instead,
 * so the layout always looks finished. Just drop the real file into public/images and refresh.
 */
export default function ImageSlot({ file, className = "", fit = "cover", priority = false, label }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const meta = getImage(file);

  // The image can finish loading (or fail) before React attaches its handlers,
  // so check its real state once after the page becomes interactive.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || !img.complete) return;
    if (img.naturalWidth > 0) setLoaded(true);
    else setFailed(true);
  }, []);

  return (
    <div
      className={`img-slot ${fit === "contain" ? "is-contain" : ""} ${loaded ? "is-loaded" : ""} ${className}`}
      data-image={file}
    >
      {!loaded && (
        <div className="img-placeholder" aria-hidden="true">
          <span className="ph-orb ph-orb-1" />
          <span className="ph-orb ph-orb-2" />
          <span className="ph-orb ph-orb-3" />
          <span className="ph-label">{label ?? file}</span>
        </div>
      )}
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={`/images/${file}`}
          alt={meta?.alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
