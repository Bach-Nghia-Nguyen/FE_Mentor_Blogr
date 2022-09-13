import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Blogr LP</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
