import Image from 'next/image'
import Link from 'next/link'
import {
  Text,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import logo from 'assets/images/logo.svg'
import desktopIntroBg from 'assets/images/bg-pattern-intro-desktop.svg'
import mobileIntroBg from 'assets/images/bg-pattern-intro-mobile.svg'
import hamburger from 'assets/images/icon-hamburger.svg'
import closeIcon from 'assets/images/icon-close.svg'
import LightArrow from './icons/LightArrow'
import { useState } from 'react'

const menus = [
  {
    id: 1,
    button: 'Product',
    items: [
      { id: 1, value: 'Overview' },
      { id: 2, value: 'Pricing' },
      { id: 3, value: 'Marketplace' },
      { id: 4, value: 'Features' },
      { id: 5, value: 'Integration' },
    ],
  },
  {
    id: 2,
    button: 'Company',
    items: [
      { id: 1, value: 'About' },
      { id: 2, value: 'Team' },
      { id: 3, value: 'Blog' },
      { id: 4, value: 'Careers' },
    ],
  },
  {
    id: 3,
    button: 'Connect',
    items: [
      { id: 1, value: 'Contact' },
      { id: 2, value: 'Newsletter' },
      { id: 3, value: 'LinkedIn' },
    ],
  },
]

function Hero1() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <Box
      color="neutral.white"
      bgGradient="linear(to-r, gradient.veryLightRed, gradient.lightRed)"
      position="relative"
      overflow="hidden"
      w="100%"
      h="550px"
      as="section"
      borderBottomLeftRadius="100px"
      _after={{
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: { base: `url(${mobileIntroBg.src})`, md: `url(${desktopIntroBg.src})` },
        // backgroundSize: { base: '150%', md: 'auto' },
        backgroundPosition: { base: 'center', md: '28% 52%' },
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }}
    >
      <Flex
        position="absolute"
        top="0"
        left="0"
        padding={{ base: '0 25px', md: '0 50px', lg: '0 100px' }}
        width="100%"
        zIndex="20"
        justifyContent="space-between"
        alignItems="center"
        height="150px"
      >
        <Flex justifyContent="space-between" alignItems="center" height="100%">
          <Image src={logo} alt="logo" width="101px" height="40px" />
          <Flex
            fontFamily="Ubuntu"
            marginLeft={{ base: '25px', lg: '50px' }}
            width={{ base: '280px', lg: '300px' }}
            justifyContent="space-between"
            display={{ base: 'none', md: 'flex' }}
          >
            {menus.map((menu) => (
              <Menu key={menu.id}>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      _hover={{ opacity: '1', textDecoration: 'underline' }}
                      fontWeight="700"
                      opacity={isOpen ? '1' : '0.75'}
                      textDecoration={isOpen && 'underline'}
                    >
                      <Flex alignItems="center">
                        <Text marginRight="5px">{menu.button}</Text>
                        <LightArrow isOpen={isOpen} />
                      </Flex>
                    </MenuButton>
                    <MenuList color="neutral.black" padding="15px 0">
                      {menu.items.map((item) => (
                        <MenuItem _hover={{ fontWeight: '700' }} key={item.id}>
                          {item.value}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
            ))}
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          display={{ base: 'none', md: 'flex' }}
        >
          <Link href="/login" passHref>
            <Text fontWeight="500" fontFamily="Ubuntu" cursor="pointer">
              Login
            </Text>
          </Link>
          <Link href="/signup" passHref>
            <Box
              color="primary.lightRed"
              bgColor="neutral.white"
              cursor="pointer"
              fontFamily="Ubuntu"
              fontWeight="700"
              padding="8px 30px"
              borderRadius="50px"
              marginLeft="20px"
              _hover={{
                bgColor: 'rgba(250, 250, 250, 0.3)',
                color: 'neutral.white',
              }}
            >
              Sign Up
            </Box>
          </Link>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={() => setToggleMenu((prev) => !prev)}>
          <Image src={toggleMenu ? closeIcon : hamburger} alt="toggle menu button" />
        </Box>
      </Flex>

      <Box
        position="absolute"
        boxShadow="0px 0px 8px 1px #888888"
        borderRadius="5px"
        top="25%"
        left="0"
        right="0"
        zIndex="40"
        width="95%"
        margin="0 auto"
        height="auto"
        bgColor="neutral.white"
        color="neutral.veryDarkGrayishBlue"
        textAlign="center"
        padding="20px 0"
        display={{ base: `${toggleMenu ? 'block' : 'none'}`, md: 'none' }}
      >
        <Accordion allowToggle>
          {menus.map((menu) => (
            <AccordionItem key={menu.id}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="center">
                    {menu.button}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {menu.items.map((item) => (
                  <Text key={item.id}>{item.value}</Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Link href="/login" passHref>
          <Text fontWeight="500" fontFamily="Ubuntu" cursor="pointer" marginTop="20px">
            Login
          </Text>
        </Link>
        <Link href="/signup" passHref>
          <Box
            color="neutral.white"
            bgGradient="linear(to-r, gradient.veryLightRed, gradient.lightRed)"
            cursor="pointer"
            fontFamily="Ubuntu"
            fontWeight="700"
            padding="8px 0"
            width="150px"
            borderRadius="50px"
            margin="25px auto 10px"
            _hover={{
              bgColor: 'rgba(250, 250, 250, 0.3)',
              color: 'neutral.white',
            }}
          >
            Sign Up
          </Box>
        </Link>
      </Box>

      <Box
        position="absolute"
        top="30%"
        left="0"
        width="100%"
        zIndex="10"
        textAlign="center"
        paddingTop="40px"
      >
        <Heading
          fontFamily="Overpass"
          fontWeight="600"
          fontSize={{ base: '36px', md: '48px', lg: '56px' }}
        >
          A modern publishing platform
        </Heading>
        <Text fontSize="18px" letterSpacing="1px" paddingTop="10px" paddingBottom="35px">
          Grow your audience and build your online brand
        </Text>
        <Flex justifyContent="center">
          <Link href="/plans" passHref>
            <Box
              color="primary.lightRed"
              bgColor="neutral.white"
              cursor="pointer"
              fontFamily="Ubuntu"
              fontWeight="700"
              padding="8px 15px"
              borderRadius="50px"
              marginRight="10px"
              _hover={{
                bgColor: 'rgba(250, 250, 250, 0.3)',
                color: 'neutral.white',
              }}
            >
              Start for Free
            </Box>
          </Link>
          <Link href="/plans" passHref>
            <Box
              color="neutral.white"
              border="1px solid"
              cursor="pointer"
              fontFamily="Ubuntu"
              fontWeight="700"
              padding="8px 20px"
              borderRadius="50px"
              marginLeft="10px"
              _hover={{
                bgColor: 'neutral.white',
                color: 'primary.lightRed',
              }}
            >
              Learn More
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero1
