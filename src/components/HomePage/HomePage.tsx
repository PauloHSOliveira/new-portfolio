import React, { memo } from 'react'

import { useRedirect } from '@/hooks'

import Projects from '../ProjectsList'
import TopHomePage from '../TopHomePage'
import UnderConstruction from '../UnderContructionPage'

const HomePage = memo(() => {
  const { underConstruction } = useRedirect()

  return (
    <>
      {underConstruction ? (
        <UnderConstruction />
      ) : (
        <>
          <TopHomePage />
          <div className='px-4 py-12 sm:p-6 lg:p-8 w-full'>
            <Projects />
          </div>
        </>
      )}
    </>
  )
})

export default HomePage
