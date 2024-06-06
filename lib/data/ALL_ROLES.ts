import { IRole } from '@/components/sections/Experience/Role/Role';

export const ROLES: IRole[] = [
  {
    title: 'VP of Technology / Lead Full Stack Engineer',
    company: 'Benztown Branding USA - Leading radio imaging company',
    location: 'Glendale, CA / Remote',
    startDate: 'Mar 2019',
    endDate: 'Present',
    description: '',
    achievements: [
      ['Oversaw all technical operations within the company, including managing the engineering team, developing new products, maintaining existing products, and overseeing infrastructure architecture.'],
      [
        'Led the development of new products:',
        'Created a SaaS platform for radio imaging production.',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Consulted with executives and stakeholders to define the product roadmap.',
        'Managed a team of developers and designers.',
      ],
      [
        'Improved reliability:',
        'Designed and provisioned Kubernetes infrastructure on AWS using Terraform.',
        'Utilized Infrastructure as Code tools such as ArgoCD GitOps, Helm, and Kustomize.',
        'Set up fully automated CI/CD pipelines.',
        'Implemented observability tools, application monitoring, and incident response procedures.',
        'Automated backups and disaster recovery plans for databases, volumes, and Kubernetes resources.',
        'Achieved 99.999% uptime for all services over two years.',
      ],
      [
        'Created a full-stack application for the company\'s flagship product using Next.js, TypeScript, React, and Redux for the frontend and Ruby on Rails, PostgreSQL, Redis, Sidekiq, and Elasticsearch for the backend.',
        'Maintained high test coverage with Jest, React Testing Library, RSpec, and Capybara.',
      ],
      [
        'Improved security:',
        'Implemented static code analyzers and automated dependency checks.',
        'Ensured complete environment separation.',
        'Replaced custom authentication systems with industry-standard solutions.',
      ],
      [
        'Developed AI-powered products:',
        'Implemented a similarity audio search.',
        'Developed an AI-powered voice generation application for radio imaging.',
        'Trained an AI audio classification model for music genres.',
      ],
      [
        'Maintained and improved a 13-year-old Ruby on Rails backend application.',
        'Optimized performance by introducing caching, background jobs, and database optimizations.',
        'Upgraded a Rails 4 application to Rails 7.',
        'Updated outated dependencies.',
        'Eliminated unused features and their dependencies.',
        'Gradually refactored legacy code to enhance maintainability and testability.',
      ],
    ]
  },
  {
    title: 'Technical Team Leader',
    company: 'Netguru – Ruby on Rails software house',
    location: 'Remote',
    startDate: 'Sept 2017',
    endDate: 'Mar 2019',
    description: '',
    achievements: [
      ['Led multiple technical projects, managed teams of developers, and consulted with clients.'],
      ['Mentored less experienced colleagues.'],
      ['Created and maintained Ruby on Rails and React applications.',],
      ['Conducted code reviews and pair programming sessions following best practices.'],
      ['Managed a team of seven developers, providing mentorship, supervising development goals, and evaluating performance.'],
      ['Led the development of small, medium, and large-scale projects',],
      ['Coordinated the recruitment process for a department of 200 developers.'],
      ['Spoke at company meetups, organized internal hackathons, and coached attendees in Ruby on Rails workshops.'],
      ['Collaborated with cross-functional teams to define, design, and ship new features.',],
      ['Consulted with clients during scoping sessions, project workshops, and technical project reviews.'],
      ['Consulted on company-wide policies with leadership and executives.'],
    ]
  },
  {
    title: 'Senior Ruby on Rails Developer',
    company: 'Netguru - Ruby on Rails focused software house',
    location: 'Remote',
    startDate: 'Jan 2015',
    endDate: 'Sept 2017',
    description: '',
    achievements: [
      ['Led Ruby on Rails projects.'],
      ['Managed teams of RoR developers.'],
      ['Conducted recruitment interviews for junior to senior levels.'],
    ]
  },
  {
    title: 'Ruby on Rails Developer',
    company: 'E-price - e-commerce company',
    location: 'Remote',
    startDate: 'Dec 2013',
    endDate: 'Jan 2015',
    description: '',
    achievements: [
      ['Built e-commerce ERP software managing sales via API integrations.'],
      ['Managed server infrastructure and deployment processes.'],
    ]
  },
  {
    title: 'PHP Developer',
    company: 'E-price - e-commerce company',
    location: 'Remote',
    startDate: 'Sept 2010',
    endDate: 'Dec 2013',
    description: '',
    achievements: [
      ['Developed and maintained ERP e-commerce software.'],
      ['Created CMS software for managing products and orders.'],
    ]
  },
]
