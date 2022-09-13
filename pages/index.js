import Head from 'next/head'
import { Text, Box } from '@chakra-ui/react'
import Hero1 from 'components/Hero1'
import Hero2 from 'components/Hero2'
import Hero3 from 'components/Hero3'
import Hero4 from 'components/Hero4'

export default function Home() {
  return (
    <>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </>
  )
}
