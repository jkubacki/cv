'use client'

import { Progress } from '@/components/ui/progress';
import { ISkill } from '@/lib/types/ISkill';
import { useEffect, useState } from 'react';

export default function CoreSkill({ skill }: { skill: ISkill}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(skill.level ?? 0), 100)
    return () => clearTimeout(timer)
  }, [skill.level])

  return (
    <div className="CoreSkill w-full md:w-[45%] lg:w-[22%] print:w-[22%] mb-4">
      <a href={`#${skill.name}`}>
        <div>{skill.name}</div>
        <Progress value={progress} />
      </a>
    </div>
  )
}
