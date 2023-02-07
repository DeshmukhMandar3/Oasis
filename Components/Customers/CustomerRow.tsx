import React from 'react'
import { Tr, Td, Text, IconButton,useColorModeValue, Tag } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../Redux/app.hooks'
import { ProductType } from '../../GlobalTypes/ProductType'
import { UsersType } from '../../Redux/users/users.reducer'
import { RiDeleteBin5Fill } from 'react-icons/ri'

const CustomerRow = ({data}:{data:UsersType}) => {
    const dispatch = useAppDispatch()
    const teal = useColorModeValue('brand.200', 'brand.100')

  return (
    <Tr key={data.id} h="50px">
        <Td w="300px"><Text w="300px" isTruncated >{data.id}</Text></Td>
        <Td><Text>{data.email}</Text></Td>
        <Td><Text>{data.mobile}</Text></Td>
        <Td><Tag colorScheme={'green'}>Active</Tag></Td>
        <Td><IconButton  color={teal} aria-label='delete product' size='sm' icon={<RiDeleteBin5Fill/>}/></Td>
    </Tr>
  )
}

export default CustomerRow