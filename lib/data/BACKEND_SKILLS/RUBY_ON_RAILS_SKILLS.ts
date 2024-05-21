import { ISkill } from '@/lib/types/ISkill';

export const RUBY_ON_RAILS_SKILLS: ISkill = {
  name: 'Ruby on Rails',
  since: 2013,
  description: 'I have worked with Ruby on Rails since 2013, building and maintaining numerous applications. Including those with large databases where efficient SQL queries are crucial. My experience includes implementing APIs, admin panels, integrating APIs, and optimising high-traffic applications.',
  subSkills: [
    { name: 'Rails 7' },
    { name: 'Sidekiq', description: "I have implemented Sidekiq clusters handling hundreds of thousands of jobs a day." },
    { name: 'TDD' },
    { name: 'RSpec', description: "I write well-structured, easy-to-read and performant tests using contexts and abstractions." },
    { name: 'Capybara' },
    { name: 'Devise' },
    { name: 'Rails upgrades', description: "I am proficient in upgrading large projects to the latest major Rails versions. I have successfully completed this task multiple times. Most recently, I upgraded Rails 4 to Rails 7 with no regressions." },
    { name: 'Elasticsearch'},
    { name: 'Autorization systems' },
    { name: 'Performance profiling' },
    { name: 'Security auditing' },
  ]
}
