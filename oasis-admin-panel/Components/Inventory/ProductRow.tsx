import React from 'react'
import { Tr, Td, Text, IconButton,useColorModeValue } from '@chakra-ui/react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { ProductType } from '../../GlobalTypes/ProductType'
import { PRODUCTS_ACTIONS} from '../../Redux/products/products.actions'
import { useAppDispatch } from '../../Redux/app.hooks'
import { useRouter } from 'next/router'

const format = (n:number|string|undefined):string => {
    n = n || 0
    return Number(n).toFixed(2)
}

const ProductRow = (prod:ProductType) => {
  const teal = useColorModeValue('brand.200', 'brand.100')
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleDelete = (id:string) => {
    dispatch(PRODUCTS_ACTIONS.deleteProd(id))
  }

  return (
    <Tr key={prod.pid} h="50px">
        <Td w="300px"><Text w="300px" isTruncated >{prod.product_name}</Text></Td>
        <Td><Text>{prod.pid}</Text></Td>
        <Td><Text>{format(prod.retail_price)}</Text></Td>
        <Td><Text>{format(prod.discounted_price)}</Text></Td>
        <Td><Text>{format(prod.discount)}%</Text></Td>
        <Td><Text>{prod.product_category_tree[0]}</Text></Td>
        <Td><Text>{prod.stock}</Text></Td>
        <Td><IconButton onClick={()=>router.push(`/inventory/${prod.id}`)} colorScheme='teal' aria-label='edit product' size='sm' icon={<BiEdit/>}/></Td>
        <Td><IconButton onClick={()=>handleDelete(prod.id)} color={teal} aria-label='delete product' size='sm' icon={<RiDeleteBin5Fill/>}/></Td>
    </Tr>
  )
}

export default ProductRow