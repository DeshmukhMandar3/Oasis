import React from 'react'
import { Box, Flex, useColorModeValue, Spinner } from '@chakra-ui/react'
import { PRODUCTS_ACTIONS, STATE_ACTIONS } from '../Redux/products/products.actions'
import Pagination from '../Components/Pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../Redux/app.hooks'
import { StateType } from '../Redux/products/products.reducer'
import ProductsTable from '../Components/Inventory/ProductsTable'

const Inventory = () => {
  const {loading, error, data, count, params}:StateType = useAppSelector(store=>store.Products)
  const dispatch = useAppDispatch()
  const teal = useColorModeValue('brand.200', 'brand.100')

  const reset = () => {
    dispatch(STATE_ACTIONS.resetParams())
  }

  React.useEffect(()=>{
    dispatch(PRODUCTS_ACTIONS.getData(params))
  }, [params])
  return (
    <Box px="1em" w="100%" h="500px">
      { 
      loading? <Flex justify="center" align="center" w="100%" h="100%"><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color={teal} size='xl' /></Flex>:
      error? <Box>Something went wrong...</Box>:
      data && 
      <>
        <ProductsTable data={data} count={count} params={params}/>
        {count>1 && <Pagination current={params.page} total={Math.ceil(count/params.limit)} handlePageChange={(page)=>dispatch(STATE_ACTIONS.updateParams({page}))}/>}
      </>
      }
    </Box>
  )
}

export default Inventory
