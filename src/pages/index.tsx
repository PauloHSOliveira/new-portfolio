import { Inter } from 'next/font/google'
import { Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-neutral`}
      >
        <div className="w-2/4">
          <div className="text-gray-900 text-5xl">
            software engineer, designer & business strategist
          </div>
          <div className="text-gray-900">
            Hi i'm Paulo Oliveira. A Passionate software engineer, designer and
            business strategist based in Brazil.
          </div>
          <button className="btn btn-gray-900">See my works</button>
        </div>
      </main>
    </>
  )
}
