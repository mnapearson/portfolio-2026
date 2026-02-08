import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import LanguageSwitch from "@/components/LanguageSwitch";
import {
  LAST_UPDATED,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL
} from "@/lib/site";
import { layoutCopy, navLabels } from "@/lib/i18n";
import { getLangFromCookies } from "@/lib/i18n-server";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  const lang = getLangFromCookies();
  const nav = navLabels[lang];
  const copy = layoutCopy[lang];

  return (
    <html lang={lang}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="layout">
          <aside className="left-rail" aria-hidden="true">
            <span className="rail-letter">M</span>
            <span className="rail-letter">A</span>
            <span className="rail-letter">P</span>
          </aside>

          <div className="site-shell">
            <header className="masthead">
              <div className="masthead-text">
                <Link className="brand" href="/">
                  Michaela Arratoon Pearson
                </Link>
                <div className="masthead-sub">
                  {copy.mastheadSub}
                </div>
              </div>
              <div className="masthead-meta">
                <input
                  className="ghost-input"
                  type="search"
                  placeholder="Search… (coming soon)"
                  disabled
                  aria-label="Search placeholder"
                />
                <LanguageSwitch lang={lang} />
              </div>
            </header>

            <div className="top-nav">
              <TopNav labels={nav} />
            </div>

            <div className="headline-bar">
              <span className="headline-tag">{copy.headlineTag}</span>
              <span className="headline-note">{copy.headlineNote}</span>
            </div>

            <div className="content-grid">
              <main id="content" className="site-main">
                {children}
                <footer className="site-footer">
                  <span>Copyright {year} MNAP</span>
                  <span>Last updated {LAST_UPDATED}</span>
                </footer>
              </main>

              <aside className="info-panel" aria-label="Contact and notes">
                <div className="info-section">
                  <div className="info-heading">{copy.info.contactHeading}</div>
                  <p>{copy.info.contactLines[0]}</p>
                  <p>
                    <a href="mailto:marratoon@gmail.com">{copy.info.contactLines[1]}</a>
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/michaela-arratoon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    {" / "}
                    <a
                      href="https://www.instagram.com/mickyarratoon/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </p>
                </div>

                <div className="info-section">
                  <div className="info-heading">{copy.info.currentlyHeading}</div>
                  {copy.info.currentlyBody.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className="info-section">
                  <div className="info-heading">{copy.info.notesHeading}</div>
                  {copy.info.notesBody.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
