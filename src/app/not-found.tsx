import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-2/3 max-w-lg">
        <Image
          src="/static/404.webp"
          alt="404 image"
          width={400}
          height={200}
        />
      </div>
      <p className="text-gray-600 text-center my-8 sm:text-lg md:text-xl lg:text-2xl">
        The page you are looking for could not be found.
      </p>
      <Link href="/">
        <button className="btn btn-gray-900">Go back home</button>
      </Link>
    </div>
  )
}
