import Image from 'next/image'
import { Text, Box, Flex, Heading } from '@chakra-ui/react'
import illustrationPhones from 'assets/images/illustration-phones.svg'
import patternCircles from 'assets/images/bg-pattern-circles.svg'

function Hero3() {
  return (
    <Box
      as="section"
      width="100%"
      height={{ base: '580px', sm2: '550px', md: '430px' }}
      position="relative"
      color="neutral.white"
      bgGradient="linear(to-r, gradient.veryDarkGrayBlue, gradient.veryDarkDesaturatedBlue)"
      borderTopEndRadius="100px"
      borderBottomLeftRadius="100px"
      _before={{
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgImage: `url(${patternCircles.src})`,
        bgSize: { base: '400px', sm2: '500px', md: '600px', lg: '750px', lg2: '820px', xl: 'auto' },
        bgPosition: {
          base: '50% -100px',
          sm2: '50% -200px',
          md: '-100px -320px',
          lg: '-150px -400px',
          lg2: '-150px -500px',
          xl: '-210px -500px',
        },
        bgRepeat: 'no-repeat',
      }}
    >
      <Flex
        // border="1px solid red"
        justifyContent={{ base: 'center', md: 'flex-end' }}
        width={{ base: '100%', md: '47%' }}
        height="auto"
        position="absolute"
        top={{ base: '0', sm2: '-250px', md: '0', lg: '-50px' }}
        transform={{ base: 'translate(0%, -45%)', sm2: 'translate(0%)' }}
        zIndex="20"
      >
        <Image src={illustrationPhones} alt="illustration phones" />
      </Flex>
      <Flex
        // border="1px solid limegreen"
        position="absolute"
        right="0"
        textAlign={{ base: 'center', md: 'left' }}
        top={{ base: 'auto', md: '0' }}
        bottom={{ base: '0', md: 'auto' }}
        width={{ base: '100%', md: '53%' }}
        height={{ base: '55%', sm2: '45%', md: '100%' }}
        paddingRight={{ base: '20px', md: '30px', lg: '90px', lg2: '120px', xl: '180px' }}
        paddingLeft={{ base: '20px', md: '0', lg: '30px', lg2: '45px' }}
        direction="column"
        justifyContent={{ base: 'flex-start', md: 'center' }}
      >
        <Heading fontFamily="Overpass" fontSize="35px" paddingBottom="20px">
          State of the Art Infrastructure
        </Heading>
        <Text lineHeight="1.7">
          With reliability and speed in mind, worldwide data centers provide the backbone for
          ultra-fast connectivity. This ensures your site will load instantly, no matter where your
          readers are, keeping your site competitive.
        </Text>
      </Flex>
    </Box>
  )
}

export default Hero3
