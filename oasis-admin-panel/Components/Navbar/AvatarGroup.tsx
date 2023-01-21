import React from 'react'
import { Flex, Avatar, useColorModeValue, Text, ChakraProps } from '@chakra-ui/react'

interface proptype extends ChakraProps {
  name: string,
  src?: string,
  // [x:string]: any
}

const AvatarGroup = ({name, src, ...rest}:proptype):JSX.Element => {
  return (
    <Flex align="center" {...rest}>
        <Avatar name={name} bg="brand.100" src={src}/>
        <Flex direction="column" justify="center">
            <Text color={useColorModeValue("gray.700", "white")}>{name}</Text>
            <Text color="brand.200">Admin</Text>
        </Flex>
    </Flex>
  )
}

export default AvatarGroup