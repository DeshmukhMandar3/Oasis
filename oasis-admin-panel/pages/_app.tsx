import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Provider } from 'react-redux'

import theme from "../Theme/theme"
import VNavbar from "../Components/Navbar/VNavbar"
import HNavbar from "../Components/Navbar/HNavbar"
import store from "../Redux/store"
import AuthContextProvider from '../Contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <AuthContextProvider>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <HNavbar/>
          <Flex p="2em">
            <VNavbar/>
            <Component {...pageProps} />
          </Flex>
        </ChakraProvider>
      </Provider>
    </AuthContextProvider>
  </>
}
