import { AWS_SKILLS } from '@/lib/data/DEV_OPS_SKILLS/AWS_SKILLS'
import { DEVOPS_OTHER_SKILLS } from '@/lib/data/DEV_OPS_SKILLS/DEVOPS_OTHER_SKILLS'
import { DOCKER_SKILLS } from '@/lib/data/DEV_OPS_SKILLS/DOCKER_SKILLS'
import { KUBERNETES_SKILLS } from '@/lib/data/DEV_OPS_SKILLS/KUBERNETES_SKILLS'
import { ISkill } from '@/lib/types/ISkill'

export const DEVOPS_SKILLS: ISkill = {  
  name: 'DevOps',
  level: 80,
  since: 2019,
  description: 'I have been working with DevOps since 2019. Creating CI/CD pipelines and managing Kubernetes clusters.',
  subSkills: [
    AWS_SKILLS,
    DOCKER_SKILLS,
    KUBERNETES_SKILLS,
    DEVOPS_OTHER_SKILLS,
  ]
}


