import { memo, useEffect } from 'react'
import { ContactForm } from '../forms'
import { useRedirect } from '@/hooks'

const ContactPage = memo(() => {
  const { redirectHome } = useRedirect()

  useEffect(() => redirectHome(), [redirectHome])

  return (
    <div className="max-w-4xl mx-auto py-24 px-4 md:px-4 md:my-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
        Get in Touch
      </h1>
      <p className="text-gray-600 text-sm md:text-lg mb-8">
        Do you fancy saying hi to me or you want to get started with your
        project and you need my help? Feel free to contact me.
      </p>
      <ContactForm />
    </div>
  )
})

export default ContactPage
