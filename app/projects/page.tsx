import type { Metadata } from "next";
import { projectsCopy } from "@/lib/i18n";
import { getLangFromCookies } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Projects — Micky Arratoon",
  description: "Project delivery support for software and digital work."
};

export default function ProjectsPage() {
  const lang = getLangFromCookies();
  const t = projectsCopy[lang];

  return (
    <div>
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
