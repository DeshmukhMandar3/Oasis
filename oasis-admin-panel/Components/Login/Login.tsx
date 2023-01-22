import React from 'react'
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useColorModeValue,
    FormErrorMessage,
    Alert,
    AlertIcon
  } from '@chakra-ui/react';
  import { useAppDispatch, useAppSelector } from '../../Redux/app.hooks';
  import { AUTH_ACTIONS } from '../../Redux/auth/auth.actions';
  const IMAGE = `https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`
  
  interface StateType {
    email: string,
    password: string
  }

  const initState:StateType = {
    email:"",
    password: ""
  }

function Login() {
    const dispatch = useAppDispatch()
    const {loading, error, invalid, isAuth} = useAppSelector(store=>store.Auth)
    const [form, setForm] = React.useState<StateType>(initState)
    const [empty, setEmpty] = React.useState<boolean>(false)
    const handleChange = (e:InputEvent) =>{
      setForm({...form, [e.target.name]:e.target.value})
    }
    const onSubmit = () => {
      if (form.email==="" || form.password===""){
        setEmpty(true)
        return
      }
      dispatch(AUTH_ACTIONS.login(form.email, form.password))
    }
    const color = useColorModeValue('brand.200', 'brand.100')
    console.log(form)
    return (
      <Stack minH="100%" direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            {
              error?(
              <Alert status='error'>
                <AlertIcon />
                There was an error processing your request
              </Alert>
              ):
              invalid? (
                <Alert status='warning'>
                  <AlertIcon />
                  You entered wrong email or password
                </Alert>
              ):isAuth?(
                <Alert status='success'>
                  <AlertIcon />
                  Login Successful
                </Alert>
              ):""
            }
            <Heading fontSize={'2xl'}>Sign in as Admin</Heading>
            <FormControl id="email" isRequired={true} isInvalid={empty && form.email===""}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="admin@oasis.com"/>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isRequired={true}  isInvalid={empty && form.password===""}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={form.password} onChange={handleChange} isRequired={true}/>
              <FormErrorMessage>Password is required.</FormErrorMessage>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={color}>Forgot password?</Link>
              </Stack>
              <Button bg={color} variant={'solid'} onClick={onSubmit} isLoading={loading}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Flex>
      </Stack>
    );
  }

  export default React.memo(Login)