export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; lang: string; code: string; caption?: string }
  | { type: "callout"; tone: "tip" | "note" | "warn"; title: string; text: string }
  | { type: "quote"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Accent = "blue" | "teal" | "violet" | "green" | "amber" | "rose";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, e.g. 2026-09-14 */
  date: string;
  tags: string[];
  accent: Accent;
  blocks: Block[];
};
