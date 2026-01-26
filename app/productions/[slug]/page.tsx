import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduction, getProductions, hasPublicFile } from "@/lib/content";

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
  const production = getProduction(params.slug);
  if (!production) {
    notFound();
  }

  const imageSrc =
    production.image && hasPublicFile(production.image)
      ? production.image
      : null;
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
      {imageSrc ? (
        <a
          className="entry-image-link"
          href={imageSrc}
          target="_blank"
          rel="noreferrer">
          <Image
            className="entry-image"
            src={imageSrc}
            alt={`${production.title} cover`}
            width={1600}
            height={1000}
            sizes="(min-width: 1400px) 980px, (min-width: 900px) 70vw, 100vw"
            quality={70}
            loading="lazy"
          />
        </a>
      ) : null}
      <h1 className="page-title">{production.title}</h1>
      <h2 className="section-title">Overview</h2>
      <p>{production.summary}</p>

      <h2 className="section-title">Details</h2>
      <ul className="list">
        {details.map((item) => (
          <li
            key={item.label}
            className="list-item">
            {item.label}: {item.value}
          </li>
        ))}
      </ul>

      <p className="meta">
        <Link href="/productions">Back to productions</Link>
      </p>
    </div>
  );
}
