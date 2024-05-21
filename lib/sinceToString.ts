import { sinceToYears } from '@/lib/sinceToYears'

export function sinceToString(since?: number) {
  const experience = sinceToYears(since)
  const years = experience === 1 ? 'year' : 'years'
  return experience > 0 ? `${experience} ${years} of experience` : ''
}
