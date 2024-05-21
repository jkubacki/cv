import { ISkill } from '@/lib/types/ISkill';

export const AWS_SKILLS: ISkill = {
  name: 'AWS',
  since: 2016,
  description: "Demo app in my GitHub profile is hosted on AWS",
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
