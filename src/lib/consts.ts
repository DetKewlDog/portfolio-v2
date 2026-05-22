import { EmploymentType, ProjectStatus, type EducationEntry, type EmploymentEntry, type ProjectEntry } from "./types";

export const projects: ProjectEntry[] = [
  {
    title: "Helldivers Companion",
    description: "Web application that allows you to check the status of Helldivers II's galactic war in real time. Made in collaboration with Squid Lips and azeDevs.",
    category: 'Full Stack',
    href: "https://helldiverscompanion.com",
    image: "/projects/helldivers-companion.png",
    tags: ['TS', 'SvelteKit'],
    status: ProjectStatus.Active,
    startDate: new Date("2024-03-06"),
    endDate: null,
    featured: true
  },
  {
    title: "Kratos",
    description: "Security investigation platform that ingests endpoint logs into unified profiles for users and hosts, enabling offline investigation and visibility across a network.",
    category: 'Full Stack',
    image: "/projects/kratos.png",
    tags: ['Python', 'Streamlit', 'ELK'],
    status: ProjectStatus.Completed,
    startDate: new Date("2025-09-04"),
    endDate: new Date("2026-02-04"),
    featured: true,
    isMockImage: true
  },
  {
    title: "Stemma",
    description: "Security investigation platform that performs relationship-driven discovery of endpoint logs to build interactive incident timelines, accelerating incident reconstruction.",
    category: 'Full Stack',
    image: "/projects/stemma.png",
    tags: ['TS', 'SvelteKit', 'ElasticSearch'],
    status: ProjectStatus.Active,
    startDate: new Date("2025-05-29"),
    endDate: null,
    isMockImage: true
  },
  {
    title: "Red Alert Map",
    description: "Web application that displays real-time rocket alerts in Israel on a map. The app utilizes real-time alert data provided by Pikud HaOref.",
    category: 'Full Stack',
    href: "https://github.com/DetKewlDog/red-alert-map",
    image: "/projects/red-alert-map.png",
    tags: ['TS', 'React'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-10-11"),
    endDate: new Date("2024-06-05"),
    featured: true,
  },
  {
    title: "Portfolio (V2)",
    description: "This portfolio website! Built using SvelteKit and TypeScript.",
    category: 'Web App',
    href: "https://github.com/DetKewlDog/portfolio-v2",
    image: "/projects/portfolio-site.png",
    tags: ['TS', 'SvelteKit'],
    status: ProjectStatus.Active,
    startDate: new Date("2026-05-01"),
    endDate: null
  },
  {
    title: "Forgescape",
    description: "2D TopDown Adventure game where you are able to fight monsters, obtain powerful items and explore biomes in a procedurally generated world.",
    category: 'Game',
    href: "https://www.youtube.com/playlist?list=PLhFxqiJA0WlWNxFYUh4fKYkagRRgUSL_f",
    image: "/projects/forgescape.png",
    tags: ['C#', 'Unity'],
    status: ProjectStatus.Inactive,
    startDate: new Date("2021-01-20"),
    endDate: new Date("2023-12-20")
  },
  {
    title: "Harvest Hero",
    description: "A game where players maintain an ever-shrinking farm. Was created as part of the Ludum Dare 54 game jam.",
    category: 'Game',
    href: "https://detkewldog.itch.io/harvest-hero",
    image: "/projects/harvest-hero.png",
    tags: ['C#', 'Unity', 'Game Jam'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-09-29"),
    endDate: new Date("2023-10-02"),
  },
  {
    title: "BeWarehouse",
    description: "A game that puts players in charge of a busy warehouse operation. Was created as part of the Ludum Dare 53 game jam.",
    category: 'Game',
    href: "https://detkewldog.itch.io/bewarehouse",
    image: "/projects/bewarehouse.png",
    tags: ['C#', 'Unity', 'Game Jam'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-04-28"),
    endDate: new Date("2023-05-01"),
  },
  {
    title: "Color Workshop",
    description: "Minimalistic website that allows palette organization and manipulation, color related operations and image manipulation.",
    category: 'Web App',
    href: "https://colorworkshop.netlify.app/",
    image: "/projects/color-workshop.png",
    tags: ['JS'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-01-29"),
    endDate: new Date("2023-05-18"),
  },
  {
    title: "Build Monitor",
    description: "Monitor for debugging Unity player logs/builds. Can be run on a LAN. Used to be a Python CLI app, but has been rewritten using Python & React.",
    category: 'Web App',
    href: "https://github.com/DetKewlDog/build-monitor-v2",
    image: "/projects/build-monitor.png",
    tags: ['Python', 'React', 'JS', 'Flask'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-06-08"),
    endDate: new Date("2023-07-11"),
  },
  {
    title: "Route Reverse Engineer",
    description: "Finds all possible starting points that would result in routes with a given walking distance that would reach the coordinates of a given destination.",
    category: 'Web App',
    href: "https://route-reverse-engineer.netlify.app",
    image: "/projects/route-reverse-engineer.png",
    tags: ['JS', 'React'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-07-05"),
    endDate: new Date("2023-07-23"),
  },
  {
    title: "Videoconferencing Project",
    description: "Third-year project at Magshimim. A videoconferencing application project where I implemented the SRT Networking protocol, ICE networking technique, AES & RSA encryption algorithms without any external libraries",
    category: 'Full Stack',
    // image: '/projects/videoconferencing.png',
    tags: ['React', 'Python'],
    status: ProjectStatus.Completed,
    startDate: new Date("2023-11-13"),
    endDate: new Date("2024-04-04")
  }
];

export const educations: EducationEntry[] = [
  {
    title: 'Cybersecurity Analysis',
    institution: 'Basmach - IDF',
    category: 'Cybersecurity',
    description: 'Military cybersecurity analysis training focused on incident investigation, system analysis, and security operations workflows.',
    href: 'https://alpha.bsmch.idf.il/',
    image: '/education/basmach.png',
    tags: ['Incident Response', 'Military'],
    startDate: new Date('2024-09-26'),
    endDate: new Date('2024-12-05')
  },
  {
    title: 'Computer Science & Cybersecurity',
    institution: 'Magshimim - National Education Program',
    category: 'Computer Science',
    description: 'Selective national program focused on cybersecurity, software engineering, and teamwork in complex technical environments.',
    href: 'https://www.magshimim.cyber.org.il/',
    image: '/education/magshimim.png',
    tags: ['Software Development', 'Cybersecurity', 'Reverse Engineering'],
    startDate: new Date('2021-10-01'),
    endDate: new Date('2024-06-01')
  }
];

export const employments: EmploymentEntry[] = [
  {
    title: 'Full Stack Developer',
    company: 'Rafael Advanced Defense Systems',
    category: 'Employment',
    description: "Full stack development with Next.js, SvelteKit, MongoDB and Flask.",
    href: 'https://www.rafael.co.il/',
    image: '/employment/rafael.png',
    tags: ['Software Development'],
    startDate: new Date('2023-07-30'),
    endDate: new Date('2024-08-22'),
    employmentType: EmploymentType.FullTime
  },
  {
    title: 'Full Stack Developer & Cyber Security Engineer',
    company: 'Israeli Military Intelligence - Unit 8200',
    category: 'Military Service',
    description: "Full stack development of Security Investigation Tools; Cyber Security Analysis in on-premises networks.",
    image: '/employment/aman.png',
    tags: ['Software Development', 'Security Investigation', 'Cyber Security'],
    startDate: new Date('2024-09-01'),
    endDate: new Date('2027-02-28'),
    employmentType: EmploymentType.FullTime
  }
];