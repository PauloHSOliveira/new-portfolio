import { IBM_Plex_Mono } from 'next/font/google'
import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const Footer: React.FC = () => {
  return (
    <footer
      className={`footer footer-center p-10 bg-gray-900 text-white ${ibm.className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-6xl font-bold">Let's work together</h3>
          <p>Let's work together to build something</p>

          <button className="btn btn-neutral">Say Hello</button>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-2">
            <Link href="https://github.com/PauloHSOliveira">GitHub</Link>
            <span>\</span>
            <Link href="https://www.linkedin.com/in/paulo-oliveira-ph/">
              Linkedin
            </Link>
            <span>\</span>
            <Link href="#">Instagram</Link>
          </div>
          <Link href="mail:contato@pholiveira.dev">contato@pholiveira.dev</Link>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p>PH Oliveira</p>
          <div className="flex gap-2">
            <Link href={'https://github.com/PauloHSOliveira'}>
              <GithubLogo size={40} />
            </Link>
            <Link href={'https://www.linkedin.com/in/paulo-oliveira-ph/'}>
              <LinkedinLogo size={40} />
            </Link>
            <Link href={'https://www.instagram.com/pholiveira.eth/'}>
              <InstagramLogo size={40} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
