import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p: P) => (
  <svg {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const ArrowUp = (p: P) => (
  <svg {...base} {...p}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Mail = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 8 8 6 8-6" /></svg>
);
export const MapPin = (p: P) => (
  <svg {...base} {...p}><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}><path d="m5 12 5 5 9-10" /></svg>
);
export const Code = (p: P) => (
  <svg {...base} {...p}><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /></svg>
);
export const Sparkle = (p: P) => (
  <svg {...base} {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></svg>
);
export const Github = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.800 1a9.600 9.600 0 0 1 5 0c2-1.300 2.800-1 2.800-1 .5 1.400.2 2.400.1 2.700.6.7 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.3.700.9.700 1.900v2.800c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
  </svg>
);
export const Linkedin = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.800-2 3.700-2 4 0 4.700 2.600 4.700 6V21h-4v-5c0-1.200 0-2.800-1.700-2.800s-2 1.300-2 2.700V21h-4V9.500Z" />
  </svg>
);
export const Send = (p: P) => (
  <svg {...base} {...p}><path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" /></svg>
);
export const Calendar = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const Award = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="9" r="6" /><path d="m8.5 14 -1.500 7L12 18l5 3-1.500-7" /></svg>
);
export const Layers = (p: P) => (
  <svg {...base} {...p}><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5" /></svg>
);
export const Zap = (p: P) => (
  <svg {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
);
export const Book = (p: P) => (
  <svg {...base} {...p}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5ZM4 19a2 2 0 0 1 2-2h13" /></svg>
);
export const Globe = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
);
