import { Projects, TopHomePage, Layout, UnderConstruction } from '@/components'
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
          <div className="px-4 py-12 sm:p-6 lg:p-8 w-full">
            <Projects />
          </div>
        </>
      )}
    </>
  )
}

Home.getLayout = getLayout
export default Home
