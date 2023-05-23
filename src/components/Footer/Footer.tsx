import { IBM_Plex_Mono } from 'next/font/google'
import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const Footer: React.FC = () => {
  const router = useRouter()

  const handleClick = () => router.push('/contact')

  return (
    <footer
      className={`footer footer-center p-10 bg-black text-white ${ibm.className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-16">
        <div className="flex flex-col gap-8 justify-center">
          <h3 className="text-6xl font-bold">Let's work together</h3>
          <p>Let's work together to build something</p>

          <button className="btn btn-neutral" onClick={handleClick}>
            Say Hello
          </button>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-2">
            <Link href="https://github.com/PauloHSOliveira">GitHub</Link>
            <span>\</span>
            <Link href="https://www.linkedin.com/in/paulo-oliveira-ph/">
              Linkedin
            </Link>
            <span>\</span>
            <Link href="https://www.instagram.com/pholiveira.dev/">
              Instagram
            </Link>
          </div>
          <Link href="mailTo:contato@pholiveira.dev">
            contato@pholiveira.dev
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 p-4">
        <Image src="/static/me.webp" width={52} height={52} alt="PH Oliveira" />
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
        <p className="text-gray-500">&copy; PH Oliveira | pholiveira.dev</p>
      </div>
    </footer>
  )
}

export { Footer }
