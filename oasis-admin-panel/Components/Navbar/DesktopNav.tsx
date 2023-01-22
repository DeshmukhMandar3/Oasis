import React from 'react'
import { Flex, Button, Image, useColorModeValue, Text } from '@chakra-ui/react'
import ToggleTheme from './ToggleTheme'
import AvatarGroup from './AvatarGroup'
import { useRouter } from 'next/router'
import { AUTH_ACTIONS } from '../../Redux/auth/auth.actions'
import { useAppDispatch } from '../../Redux/app.hooks'

const DesktopNav = ():JSX.Element => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  let hide = router.pathname==='/login'
  const img = useColorModeValue("OASIS.png", "OASIS_darkmode.png")

  return (
    <Flex h="80px" color="brand.100" align="center" p="0 2em" justify="space-between" borderBottomWidth="1px" borderBottomColor={useColorModeValue('gray.200', 'gray.700')} display={{base:"none", lg:"flex"}}>
        <Flex h="100%" align="center">
            <Image src={img} alt="logo" h="90%"/>
        </Flex>
        
        <Flex h="100%" align="center" w={hide?"fit-content":"400px"} justify="space-between">
            <Button variant="outline" display={hide?"none":"inline-block"} onClick={()=>dispatch(AUTH_ACTIONS.logout())}>Log Out</Button>
            <ToggleTheme/>
            <AvatarGroup gap="10px" display={hide?"none":"flex"}/>     
        </Flex>     
    </Flex>
  )
}

export default DesktopNav