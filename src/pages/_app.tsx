import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout, SEO } from '@/components'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize(String(process.env.NEXT_PUBLIC_ANALYTICS_ID))
    ReactGA.pageview(window.location.pathname + window.location.search)
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
