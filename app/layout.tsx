import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import LanguageSwitch from '@/components/LanguageSwitch';
import RailWord from '@/components/RailWord';
import {
  LAST_UPDATED,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/lib/site';
import { layoutCopy } from '@/lib/i18n';
import { getLangFromCookies } from '@/lib/i18n-server';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = getLangFromCookies();
  const copy = layoutCopy[lang];

  return (
    <html lang={lang}>
      <body>
        <a
          className='skip-link'
          href='#content'>
          Skip to content
        </a>
        <div className='layout'>
          <aside className='left-rail'>
            <Link
              className='rail-brand'
              href='/'>
              Micky Arratoon
            </Link>
            <RailWord />
          </aside>

          <div className='site-shell'>
            <header className='site-tools'>
              <LanguageSwitch lang={lang} />
            </header>

            <div className='content-grid'>
              <main
                id='content'
                className='site-main'>
                {children}
              </main>

              <aside
                className='info-panel'
                aria-label={`${copy.info.contactHeading} / ${copy.info.notesHeading}`}>
                <div className='info-section'>
                  <div className='info-heading'>{copy.info.studioHeading}</div>
                  <p>{copy.info.contactLines[0]}</p>

                  <p>
                    <a href='/assets/Michaela_Pearson_CV.pdf'>
                      {copy.info.cvLabel}
                    </a>
                  </p>
                  <p>{copy.info.availabilityLine}</p>
                  <p>
                    <a href='mailto:mickyarratoon@proton.me'>
                      {copy.info.contactLines[1]}
                    </a>
                  </p>
                </div>

                <div className='info-section'>
                  <div className='info-heading'>
                    {copy.info.currentlyHeading}
                  </div>
                  {copy.info.currentlyBody.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className='info-section info-social'>
                  <div className='social-links'>
                    <a
                      href='https://www.instagram.com/mickyarratoon/'
                      target='_blank'
                      rel='noreferrer'>
                      {copy.info.instagramLabel}
                    </a>
                    <a
                      href='https://www.linkedin.com/in/michaela-arratoon'
                      target='_blank'
                      rel='noreferrer'>
                      {copy.info.linkedinLabel}
                    </a>
                    <a href='mailto:mickyarratoon@proton.me'>
                      {copy.info.contactLabel}
                    </a>
                  </div>
                  <div
                    className='site-mark site-mark-inline'
                    aria-hidden='true'>
                    <span>Micky</span>
                    <span>Arratoon</span>
                  </div>
                </div>
              </aside>
            </div>
            <footer className='site-footer'>
              <span>Copyright 2026 MAP</span>
              <span>
                {copy.info.updatedLabel} {LAST_UPDATED}
              </span>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
