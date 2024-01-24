import { Skill } from '@/types'

import SkillComponent from './SkillComponent'

const SkillsComponent = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <div>
      <h3 className='text-xl'>{title}</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
        {skills.map((skill) => (
          <SkillComponent key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillsComponent
