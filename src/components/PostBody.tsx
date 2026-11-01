import type { Block } from "@/data/posts";

/** Turns `backticks` inside text into <code> elements. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code key={i}>{part.slice(1, -1)}</code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getHeadings(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: slugify(b.text), text: b.text }));
}

export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={slugify(b.text)}>
                {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </ol>
            );
          case "code":
            return (
              <figure key={i} className="code-block">
                <figcaption>
                  <span className="dots" aria-hidden="true">
                    <i /> <i /> <i />
                  </span>
                  <span className="lang">{b.caption ?? b.lang}</span>
                </figcaption>
                <pre>
                  <code>{b.code}</code>
                </pre>
              </figure>
            );
          case "callout":
            return (
              <aside key={i} className={`callout ${b.tone}`}>
                <strong>{b.title}</strong>
                <p>
                  <Inline text={b.text} />
                </p>
              </aside>
            );
          case "quote":
            return (
              <blockquote key={i}>
                <Inline text={b.text} />
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
