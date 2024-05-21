import { MANAGEMENT_SKILLS } from '@/lib/data/LEADERSHIP_SKILLS/MANAGEMENT_SKILLS'
import { RECRUITMENT_SKILLS } from '@/lib/data/LEADERSHIP_SKILLS/RECRUITMENT_SKILLS'
import { TECH_LEAD_SKILLS } from '@/lib/data/LEADERSHIP_SKILLS/TECH_LEAD_SKILLS'
import { ISkill } from '@/lib/types/ISkill'

export const LEADERSHIP_SKILLS: ISkill = {  
  name: 'Leadership',
  since: 2016,
  level: 85,
  description: 'I have been in leadership roles for several years, overseeing multiple projects and teams.',
  subSkills: [
    TECH_LEAD_SKILLS,
    MANAGEMENT_SKILLS,
    RECRUITMENT_SKILLS,
  ]
}


