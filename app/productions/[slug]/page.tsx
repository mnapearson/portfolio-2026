import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduction, getProductions, hasPublicFile } from "@/lib/content";
import { localizeProduction, productionsCopy } from "@/lib/i18n";
import { getLangContext } from "@/lib/i18n-server";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return getProductions().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const production = getProduction(params.slug);
  if (!production) {
    return { title: "Production not found" };
  }

  return {
    title: `${production.title} — Michaela Arratoon Pearson`,
    description: production.summary
  };
}

export default function ProductionDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const { lang, nav } = getLangContext();
  const t = productionsCopy[lang];
  const productionBase = getProduction(params.slug);
  const production = productionBase
    ? localizeProduction(productionBase, lang)
    : undefined;
  if (!production) {
    notFound();
  }

  const photoSources = (production.photos ?? [])
    .filter((photo) => hasPublicFile(photo))
    .slice(0, 3);
  if (
    photoSources.length === 0 &&
    production.image &&
    hasPublicFile(production.image)
  ) {
    photoSources.push(production.image);
  }
  const details = [
    { label: "Role", value: production.role },
    { label: "Dates", value: production.years },
    { label: "Scale", value: production.scale },
    { label: "Duration", value: production.duration },
    { label: "Location", value: production.location }
  ].filter(
    (item): item is { label: string; value: string } => Boolean(item.value)
  );

  return (
    <div>
      <PageHeader title={production.title} navLabels={nav} />
      {photoSources.length > 0 ? (
        <div className="production-gallery">
          {photoSources.map((photo, index) => (
            <a
              key={`${photo}-${index}`}
              className="production-gallery-link"
              href={photo}
              target="_blank"
              rel="noreferrer">
              <Image
                className="production-gallery-image"
                src={photo}
                alt={`${production.title} photo ${index + 1}`}
                width={1600}
                height={1000}
                sizes="(min-width: 1400px) 320px, (min-width: 900px) 31vw, 100vw"
                quality={70}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      ) : null}
      <h2 className="section-title">{t.overviewTitle}</h2>
      <p>{production.summary}</p>

      <h2 className="section-title">{t.detailsTitle}</h2>
      <ul className="list">
        {details.map((item) => (
          <li
            key={item.label}
            className="list-item">
            {t.detailLabels[item.label.toLowerCase() as keyof typeof t.detailLabels] ??
              item.label}
            : {item.value}
          </li>
        ))}
      </ul>

      <p className="meta">
        <Link href="/productions">{t.backLabel}</Link>
      </p>
    </div>
  );
}
