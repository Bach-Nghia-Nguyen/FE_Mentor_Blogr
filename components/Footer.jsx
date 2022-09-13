import Image from 'next/image'
import Link from 'next/link'
import { Text, Box, Flex, Heading } from '@chakra-ui/react'
import logo from 'assets/images/logo.svg'

function Footer() {
  const menus = [
    {
      id: 1,
      head: 'Product',
      items: [
        { id: 1, value: 'Overview', link: 'overview' },
        { id: 2, value: 'Pricing', link: 'pricing' },
        { id: 3, value: 'Marketplace', link: 'marketplace' },
        { id: 4, value: 'Features', link: 'features' },
        { id: 5, value: 'Integration', link: 'integration' },
      ],
    },
    {
      id: 2,
      head: 'Company',
      items: [
        { id: 1, value: 'About', link: 'about' },
        { id: 2, value: 'Team', link: 'team' },
        { id: 3, value: 'Blog', link: 'blog' },
        { id: 4, value: 'Careers', link: 'careers' },
      ],
    },
    {
      id: 3,
      head: 'Connect',
      items: [
        { id: 1, value: 'Contact', link: 'contact' },
        { id: 2, value: 'Newsletter', link: 'newsletter' },
        { id: 3, value: 'LinkedIn', link: 'linkedin' },
      ],
    },
  ]

  return (
    <Box
      as="footer"
      w="100%"
      h={{ base: 'auto', md: '320px', lg: '380px' }}
      color="neutral.white"
      bgColor="neutral.veryDarkBlackBlue"
      borderTopEndRadius="100px"
      textAlign={{ base: 'center', lg: 'left' }}
    >
      <Flex
        padding={{
          base: '50px 0',
          md: '70px 100px 0',
          lg: '80px 150px 0',
          xl: '80px 300px 0 150px',
        }}
        h="100%"
        justifyContent="space-between"
        alignItems={{ base: 'center', md: 'flex-start' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box marginBottom={{ base: '50px', md: '0' }}>
          <Image src={logo} alt="logo" width={101} height={40} />
        </Box>

        {menus.map((menu) => (
          <Box key={menu.id} marginBottom={{ base: '40px', lg: '0' }}>
            <Heading fontSize="16px" marginBottom={{ base: '25px', lg: '40px' }}>
              {menu.head}
            </Heading>
            {menu.items.map((item) => (
              <Link key={item.id} href={`/${item.link}`} passHref>
                <Text
                  marginBottom={{ base: '5px', lg: '10px' }}
                  cursor="pointer"
                  _hover={{
                    textDecoration: 'underline',
                  }}
                >
                  {item.value}
                </Text>
              </Link>
            ))}
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default Footer
