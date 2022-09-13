import { Text, Box, Heading } from '@chakra-ui/react'
import illustrationEditorDesktop from 'assets/images/illustration-editor-desktop.svg'
import illustrationEditorMobile from 'assets/images/illustration-editor-mobile.svg'

function Hero2() {
  return (
    <Box
      width="100%"
      position="relative"
      as="section"
      height={{ base: '1250px', sm2: '1200px', md: '700px', lg: '740px', lg2: '780px' }}
      overflow="hidden"
      _after={{
        content: `""`,
        position: 'absolute',
        bottom: { base: 'auto', md: 0 },
        top: { base: 0, md: 'auto' },
        right: 0,
        width: '100%',
        height: { base: '58%', md: '100%' },
        backgroundImage: {
          base: `url(${illustrationEditorMobile.src})`,
          md: `url(${illustrationEditorDesktop.src})`,
        },
        backgroundSize: { base: '460px', lg: '520px', lg2: '620px', xl: '750px' },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: { base: 'translate(0%)', md: 'translate(39%)' },
      }}
    >
      <Box position="absolute" zIndex="20">
        <Heading
          fontFamily="Overpass"
          textAlign="center"
          color="primary.veryDarkBlue"
          paddingTop={{ base: '80px', lg2: '120px' }}
          paddingBottom={{ base: '50px', lg: '65px' }}
        >
          Designed for the future
        </Heading>
        <Box
          w={{ base: '100%', md: '58%', lg: '52%', lg2: '48%' }}
          paddingLeft={{ base: '20px', md: '60px', lg: '100px' }}
          paddingRight={{ base: '20px', md: '0' }}
          textAlign={{ base: 'center', md: 'left' }}
          paddingTop={{ base: '400px', md: '0' }}
        >
          <Box paddingBottom={{ base: '45px', lg2: '60px' }}>
            <Heading
              fontFamily="Overpass"
              fontSize="22px"
              paddingBottom={{ base: '10px', lg: '20px' }}
              color="primary.veryDarkBlue"
            >
              Introducing an extensible editor
            </Heading>
            <Text>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing:
              creating content. The editor supports management of multiple blogs and allows easy
              manipulation of embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or change the looks of a
              blog.
            </Text>
          </Box>

          <Box>
            <Heading
              fontFamily="Overpass"
              fontSize="22px"
              paddingBottom={{ base: '10px', lg: '20px' }}
              color="primary.veryDarkBlue"
            >
              Robuse content management
            </Heading>
            <Text>
              Flexible content management enables users to easily move through posts. Increase the
              usability of your blog by adding customized categories, sections, format, or flow.
              With this functionality, you&apos;re in full control.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero2
