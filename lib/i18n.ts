import type { Production } from "./content";

export type Lang = "en" | "de";

export function getLang(value?: string | null): Lang {
  return value === "de" ? "de" : "en";
}

export const navLabels: Record<
  Lang,
  { projects: string; products: string; productions: string }
> = {
  en: {
    projects: "Projects",
    products: "Products",
    productions: "Productions"
  },
  de: {
    projects: "Projekte",
    products: "Produkte",
    productions: "Produktionen"
  }
};

export const layoutCopy: Record<
  Lang,
  {
    mastheadSub: string;
    headlineTag: string;
    headlineNote: string;
    info: {
      contactHeading: string;
      contactLines: string[];
      applyingLine: string;
      cvLabel: string;
      currentlyHeading: string;
      currentlyBody: string[];
      notesHeading: string;
      notesBody: string[];
      studioHeading: string;
      availabilityLine: string;
      instagramLabel: string;
      linkedinLabel: string;
      contactLabel: string;
      updatedLabel: string;
    };
  }
> = {
  en: {
    mastheadSub: "Project delivery & cultural production — Leipzig / remote",
    headlineTag: "(Projects · Products · Productions)",
    headlineNote: "Independent + collaborative delivery, event culture, web",
    info: {
      contactHeading: "Contact",
      contactLines: [
        "Leipzig, Germany (CET/CEST), remote friendly",
        "mickyarratoon@proton.me",
        "LinkedIn / Instagram"
      ],
      applyingLine: "Applying as: Michaela Arratoon Pearson",
      cvLabel: "CV: Download (PDF)",
      currentlyHeading: "Currently",
      currentlyBody: ["Product delivery for digital teams, founder-builder of eos archive"],
      notesHeading: "Notes",
      notesBody: [
        "Projects span software delivery, publishing, and event coordination.",
        "Calm communication and clear writing first."
      ],
      studioHeading: "Studio",
      availabilityLine: "OPEN TO FULL-TIME · SELECTIVE INDEPENDENT WORK",
      instagramLabel: "Instagram",
      linkedinLabel: "LinkedIn",
      contactLabel: "Contact",
      updatedLabel: "Last updated"
    }
  },
  de: {
    mastheadSub: "Projektdelivery & kulturelle Produktionen — Leipzig / remote",
    headlineTag: "(Projekte · Produkte · Produktionen)",
    headlineNote: "Unabhängige + kollaborative Delivery, Veranstaltungskultur, Web",
    info: {
      contactHeading: "Kontakt",
      contactLines: [
        "Leipzig, Deutschland (CET/CEST) — remote-freundlich",
        "mickyarratoon@proton.me",
        "LinkedIn / Instagram"
      ],
      applyingLine: "Bewerbung als: Michaela Arratoon Pearson",
      cvLabel: "CV: Download (PDF)",
      currentlyHeading: "Aktuell",
      currentlyBody: [
        "Projektdelivery für digitale Teams; Kulturproduktionen mit eos archive und Festivals.",
        "Offen für Vollzeitrollen (Leipzig / remote)."
      ],
      notesHeading: "Hinweise",
      notesBody: [
        "Projekte umfassen Software-Delivery, Publishing und Veranstaltungskoordination.",
        "Ruhige Kommunikation und klare Sprache zuerst."
      ],
      studioHeading: "Studio",
      availabilityLine: "Offen für Vollzeit · selektive unabhängige Arbeit",
      instagramLabel: "Instagram",
      linkedinLabel: "LinkedIn",
      contactLabel: "Kontakt",
      updatedLabel: "Zuletzt aktualisiert"
    }
  }
};

export const homeCopy = {
  en: {
    whoTitle: "Who I am",
    whoBody:
      "I'm a product-minded project manager with a hands-on engineering background (Full-Stack), based in Leipzig. I ship internal tools and e-commerce products with cross-functional teams, keeping delivery clear and steady. I also build eos archive (eosarchive.app), where I own roadmap, discovery, and end-to-end delivery.",
    whatTitle: "What I do",
    whatBody:
      "I help teams turn priorities into shipped work: clarify goals, shape scope, keep backlogs clean, write clear tickets and acceptance criteria, and keep dependencies and risks visible. I care about calm communication, reliable follow-through, and shipping on a predictable cadence.",
    downloadTitle: "Download",
    cvLabel: "CV (PDF)",
    contactTitle: "Contact",
    emailLabel: "Email",
    instagramLabel: "Instagram",
    linkedinLabel: "LinkedIn"
  },
  de: {
    whoTitle: "Wer ich bin",
    whoBody:
      "Ich bin Projektmanagerin und Webentwicklerin in Leipzig. Ich arbeite mit Software- und Digital-Teams, damit Delivery klar und stabil bleibt, und koordiniere außerdem kulturelle Produktionen. Mir sind ruhige Kommunikation und klare Sprache wichtig. Oft halte ich den Faden zwischen Menschen, Entscheidungen und Umsetzung – besonders, wenn es hektisch wird.",
    whatTitle: "Was ich mache",
    whatBody:
      "Ich unterstütze Teams bei Scope und Meilensteinen, halte Backlogs übersichtlich, moderiere Planung und Meetings, gleiche Stakeholder ab, verfolge Abhängigkeiten und Risiken und verbessere Workflows, damit Delivery konstant und nachvollziehbar bleibt.",
    downloadTitle: "Download",
    cvLabel: "CV (PDF)",
    contactTitle: "Kontakt",
    emailLabel: "E-Mail",
    instagramLabel: "Instagram",
    linkedinLabel: "LinkedIn"
  }
} satisfies Record<Lang, any>;

export const projectsCopy = {
  en: {
    intro:
      "I lead delivery for internal tools and e-commerce teams. The goal is simple: move work from decision to release with clarity. I focus on prioritization, ticket readiness, sprint cadence, stakeholder alignment, and release flow across parallel workstreams.",
    whatTitle: "What I deliver",
    whatItems: [
      "Delivery planning and release cadence",
      "Backlog clarity (tickets, acceptance criteria, scope)",
      "Sprint planning, reviews, retros",
      "Stakeholder alignment and decision logs",
      "Dependencies and risk visibility",
      "Workflow improvements without overhead"
    ],
    howTitle: "How I work",
    howItems: ["Calm communication", "Clear writing", "Practical structure", "Bias to ship"]
  },
  de: {
    intro:
      "Projektdelivery und Entwicklungsunterstützung für Software- und Digital-Teams. Fokus: Delivery – Arbeit klar, abgestimmt und in Bewegung halten. Dazu gehören Delivery-Planung, Sprint-Support, Backlog-Klarheit (Scope, Tickets, Akzeptanzkriterien), Stakeholder-Abstimmung, Dokumentation, Abhängigkeits- und Risiko-Tracking, Release-Support und pragmatische Workflow-Verbesserungen.",
    whatTitle: "Was ich liefere",
    whatItems: [
      "Delivery-Planung und Meilenstein-Tracking.",
      "Sprint-Planung und Moderation.",
      "Backlog-Klarheit und Ticket-Readiness.",
      "Stakeholder-Abstimmung und Updates.",
      "Dokumentation und Entscheidungsprotokolle.",
      "Abhängigkeits- und Risiko-Tracking.",
      "Release-Support und Übergaben.",
      "Workflow-Verbesserungen ohne Overhead."
    ],
    howTitle: "Wie ich arbeite",
    howItems: [
      "Ruhige Kommunikation.",
      "Klare Sprache.",
      "Praktische Struktur.",
      "Verlässliches Nachhalten."
    ]
  }
};

export const productsCopy = {
  en: {
    intro:
      "Selected products where I led or supported technical product delivery.",
    entries: [
      {
        title: "eos archive",
        dates: "Oct 2022 – present",
        role: "Founder-builder and product lead",
        body: "Independent platform for event culture publishing and discovery.",
        focus:
          "Own roadmap, discovery, and end-to-end delivery. Define priorities, shape scope, and ship product updates across content, platform, and operations.",
        traction:
          "50 spaces, 100 events, ~300 newsletter subscribers, 7k+ combined audience (Instagram + Telegram)",
        websiteLabel: "Website",
        websiteUrl: "https://eosarchive.app",
        socialLabel: "Social",
        socialUrl: "https://instagram.com/eosarchive.app/"
      },
      {
        title: "EKD internal platform",
        dates: "Aug 2022 – Jul 2024",
        role: "Project Manager (team of 15)",
        body: "Internal platform modernization with a legacy refactor and multiple stakeholder groups.",
        focus:
          "Run delivery planning, backlog readiness, sprint cadence, and cross-team coordination. Keep decision-making and risks visible through clear documentation and release planning.",
        websiteLabel: "Website",
        websiteUrl: "https://www.ekd-solar.de/#owner"
      },
      {
        title: "Riese & Müller online shop",
        dates: "Apr 2022 – Jul 2022",
        role: "Full-Stack Developer",
        body: "E-commerce webshop improvements for an established bike brand.",
        focus:
          "Improve frontend structure and implementation quality to support a cleaner release flow and easier maintenance for the delivery team.",
        websiteLabel: "Website",
        websiteUrl: "https://www.r-m.de/de/bikes/"
      },
      {
        title: "Strollme webshop",
        dates: "E-commerce delivery project",
        role: "Product delivery and technical coordination",
        body: "Webshop delivery with close coordination across product, design, and engineering.",
        focus:
          "Translate priorities into ticket-ready work, keep scope practical, and drive steady releases with clear ownership and communication."
      }
    ]
  },
  de: {
    intro:
      "Eine kleine Auswahl an Produkten, zu denen ich im Web-, Plattform- und internen Softwarebereich beigetragen habe. Sensible Details bleiben bewusst allgemein.",
    entries: [
      {
        title: "eos archive",
        dates: "Okt 2022 – heute",
        role: "Gründerin und Product Lead",
        body: "Unabhängige Plattform für Veranstaltungskultur mit Publishing- und Discovery-Fokus.",
        focus:
          "Roadmap, Discovery und End-to-End-Delivery verantworten. Prioritäten setzen, Scope schärfen und Produktupdates über Content, Plattform und Operations ausliefern.",
        traction:
          "50 Räume, 100 Events, ~300 Newsletter-Abonnent:innen, 7k+ kombinierte Reichweite (Instagram + Telegram)",
        websiteLabel: "Website",
        websiteUrl: "https://eosarchive.app",
        socialLabel: "Social",
        socialUrl: "https://instagram.com/eosarchive.app/"
      },
      {
        title: "EKD interne Plattform",
        dates: "Aug 2022 – Jul 2024",
        role: "Projektmanagerin (Team von 15)",
        body: "Modernisierung einer internen Plattform inklusive Legacy-Refactor und mehreren Stakeholdergruppen.",
        focus:
          "Delivery-Planung, Backlog-Readiness, Sprint-Takt und teamübergreifende Koordination steuern. Entscheidungen und Risiken durch klare Dokumentation und Release-Planung sichtbar halten.",
        websiteLabel: "Website",
        websiteUrl: "https://www.ekd-solar.de/#owner"
      },
      {
        title: "Riese & Müller Onlineshop",
        dates: "Apr 2022 – Jul 2022",
        role: "Entwicklerin",
        body: "E-Commerce-Weiterentwicklung für eine etablierte Fahrradmarke.",
        focus:
          "Frontend-Struktur und Implementierungsqualität verbessern, damit Releases sauberer laufen und die Wartung für das Delivery-Team einfacher wird.",
        websiteLabel: "Website",
        websiteUrl: "https://www.r-m.de/de/bikes/"
      },
      {
        title: "Strollme Onlineshop",
        dates: "E-Commerce-Delivery-Projekt",
        role: "Product Delivery und technische Koordination",
        body: "Webshop-Delivery in enger Abstimmung zwischen Produkt, Design und Engineering.",
        focus:
          "Prioritäten in ticketfähige Arbeit übersetzen, Scope pragmatisch halten und einen verlässlichen Release-Takt sichern."
      }
    ]
  }
};

export const productionsCopy = {
  en: {
    intro:
      "Selected cultural productions where I held creative and operational roles.",
    roleLabel: "Role",
    websiteLabel: "Website",
    backLabel: "Back to productions",
    overviewTitle: "Overview",
    detailsTitle: "Details",
    detailLabels: {
      role: "Role",
      dates: "Dates",
      scale: "Scale",
      duration: "Duration",
      location: "Location"
    }
  },
  de: {
    intro:
      "Ausgewählte kulturelle Produktionen, in denen ich kreative und operative Rollen über Teams, Zeitpläne und Partner hinweg übernommen habe.",
    roleLabel: "Rolle",
    websiteLabel: "Website",
    backLabel: "Zurück zu Produktionen",
    overviewTitle: "Überblick",
    detailsTitle: "Details",
    detailLabels: {
      role: "Rolle",
      dates: "Zeitraum",
      scale: "Umfang",
      duration: "Dauer",
      location: "Ort"
    }
  }
};

const productionTranslations: Record<
  string,
  Partial<Record<Lang, Partial<Production>>>
> = {
  "detect-classic-festival": {
    de: {
      role: "Leitung Kidz Space",
      summary:
        "Ein Festival, das klassische, elektronische und experimentelle Musik verbindet. Ich leite den Bereich Kidz Space und koordiniere Planung, Aufbau und Ablauf vor Ort mit dem Festivalteam.",
      scale: "~1.200 Teilnehmende",
      duration: "3 Tage",
      location: "Schloss Bröllin"
    }
  },
  "goldmund-festival": {
    de: {
      role: "Programmkoordination",
      summary:
        "Ein Kammermusik-Festival mit kuratiertem Programm und Gäste-Erlebnis. Ich unterstützte die Programmkoordination sowie Abläufe rund um Zeitpläne, Kommunikation und Delivery im Team.",
      scale: "~130 Teilnehmende",
      duration: "5 Tage",
      location: "Historische Schloss-Locations in Deutschland & Polen"
    }
  },
  "family-heirlooms": {
    de: {
      role: "Mitorganisatorin und Teilnehmerin",
      summary:
        "Gruppenausstellung bei Modos Dever in Leipzig. Ich beteiligte mich mit einem Werk und unterstützte die organisatorische Umsetzung.",
      duration: "Ausstellung Juni 2025",
      location: "Leipzig"
    }
  },
  "chaos-computer-congress-38c3": {
    de: {
      role: "Eventmanagerin",
      summary:
        "Großes Jahreskonferenz des Chaos Computer Club. Ich arbeitete im Event-Management und in der Koordination, um Planung, Kommunikation und Umsetzung über die Teams abzustimmen.",
      scale: "~12.000 Teilnehmende",
      duration: "4 Tage",
      location: "Congress Center Hamburg"
    }
  },
  "octopus-garden": {
    de: {
      role: "Eventmanagerin",
      summary:
        "Ein einmaliges Kulturevent mit Live-Programm und Produktionskoordination. Ich unterstützte Event-Management sowie Abläufe über Partner und Zeitpläne hinweg.",
      scale: "~500 Teilnehmende",
      duration: "2 Tage",
      location: "Leipzig"
    }
  }
};

export function localizeProduction(
  production: Production,
  lang: Lang
): Production {
  if (lang === "en") return production;
  const override = productionTranslations[production.slug]?.[lang];
  if (!override) return production;
  return { ...production, ...override };
}
