import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProductions, hasPublicFile } from "@/lib/content";
import { localizeProduction, productionsCopy } from "@/lib/i18n";
import { getLangFromCookies } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Productions — Michaela Arratoon Pearson",
  description: "Cultural productions and event management work."
};

export default function ProductionsPage() {
  const lang = getLangFromCookies();
  const t = productionsCopy[lang];
  const productions = getProductions().map((item) => localizeProduction(item, lang));

  return (
    <div>
      <p>{t.intro}</p>
      {productions.map((item) => {
        const imageSrc =
          item.image && hasPublicFile(item.image) ? item.image : null;

        return (
          <div key={item.slug} className="entry">
            {imageSrc ? (
              <a
                className="entry-image-link"
                href={imageSrc}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="entry-image"
                  src={imageSrc}
                  alt={`${item.title} cover`}
                  width={1400}
                  height={900}
                  sizes="(min-width: 1400px) 980px, (min-width: 900px) 70vw, 100vw"
                  quality={70}
                  loading="lazy"
                />
              </a>
            ) : null}
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
                {t.websiteLabel}:{" "}
                <a href={item.website} rel="noreferrer" target="_blank">
                  {item.website}
                </a>
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
