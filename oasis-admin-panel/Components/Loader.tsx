import React from 'react'
import { Flex, Spinner, useColorModeValue } from '@chakra-ui/react'

const Loader = () => {
  const teal = useColorModeValue('brand.200', 'brand.100')

  return (
    <Flex justify="center" align="center" w="100%" h="100%"><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color={teal} size='xl' /></Flex>
  )
}

export default Loader