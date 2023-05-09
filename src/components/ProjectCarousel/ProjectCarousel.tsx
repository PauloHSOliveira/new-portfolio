import { useRouter } from 'next/router'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { FaArrowRight } from 'react-icons/fa'

type Project = {
  name: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    name: 'EVO.ART',
    image: '/static/evo.png',
    description: 'This is a description for EVO.ART project',
  },
  {
    name: 'VIRL MARKETPLACE',
    image: '/static/virl.png',
    description: 'This is a description for VIRL MARKETPLACE project',
  },
  {
    name: 'MEMORIAN',
    image: '/static/memorian.png',
    description: 'This is a description for MEMORIAN project',
  },
]

const ProjectCarousel = () => {
  const router = useRouter()
  const handleProjectClick = (projectName: string) => {
    router.push(`/projects/${projectName}`)
  }

  return (
    <div className="h-screen w-screen">
      <AwesomeSlider>
        {projects.map((project) => (
          <div
            key={project.name}
            className="h-full w-full flex justify-start items-center"
          >
            <div
              className="h-full w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="h-full w-full bg-gray-900 bg-opacity-75 p-24">
                <div className="flex flex-col justify-start h-full">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    {project.name}
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={() => handleProjectClick(project.name)}
                      className="btn-gray-900 btn border-none p-0 px-4 rounded-lg bg-gray-100 hover:bg-gray-50 shadow-lg inline-flex items-center justify-center text-base font-medium text-gray-900 hover:text-gray-900"
                    >
                      View Project
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  )
}

export { ProjectCarousel }
