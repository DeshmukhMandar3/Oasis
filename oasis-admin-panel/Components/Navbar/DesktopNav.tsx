import React from 'react'
import { Flex, Button, Image, useColorModeValue, Text } from '@chakra-ui/react'
import ToggleTheme from './ToggleTheme'
import AvatarGroup from './AvatarGroup'

const DesktopNav = ():JSX.Element => {
  const img = useColorModeValue("OASIS.png", "OASIS_darkmode.png")
  return (
    <Flex h="80px" color="brand.100" align="center" p="0 2em" justify="space-between" borderBottomWidth="1px" borderBottomColor={useColorModeValue('gray.200', 'gray.700')} display={{base:"none", lg:"flex"}}>
        <Flex h="100%" align="center">
            <Image src={img} alt="logo" h="90%"/>
        </Flex>
        
        <Flex h="100%" align="center" w="400px" justify="space-between">
            <Button variant="outline">Log Out</Button>
            <ToggleTheme/>
            <AvatarGroup name="Madhurima Poddar" gap="10px"/>      
        </Flex>     
    </Flex>
  )
}

export default DesktopNav