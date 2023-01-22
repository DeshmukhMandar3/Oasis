import React from 'react'
import Pagination from '../Components/Pagination/Pagination'
import ProductsTable from '../Components/Inventory/ProductsTable'
import Loader from '../Components/Loader'
import ErrorIndicator from '../Components/Error'

import { Box, Flex, useColorModeValue, Spinner } from '@chakra-ui/react'
import { PRODUCTS_ACTIONS, STATE_ACTIONS } from '../Redux/products/products.actions'
import { useAppDispatch, useAppSelector } from '../Redux/app.hooks'
import { StateType } from '../Redux/products/products.reducer'


const Inventory = () => {
  const {loading, error, data, count, params}:StateType = useAppSelector(store=>store.Products)
  const dispatch = useAppDispatch()

  const reset = () => {
    dispatch(STATE_ACTIONS.resetParams())
  }

  React.useEffect(()=>{
    dispatch(PRODUCTS_ACTIONS.getData(params))
  }, [params])
  return (
    <Box px="1em" w="100%" h="500px">
      { 
      loading? <Loader/>:
      error? <ErrorIndicator/>:
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
