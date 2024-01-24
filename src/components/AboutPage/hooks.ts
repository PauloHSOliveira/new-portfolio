import { useCallback, useMemo } from 'react'

import { map, uniqueId } from 'lodash'

import { Skill, Steps } from '@/types'

import { skills, skills2, steps } from './constants'

const useAboutPage = () => {
  const buildData = useCallback(
    (data: any[]) => map(data, (item) => ({ ...item, id: uniqueId() })),
    [],
  )

  const getSteps = useMemo(() => buildData(steps), [steps]) as Steps[]
  const getSkills1 = useMemo(() => buildData(skills), [skills]) as Skill[]
  const getSkills2 = useMemo(() => buildData(skills2), [skills2]) as Skill[]

  return { getSteps, getSkills1, getSkills2 }
}

export default useAboutPage
