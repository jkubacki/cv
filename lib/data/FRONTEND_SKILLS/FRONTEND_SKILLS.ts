import { FRONTEND_OTHER_SKILLS } from '@/lib/data/FRONTEND_SKILLS/FRONTEND_OTHER_SKILLS'
import { NEXT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/NEXT_SKILLS'
import { REACT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/REACT_SKILLS'
import { JAVASCRIPT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/JAVASCRIPT_SKILLS'
import { ISkill } from '@/lib/types/ISkill'
import { TYPESCRIPT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/TYPESCRIPT_SKILLS'

export const FRONTEND_SKILLS: ISkill = {  
  name: 'Frontend',
  since: 2018,
  level: 75,
  description: 'I have been working with React since 2018. Created multiple applications and websites.',
  subSkills: [
    REACT_SKILLS,
    TYPESCRIPT_SKILLS,
    JAVASCRIPT_SKILLS,
    NEXT_SKILLS,
    FRONTEND_OTHER_SKILLS,
  ]
}


