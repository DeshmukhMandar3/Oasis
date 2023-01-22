import React from 'react'
import {Flex, Text, IconButton} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../Redux/app.hooks'
import { STATE_ACTIONS } from '../../Redux/products/products.actions'
import { BiSort } from 'react-icons/bi'

export enum SortKeys {
    price = "discounted_price",
    mrp = "retail_price",
    discount = "discount",
    stock = "stock"
}

enum OrderBy {
    asc = "asc",
    dsc = "desc"
}

interface PropsType {
    text: string,
    prodKey: SortKeys,
}

const SortFields = ({text, prodKey}:PropsType) => {
    const {params} = useAppSelector(store=>store.Products) 
    const dispatch = useAppDispatch()
    const onClick = () => {
        dispatch(STATE_ACTIONS.updateParams({sort:prodKey, order:params.order===OrderBy.asc?OrderBy.dsc:OrderBy.asc, page:1}))
    }
  return (
    <Flex align="center" justify="space-between">
        <Text>{text}</Text>
        <IconButton onClick={onClick} bg="transparent" aria-label='search productName' size='xs' icon={<BiSort/>}/> 
    </Flex>
  )
}

export default SortFields