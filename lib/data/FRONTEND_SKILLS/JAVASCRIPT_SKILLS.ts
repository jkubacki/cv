import { ISkill } from '@/lib/types/ISkill';

export const JAVASCRIPT_SKILLS: ISkill = {
  name: 'Javascript',
  since: 2010,
  description: 'Javascript was always a part of my work. From simple jQuery scripts, through ES6, to using it with Typescript in Next.js applications and Express.js APIs.',
  subSkills: [
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'Nest.js' },
    { name: 'Testing' },
    { name: 'Webpack' },
    { name: 'ESLint & Prettier' },
  ]
}
