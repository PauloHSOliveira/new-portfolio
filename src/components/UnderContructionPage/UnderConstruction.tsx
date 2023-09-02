import { ClimbingBoxLoader } from 'react-spinners'

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ClimbingBoxLoader />

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        We're building something grand!
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Stay tuned for exciting updates and new features.
      </p>
    </div>
  )
}

export default UnderConstruction
