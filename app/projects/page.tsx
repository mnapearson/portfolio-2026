import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Micky Arratoon",
  description: "Project delivery support for software and digital work."
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="page-title">Projects.</h1>
      <p>
        Freelance project management and PM consulting for software and digital
        teams. The focus is delivery: keeping work clear, coordinated, and
        moving.
      </p>
      <p>
        This can include delivery planning, sprint support, backlog clarity
        (scope, tickets, acceptance criteria), stakeholder alignment,
        documentation, dependency and risk tracking, release support, and
        practical workflow improvements.
      </p>
      <p className="meta">
        Agile delivery (Scrum/Kanban), sprint planning, Jira backlog management,
        stakeholder communication, scope and requirements, prioritisation, risk
        and dependency management, documentation, process improvement,
        cross-functional coordination.
      </p>
      <p>
        Working style: calm communication, clear writing, and reliable
        follow-through. Structure without over-complication.
      </p>
    </div>
  );
}
