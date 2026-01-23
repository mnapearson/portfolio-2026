import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduction, getProductions } from "@/lib/content";

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

  return (
    <div>
      <h1 className="page-title">{production.title}</h1>
      <h2 className="section-title">Overview</h2>
      <p>{production.summary}</p>

      <h2 className="section-title">Details</h2>
      <ul className="list">
        <li className="list-item">Role: {production.role}</li>
        <li className="list-item">Dates: {production.years}</li>
        <li className="list-item">Scale: {production.scale}</li>
        <li className="list-item">Duration: {production.duration}</li>
        <li className="list-item">Location: {production.location}</li>
      </ul>

      <p className="meta">
        <Link href="/productions">Back to productions</Link>
      </p>
    </div>
  );
}
