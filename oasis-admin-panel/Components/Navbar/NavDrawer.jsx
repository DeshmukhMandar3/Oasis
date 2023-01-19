import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Button,
    Flex,
    Icon,
    Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {LINKS} from './links'
import AvatarGroup from './AvatarGroup'
import ToggleTheme from './ToggleTheme'

export default function NavDrawer({isOpen, onClose, btnRef}) {
    
    const router = useRouter()

    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <AvatarGroup name="Madhurima Poddar" gap="10px" fontSize="sm"/>
            </DrawerHeader>
  
            <DrawerBody>
            <VStack color="brand.200" w="100%" gap={5}>
                {LINKS.map((link, i)=>
                <Button key={i}  isActive={router.pathname===link.link} variant="outline"  w="100%" onClick={()=>router.push(link.link)}>
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
                </Button>
                )}
            </VStack>
            </DrawerBody>
  
            <DrawerFooter>
                <ToggleTheme/>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }