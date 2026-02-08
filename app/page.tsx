import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { homeCopy } from "@/lib/i18n";
import { getLangFromCookies } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION
};

export default function HomePage() {
  const lang = getLangFromCookies();
  const t = homeCopy[lang];

  return (
    <div>
      <h2 className="section-title">{t.whoTitle}</h2>
      <p>{t.whoBody}</p>

      <h2 className="section-title">{t.whatTitle}</h2>
      <p>{t.whatBody}</p>

      <h2 className="section-title">{t.contactTitle}</h2>
      <p>
        {t.emailLabel}: <a href="mailto:marratoon@gmail.com">marratoon@gmail.com</a>
      </p>
      <p>
        {t.instagramLabel}:{" "}
        <a
          href="https://www.instagram.com/mickyarratoon/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.instagram.com/mickyarratoon/
        </a>
      </p>
      <p>
        {t.linkedinLabel}:{" "}
        <a
          href="https://www.linkedin.com/in/michaela-arratoon"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/michaela-arratoon
        </a>
      </p>
    </div>
  );
}
