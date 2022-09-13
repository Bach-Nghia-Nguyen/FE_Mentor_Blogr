import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import illustrationLapDesktop from 'assets/images/illustration-laptop-desktop.svg'
import illustrationLaptopMobile from 'assets/images/illustration-laptop-mobile.svg'

function Hero4() {
  return (
    <Box
      as="section"
      width="100%"
      height={{ base: '900px', sm2: '650px', md: '800px', lg: '950px' }}
      position="relative"
      _before={{
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: { base: '50%', md: '100%' },
        bgImage: {
          base: `url(${illustrationLaptopMobile.src})`,
          md: `url(${illustrationLapDesktop.src})`,
        },
        bgSize: { base: '420px', md: '600px', lg: '750px', lg2: '850px', xl: '950px' },
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
        transform: { base: 'translate(0%)', md: 'translate(-36%)' },
      }}
    >
      <Flex
        position="absolute"
        zIndex="20"
        right="0"
        top={{ base: 'auto', md: '0' }}
        bottom={{ base: '0', md: 'auto' }}
        width={{ base: '100%', md: '50%' }}
        height={{ base: '50%', md: '100%' }}
        direction="column"
        textAlign={{ base: 'center', md: 'left' }}
        justifyContent={{ base: 'flex-start', md: 'center' }}
        paddingRight={{ base: '0', md: '100px' }}
      >
        <Box marginBottom="40px" padding={{ base: '0 15px', md: '0' }}>
          <Heading
            fontFamily="Overpass"
            fontSize="22px"
            paddingBottom={{ base: '5px', md: '20px' }}
            color="primary.veryDarkBlue"
          >
            Free, open, simple
          </Heading>
          <Text>
            Blogr is a free and open source applicatoin backed by a large community of helpful
            developers. It supports features such as code syntax highlighting, RSS feeds, social
            media integration, third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to learn.
          </Text>
        </Box>

        <Box marginTop={{ base: '0', md: '40px' }} padding={{ base: '0 15px', md: '0' }}>
          <Heading
            fontFamily="Overpass"
            fontSize="22px"
            paddingBottom={{ base: '5px', md: '20px' }}
            color="primary.veryDarkBlue"
          >
            Powerful tooling
          </Heading>
          <Text>
            Batteries included. We built a simple and straightforwar CLI tool that makes
            customization and deployment a breeze, but capable of producing even the most
            complicated sites.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero4
