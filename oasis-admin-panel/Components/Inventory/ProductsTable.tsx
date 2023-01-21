import React from 'react'
import CategoryMenu from './CategoryMenu'
import ProductRow from './ProductRow'
import SearchFields from './SearchFields'
import SortFields from './SortFields'

import { Table, Thead, Tbody, Tfoot, Th, Tr, IconButton, useColorModeValue } from '@chakra-ui/react'
import { useAppDispatch } from '../../Redux/app.hooks'
import { GrPowerReset } from 'react-icons/gr'
import { STATE_ACTIONS } from '../../Redux/products/products.actions'
import { SortKeys } from './SortFields'
import { ProductType } from '../../GlobalTypes/ProductType'
import { ParamsType } from '../../Redux/products/products.api'

interface PropsType {
  data:ProductType[],
  count:number,
  params:ParamsType
}

const ProductsTable = ({data, count, params}:PropsType) => {
    const dispatch = useAppDispatch()
    const teal = useColorModeValue('brand.200', 'brand.100')
    const handleSearchPID = (pid:string) => {
      dispatch(STATE_ACTIONS.updateParams({pid, page:1}))
    }
    const handleSearchName = (name:string) => {
      dispatch(STATE_ACTIONS.updateParams({name, page:1}))
    }
    const reset = () => {
      dispatch(STATE_ACTIONS.resetParams())
    }
  
  return (
    <Table size="sm">
          <Thead>
            <Tr>
              <Th w="300px">
                <SearchFields field='Name' onSearch={handleSearchName} onClose={reset}/> 
              </Th>
              <Th>
              < SearchFields field='PID' onSearch={handleSearchPID} onClose={reset}/>
              </Th>
              <Th>
                <SortFields text="MRP (INR)" prodKey={SortKeys.mrp}/>
              </Th>
              <Th>
                <SortFields text="Price (INR)" prodKey={SortKeys.price}/>
              </Th>
              <Th>
                <SortFields text="Discount" prodKey={SortKeys.discount}/>
              </Th>
              <Th>
                <CategoryMenu/>
              </Th>
              <Th>
                <SortFields text="Stock" prodKey={SortKeys.stock}/>
              </Th>
              <Th/>
              <Th>
                <IconButton onClick={reset} color={teal} bg="transparent" aria-label='reset' size='sm' icon={<GrPowerReset/>}/>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data && data.map(prod=><ProductRow {...prod}/>)}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>{count} results, showing {params.page} out of {Math.ceil(count/params.limit)} pages.</Th>
            </Tr>
          </Tfoot>
        </Table>
  )
}

export default ProductsTable