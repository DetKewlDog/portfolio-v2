export enum ProjectStatus {
  Active,
  Completed,
  Inactive,
};

export enum EmploymentType {
  FullTime,
  PartTime,
  Contract,
  Internship
};

interface TimelineEntry {
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
  status: ProjectStatus;
  featured?: boolean;
  isMockImage?: boolean;
};

export interface EducationEntry extends TimelineEntry {
  institution: string;
};

export interface EmploymentEntry extends TimelineEntry {
  company: string;
  employmentType: EmploymentType;
}