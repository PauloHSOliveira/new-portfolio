import { Layout } from '@/components'
import HomePage from '@/components/HomePage'

const getLayout = (page: any) => {
  return <Layout>{page}</Layout>
}

function Home() {
  return <HomePage />
}

Home.getLayout = getLayout

export default Home
