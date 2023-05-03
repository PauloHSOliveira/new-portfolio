import { IBM_Plex_Mono } from 'next/font/google'
import { Header } from '@/components'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

export default function About() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-center ${ibm.className} bg-neutral`}
      >
        <div className="p-24">
          <div className="text-gray-900 text-5xl p-12">
            Iam a passionate front-end developer and ui/ux designer with a keen
            eye for details.
          </div>
          <div className="flex p-12 w-full">
            <div className="w-1/3"></div>
            <div className="w-2/3 text-gray-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>
        <div className="bg-gray-900 w-full h-96"></div>
        <div className="p-24">
          <div className="text-gray-900 text-5xl p-12">How i work</div>
          <div className="flex p-12 w-full">
            <div className="w-1/3"></div>
            <div className="w-2/3 text-gray-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>

        <div className="p-24">
          <div className="text-gray-900 text-5xl p-12">My Skills</div>
          <div className="flex p-12 w-full">
            <div className="w-1/3"></div>
            <div className="w-2/3 text-gray-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>

        <div className="bg-white w-full h-96 text-gray-900 justify-center flex items-center text-4xl p-24">
          "Choose a job you love and you will never have to work a day in your
          life"
        </div>
      </main>
    </>
  )
}
