import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { homeCopy } from "@/lib/i18n";
import { getLangContext } from "@/lib/i18n-server";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION
};

export default function HomePage() {
  const { lang, nav } = getLangContext();
  const t = homeCopy[lang];
  const title = lang === "de" ? "Profil" : "Profile";

  return (
    <div>
      <PageHeader title={title} navLabels={nav} />
      <h2 className="section-title">{t.whoTitle}</h2>
      <p>{t.whoBody}</p>

      <h2 className="section-title">{t.whatTitle}</h2>
      <p>{t.whatBody}</p>

      <h2 className="section-title">{t.contactTitle}</h2>
      <p>
        <a href="mailto:mickyarratoon@proton.me">EMAIL</a>
      </p>
      <p>
        <a
          href="https://www.instagram.com/mickyarratoon/"
          target="_blank"
          rel="noreferrer"
        >
          INSTAGRAM
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/michaela-arratoon"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
      </p>
    </div>
  );
}
