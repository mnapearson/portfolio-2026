import type { Metadata } from "next";
import { productsCopy } from "@/lib/i18n";
import { getLangFromCookies } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Products — Micky Arratoon",
  description: "Product-adjacent delivery support and coordination."
};

export default function ProductsPage() {
  const lang = getLangFromCookies();
  const t = productsCopy[lang];

  return (
    <div>
      <p>{t.intro}</p>

      {t.entries.map((entry) => (
        <div key={entry.title} className="entry">
          <div className="entry-head">
            <div className="entry-title">{entry.title}</div>
            <div className="entry-dates">{entry.dates}</div>
          </div>
          <div className="entry-role">{entry.role}</div>
          <p>{entry.body}</p>
          <p className="entry-link">
            {entry.websiteLabel}:{" "}
            <a href={entry.websiteUrl} rel="noreferrer" target="_blank">
              {entry.websiteUrl}
            </a>
          </p>
          {entry.socialUrl ? (
            <p className="entry-link">
              {entry.socialLabel}:{" "}
              <a href={entry.socialUrl} rel="noreferrer" target="_blank">
                {entry.socialUrl}
              </a>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
