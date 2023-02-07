import React from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
  } from '@chakra-ui/react';
  import { AiFillCloseCircle } from 'react-icons/ai';
  import { useAppDispatch, useAppSelector } from '../../Redux/app.hooks';
  import CustomEditable from '../Inventory/CustomEditable';
  export default function UserProfileEdit(): JSX.Element {
    const [data, setData] = React.useState(null)
    const dispatch = useAppDispatch()
    const {authData} = useAppSelector(store=>store.Auth)
    React.useEffect(()=>{
      if (authData) setData(authData)
      else setData(JSON.stringify(localStorage.getItem('adminData-oasis')))
    }, [authData])
    return (
      <>
      {data && <Flex
        minH="100%"
        maxW="500px"
        m="0 auto"
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            User Profile
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={data.image}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<AiFillCloseCircle/>}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName">
            <FormLabel>User name</FormLabel>
            <CustomEditable value={data.name} field="name" _placeholder={{ color: 'gray.500' }}/>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <CustomEditable value={data.email} field="name" _placeholder={{ color: 'gray.500' }}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              bg={'brand.100'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>}
      </>)
    
  }