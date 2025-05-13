import { IRole } from '@/components/sections/Experience/Role/Role';

export const ROLES: IRole[] = [
  {
    title: 'Tech Lead',
    company: 'Printumo - Print on demand for artists',
    location: 'Copenhagen, Denmark / Remote',
    startDate: 'Jun 2024',
    endDate: 'Present',
    description: '',
    achievements: [
      [
        'Built a SaaS print on demand platform from scratch:',
        'Selected and implemented a simple, efficient tech stack to accelerate development and reduce overhead.',
        'Selected and implemented a simple, efficient tech stack to accelerate development and reduce overhead.',
        'Implemented and optimized CI/CD pipelines to streamline daily deployments.',
        'Automated backup processes and developed robust disaster recovery plans to ensure data integrity.',
        'Configured observability tools, application monitoring, and incident response procedures.',
        'Achieved 99.99% SLA uptime.',
        'Implemented API integrations with third-party services.',
      ],
      [
        'Launched a new product to market in less than 3 months:',
        'Conducted requirements analysis to define project scope.',
        'Led and managed a cross-functional team to define, design, and ship new features.',
        'Planned work using agile methodologies.',
        'Orchestrated backlog management as both product owner and project manager.',
        'Collaborated with executives and stakeholders to define the product roadmap.',
        'Facilitated communication with business partners and fulfillment centers.',
        'Gathered and analyzed user feedback to improve the product.',
        'Leveraged metrics and A/B testing to create analytics dashboards.',
        'Optimized user retention and product conversion to drive growth and engagement.',
      ]
    ]
  },
  {
    title: 'VP of Technology / Lead Full Stack Engineer',
    company: 'Benztown Branding USA - Leading radio imaging company',
    location: 'Glendale, CA / Remote',
    startDate: 'Mar 2019',
    endDate: 'Jun 2024',
    description: '',
    achievements: [
        [
        'Led the development of new products:',
        'Created a SaaS platform for radio imaging production.',
        'Drove the development of new features through collaboration with a cross-functional team.',
        'Advised leadership and key stakeholders in developing the strategic direction of the product.',
        'Managed a team of developers and designers.',
        'Improved project delivery speed by 30%.',
        ],
        [
        'Improved reliability:',
        'Designed and provisioned Kubernetes infrastructure on AWS using Terraform.',
        'Utilized Infrastructure as Code tools such as ArgoCD GitOps, Helm, and Kustomize.',
        'Set up fully automated CI/CD pipelines.',
        'Integrated observability solutions and monitoring frameworks, and established incident response workflows.',
        'Automated backups and disaster recovery plans for databases, volumes, and Kubernetes resources.',
        'Improved uptime to 99.999% for all services over two years.',
        ],
        [
        'Created a full-stack application for the company\'s flagship product:',
        'Used Next.js, TypeScript, React, and Redux for the frontend and Ruby on Rails, PostgreSQL, Redis, Sidekiq, and Elasticsearch for the backend.',
        'Maintained high test coverage with Jest, React Testing Library, RSpec, and Capybara.',
        ],
        [
        'Improved security:',
        'Implemented static code analyzers and automated dependency checks.',
        'Ensured complete environment separation.',
        'Replaced custom authentication systems with industry-standard solutions.',
        'Decreased security incidents by 90% after implementing new protocols.',
        ],
        [
        'Developed AI-powered products:',
        'Implemented a similarity audio search.',
        'Developed an AI-powered voice generation application for radio imaging.',
        'Trained an AI audio classification model for music genres.'
        ],
        [
        'Maintained and modernized a legacy 13-year-old Ruby on Rails application.',
        'Optimized performance by introducing caching, background jobs, and database optimizations.',
        'Upgraded a Rails 4 application to Rails 7.',
        'Updated outdated dependencies.',
        'Eliminated unused features and their dependencies.',
        'Gradually refactored legacy code to enhance maintainability and testability.',
        ]
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
      ['Provided mentoring to junior developers for skill development.'],
      ['Created and maintained Ruby on Rails and React applications.'],
      ['Conducted code reviews and pair programming sessions following best practices.'],
      ['Managed a team of seven developers, providing mentorship, supervising development goals, and evaluating performance.'],
      ['Led the development of small, medium, and large-scale projects.'],
      ['Coordinated the recruitment process for a department of 200 developers.'],
      ['Spoke at company meetups, organized internal hackathons, and coached attendees in Ruby on Rails workshops.'],
      ['Collaborated with cross-functional teams to define, design, and ship new features.'],
      ['Consulted with clients during scoping sessions, project workshops, and technical project reviews.'],
      ['Consulted on company-wide policies with leadership and executives.'],
      ['Mentored 9 junior developers who advanced to senior roles.'],
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
