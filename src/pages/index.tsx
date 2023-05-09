import { Projects, TopHomePage } from '@/components'

export default function Home() {
  return (
    <>
      <TopHomePage />
      <div className="p-4 sm:p-6 lg:p-8 w-full">
        <Projects />
      </div>
    </>
  )
}
