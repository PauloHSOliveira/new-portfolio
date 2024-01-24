import { Skill } from '@/types'

const SkillComponent = ({ icon, name }: Skill) => {
  return (
    <div className='bg-gray-100 shadow-lg rounded-lg p-4 flex items-center'>
      <div className='mr-2'>{icon}</div>
      <span className='whitespace-nowrap break-words'>{name}</span>
    </div>
  )
}

export default SkillComponent
