import type { Metadata } from "next";
import Link from "next/link";
import { getProductions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Productions — Michaela Arratoon Pearson",
  description: "Cultural productions and event management work."
};

export default function ProductionsPage() {
  const productions = getProductions();

  return (
    <div>
      <h1 className="page-title">Productions.</h1>
      <p>
        Selected cultural productions where I held coordination and operational
        roles across teams, schedules, and partners.
      </p>
      {productions.map((item) => (
        <div key={item.slug} className="entry">
          <div className="entry-head">
            <Link className="entry-title" href={`/productions/${item.slug}`}>
              {item.title}
            </Link>
            <div className="entry-dates">{item.years}</div>
          </div>
          <div className="entry-role">Role: {item.role}</div>
          <p>{item.summary}</p>
          {item.website ? (
            <p className="entry-link">
              Website:{" "}
              <a href={item.website} rel="noreferrer">
                {item.website}
              </a>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
