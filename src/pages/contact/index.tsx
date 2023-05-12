import { GetLayout } from '@/interfaces/global'
import { Layout, ContactForm } from '@/components'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

function Contact() {
  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="text-gray-600 mb-8">
        Do you fancy saying hi to me or you want to get started with your
        project and you need my help? Feel free to contact me.
      </p>
      <ContactForm />
    </div>
  )
}

Contact.getLayout = getLayout

export default Contact
