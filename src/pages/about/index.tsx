import { GetLayout } from '@/interfaces/global'
import { Layout } from '@/components'
import AboutPage from '@/components/AboutPage'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

const About = () => {
  return <AboutPage />
}

About.getLayout = getLayout

export default About
