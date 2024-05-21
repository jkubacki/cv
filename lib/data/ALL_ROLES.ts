import { IRole } from '@/components/sections/Experience/Role/Role';

export const ROLES: IRole[] = [
  {
    title: 'VP of Technology / Lead Full Stack Engineer',
    company: 'Benztown Branding USA - leading radio imaging company',
    location: 'Glendale, CA / Remote',
    startDate: 'Mar 2019',
    endDate: 'Present',
    description: 'As the VP of Technology, I assumed responsibility for all technical aspects of the company, including the development of new products, maintenance of existing products, and management of the infrastructure.',
    achievements: [
      [
        'Improved reliability:',
        'Created Kubernetes infrastructure for all company services.',
        'Set up fully automated CI/CD pipelines.',
        'Implemented monitoring and alerting for all services using Prometheus Stack, error tracker, and uptime monitoring.',
        'Established backups and disaster recovery plans for databases, volumes, and Kubernetes resources.',
        'Achieved 99.999% uptime for all services over a span of two years.',
        'Utilized Infrastructure as Code tools such as ArgoCD GitOps, Helm, and Kustomize.',
      ],
      [
        'Improved security:',
        'Implemented static code analyzers and automated dependency checks.',
        'Ensured no credentials are stored in the codebase.',
        'Ensured complete separation between environments.',
        'Migrated the custom authentication system to Keycloak SSO and enhanced the password hashing algorithm.',
        'Enforced 2FA across the company.',
        'Enforced secure password management.',
        'Implemented proper IAM roles and permissions enforcement.',
      ],
      [
        'Developed AI powered products for the radio industry:',
        'Implemented similarity audio search',
        'Developed AI powered voice generation application for radio imaging',
        'Trained AI audio classification model for genres and keywords.',
      ],
      [
        'Created a frontend application for the company\'s flagship product.',
        'Utilized Next.js and TypeScript with React for the frontend, Ruby on Rails for the API',
        'Developed a highly maintainable complex application using Redux, Redux-Saga, and other libraries',
        'Conducted testing using Jest, React Testing Library, and Playwright.',
      ],
      [
        'Maintained and improved a 13-year-old Ruby on Rails backend application.',
        'Enhanced performance by optimizing SQL queries on database tables containing millions of rows.',
        'Upgraded a Rails 4 application to the latest Rails 7 version.',
        'Updated dependencies that were outdated for several years.',
        'Eliminated unused features and their dependencies.',
        'Refactored legacy code to enhance maintainability and testability.',
        'Significantly increased test coverage by writing meaningful unit and integration tests.',
        'Implemented a search engine for audio files, users, logs, and other resources using Elasticsearch.',
      ],
      [ 
        'Automated administrative tasks:',
        'Automated billing and invoicing using the Stripe API.',
        'Automated audio management tasks, including audio processing, signal splitting, and metadata extraction.',
        'Utilized AI for generating descriptions for audio files.',
        'Implemented data exporting tools for analytics and reporting purposes.',
      ]
    ]
  },
  {
    title: 'Technical Team Leader',
    company: 'Netguru - a software house',
    location: 'Remote',
    startDate: 'Sept 2017',
    endDate: 'Mar 2019',
    description: 'During my time as a Team Leader, I led multiple technical projects. I managed teams of developers and consulted with clients. Additionally, I mentored less experienced colleagues in my role as a mid-level manager.',
    achievements: [
      ['Led the development of small, medium, and large-scale projects',],
      ['Conducted code reviews and pair programming sessions to maintain high standards in the projects.'],
      ['Created products from scratch, maintained, and extended mature applications.'],
      ['Developed APIs for single-page applications (SPAs) and maintained Rails view projects.'],
      ['Managed a team of seven developers as a leader (manager), providing mentorship, supervising development goals and careers, and evaluating their performance and skills.'],
      ['Consulted on company-wide policies with leaders and executives.'],
      ['Coordinated the recruitment process in a department of 90 developers, automating manual steps, unifying requirements and feedback processes, introducing recruitment tasks, and conducting interviews for junior, regular, and senior positions.'],
      ['Spoke at company meetups, organized internal hackathons, and coached attendees in Ruby on Rails workshops.'],
      ['Consulted with clients during scoping sessions, project workshops, and technical project reviews.'],
      ['Administered Kubernetes clusters']
    ]
  },
  {
    title: 'Senior Ruby on Rails Developer',
    company: 'Netguru - software house',
    location: 'Remote',
    startDate: 'Jan 2015',
    endDate: 'Sept 2017',
    description: 'As a Senior Ruby on Rails Developer, I led Ruby on Rails projects, managed teams of RoR developers, and consulted with clients.',
    achievements: [
      ['Led development in 4 projects.',],
      ['Conducted recruitment interviews ranging from junior to senior levels.'],
    ]
  },
  {
    title: 'Ruby on Rails Developer',
    company: 'E-price - e-commerce company',
    location: 'Remote',
    startDate: 'Dec 2013',
    endDate: 'Jan 2015',
    description: 'Built e-commerce CRM software managing sales via api integrations (SOAP, REST, OAUTH).',
    achievements: [
    ]
  },
  {
    title: 'PHP Developer',
    company: 'E-price - e-commerce company',
    location: 'Remote',
    startDate: 'Sep 2010',
    endDate: 'Dec 2013',
    description: 'Developed and maintained e-commerce software.',
    achievements: [
      ['Maintained an e-commerce store.'],
      ['Integrated products with online auction services and e-stores.'],
      ['Built an invoicing system.'],
      ['Developed software for managing Points of Sales.'],
      ['Created a warehouse management web application.'],
      ['Developed an admin panel for bulk product editing.'],
      ['Configured and administered VPS servers.'],
    ]
  },
]
