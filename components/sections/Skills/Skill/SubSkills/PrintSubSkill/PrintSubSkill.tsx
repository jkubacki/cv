import { sinceToString } from '@/lib/sinceToString';
import { sinceToYears } from '@/lib/sinceToYears';
import { ISkill } from '@/lib/types/ISkill';

export default function PrintSubSkill({ skill }: { skill: ISkill}) {
  const years = sinceToYears(skill.since)
  const yearsOfExperience = sinceToString(skill.since)

  return (
    <div className="flex flex-col gap-1">
      <div className='text-sm'>
        <span className='font-bold'>{skill.name}</span>
        { years !== 0 && <span> - {yearsOfExperience}</span>}
      </div>
      <div className='text-sm'>
        {skill.subSkills && skill.subSkills.map((subSkill, index) => subSkill.name).join(', ') }
      </div>
    </div>
  )
}
