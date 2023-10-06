export interface SkillsLocale {
  title: string;
  subtitle: string;
  description: string;
  skillsList: SkillsList[];
}

export interface SkillsList {
  id: number;
  skillImageName: string;
  skillDescription: string;
}

export interface SkillsListTitle {
  id: number;
  title: string;
}
