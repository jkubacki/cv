import { IRole } from '@/components/sections/Experience/Role/Role';

export const ROLES: IRole[] = [
  {
    title: 'VP of Technology / Lead Full Stack Engineer',
    company: 'Benztown Branding USA - leading radio imaging company',
    location: 'Glendale, CA / Remote',
    startDate: 'Mar 2019',
    endDate: 'Present',
    description: 'As the VP of Technology, I assumed responsibility for overseeing all technical operations within the company, including managing the engineering team, spearheading the development of new products, maintaining existing products, and overseeing infrastructure architecture.',
    achievements: [
      [
        'Led the development of a new products:',
        'Created a SaaS platform for radio imaging production.',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Consulted with executives and stakeholders to define the product roadmap.',
        'Managed a team of developers and designers.',
      ],
      [
        'Improved reliability:',
        'Created Kubernetes infrastructure on AWS using Terraform.',
        'Utilized Infrastructure as Code tools such as ArgoCD GitOps, Helm, and Kustomize.',
        'Set up fully automated CI/CD pipelines.',
        'Implemented observability tools, application monitoring, and incident response procedures.',
        'Automated backups and disaster recovery plans for databases, volumes, and Kubernetes resources.',
        'Achieved 99.999% uptime for all services over a span of two years.',
      ],
      [
        'Created a full-stack application for the company\'s flagship product.',
        'Utilized Next.js, TypeScript, React and Redux to create a frontend applicaiton.',
        'Used Ruby on Rails, PostgreSQL, Redis, Sidekiq and Elasticsearch for the REST API backend.',
        'Maintained high test coverage with Jest, React Testing Library, RSpec, and Capybara.',
      ],
      [
        'Improved security:',
        'Implemented static code analyzers and automated dependency checks.',
        'Ensured complete environment separation.',
        'Replaced custom authentication systems with industry-standard solutions.',
      ],
      [
        'Developed AI powered products for the radio industry:',
        'Implemented similarity audio search',
        'Developed AI powered voice generation application for radio imaging',
        'Trained AI audio classification model for music genres.',
      ],
      [
        'Maintained and improved a 13-year-old Ruby on Rails backend application.',
        'Optimized performance introducing caching, background jobs, and database optimizations.',
        'Upgraded a Rails 4 application to the latest Rails 7 version.',
        'Updated dependencies that were outdated for several years.',
        'Eliminated unused features and their dependencies.',
        'Gradually refactored legacy code to enhance maintainability and testability.',
      ],
    ]
  },
  {
    title: 'Technical Team Leader',
    company: 'Netguru - Ruby on Rails focused software house',
    location: 'Remote',
    startDate: 'Sept 2017',
    endDate: 'Mar 2019',
    description: 'During my time as a Team Leader, I led multiple technical projects. I managed teams of developers and consulted with clients. Additionally, I mentored less experienced colleagues in my role as a mid-level manager.',
    achievements: [
      ['Created and maintained Ruby on Rails and React applications.',],
      ['Led the development of small, medium, and large-scale projects',],
      ['Collaborated with cross-functional teams to define, design, and ship new features.',],
      ['Conducted code reviews and pair programming sessions to maintain high standards in the projects.'],
      ['Created products from scratch, maintained, and extended mature applications.'],
      ['Managed a team of seven developers as a leader (manager), providing mentorship, supervising development goals and careers, and evaluating their performance and skills.'],
      ['Consulted on company-wide policies with other leaders and executives.'],
      ['Coordinated the recruitment process in a department of 90 developers, automating manual steps, unifying requirements and feedback processes, introducing recruitment tasks, and conducting interviews for junior, regular, and senior positions.'],
      ['Spoke at company meetups, organized internal hackathons, and coached attendees in Ruby on Rails workshops.'],
      ['Consulted with clients during scoping sessions, project workshops, and technical project reviews.'],
    ]
  },
  {
    title: 'Senior Ruby on Rails Developer',
    company: 'Netguru - Ruby on Rails focused software house',
    location: 'Remote',
    startDate: 'Jan 2015',
    endDate: 'Sept 2017',
    description: 'As a Senior Ruby on Rails Developer, I led Ruby on Rails projects, managed teams of RoR developers, and consulted with clients.',
    achievements: [
      ['Led development in Ruby on Rails projects.',],
      ['Conducted recruitment interviews ranging from junior to senior levels.'],
    ]
  },
  {
    title: 'Ruby on Rails Developer',
    company: 'E-price - e-commerce company',
    location: 'Remote',
    startDate: 'Dec 2013',
    endDate: 'Jan 2015',
    description: 'Built e-commerce ERP software managing sales via api integrations (SOAP, REST, OAUTH).',
    achievements: [
    ]
  },
  {
    title: 'PHP Developer',
    company: 'E-price - e-commerce company',
    location: 'Remote',
    startDate: 'Sep 2010',
    endDate: 'Dec 2013',
    description: 'Developed and maintained ERP e-commerce software.',
    achievements: [
    ]
  },
]
