import type { Metadata } from "next";
import Link from "next/link";
import { getProductions } from "@/lib/content";
import { localizeProduction, productionsCopy } from "@/lib/i18n";
import { getLangContext } from "@/lib/i18n-server";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Productions — Michaela Arratoon Pearson",
  description: "Cultural productions and event management work."
};

export default function ProductionsPage() {
  const { lang, nav } = getLangContext();
  const t = productionsCopy[lang];
  const productions = getProductions().map((item) => localizeProduction(item, lang));

  return (
    <div>
      <PageHeader title={nav.productions} navLabels={nav} />
      <p>{t.intro}</p>
      {productions.map((item) => {
        return (
          <div key={item.slug} className="entry">
            <div className="entry-head">
              <Link className="entry-title" href={`/productions/${item.slug}`}>
                {item.title}
              </Link>
              <div className="entry-dates">{item.years}</div>
            </div>
            <div className="entry-role">
              {t.roleLabel}: {item.role}
            </div>
            <p>{item.summary}</p>
            {item.website ? (
              <p className="entry-link">
                <a href={item.website} rel="noreferrer" target="_blank">
                  {t.websiteLabel.toUpperCase()}
                </a>
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
