import type { Metadata } from "next";
import { projectsCopy } from "@/lib/i18n";
import { getLangContext } from "@/lib/i18n-server";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Projects — Micky Arratoon",
  description: "Project delivery support for software and digital work."
};

export default function ProjectsPage() {
  const { lang, nav } = getLangContext();
  const t = projectsCopy[lang];

  return (
    <div>
      <PageHeader title={nav.projects} navLabels={nav} />
      <p>{t.intro}</p>
      <h2 className="section-title">{t.whatTitle}</h2>
      <ul className="list">
        {t.whatItems.map((item) => (
          <li key={item} className="list-item">
            {item}
          </li>
        ))}
      </ul>
      <h2 className="section-title">{t.howTitle}</h2>
      <ul className="list">
        {t.howItems.map((item) => (
          <li key={item} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
