import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

const MobileMenu = ({
  isOpen,
  handleMenu,
}: {
  isOpen: boolean
  handleMenu: () => void
}) => {
  const menuStyle = isOpen
    ? `fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-90 transition-opacity duration-500 ease-in-out ${ibm.className}`
    : 'hidden'

  return (
    <div className={menuStyle}>
      <div className="absolute top-0 right-0 mt-4 mr-4">
        <button
          className="text-white hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          onClick={handleMenu}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path
              fillRule="evenodd"
              d="M2.29289 0.292893C2.65338 -0.0675907 3.22061 -0.0953203 3.6129 0.154701L3.70711 0.207107L12 8.5L20.2929 0.207107C20.6852 -0.0429147 21.2524 -0.0151852 21.6129 0.345703C21.9734 0.706591 22.0011 1.27382 21.7071 1.66421L21.6129 1.76777L13.3205 10.0602L21.6129 18.3526C22.0011 18.743 22.0011 19.3762 21.6129 19.7666C21.2524 20.1275 20.6852 20.1008 20.2929 19.8453L20.1987 19.7919L12 11.5L3.70711 19.7929C3.31658 20.1583 2.68342 20.1583 2.29289 19.7929C1.90237 19.4275 1.90237 18.7943 2.29289 18.4289L2.3871 18.3253L10.6795 10.0329L2.3871 1.74058C2.11802 1.4715 2 1.08944 2 0.707107C2 0.324774 2.11802 -0.0572869 2.3871 0.211785L2.29289 0.292893Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="text-white">
          <li className="py-4" onClick={handleMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className="py-4" onClick={handleMenu}>
            <Link href="/about">About</Link>
          </li>
          <li className="py-4" onClick={handleMenu}>
            <Link href="/works">Works</Link>
          </li>
          <li className="py-4" onClick={handleMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { MobileMenu }
