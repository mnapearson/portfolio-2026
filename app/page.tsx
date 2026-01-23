import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <div>
      <h2 className='section-title'>Who I am</h2>
      <p>
        I’m a freelance project manager and web developer based in Leipzig. I
        work with software and digital teams to keep delivery clear and steady,
        and I also create and coordinate cultural productions. I care a lot
        about calm communication and clear writing. I’m usually the person who
        keeps the thread between people, decisions, and delivery, especially
        when things get busy.
      </p>

      <h2 className='section-title'>What I do</h2>
      <p>
        I help teams define scope and milestones, keep backlogs clear,
        facilitate planning and meetings, align stakeholders, track dependencies
        and risks, and improve workflows so delivery stays steady and
        understandable.
      </p>

      <h2 className='section-title'>Contact</h2>
      <p>
        Email: <a href='mailto:marratoon@gmail.com'>marratoon@gmail.com</a>
      </p>
      <p>
        Instagram:{' '}
        <a
          href='https://www.instagram.com/mickyarratoon/'
          target='_blank'
          rel='noreferrer'>
          https://www.instagram.com/mickyarratoon/
        </a>
      </p>
      <p>
        LinkedIn:{' '}
        <a
          href='https://www.linkedin.com/in/michaela-arratoon'
          target='_blank'
          rel='noreferrer'>
          https://www.linkedin.com/in/michaela-arratoon
        </a>
      </p>
    </div>
  );
}
