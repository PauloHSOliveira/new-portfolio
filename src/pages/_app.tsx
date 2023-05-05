import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout, SEO } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
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
