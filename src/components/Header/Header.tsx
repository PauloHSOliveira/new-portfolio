import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

const Header: React.FC = () => {
  return (
    <div className={`navbar bg-neutral ${ibm.className}`}>
      <div className="flex-1">
        <a className="btn btn-gray-900 normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-gray-900">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Works</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { Header }
