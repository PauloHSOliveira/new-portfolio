import React, { memo } from 'react'
import UnderConstruction from '../UnderContructionPage'
import TopHomePage from '../TopHomePage'
import { useRedirect } from '@/hooks'
import Projects from '../ProjectsList'

const HomePage = memo(() => {
  const { underConstruction } = useRedirect()

  return (
    <>
      {underConstruction ? (
        <UnderConstruction />
      ) : (
        <>
          <TopHomePage />
          <div className="px-4 py-12 sm:p-6 lg:p-8 w-full">
            <Projects />
          </div>
        </>
      )}
    </>
  )
})

export default HomePage
