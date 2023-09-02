import { SkillsProps } from '@/types'
import { map } from 'lodash'

const SkillsList = ({
  title,
  subtitle1,
  subtitle2,
  skills1,
  skills2,
}: SkillsProps) => {
  return (
    <div className="bg-white p-8 flex flex-col text-black">
      <h2 className="text-5xl">{title}</h2>
      <div className="flex-grow mt-4">
        <h3 className="text-xl">{subtitle1}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {map(skills1, (skill) => (
            <div
              className="bg-gray-100 shadow-lg rounded-lg p-4 flex items-center"
              key={skill.name}
            >
              <div className="mr-2">{skill.icon}</div>
              <span className="whitespace-nowrap break-words">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <h3 className="text-2xl">{subtitle2}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {map(skills2, (skill) => (
            <div
              className="bg-gray-100 shadow-lg rounded-lg p-4 flex items-center"
              key={skill.name}
            >
              <div className="mr-2">{skill.icon}</div>
              <span className="whitespace-nowrap break-words">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsList
