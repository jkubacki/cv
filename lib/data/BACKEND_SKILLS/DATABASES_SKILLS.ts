import { ISkill } from '@/lib/types/ISkill';

export const DATABASES_SKILLS: ISkill = {
  name: 'Databases',
  since: 2010,
  description: 'I have worked with many different kinds of databases. Most Ruby on Rails performance issues stem from inefficient database queries. I have extensive experience in identifying and optimizing these issues.',
  subSkills: [
    { name: 'SQL' },
    { name: 'MySQL' },
    { name: 'PostgreSQL' },
    { name: 'Redis' },
    { name: 'MongoDB' },
    { name: 'Elasticsearch' },
    { name: 'Database Design' },
  ]
}
