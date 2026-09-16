import { Fragment } from "react";

export function HighlightedText({
  text,
  term,
}: {
  text: string;
  term: string;
}) {
  const parts = text.split(term);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <strong className="text-[1.08em] font-bold text-sky-600 dark:text-sky-400">
              {term}
            </strong>
          )}
        </Fragment>
      ))}
    </>
  );
}
