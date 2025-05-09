import { ISkill } from '@/lib/types/ISkill';

export const REACT_SKILLS: ISkill = {
  name: 'React',
  since: 2018,
  description: 'I have been working with React since 2018. I have created several applications using React. SPA applications with SSR.',
  subSkills: [
    { name: 'Redux' },
    { name: 'React Query' },
    { name: 'Jest' },
    { name: 'Testing Library' },
    { name: 'Playwright' },
    { name: 'Storybook' },
  ]
}
