import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout, SEO } from '@/components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    ReactGA.initialize(String(process.env.NEXT_PUBLIC_ANALITYCS_ID))

    const handleRouteChange = (url: string) => {
      ReactGA.set({ page: url })
      ReactGA.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Layout>
      <SEO
        title="PH OLIVEIRA DEV"
        description="Hi i'm Paulo Oliveira. A Passionate software engineer, designer and business strategist based in Brazil."
      />
      <Component {...pageProps} />
    </Layout>
  )
}
