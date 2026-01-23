import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Micky Arratoon",
  description: "Product-adjacent delivery support and coordination."
};

export default function ProductsPage() {
  return (
    <div>
      <h1 className="page-title">Products.</h1>
      <p>
        A small selection of products I've contributed to across web, platform,
        and internal software. Where details are sensitive, they are kept high
        level.
      </p>
      <div className="entry">
        <div className="entry-head">
          <div className="entry-title">Riese &amp; Müller (website)</div>
          <div className="entry-dates">Apr 2022 – Jul 2022</div>
        </div>
        <div className="entry-role">Role: Developer</div>
        <p>
          Development work for an e-commerce website, with a focus on improving
          structure and keeping the build clean and navigable.
        </p>
        <p className="entry-link">
          Website:{" "}
          <a href="https://www.r-m.de/de/bikes/" rel="noreferrer">
            https://www.r-m.de/de/bikes/
          </a>
        </p>
      </div>

      <div className="entry">
        <div className="entry-head">
          <div className="entry-title">eos archive</div>
          <div className="entry-dates">2022 – present</div>
        </div>
        <div className="entry-role">Role: Founder and product lead</div>
        <p>
          An independent event culture archive and platform, developed alongside
          an ongoing publishing practice. Work includes product iteration,
          platform coordination, and building a consistent archive through
          curation and publishing.
        </p>
        <p className="entry-link">
          Website:{" "}
          <a href="https://eosarchive.app" rel="noreferrer">
            https://eosarchive.app
          </a>
        </p>
        <p className="entry-link">
          Social:{" "}
          <a href="https://instagram.com/eosarchive_leipzig" rel="noreferrer">
            https://instagram.com/eosarchive_leipzig
          </a>{" "}
          <a href="https://t.me/eoslej" rel="noreferrer">
            https://t.me/eoslej
          </a>
        </p>
      </div>

      <div className="entry">
        <div className="entry-head">
          <div className="entry-title">EKD internal platform</div>
          <div className="entry-dates">Aug 2022 – Jul 2024</div>
        </div>
        <div className="entry-role">Role: Project Manager (team of 15)</div>
        <p>
          Project management for an internal platform, including coordination of
          a legacy refactor. Work covered planning and milestones, delivery
          coordination across a 15-person team, stakeholder alignment,
          documentation, and meeting facilitation. Tools used included Jira,
          Confluence, Bitbucket, BigPicture, Trello, Slack, Google Workspace,
          Clockify, and GitHub.
        </p>
        <p className="entry-link">
          Website:{" "}
          <a href="https://www.ekd-solar.de/#owner" rel="noreferrer">
            https://www.ekd-solar.de/#owner
          </a>
        </p>
      </div>
    </div>
  );
}
