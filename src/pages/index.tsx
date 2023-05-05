import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-full sm:w-2/5 flex flex-col gap-3 items-center sm:items-start text-center sm:text-left">
        <div className="text-gray-900 text-3xl sm:text-5xl font-bold">
          software engineer, designer &amp; business strategist
        </div>
        <div className="text-gray-900 mt-2">
          Hi i&apos;m Paulo Oliveira. A Passionate software engineer, designer
          and business strategist based in Brazil.
        </div>
        <button className="btn-gray-900 btn border-none p-0 px-4 rounded-lg bg-gray-100 shadow-lg">
          See my works <FaArrowRight className="ml-2" />
        </button>
      </div>
      <div className="relative w-full sm:w-1/3 flex flex-col gap-3 items-center sm:items-start">
        <Image
          src="/static/developer.webp"
          alt="404 image"
          width={400}
          height={200}
        />
      </div>
    </div>
  )
}
