import { GetLayout } from '@/interfaces/global'
import { Layout, AboutPage } from '@/components'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

const About = () => {
  return <AboutPage />
}

About.getLayout = getLayout

export default About
