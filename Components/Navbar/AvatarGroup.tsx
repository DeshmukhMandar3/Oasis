import React from 'react'
import { Flex, Avatar, useColorModeValue, Text, ChakraProps } from '@chakra-ui/react'
import { useAppSelector } from '../../Redux/app.hooks'

interface proptype extends ChakraProps {
  name?: string,
  src?: string,
  // [x:string]: any
}

const AvatarGroup = ({...rest}:proptype):JSX.Element => {
  const color = useColorModeValue("gray.700", "white")
  const {authData} = useAppSelector(store=>store.Auth)
  if (!authData) return 
  return (
    <Flex align="center" {...rest}>
        <Avatar name={authData.name} bg="brand.100" src={authData.image}/>
        <Flex direction="column" justify="center">
            <Text color={color}>{authData.name}</Text>
            <Text color="brand.200">Admin</Text>
        </Flex>
    </Flex>
  )
}

export default AvatarGroup