import { ReactNode } from 'react'

type Skill = {
  name: string
  icon: ReactNode
}

interface SkillsProps {
  title: string
  subtitle1: string
  subtitle2: string
  skills1: Skill[]
  skills2: Skill[]
}

const SkillsList = ({
  title,
  subtitle1,
  subtitle2,
  skills1,
  skills2,
}: SkillsProps) => {
  return (
    <div className="bg-white w-screen p-8 flex flex-col">
      <h2 className="text-5xl">{title}</h2>
      <div className="flex-grow mt-4">
        <h3 className="text-xl">{subtitle1}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {skills1.map((skill) => (
            <div
              className="bg-gray-100 shadow-lg rounded-lg p-4 flex items-center w-full"
              key={skill.name}
            >
              <div className="mr-2">{skill.icon}</div>
              <span className="whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <h3 className="text-2xl">{subtitle2}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {skills2.map((skill) => (
            <div
              className="bg-gray-100 shadow-lg rounded-lg p-4 flex items-center w-full"
              key={skill.name}
            >
              <div className="mr-2">{skill.icon}</div>
              <span className="whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { SkillsList }
