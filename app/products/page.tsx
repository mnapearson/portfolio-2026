import type { Metadata } from "next";
import { productsCopy } from "@/lib/i18n";
import { getLangContext } from "@/lib/i18n-server";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Products — Micky Arratoon",
  description: "Product-adjacent delivery support and coordination."
};

export default function ProductsPage() {
  const { lang, nav } = getLangContext();
  const t = productsCopy[lang];

  return (
    <div>
      <PageHeader title={nav.products} navLabels={nav} />
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
            <a href={entry.websiteUrl} rel="noreferrer" target="_blank">
              {entry.websiteLabel.toUpperCase()}
            </a>
          </p>
          {entry.socialUrl ? (
            <p className="entry-link">
              <a href={entry.socialUrl} rel="noreferrer" target="_blank">
                {entry.socialLabel.toUpperCase()}
              </a>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
