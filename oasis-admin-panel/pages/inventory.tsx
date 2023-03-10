import React from 'react'
import Pagination from '../Components/Pagination/Pagination'
import ProductsTable from '../Components/Inventory/ProductsTable'
import Loader from '../Components/Loader'
import ErrorIndicator from '../Components/Error'

import { Box } from '@chakra-ui/react'
import { PRODUCTS_ACTIONS, STATE_ACTIONS } from '../Redux/products/products.actions'
import { useAppDispatch, useAppSelector } from '../Redux/app.hooks'
import { StateType } from '../Redux/products/products.reducer'
import Head from 'next/head'

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
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
      </main>
    </>
    
  )
}

export default Inventory
