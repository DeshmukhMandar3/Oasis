import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#00c2cb",
      // ...
      200: "#03989e",
    },
  },
  config : {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
})

export default theme;