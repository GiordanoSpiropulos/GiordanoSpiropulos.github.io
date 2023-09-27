export interface SkillsLocale {
  title: string;
  skillsListTitle: SkillsListTitle[];
  skillsListFrontEnd: SkillsList[];
  skillsListBackEnd: SkillsList[];
  skillsListOther: SkillsList[];
}

export interface SkillsList {
  id: number;
  skillDescription: string;
}

export interface SkillsListTitle {
  id: number;
  title: string;
}
