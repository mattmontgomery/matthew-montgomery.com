import React from "react";

export interface Linky {
  link: string;
  title: string;
}

interface Props<T> {
  data: T[];
  getLink?: (entry: T | Record<string, string>) => string;
  getTitle?: (entry: T | Record<string, string>) => string;
  renderExtras?: (entry: T) => React.ReactNode;
  renderLabel: (entry: T) => React.ReactNode;
}

export default function LinkList<T>({
  data,
  getLink = (entry) => String((entry as unknown as Linky).link),
  getTitle = (entry) => String((entry as unknown as Linky).title),
  renderExtras = (entry) => <></>,
  renderLabel,
}: Props<T>): React.ReactElement {
  return data && data.length ? (
    <div className="grid grid-cols-1 md:gap-4">
      {data.map((entry, idx) => (
        <div
          className="grid-row mb-4 grid gap-x-4 md:mb-0 md:grid-cols-[200px_1fr] md:gap-y-4"
          key={idx}
        >
          <div className="rounded text-sm font-medium text-amber-700 md:bg-amber-200 md:p-2 md:text-right">
            {renderLabel(entry)}
          </div>
          <div className="items-center md:self-center">
            {renderExtras(entry)}
            <a
              className="font-medium text-emerald-600 transition-colors hover:text-amber-700 md:self-center"
              href={getLink(entry)}
              target="_blank"
              rel="noreferrer"
            >
              {getTitle(entry)}
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
}
