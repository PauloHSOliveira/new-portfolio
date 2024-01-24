import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect } from 'react'

import { logEvent } from 'firebase/analytics'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

import { Layout, SEO } from '@/components'
import { analytics } from '@/config/firebase'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (analytics) {
        logEvent(analytics, 'screen_view', { screen_name: url } as never)
      }
    }

    // When the component is mounted, subscribe to router changes
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, analytics])

  const getLayout = (Component as any).getLayout || ((page: JSX.Element) => <Layout>{page}</Layout>)

  const renderComponent = () => getLayout(<Component {...pageProps} />)

  return (
    <>
      <SEO />
      <ToastContainer position='top-right' />
      {renderComponent()}
    </>
  )
}
