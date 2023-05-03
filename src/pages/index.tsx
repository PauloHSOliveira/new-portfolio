import { IBM_Plex_Mono } from 'next/font/google'
import { Header } from '@/components'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 ${ibm.className} bg-neutral`}
      >
        <div className="w-2/4">
          <div className="text-gray-900 text-5xl">
            software engineer, designer & business strategist
          </div>
          <div className="text-gray-900 mt-2">
            Hi i'm Paulo Oliveira. A Passionate software engineer, designer and
            business strategist based in Brazil.
          </div>
          <button className="btn-gray-900 btn">See my works</button>
        </div>
      </main>
    </>
  )
}
