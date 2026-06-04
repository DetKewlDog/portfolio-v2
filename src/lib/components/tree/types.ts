export type Node = {
  title: string;
  branchName: string;
  date: Date;
  value: unknown;
  isBranchEnd?: boolean;
  isStale?: boolean;
};

export type Branch = {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  value: unknown;

  name: string;
  children: Node[];
  isMaster?: boolean;

  startTitle?: string;
  endTitle?: string;
  isStale?: boolean;
};

export type CellVariants = 'node' | 'line' | 'line-start' | 'line-end' | 'node-shift' | 'empty';