import Image from 'next/image'

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/construction.png"
        alt="Under construction"
        width={200}
        height={200}
      />
      <h1 className="text-4xl font-bold mb-4 text-center">
        We are building our site!
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        But don't worry, it will be awesome when it's done!
      </p>
    </div>
  )
}

export { UnderConstruction }
