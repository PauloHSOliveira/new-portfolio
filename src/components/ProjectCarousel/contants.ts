import { Projects } from '@/types'

const projects: Projects = {
  ids: ['0', '1', '2'],
  entities: {
    0: {
      name: 'PROJECT 1',
      image: '/static/developer.webp',
      description: 'This is a description for project',
    },
    1: {
      name: 'PROJECT 2',
      image: '/static/meeting.webp',
      description: 'This is a description for project',
    },
    2: {
      name: 'PROJECT 3',
      image: '/static/404.webp',
      description: 'This is a description for project',
    },
  },
}

export { projects }
