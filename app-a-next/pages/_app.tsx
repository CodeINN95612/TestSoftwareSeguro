import { UserProvider } from "@auth0/nextjs-auth0/client"

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/layout/Layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Layout>
  )
}
