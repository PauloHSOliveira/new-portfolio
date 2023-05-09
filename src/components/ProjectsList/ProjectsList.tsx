import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/router'

const projects = [
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

const Projects = () => {
  const router = useRouter()

  const handleProjectClick = (projectName: string) => {
    router.push(`/projects/${projectName}`)
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {projects.map((project) => (
        <div key={project.name} className="bg-gray-100 shadow-lg h-96 w-full">
          <div className="h-full w-full flex justify-between">
            <div className="p-8 w-1/2">
              <h2 className="text-4xl font-bold text-gray-900">
                {project.name}
              </h2>
              <div className="text-lg text-gray-500">{project.description}</div>
            </div>
            <div
              className="relative h-full w-1/2"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              onClick={() => handleProjectClick(project.name)}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="btn-gray-900 btn border-none p-0 px-4 rounded-lg bg-gray-100 hover:bg-gray-50 shadow-lg">
                  View Project <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { Projects }
