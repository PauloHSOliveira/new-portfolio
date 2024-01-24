import { memo } from 'react'

import useProjectList from './hooks'

const Projects = memo(() => {
  const { renderProjects } = useProjectList()

  return <div className='w-full flex flex-col gap-4'>{renderProjects()}</div>
})

export default Projects
