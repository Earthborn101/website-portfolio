export const identity = {
  name: 'Ryan Adiao',
  fullName: 'Ryan Christopher D. Adiao',
  title: 'Senior Software Engineer | Elixir, Phoenix, Distributed Systems',
  location: 'Las Piñas City, Philippines',
  phone: '(+63) 9201035479',
  email: 'ryan.adiao1994@gmail.com',
  linkedIn: 'https://linkedin.com/in/ryan-christopher-adiao',
}

export const summary =
  'Senior Software Engineer with 8+ years of experience designing, building, and optimizing production-grade backend systems using Elixir and Phoenix. Specialized in distributed systems, data engineering, and scalable APIs, with hands-on experience across AWS and GCP. Proven track record of solving complex engineering challenges, improving system performance, and delivering reliable software solutions. Experienced in leading technical initiatives and collaborating with global teams.'

export const experience = [
  {
    company: 'Infra-One',
    url: 'https://www.infra.one/',
    role: 'Elixir Developer',
    location: 'Vienna, Austria',
    period: 'Feb 2025 – Sep 2026',
    bullets: [
      'Built secure data rooms and internal CRM systems using Elixir/Phoenix, contributing to scalable platform architecture.',
      'Implemented event tracking and activity logging in data rooms to address limited customer activity visibility, enabling user engagement analysis, time-spent tracking, and identification of new contacts for CRM integration.',
      'Leveraged Claude Code and AI-assisted development tools to accelerate implementation, debugging, and code exploration while maintaining code quality.',
      'Collaborated with the CEO and international engineering teams on platform architecture, led code reviews, and facilitated technical discussions and retrospectives.',
    ],
  },
  {
    company: 'Infinit-O',
    url: 'https://www.infinit-o.com/',
    role: 'Elixir Senior Developer',
    location: 'Pasay City, Philippines',
    period: 'Feb 2023 – Feb 2025',
    bullets: [
      'Designed and implemented GCP data pipelines to automate business-critical hotel revenue processing, supporting reliable data ingestion and reporting.',
      'Addressed high daily processing costs in hotel revenue reporting by building an ETL platform using Elixir, Go, and BigQuery, reducing processing costs by 12.8%.',
      'Resolved a long-standing batch consistency issue by implementing pessimistic locking with Ecto, preventing concurrent updates from producing inconsistent states and improving processing reliability.',
      'Partnered with CTOs and clients to translate business requirements into reliable data and software systems.',
    ],
  },
  {
    company: 'Bramble (brmbl.io)',
    url: 'https://www.brmbl.io/',
    role: 'Software Engineer',
    location: 'United States (Remote)',
    period: 'Aug 2021 – Nov 2022',
    bullets: [
      'Developed an organization-wide mood tracking metric to analyze correlations between team sentiment and workplace friction, helping identify potential issues affecting morale and collaboration.',
      'Optimized background processing with Oban, improving invitation processing efficiency by 12%.',
      'Overhauled user navigation to improve product usability and satisfaction.',
    ],
  },
  {
    company: 'Mashup Garage',
    url: 'https://www.mashupgarage.com/',
    role: 'Software Developer',
    location: 'Quezon City, Philippines',
    period: 'Jun 2021 – Aug 2021',
    bullets: [
      'Integrated Google Analytics and Facebook Analytics into the SLERP food-delivery platform, capturing product names, IDs, types, and costs to help vendors analyze product performance and identify their best-selling products, particularly those with large catalogs.',
    ],
  },
  {
    company: 'Medilink Network Inc.',
    url: 'https://www.medilink.com.ph/',
    role: 'Software Engineer I → III',
    location: 'Makati City, Philippines',
    period: 'Jun 2018 – Jun 2021',
    bullets: [
      'Promoted from Software Engineer I to III over three years; later led a team of three engineers, coordinating development efforts, conducting code reviews, and ensuring timely project delivery.',
      'Developed an HMO enrollment system using Elixir, AWS S3, SNS, and Kafka to automate mass enrollment and member migration from previous healthcare providers, streamlining large-scale enrollment operations.',
      'Automated benefits processing by building Elixir GenServer workers that monitored internal file uploads, retrieved files from designated folders, and processed new benefits into the system, reducing manual processing for internal teams.',
      'Designed and implemented an Elixir GenServer worker to centralize account updates in the main application. Recommended replacing a proposed legacy-system-driven approach with an API-based architecture, allowing other microservices to request account updates through the main application and ensuring a centralized update process.',
      'Developed and deployed AccountLink (now Account Viewpoint), an HMO management platform that enables HR departments across multiple companies to manage Maxicare plans and employee enrollments.',
      'Developed RAMP, an emergency Letter of Authorization (LOA) generation tool during the COVID-19 pandemic, enabling healthcare authorization requests to be processed during a critical period.',
      'Optimized a legacy account creation API, reducing response time from 12 seconds to 3 seconds (75% faster) and significantly improving performance.',
      'Developed an account management API to handle account lifecycle operations, including suspension, reactivation, and account bans, ensuring consistent account status management.',
      'Contributed to the development of the Members Gateway application using React, improving the user interface and overall member experience.',
      'Led daily scrum meetings to ensure project milestones were met and facilitated team collaboration.',
      'Served as the technical point person in client meetings, providing expertise and guidance alongside the project manager.',
    ],
  },
]

export const skills = [
  {
    label: 'Programming Languages',
    items: ['Elixir', 'SQL', 'Go', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Backend & Web',
    items: ['Phoenix', 'Phoenix LiveView', 'Node.js', 'GraphQL', 'REST APIs'],
  },
  {
    label: 'Databases & Data',
    items: [
      'PostgreSQL',
      'Google BigQuery',
      'ETL',
      'data pipelines',
      'data workflows',
      'analytics integration',
    ],
  },
  {
    label: 'Distributed Systems',
    items: [
      'Apache Kafka',
      'AWS queuing systems',
      'background processing',
      'event-driven systems',
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud Platform (GCP)', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    label: 'Tools & Frameworks',
    items: ['Oban', 'React', 'Elm', 'Alpine.js', 'Git'],
  },
  {
    label: 'AI & Automation',
    items: [
      'Claude Code',
      'LLM integration',
      'AI-assisted software development',
      'workflow automation',
      'API integrations',
    ],
  },
  {
    label: 'Methodologies',
    items: ['Agile', 'Scrum', 'Waterfall', 'Sprint planning'],
  },
]

export const education = {
  school: 'University of Perpetual Help System-DALTA',
  url: 'https://perpetualdalta.edu.ph/new/las-pinas-campus-home/',
  degree: 'Bachelor of Science in Computer Engineering',
  date: 'Apr 2018',
  location: 'Las Piñas City, Metro Manila, Philippines',
}
