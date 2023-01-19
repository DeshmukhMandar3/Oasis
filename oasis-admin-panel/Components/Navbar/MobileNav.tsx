import React from 'react'
import {Flex, IconButton, Text, useColorModeValue, Image, useDisclosure} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import NavDrawer from './NavDrawer'

const MobileNav = ({...rest}) => {
    const img = useColorModeValue("OASIS.png", "OASIS_darkmode.png")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <Flex
      px="2em"
      display={{base:"flex", lg:"none"}}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="space-between"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

        <Flex h="100%" align="center" ref={btnRef}>
            <Image src={img} alt="logo" h="90%"/>
        </Flex>
        <NavDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef}/>
    </Flex>
  )
}

export default MobileNav