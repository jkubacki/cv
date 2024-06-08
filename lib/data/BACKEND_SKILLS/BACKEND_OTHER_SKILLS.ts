import { ISkill } from '@/lib/types/ISkill';

export const BACKEND_OTHER_SKILLS: ISkill = {
  name: 'Other',
  description: 'I like experimenting with different technologies and frameworks to find the best tool for the job.',
  subSkills: [
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'Kafka'},
    { name: 'Rust' },
    { name: 'Elixir' },
    { name: 'Shell' },
    { name: 'Search engines - ElasticSearch, Solr'},
    { name: 'Git'},
  ]
}
