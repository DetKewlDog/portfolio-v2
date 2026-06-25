import { ProjectStatus, type EducationEntry, type EmploymentEntry, type ProjectEntry } from "./types";

const newProject = (params: Omit<ProjectEntry, 'entryType'>) =>
  ({ ...params, entryType: 'project' } satisfies ProjectEntry);
const newEducation = (params: Omit<EducationEntry, 'entryType'>) =>
  ({ ...params, entryType: 'education' } satisfies EducationEntry);
const newEmployment = (params: Omit<EmploymentEntry, 'entryType'>) =>
  ({ ...params, entryType: 'employment' } satisfies EmploymentEntry);

export const projects = Object.freeze({
  helldivers_companion: newProject({
    title: "Helldivers Companion",
    description: "Web application that allows you to check the status of Helldivers II's galactic war in real time. Made in collaboration with Squid Lips and azeDevs.",
    category: 'Full Stack',
    href: "https://helldiverscompanion.com",
    image: "/projects/helldivers-companion.webp",
    tags: ['TS', 'SvelteKit'],
    status: ProjectStatus.Active,
    startDate: new Date("2024-03-06"),
    endDate: null,
    featured: true
  }),
  kratos: newProject({
    title: "Kratos",
    description: "Security investigation platform that ingests endpoint logs into unified profiles for users and hosts, enabling offline investigation and visibility across a network.",
    category: 'Full Stack',
    image: "/projects/kratos.webp",
    tags: ['Python', 'Streamlit', 'ELK'],
    status: ProjectStatus.Completed,
    startDate: new Date("2025-09-04"),
    endDate: new Date("2026-02-04"),
    featured: true,
    isMockImage: true
  }),
  stemma: newProject({
    title: "Stemma",
    description: "Security investigation platform that performs relationship-driven discovery of endpoint logs to build interactive incident timelines, accelerating incident reconstruction.",
    category: 'Full Stack',
    image: "/projects/stemma.webp",
    tags: ['TS', 'SvelteKit', 'ElasticSearch'],
    status: ProjectStatus.Active,
    startDate: new Date("2026-02-10"),
    endDate: null,
    isMockImage: true
  }),
  red_alert_map: newProject({
    title: "Red Alert Map",
    description: "Web application that displays real-time rocket alerts in Israel on a map. The app utilizes real-time alert data provided by Pikud HaOref.",
    category: 'Full Stack',
    href: "https://github.com/DetKewlDog/red-alert-map",
    image: "/projects/red-alert-map.webp",
    tags: ['TS', 'React'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-10-11"),
    endDate: new Date("2024-06-05"),
    featured: true,
  }),
  portfolio_v2: newProject({
    title: "Portfolio v2.0",
    description: "This portfolio website! Built using SvelteKit and TypeScript.",
    category: 'Web App',
    href: "https://github.com/DetKewlDog/portfolio-v2",
    image: "/projects/portfolio-site.webp",
    tags: ['TS', 'SvelteKit'],
    status: ProjectStatus.Active,
    startDate: new Date("2026-05-01"),
    endDate: null
  }),
  forgescape: newProject({
    title: "Forgescape",
    description: "2D TopDown Adventure game where you are able to fight monsters, obtain powerful items and explore biomes in a procedurally generated world.",
    category: 'Game',
    href: "https://www.youtube.com/playlist?list=PLhFxqiJA0WlWNxFYUh4fKYkagRRgUSL_f",
    image: "/projects/forgescape.webp",
    tags: ['C#', 'Unity'],
    status: ProjectStatus.Inactive,
    startDate: new Date("2021-01-20"),
    endDate: new Date("2023-12-20")
  }),
  harvest_hero: newProject({
    title: "Harvest Hero",
    description: "A game where players maintain an ever-shrinking farm. Was created as part of the Ludum Dare 54 game jam.",
    category: 'Game',
    href: "https://detkewldog.itch.io/harvest-hero",
    image: "/projects/harvest-hero.webp",
    tags: ['C#', 'Unity', 'Game Jam'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-09-29"),
    endDate: new Date("2023-10-02"),
  }),
  bewarehouse: newProject({
    title: "BeWarehouse",
    description: "A game that puts players in charge of a busy warehouse operation. Was created as part of the Ludum Dare 53 game jam.",
    category: 'Game',
    href: "https://detkewldog.itch.io/bewarehouse",
    image: "/projects/bewarehouse.webp",
    tags: ['C#', 'Unity', 'Game Jam'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-04-28"),
    endDate: new Date("2023-05-01"),
  }),
  color_workshop: newProject({
    title: "Color Workshop",
    description: "Minimalistic website that allows palette organization and manipulation, color related operations and image manipulation.",
    category: 'Web App',
    href: "https://colorworkshop.netlify.app/",
    image: "/projects/color-workshop.webp",
    tags: ['JS'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-01-29"),
    endDate: new Date("2023-05-18"),
  }),
  build_monitor: newProject({
    title: "Build Monitor",
    description: "Monitor for debugging Unity player logs/builds. Can be run on a LAN. Used to be a Python CLI app, but has been rewritten using Python & React.",
    category: 'Web App',
    href: "https://github.com/DetKewlDog/build-monitor-v2",
    image: "/projects/build-monitor.webp",
    tags: ['Python', 'React', 'JS', 'Flask'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-06-08"),
    endDate: new Date("2023-06-09"),
  }),
  route_reverse_engineer: newProject({
    title: "Route Reverse Engineer",
    description: "Finds all possible starting points that would result in routes with a given walking distance that would reach the coordinates of a given destination.",
    category: 'Web App',
    href: "https://route-reverse-engineer.netlify.app",
    image: "/projects/route-reverse-engineer.webp",
    tags: ['JS', 'React'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-07-05"),
    endDate: new Date("2023-07-23"),
  }),
  videoconferencing: newProject({
    title: "Videoconferencing Project",
    description: "Third-year project at Magshimim. A videoconferencing application project where I implemented the SRT Networking protocol, ICE networking technique, AES & RSA encryption algorithms without any external libraries",
    category: 'Full Stack',
    // image: '/projects/videoconferencing.webp',
    tags: ['React', 'Python'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-11-13"),
    endDate: new Date("2024-04-04")
  })
} as const satisfies Record<string, ProjectEntry>);

export const educations = Object.freeze({
  basmach: newEducation({
    title: 'Basmach',
    field: 'Cybersec.',
    category: 'Cybersecurity Analysis',
    description: 'Military cybersecurity analysis training focused on incident investigation, system analysis, and security operations workflows.',
    href: 'https://alpha.bsmch.idf.il/',
    image: '/education/basmach.webp',
    tags: ['IR', 'SOC', 'Military'],
    startDate: new Date('2024-09-26'),
    endDate: new Date('2024-12-05'),
    projects: [],
  }),
  magshimim: newEducation({
    title: 'Magshimim Cyber',
    field: 'CS',
    category: 'CS & Cybersecurity',
    description: 'Selective national program focused on cybersecurity, software engineering, and teamwork in complex technical environments.',
    href: 'https://www.magshimim.cyber.org.il/',
    image: '/education/magshimim.webp',
    tags: ['Cybersec.', 'Rev Eng'],
    startDate: new Date('2021-10-01'),
    endDate: new Date('2024-06-01'),
    projects: ['videoconferencing'],
  })
} as const satisfies Record<string, EducationEntry>);

export const employments = Object.freeze({
  rafael: newEmployment({
    title: 'Rafael',
    role: 'Full Stack Developer',
    category: 'Full Stack',
    description: "Full stack development with Next.js, SvelteKit, MongoDB and Flask.",
    href: 'https://www.rafael.co.il/',
    image: '/employment/rafael.webp',
    tags: ['CS'],
    startDate: new Date('2023-07-30'),
    endDate: new Date('2024-08-22'),
    employmentType: 'Full-Time',
    projects: [],
  }),
  unit_8200: newEmployment({
    title: 'Unit 8200',
    role: 'Full Stack Developer & Cyber Security Engineer',
    category: 'Cybersecurity',
    description: "Full stack development of Security Investigation Tools; Cyber Security Analysis in on-premises networks.",
    image: '/employment/8200.webp',
    tags: ['CS', 'IR', 'SOC'],
    startDate: new Date('2024-09-01'),
    endDate: new Date('2027-02-28'),
    employmentType: 'Full-Time',
    projects: ['kratos', 'stemma'],
  })
} as const satisfies Record<string, EmploymentEntry>);