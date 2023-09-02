import { Layout, HomePage } from '@/components'

const getLayout = (page: any) => {
  return <Layout>{page}</Layout>
}

function Home() {
  return <HomePage />
}

Home.getLayout = getLayout
export default Home
