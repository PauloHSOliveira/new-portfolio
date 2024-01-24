import { SkillsProps } from '@/types'
import SkillsComponent from './SkillsComponent'
import { memo } from 'react'

const SkillsList = memo(({ title, subtitle1, subtitle2, skills1, skills2 }: SkillsProps) => {
  return (
    <div className='bg-white p-8 flex flex-col text-black'>
      <h2 className='text-5xl'>{title}</h2>
      <div className='flex-grow mt-4'>
        <SkillsComponent skills={skills1} title={subtitle1} />
        <hr className='my-4' />
        <SkillsComponent skills={skills2} title={subtitle2} />
      </div>
    </div>
  )
})

export default SkillsList
