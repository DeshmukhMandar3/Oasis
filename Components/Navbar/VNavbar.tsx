import React from 'react'
import { LINKS } from './links'
import { VStack, Flex, Text, Box, Button, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  let hide = router.pathname==='/login'
  return (
    <Box display={{base:"none", lg:hide?"none":"block"}}>
      <VStack color="brand.200" w="200px">
        {LINKS.map((link, i)=>
        <Button key={i} variant="outline" w="80%" isActive={router.pathname===link.link} onClick={()=>router.push(link.link)}>
          <Flex align="center" w="100%">
            <Icon
            mr={4}
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={link.icon}
              />
            <Text>{link.name}</Text>
          </Flex>
        </Button>)}
      </VStack>
    </Box>
  )
}

export default Navbar