import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { ISkill } from '@/lib/types/ISkill';

export default function SubSkillTag({ skill }: { skill: ISkill }) {

  const badge = <Badge variant="outline" className='m-0.5'>{skill.name}</Badge>

  if (!skill.description) return badge

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent>
          { skill.description }
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
