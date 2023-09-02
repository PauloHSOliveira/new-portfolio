import { GetLayout } from '@/interfaces/global'
import { Layout, ContactPage } from '@/components'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

function Contact() {
  return <ContactPage />
}

Contact.getLayout = getLayout

export default Contact
