import { GetLayout } from '@/interfaces/global'
import { Layout } from '@/components'
import ContactPage from '@/components/ContactPage'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

function Contact() {
  return <ContactPage />
}

Contact.getLayout = getLayout

export default Contact
