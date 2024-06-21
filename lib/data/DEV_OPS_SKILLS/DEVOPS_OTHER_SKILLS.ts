import { ISkill } from '@/lib/types/ISkill'

export const DEVOPS_OTHER_SKILLS: ISkill = {  
  name: 'Other',
  description: 'I managed servers and used deployment tools since I started programming',
  subSkills: [
    { name: 'Terraform' },
    { name: 'CI/CD' },
    { name: 'CDN' },
    { name: 'Observability' },
    { name: 'Distributed systems' },
  ]
}


