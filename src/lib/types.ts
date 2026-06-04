import type { projects } from "./consts";

export enum ProjectStatus {
  Active,
  Completed,
  Inactive,
};

export interface TimelineEntry {
  entryType: 'project' | 'education' | 'employment';
  title: string;
  description: string;
  category: string;
  href?: string;
  image?: string;
  tags: string[];
  startDate: Date;
  endDate: Date | null; // null = present
}

export interface ProjectEntry extends TimelineEntry {
  entryType: 'project';
  status: ProjectStatus;
  featured?: boolean;
  isMockImage?: boolean;
};

export interface EducationEntry extends TimelineEntry {
  entryType: 'education';
  field: string;
  projects: (keyof typeof projects)[];
};

export interface EmploymentEntry extends TimelineEntry {
  entryType: 'employment';
  role: string;
  employmentType: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship';
  projects: (keyof typeof projects)[];
};

export type WildcardEntry = ProjectEntry | EducationEntry | EmploymentEntry;