import {
  Projects,
  TopHomePage,
  Layout,
  ContactForm,
  UnderConstruction,
} from '@/components'
import { useRedirect } from '@/hooks'

const getLayout = (page: any) => {
  return <Layout>{page}</Layout>
}

function Home() {
  const { underConstruction } = useRedirect()
  return (
    <>
      {underConstruction ? (
        <UnderConstruction />
      ) : (
        <>
          <TopHomePage />
          <div className="p-4 sm:p-6 lg:p-8 w-full">
            <Projects />
          </div>
          <div className="p-4 sm:p-6 lg:p-8 w-full">
            <h1 className="text-5xl font-bold mb-8l">Get in Touch</h1>
            <div className="bg-white shadow-lg rounded-md p-4 sm:p-6 lg:p-8 h-full">
              <ContactForm />
            </div>
          </div>
        </>
      )}
    </>
  )
}

Home.getLayout = getLayout
export default Home
