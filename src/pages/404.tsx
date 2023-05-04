import Link from 'next/link'

function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8 sm:text-6xl lg:text-7xl xl:text-8xl">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 text-center mb-8 sm:text-lg md:text-xl lg:text-2xl">
        The page you are looking for could not be found.
      </p>
      <Link href="/">
        <button className="btn btn-gray-900 ">Go back home</button>
      </Link>
    </div>
  )
}

export default Custom404
