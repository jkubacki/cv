import { API_SKILLS } from '@/lib/data/BACKEND_SKILLS/API_SKILLS';
import { API_INTEGRATION_SKILLS } from '@/lib/data/BACKEND_SKILLS/API_INTEGRATION_SKILLS';
import { BACKEND_OTHER_SKILLS } from '@/lib/data/BACKEND_SKILLS/BACKEND_OTHER_SKILLS';
import { DATABASES_SKILLS } from '@/lib/data/BACKEND_SKILLS/DATABASES_SKILLS';
import { RUBY_ON_RAILS_SKILLS } from '@/lib/data/BACKEND_SKILLS/RUBY_ON_RAILS_SKILLS';
import { ISkill } from '@/lib/types/ISkill';

export const BACKEND_SKILLS: ISkill = {  
  name: 'Backend',
  since: 2010,
  level: 100,
  description: 'Backend development is my primary area of expertise, and I have created multiple applications, APIs, and integrations.',
  subSkills: [
    RUBY_ON_RAILS_SKILLS,
    API_SKILLS,
    DATABASES_SKILLS,
    API_INTEGRATION_SKILLS,
    BACKEND_OTHER_SKILLS,
  ]
}


