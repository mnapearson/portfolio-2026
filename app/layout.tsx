import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import {
  LAST_UPDATED,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL
} from "@/lib/site";

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

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="layout">
          <aside className="site-aside">
            <Link className="brand" href="/">
              Micky Arratoon
            </Link>
          </aside>
          <div className="site-content">
            <header className="top-nav">
              <TopNav />
            </header>
            <main id="content" className="site-main">
              {children}
              <footer className="site-footer">
                <span>
                  Copyright {year} {SITE_NAME}
                </span>
                <span>Last updated {LAST_UPDATED}</span>
              </footer>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
