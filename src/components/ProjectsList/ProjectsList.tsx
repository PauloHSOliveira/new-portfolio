const projects = [
  {
    name: 'Project 1',
    image: '/static/developer.webp',
  },
  {
    name: 'Project 2',
    image: '/static/developer.webp',
  },
  {
    name: 'Project 3',
    image: '/static/developer.webp',
  },
]

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {projects.map((project) => (
        <div key={project.name} className="bg-gray-100 shadow-lg h-96 w-full">
          <div className="h-full w-full flex justify-between">
            <div className="p-8 w-1/2">
              <h2 className="text-4xl font-bold text-gray-900">
                {project.name}
              </h2>
            </div>
            <div
              className="relative h-full w-1/2"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="btn btn-primary px-6 py-2 shadow-neumorphism right-0">
                  View Project
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
