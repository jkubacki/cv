import { BACKEND_SKILLS } from '@/lib/data/BACKEND_SKILLS/BACKEND_SKILLS';
import { DEVOPS_SKILLS } from '@/lib/data/DEV_OPS_SKILLS/DEVOPS_SKILLS';
import { FRONTEND_SKILLS } from '@/lib/data/FRONTEND_SKILLS/FRONTEND_SKILLS';
import { ISkill } from '@/lib/types/ISkill';
import { LEADERSHIP_SKILLS } from '@/lib/data/LEADERSHIP_SKILLS/LEADERSHIP_SKILLS';

export const SKILLS: ISkill[] = [
  BACKEND_SKILLS,
  LEADERSHIP_SKILLS,
  DEVOPS_SKILLS,
  FRONTEND_SKILLS
]
