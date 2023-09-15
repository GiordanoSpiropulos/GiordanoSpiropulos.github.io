export interface MyExperienceLocale {
  title: string;
  timeline: Timeline[];
}

export interface Timeline {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  dateRange: string;
}
