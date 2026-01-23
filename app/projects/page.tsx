import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Micky Arratoon',
  description: 'Project delivery support for software and digital work.',
};

export default function ProjectsPage() {
  return (
    <div>
      <p>
        Freelance project management and development for software and digital
        teams. The focus is delivery: keeping work clear, coordinated, and
        moving. This can include delivery planning, sprint support, backlog
        clarity (scope, tickets, acceptance criteria), stakeholder alignment,
        documentation, dependency and risk tracking, release support, and
        practical workflow improvements.
      </p>
      <h2 className='section-title'>What I deliver</h2>
      <ul className='list'>
        <li className='list-item'>Delivery planning and milestone tracking.</li>
        <li className='list-item'>Sprint planning and facilitation.</li>
        <li className='list-item'>Backlog clarity and ticket readiness.</li>
        <li className='list-item'>Stakeholder alignment and updates.</li>
        <li className='list-item'>Documentation and decision logs.</li>
        <li className='list-item'>Dependency and risk tracking.</li>
        <li className='list-item'>Release support and handoffs.</li>
        <li className='list-item'>Workflow improvements without overhead.</li>
      </ul>
      <h2 className='section-title'>How I work</h2>
      <ul className='list'>
        <li className='list-item'>Calm communication.</li>
        <li className='list-item'>Clear writing.</li>
        <li className='list-item'>Practical structure.</li>
        <li className='list-item'>Reliable follow-through.</li>
      </ul>
    </div>
  );
}
