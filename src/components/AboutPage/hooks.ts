import { map } from 'lodash'
import { useEffect, useMemo } from 'react'
import { steps, webDevSkills, otherSkills } from './constants'
import { useRedirect } from '@/hooks'
import { Skill } from '@/types'

const useAboutPage = () => {
  const { redirectHome } = useRedirect()

  useEffect(() => {
    redirectHome()
  }, [redirectHome])

  const getSteps = useMemo(
    () => map(steps.ids, (id) => steps.entities[id]),
    [steps]
  )

  const getWebSkills = useMemo(
    () => map(webDevSkills.ids, (id) => webDevSkills.entities[id]),
    [webDevSkills]
  ) as Skill[]

  const getOtherSkills = useMemo(
    () => map(otherSkills.ids, (id) => otherSkills.entities[id]),
    [otherSkills]
  ) as Skill[]

  return { getSteps, getOtherSkills, getWebSkills }
}

export default useAboutPage
