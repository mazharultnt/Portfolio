"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  speed?: number;
  pause?: number;
};

/** Types and deletes a list of phrases in a loop. Shows the first phrase statically for reduced motion. */
export default function Typing({ words, speed = 70, pause = 1600 }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause, reduced]);

  return (
    <span className="typing" aria-label={words[0]}>
      <span aria-hidden="true">{reduced ? words[0] : text}</span>
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
