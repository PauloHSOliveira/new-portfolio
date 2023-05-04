import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

interface HeaderProps {
  openMenu: () => void
}

const Header = ({ openMenu }: HeaderProps) => {
  return (
    <nav className={`bg-white ${ibm.className} fixed top-0 left-0 w-full`}>
      <div className="flex justify-between items-center px-4 py-3 md:px-8 lg:px-16 xl:px-24">
        <a className="text-xl font-bold">PH Oliveira</a>
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <input
          type="checkbox"
          className="hidden"
          id="menu-toggle"
          onClick={openMenu}
        />
        <div className="hidden lg:flex lg:items-center lg:w-auto" id="menu">
          <ul className="flex flex-col lg:flex-row list-none gap-4">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/work" className="nav-link">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { Header }
