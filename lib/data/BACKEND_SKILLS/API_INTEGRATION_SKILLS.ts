import { ISkill } from '@/lib/types/ISkill';

export const API_INTEGRATION_SKILLS: ISkill = {
  name: 'API integrations',
  since: 2010,
  description: 'I developed multiple APIs that were consumed by frontend, mobile apps and other services.',
  subSkills: [
    { name: 'REST' },
    { name: 'GraphQL' },
  ]
}
