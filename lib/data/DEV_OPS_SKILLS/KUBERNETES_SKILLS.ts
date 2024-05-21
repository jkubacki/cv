import { ISkill } from '@/lib/types/ISkill';

export const KUBERNETES_SKILLS: ISkill = {
  name: 'Kubernetes',
  since: 2019,
  description: 'I have set up Kubernetes clusters in two companies. Used in production for over 5 years now.',
  subSkills: [
    { name: 'GitOPS' },
    { name: 'ArgoCD' },
    { name: 'Kustomize' },
    { name: 'Helm' },
    { name: 'Grafana, Prometheus, Alert Manager' },
    { name: 'Elastic Cloud' },
    { name: 'Fluentd' },
    { name: 'Cert Manager' },
    { name: 'Sealed Secrets' },
    { name: 'Open EBS NFS' },
    { name: 'RBAC' },
    { name: 'Automated backups' },
    { name: 'Digital Ocean' },
    { name: 'Docker' },
  ]
}
