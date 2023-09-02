import { memo } from 'react'

import { map } from 'lodash'
import useAboutPage from './hooks'

const Diagram = memo(() => {
  const { getSteps } = useAboutPage()

  return (
    <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
      {map(getSteps, (step, index) => (
        <div
          className="w-full flex flex-col justify-center items-center max-w-sm bg-white rounded-lg shadow-sm shadow-white p-8 my-4 h-52 text-black"
          key={index}
        >
          <div>{step.icon}</div>
          <p className="text-md mt-4">{step?.text}</p>
        </div>
      ))}
    </div>
  )
})

export default Diagram
