import { Flex } from '@chakra-ui/react'
import React from 'react'
import Login from '../Components/Login/Login'

const LoginPage = () => {
  return (
    <Flex h="80vh" w="100%" justify="center" align="center">
      <Login/>
    </Flex>
  )
}

export default LoginPage