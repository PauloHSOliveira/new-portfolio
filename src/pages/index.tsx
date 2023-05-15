import { Projects, TopHomePage, UnderConstruction } from '@/components'

const underContruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION

export default function Home() {
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
        </>
      )}
    </>
  )
}
