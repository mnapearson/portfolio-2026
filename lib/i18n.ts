import type { Production } from "./content";

export type Lang = "en" | "de";

export function getLang(value?: string | null): Lang {
  return value === "de" ? "de" : "en";
}

export const navLabels: Record<
  Lang,
  { profile: string; products: string; productions: string }
> = {
  en: {
    profile: "Profile",
    products: "Products",
    productions: "Productions"
  },
  de: {
    profile: "Profil",
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
      arenaLabel: string;
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
        "Leipzig / Berlin",
        "mickyarratoon@proton.me",
        "LinkedIn / Instagram"
      ],
      applyingLine: "Applying as: Michaela Arratoon Pearson",
      cvLabel: "Download CV",
      currentlyHeading: "Currently",
      currentlyBody: ["Founder of eos archive · Cultural producer · Leipzig / Berlin"],
      notesHeading: "Notes",
      notesBody: [
        "Projects span software delivery, publishing, and event coordination.",
        "Calm communication and clear writing first."
      ],
      studioHeading: "Studio",
      availabilityLine: "Founder, eos archive · Event Manager, Glasfabrik · Open to collaboration",
      arenaLabel: "Are.na",
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
        "Leipzig / Berlin",
        "mickyarratoon@proton.me",
        "LinkedIn / Instagram"
      ],
      applyingLine: "Bewerbung als: Michaela Arratoon Pearson",
      cvLabel: "Download CV",
      currentlyHeading: "Aktuell",
      currentlyBody: ["Gründerin von eos archive · Kulturproduzentin · Leipzig / Berlin"],
      notesHeading: "Hinweise",
      notesBody: [
        "Projekte umfassen Software-Delivery, Publishing und Veranstaltungskoordination.",
        "Ruhige Kommunikation und klare Sprache zuerst."
      ],
      studioHeading: "Studio",
      availabilityLine: "Gründerin, eos archive · Eventmanagerin, Glasfabrik · Offen für Zusammenarbeit",
      arenaLabel: "Are.na",
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
      "Former digital nomad, based between Leipzig and Berlin. Cultural producer and founder working at the intersection of archive, technology, and community. I run eos archive, an infrastructure project for cultural documentation. My background spans event production at scale, project management, and hands-on platform development. The thread connecting all of it: an ability to see what belongs together and build the structure that makes it work.",
    whatTitle: "What I do",
    whatBody:
      "I work at the intersection of cultural production, community building, and technology. I produce events, build platforms, and create the infrastructure that lets creative work persist and find its audience. I also design and develop websites and digital structures for artists, small businesses, and organisations — and take on project management and delivery work for digital teams. The same skillset, applied at different stages.",
    downloadTitle: "Download",
    cvLabel: "Download CV",
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
      "Ich arbeite an der Schnittstelle von Kulturproduktion, Community-Building und Technologie. Ich produziere Events, baue Plattformen und schaffe Infrastruktur, die kreative Arbeit dauerhaft sichtbar macht. Ich entwerfe und entwickle auch Websites und digitale Strukturen für Künstler:innen, kleine Unternehmen und Organisationen — und übernehme Projektmanagement und Delivery für digitale Teams. Dasselbe Skillset, verschiedene Bühnen.",
    downloadTitle: "Download",
    cvLabel: "Download CV",
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
      "Selected products where I led or supported delivery end-to-end.",
    entries: [
      {
        title: "eos archive",
        dates: "Oct 2022 – present",
        role: "Founder",
        body: "Independent platform for cultural documentation and discovery across Leipzig and Berlin. Founded and built by me; I own the product end-to-end — roadmap, discovery, delivery, and community development. Currently reaching 50 registered spaces, 100 archived events, ~300 newsletter subscribers, and 7k+ combined audience across Instagram and Telegram.",
        websiteLabel: "Website",
        websiteUrl: "https://eosarchive.app",
        socialLabel: "Social",
        socialUrl: "https://instagram.com/eosarchive.app/"
      },
      {
        title: "EKD internal platform",
        dates: "Aug 2022 – Jul 2024",
        role: "Project Manager (team of 15)",
        body: "Internal platform modernisation for a legacy-heavy organisation with multiple stakeholder groups. As the first PM at the company, I built Jira and Scrum workflows from scratch, led delivery planning, sprint cadence, backlog readiness, and cross-team coordination — keeping decision-making and risks visible through documentation and release planning.",
        websiteLabel: "Website",
        websiteUrl: "https://www.ekd-solar.de/#owner"
      },
      {
        title: "Riese & Müller online shop",
        dates: "Apr 2022 – Jul 2022",
        role: "Full-Stack Developer",
        body: "Frontend development on the e-commerce webshop for an established bike brand. Improved frontend structure and implementation quality to support a cleaner release flow and easier maintenance across the delivery team.",
        websiteLabel: "Website",
        websiteUrl: "https://www.r-m.de/de/bikes/"
      },
      {
        title: "Strollme webshop",
        dates: "E-commerce delivery project",
        role: "Product delivery and technical coordination",
        body: "Webshop delivery with close coordination across product, design, and engineering. Translated priorities into ticket-ready work, kept scope practical, and drove steady releases with clear ownership and communication.",
        websiteLabel: "Website",
        websiteUrl: "https://strollme.com/de"
      }
    ]
  },
  de: {
    intro:
      "Ausgewählte Produkte, bei denen ich Delivery vollständig oder wesentlich verantwortet habe.",
    entries: [
      {
        title: "eos archive",
        dates: "Okt 2022 – heute",
        role: "Gründerin",
        body: "Unabhängige Plattform für kulturelle Dokumentation und Entdeckung in Leipzig und Berlin. Ich habe eos archive gegründet und aufgebaut und verantworte das Produkt vollständig — Roadmap, Discovery, Delivery und Community-Entwicklung. Aktuell: 50 registrierte Spaces, 100 archivierte Events, ~300 Newsletter-Abonnent:innen und 7k+ Reichweite auf Instagram und Telegram.",
        websiteLabel: "Website",
        websiteUrl: "https://eosarchive.app",
        socialLabel: "Social",
        socialUrl: "https://instagram.com/eosarchive.app/"
      },
      {
        title: "EKD interne Plattform",
        dates: "Aug 2022 – Jul 2024",
        role: "Projektmanagerin (Team von 15)",
        body: "Modernisierung einer internen Plattform für eine legacy-geprägte Organisation mit mehreren Stakeholdergruppen. Als erste PM im Unternehmen habe ich Jira- und Scrum-Prozesse aufgebaut, Delivery-Planung, Sprint-Takt, Backlog-Readiness und teamübergreifende Koordination geleitet — Entscheidungen und Risiken durch Dokumentation und Release-Planung sichtbar gemacht.",
        websiteLabel: "Website",
        websiteUrl: "https://www.ekd-solar.de/#owner"
      },
      {
        title: "Riese & Müller Onlineshop",
        dates: "Apr 2022 – Jul 2022",
        role: "Entwicklerin",
        body: "Frontend-Entwicklung am E-Commerce-Webshop für eine etablierte Fahrradmarke. Verbesserung von Frontend-Struktur und Implementierungsqualität für sauberere Releases und einfachere Wartung im Delivery-Team.",
        websiteLabel: "Website",
        websiteUrl: "https://www.r-m.de/de/bikes/"
      },
      {
        title: "Strollme Onlineshop",
        dates: "E-Commerce-Delivery-Projekt",
        role: "Product Delivery und technische Koordination",
        body: "Webshop-Delivery in enger Abstimmung zwischen Produkt, Design und Engineering. Prioritäten in ticketfähige Arbeit übersetzt, Scope pragmatisch gehalten und verlässliche Releases mit klarer Verantwortung umgesetzt.",
        websiteLabel: "Website",
        websiteUrl: "https://strollme.com/de"
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
    socialLabel: "Social",
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
    socialLabel: "Social",
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
  "glasfabrik": {
    de: {
      role: "Eventmanagerin",
      summary:
        "Glasfabrik ist ein Kulturzentrum und Veranstaltungsort in Leipzig. Seit Juni 2026 bin ich dort als Eventmanagerin tätig — für Programmkoordination, Abläufe und die Durchführung vor Ort.",
      location: "Leipzig"
    }
  },
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
  "chaos-computer-congress-38c3": {
    de: {
      role: "Produktionsleitung — Hackers Beauty Palace",
      summary:
        "Produktionsleitung für Hackers Beauty Palace, einen selbstorganisierten Raum innerhalb der größten Hackerkonferenz Europas (~12.000 Teilnehmende). Verantwortlich für vollständiges Eventmanagement, Koordination und Umsetzung vor Ort.",
      scale: "~12.000 Teilnehmende",
      duration: "4 Tage",
      location: "Congress Center Hamburg"
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
