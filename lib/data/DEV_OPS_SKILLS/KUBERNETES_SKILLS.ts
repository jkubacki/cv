import { ISkill } from '@/lib/types/ISkill';

export const KUBERNETES_SKILLS: ISkill = {
  name: 'Kubernetes',
  since: 2019,
  description: 'I have set up and maintained multiple Kubernetes clusters from scratch utilizing GitOps principles.',
  subSkills: [
    { name: 'GitOPS - ArgoCD' },
    { name: 'Kustomize' },
    { name: 'Helm' },
  ]
}
