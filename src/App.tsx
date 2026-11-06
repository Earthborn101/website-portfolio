import {
  ArrowUpRightIcon,
  BuildingsIcon,
  CalendarBlankIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  EnvelopeSimpleIcon,
  GitBranchIcon,
  GraduationCapIcon,
  HardDrivesIcon,
  KanbanIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
  SparkleIcon,
  WrenchIcon,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import {
  education,
  experience,
  identity,
  skills,
  summary,
} from './content'
import { useReveal } from './useReveal'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const skillIcons: Record<string, Icon> = {
  'Programming Languages': CodeIcon,
  'Backend & Web': HardDrivesIcon,
  'Databases & Data': DatabaseIcon,
  'Distributed Systems': GitBranchIcon,
  'Cloud & DevOps': CloudIcon,
  'Tools & Frameworks': WrenchIcon,
  'AI & Automation': SparkleIcon,
  Methodologies: KanbanIcon,
}

function App() {
  const pageRef = useReveal<HTMLDivElement>()

  return (
    <div ref={pageRef} className="min-h-screen bg-surface text-ink">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-wide text-ink/80 transition hover:text-accent"
          >
            Ryan Adiao
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-deep md:hidden"
          >
            <EnvelopeSimpleIcon aria-hidden weight="regular" className="size-4" />
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Hero — one composition */}
        <section
          id="top"
          className="relative flex min-h-[70svh] items-center overflow-hidden sm:min-h-[75svh]"
          aria-label="Introduction"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(160deg,#ffffff_0%,#f5f5f5_45%,#ececec_100%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-20 w-[42%] max-w-xs sm:top-24 sm:w-[36%] sm:max-w-sm lg:max-w-md"
            aria-hidden="true"
          >
            <img
              src="/ryan-portrait.png?v=3"
              alt=""
              className="animate-drift h-full w-full object-contain object-bottom"
            />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-xl lg:max-w-2xl">
              <p className="animate-fade-up font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
                Hello, I am Ryan
              </p>
              <h1 className="animate-fade-up-delay-1 mt-3 max-w-2xl font-display text-base font-semibold leading-snug text-accent-deep sm:text-xl">
                {identity.title}
              </h1>
              <p className="animate-fade-up-delay-2 mt-3 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                Specialized in distributed systems, data engineering, and scalable
                APIs — with hands-on experience across AWS and GCP.
              </p>
              <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent-deep hover:bg-accent-deep sm:px-6 sm:py-3"
                >
                  <PaperPlaneTiltIcon aria-hidden weight="bold" className="size-4" />
                  Contact
                </a>
                <a
                  href={identity.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-ink/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent sm:px-6 sm:py-3"
                >
                  <LinkedinLogoIcon aria-hidden weight="regular" className="size-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-line/70 bg-surface">
          <div className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              About
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Backend systems that stay reliable under load.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
              {summary}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-base text-muted">
              <MapPinIcon aria-hidden weight="regular" className="size-4 shrink-0" />
              {identity.location}
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-line/70 bg-surface-2/50">
          <div className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Skills
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Tools and domains I work in.
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => {
                const SkillIcon = skillIcons[group.label] ?? WrenchIcon
                return (
                  <div key={group.label}>
                    <h3 className="inline-flex items-center gap-2 font-display text-base font-semibold text-accent-deep">
                      <SkillIcon
                        aria-hidden
                        weight="regular"
                        className="size-4 shrink-0 text-ink"
                      />
                      {group.label}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft">
                      {group.items.join(' · ')}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-line/70 bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="reveal">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Experience
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Roles and impact over the years.
              </h2>
            </div>

            <ol className="mt-14 space-y-0">
              {experience.map((job, index) => (
                <li
                  key={`${job.company}-${job.role}-${job.period}`}
                  className="reveal border-t border-line py-10 first:border-t-0 first:pt-0"
                  style={{ transitionDelay: `${Math.min(index, 4) * 40}ms` }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-base font-medium text-accent-deep">
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 underline-offset-4 transition hover:underline"
                        >
                          <BuildingsIcon
                            aria-hidden
                            weight="regular"
                            className="size-4 shrink-0"
                          />
                          {job.company}
                          <ArrowUpRightIcon
                            aria-hidden
                            weight="bold"
                            className="size-3.5 shrink-0 opacity-60"
                          />
                        </a>
                        <span className="text-muted"> · {job.location}</span>
                      </p>
                    </div>
                    <p className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted sm:justify-end">
                      <CalendarBlankIcon
                        aria-hidden
                        weight="regular"
                        className="size-3.5 shrink-0"
                      />
                      {job.period}
                    </p>
                  </div>
                  <ul className="mt-5 max-w-3xl space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 48)}
                        className="relative pl-4 text-base leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70 before:content-['']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-t border-line/70 bg-surface-2/50">
          <div className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Education
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Academic foundation.
            </h2>
            <div className="mt-10 max-w-2xl">
              <h3 className="inline-flex items-start gap-2 font-display text-xl font-semibold text-ink">
                <GraduationCapIcon
                  aria-hidden
                  weight="regular"
                  className="mt-1 size-5 shrink-0"
                />
                <span>{education.degree}</span>
              </h3>
              <p className="mt-2 text-base font-medium text-accent-deep">
                <a
                  href={education.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline-offset-4 transition hover:underline"
                >
                  {education.school}
                  <ArrowUpRightIcon
                    aria-hidden
                    weight="bold"
                    className="size-3.5 shrink-0 opacity-60"
                  />
                </a>
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-base text-ink-soft">
                <MapPinIcon aria-hidden weight="regular" className="size-4 shrink-0" />
                {education.location}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                <CalendarBlankIcon
                  aria-hidden
                  weight="regular"
                  className="size-3.5 shrink-0"
                />
                {education.date}
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line/70 bg-surface">
          <div className="reveal mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Get in touch.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              Based in {identity.location}. Reach out by email or LinkedIn.
            </p>
            <div className="mt-10 flex flex-col gap-4 text-base sm:gap-3">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-2.5 font-medium text-accent transition hover:text-accent-deep"
              >
                <EnvelopeSimpleIcon aria-hidden weight="regular" className="size-5 shrink-0" />
                {identity.email}
              </a>
              <a
                href={identity.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-medium text-ink-soft transition hover:text-accent"
              >
                <LinkedinLogoIcon aria-hidden weight="regular" className="size-5 shrink-0" />
                linkedin.com/in/ryan-christopher-adiao
              </a>
              <p className="inline-flex items-center gap-2.5 text-muted">
                <MapPinIcon aria-hidden weight="regular" className="size-5 shrink-0" />
                {identity.location}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {identity.fullName}
          </p>
          <p>Senior Software Engineer · Elixir & Phoenix</p>
        </div>
      </footer>
    </div>
  )
}

export default App
