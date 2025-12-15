import React, { ReactNode, memo } from 'react'

type TwoThirdsOneThirdProps = {
  text: ReactNode
  position?: 'left' | 'right'
  imagePath: string
}

const TwoThirdsOneThird = memo(
  ({ text, position = 'left', imagePath }: TwoThirdsOneThirdProps) => {
    const flexDir = position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
    return (
      <div className={`flex flex-col ${flexDir} p-4 md:p-12 w-full`}>
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={imagePath}
            alt="One Third"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-2/3 text-gray-900">{text}</div>
      </div>
    )
  },
)

export default TwoThirdsOneThird
