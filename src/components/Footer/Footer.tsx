import { IBM_Plex_Mono } from 'next/font/google'
import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const Footer: React.FC = () => {
  return (
    <footer
      className={`footer footer-center p-10 bg-gray-900 text-white ${ibm.className}`}
    >
      <div className="flex w-full py-24">
        <div className="w-2/3 flex flex-col items-start gap-4">
          <h3 className="text-6xl font-bold">Lets work togheder</h3>
          <p>Let's work togrther to build something</p>

          <button className="btn btn-neutral">Say Helo</button>
        </div>
        <div className="w-1/3 flex flex-col items-start">
          <div className="flex gap-2">
            <a href="#">GitHub</a>
            <span>\</span>
            <a href="#">Linkedin</a>
            <span>\</span>
            <a href="#">Instagram</a>
          </div>
          <p>paulooliveirtadev@gmail.com</p>
        </div>
      </div>
      <div className="flex gap-2">
        <p>PH Oliveira</p>
        <Link href={'/'}>
          <GithubLogo size={40} />
        </Link>
        <Link href={'/'}>
          <LinkedinLogo size={40} />
        </Link>
        <Link href={'/'}>
          <InstagramLogo size={40} />
        </Link>
      </div>
    </footer>
  )
}

export { Footer }
