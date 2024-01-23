import { Layout } from '@/components'
import { GetLayout } from '@/interfaces/global'
import { BlogGrid } from '@/modules/blog/components'
import { BlogPost } from '@/types'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout containSearch={true}>{page}</Layout>
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Tips for a Productive Home Office',
    description: 'This is a great productive productive productive',
    date: new Date('2024-01-22'),
    likes: 80,
    views: 5000,
    slug: '10-tips-productive-home-office',
    tags: ['productivity', 'remote work'],
    categories: ['Work', 'Remote'],
    author: 'John Doe',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    timeToRead: 8,
  },
  {
    id: '2',
    title: 'Exploring Nature: A Weekend Adventure',
    description: 'This is a great productive productive productive',
    date: new Date('2024-01-22'),
    likes: 120,
    views: 3000,
    slug: 'exploring-nature-weekend-adventure',
    tags: ['nature', 'travel'],
    categories: ['Adventure', 'Travel'],
    author: 'Jane Smith',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    timeToRead: 6,
  },
  {
    id: '3',
    title: 'Cooking Masterclass: Perfecting Pasta',
    description: 'This is a great productive',
    date: new Date('2024-01-10'),
    likes: 150,
    views: 7000,
    slug: 'cooking-masterclass-perfecting-pasta',
    tags: ['cooking', 'food'],
    categories: ['Food', 'Cooking'],
    author: 'Alice Johnson',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    timeToRead: 10,
  },
  {
    id: '4',
    title: 'Tech Trends: Future of Artificial Intelligence',
    date: new Date('2024-01-05'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    likes: 200,
    views: 10000,
    slug: 'tech-trends-future-ai',
    tags: ['technology', 'AI'],
    categories: ['Technology', 'AI'],
    author: 'Bob Williams',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    timeToRead: 12,
  },
  // Adicione mais postagens conforme necessário
]

function Blog() {
  return (
    <div className='w-full p-4 mt-24 md:p-24 '>
      <BlogGrid posts={blogPosts} />
    </div>
  )
}

Blog.getLayout = getLayout

export default Blog
