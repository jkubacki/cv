import { ISkill } from '@/lib/types/ISkill';

export const AWS_SKILLS: ISkill = {
  name: 'AWS',
  since: 2016,
  description: "I've hosted websites and Kuberentes clusters using AWS",
  subSkills: [
    { name: 'S3' },
    { name: 'EKS' },
    { name: 'EC2' },
    { name: 'RDS' },
    { name: 'Lambda' },
    { name: 'Route 53' },
    { name: 'SES' },
  ]
}
