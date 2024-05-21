export interface ISkill {
  name: string;
  level?: number;
  since?: number;
  description?: string;
  subSkills?: ISkill[];
}
