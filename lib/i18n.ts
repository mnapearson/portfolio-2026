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
        "Leipzig, Germany (CET/CEST) — remote friendly",
        "mickyarratoon@proton.me",
        "LinkedIn / Instagram"
      ],
      currentlyHeading: "Currently",
      currentlyBody: [
        "PROJECT DELIVERY FOR DIGITAL TEAMS; CULTURAL PRODUCTION WITH EOS ARCHIVE AND FESTIVALS.",
        "OPEN TO FULL-TIME ROLES (LEIPZIG / REMOTE)."
      ],
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
      "I’M A PROJECT MANAGER AND WEB DEVELOPER BASED IN LEIPZIG. I WORK WITH SOFTWARE AND DIGITAL TEAMS TO KEEP DELIVERY CLEAR AND STEADY, AND I ALSO CREATE AND COORDINATE CULTURAL PRODUCTIONS. I CARE A LOT ABOUT CALM COMMUNICATION AND CLEAR WRITING. I’M USUALLY THE PERSON WHO KEEPS THE THREAD BETWEEN PEOPLE, DECISIONS, AND DELIVERY, ESPECIALLY WHEN THINGS GET BUSY.",
    whatTitle: "What I do",
    whatBody:
      "I help teams define scope and milestones, keep backlogs clear, facilitate planning and meetings, align stakeholders, track dependencies and risks, and improve workflows so delivery stays steady and understandable.",
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
    contactTitle: "Kontakt",
    emailLabel: "E-Mail",
    instagramLabel: "Instagram",
    linkedinLabel: "LinkedIn"
  }
} satisfies Record<Lang, any>;

export const projectsCopy = {
  en: {
    intro:
      "PROJECT DELIVERY AND DEVELOPMENT SUPPORT FOR SOFTWARE AND DIGITAL TEAMS. THE FOCUS IS DELIVERY: KEEPING WORK CLEAR, COORDINATED, AND MOVING. THIS CAN INCLUDE DELIVERY PLANNING, SPRINT SUPPORT, BACKLOG CLARITY (SCOPE, TICKETS, ACCEPTANCE CRITERIA), STAKEHOLDER ALIGNMENT, DOCUMENTATION, DEPENDENCY AND RISK TRACKING, RELEASE SUPPORT, AND PRACTICAL WORKFLOW IMPROVEMENTS.",
    whatTitle: "What I deliver",
    whatItems: [
      "Delivery planning and milestone tracking.",
      "Sprint planning and facilitation.",
      "Backlog clarity and ticket readiness.",
      "Stakeholder alignment and updates.",
      "Documentation and decision logs.",
      "Dependency and risk tracking.",
      "Release support and handoffs.",
      "Workflow improvements without overhead."
    ],
    howTitle: "How I work",
    howItems: [
      "Calm communication.",
      "Clear writing.",
      "Practical structure.",
      "Reliable follow-through."
    ]
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
      "A small selection of products I've contributed to across web, platform, and internal software.",
    entries: [
      {
        title: "eos archive",
        dates: "Oct 2022 – present",
        role: "Founder and product lead",
        body: "An independent event culture archive and platform, developed alongside an ongoing publishing practice. Work includes product iteration, platform coordination, and building a consistent archive through curation and publishing.",
        websiteLabel: "Website",
        websiteUrl: "https://eosarchive.app",
        socialLabel: "Social",
        socialUrl: "https://instagram.com/eosarchive.app/"
      },
      {
        title: "EKD internal platform",
        dates: "Aug 2022 – Jul 2024",
        role: "Project Manager (team of 15)",
        body: "Project management for an internal platform, including coordination of a legacy refactor. Work covered planning and milestones, delivery coordination across a 15-person team, stakeholder alignment, documentation, dependency and risk tracking, release support, and meeting facilitation. Tools used included Jira, Confluence, Bitbucket, BigPicture, Trello, Slack, Google Workspace, Clockify, and GitHub.",
        websiteLabel: "Website",
        websiteUrl: "https://www.ekd-solar.de/#owner"
      },
      {
        title: "Riese & Müller online shop",
        dates: "Apr 2022 – Jul 2022",
        role: "Developer",
        body: "Development work for an e-commerce website, with a focus on improving structure and keeping the build clean and navigable.",
        websiteLabel: "Website",
        websiteUrl: "https://www.r-m.de/de/bikes/"
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
        body: "Ein unabhängiges Archiv und eine Plattform für Veranstaltungskultur, begleitet von einer laufenden Publishing-Praxis. Arbeit umfasst Produktiteration, Plattformkoordination sowie den Aufbau eines konsistenten Archivs durch Kuratierung und Veröffentlichungen.",
        websiteLabel: "Website",
        websiteUrl: "https://eosarchive.app",
        socialLabel: "Social",
        socialUrl: "https://instagram.com/eosarchive.app/"
      },
      {
        title: "EKD interne Plattform",
        dates: "Aug 2022 – Jul 2024",
        role: "Projektmanagerin (Team von 15)",
        body: "Projektmanagement für eine interne Plattform, einschließlich Koordination eines Legacy-Refactors. Arbeit umfasste Planung und Meilensteine, Delivery-Koordination über ein 15-köpfiges Team, Stakeholder-Abstimmung, Dokumentation, Abhängigkeits- und Risiko-Tracking, Release-Support und Meeting-Moderation. Tools: Jira, Confluence, Bitbucket, BigPicture, Trello, Slack, Google Workspace, Clockify und GitHub.",
        websiteLabel: "Website",
        websiteUrl: "https://www.ekd-solar.de/#owner"
      },
      {
        title: "Riese & Müller Onlineshop",
        dates: "Apr 2022 – Jul 2022",
        role: "Entwicklerin",
        body: "Entwicklungsarbeit für einen E-Commerce-Auftritt mit Fokus auf Strukturverbesserungen und eine saubere, navigierbare Umsetzung.",
        websiteLabel: "Website",
        websiteUrl: "https://www.r-m.de/de/bikes/"
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
        "Familiäre Ausstellung bei Modos Dever in Leipzig. Ich steuerte ein Werk gemeinsam mit meiner Tochter bei und unterstützte die Organisation.",
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
