import { useRedirect } from '@/hooks'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo } from 'react'
import { projects } from './contants'
import { map } from 'lodash'
import { FaArrowRight } from 'react-icons/fa'

const useProjectCarousel = () => {
  const router = useRouter()
  const { redirectHome } = useRedirect()

  useEffect(() => {
    redirectHome()
  }, [redirectHome])

  const getProjects = useMemo(
    () => map(projects.ids, (id) => projects.entities[id]),
    [projects],
  )

  const handleProjectClick = useCallback((projectName: string) => {
    router.push(`/projects/${projectName}`)
  }, [])

  const renderProjects = useCallback(() => {
    if (!getProjects) return null

    return map(getProjects, (project) => (
      <div
        key={project.name}
        className="h-full w-full flex justify-start items-center"
      >
        <div
          className="h-full w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75">
            <div className="flex flex-col h-full items-start justify-end p-10 md:p-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {project.name}
              </h1>
              <p className="mt-3 sm:mt-5 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-lg">
                {project.description}
              </p>
              <div className="mt-8 md:mt-12">
                <button
                  onClick={() => handleProjectClick(project.name)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  View Project
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }, [getProjects])

  return { renderProjects, getProjects, handleProjectClick }
}

export default useProjectCarousel
