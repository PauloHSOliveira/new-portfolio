import {
  Projects,
  TopHomePage,
  Layout,
  ContactForm,
  UnderConstruction,
} from '@/components'

const underContruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION
const getLayout = (page: any) => {
  return <Layout>{page}</Layout>
}

function Home() {
  return (
    <>
      {underContruction ? (
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
