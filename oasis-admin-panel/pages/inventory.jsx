import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCTS_ACTIONS } from '../Redux/products/products.actions'

const Inventory = () => {
  const {loading, error, data} = useSelector(store=>store.ProductsManager)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(PRODUCTS_ACTIONS.getData())
  }, [])
  console.log(data)
  return (
    <Box>
      { 
      loading? <Box>Loading..</Box>:
      error? <Box>Something went wrong...</Box>:
      data?.data?.map(prod=><Flex key={prod.asin} h="50px" align="center">
        <Text isTruncated w="30%">{prod.name}</Text>
      </Flex>)
    }
    </Box>
  )
}

export default Inventory