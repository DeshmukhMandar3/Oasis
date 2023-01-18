import React from 'react'
import { Box, Flex, Text, Table, Tr, Td, Tbody, Thead, Th, IconButton } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCTS_ACTIONS } from '../Redux/products/products.actions'
import { BiEdit, BiSearchAlt2 } from 'react-icons/bi'
import Pagination from '../Components/Pagination/Pagination'

const LIMIT = 10

const formatPrice = (price) => {
  return price.toFixed(2).toLocaleString('en-US')
}

const Inventory = () => {
  const {loading, error, data} = useSelector(store=>store.ProductsManager)
  const dispatch = useDispatch()
  const [page, setPage] = React.useState(1)
  React.useEffect(()=>{
    dispatch(PRODUCTS_ACTIONS.getData(page, LIMIT))
  }, [page])
  // console.log(data)
  return (
    <Box px="1em">
      { 
      loading? <Box>Loading..</Box>:
      error? <Box>Something went wrong...</Box>:
      <>
        <Table size="sm">
          <Thead>
            <Th w="300px">
              <Flex align="center" justify="space-between">
                <Text>Name</Text>
                <IconButton bg="transparent" aria-label='search productName' size='xs' icon={<BiSearchAlt2/>}/>    
              </Flex>
            </Th>
            <Th><Text>ID</Text></Th>
            <Th><Text>Price {'(INR)'}</Text></Th>
            <Th><Text>Category</Text></Th>
            <Th><Text>Stock</Text></Th>
            <Th></Th>
          </Thead>
          <Tbody>
            {data?.data?.map(prod=><Tr key={prod.id} h="50px" align="center">
              <Td w="300px"><Text w="300px" isTruncated >{prod.name}</Text></Td>
              <Td><Text>{prod.id}</Text></Td>
              <Td><Text>{formatPrice(prod.price)}</Text></Td>
              <Td><Text>{prod.primary_category}</Text></Td>
              <Td><Text>{prod.stock}</Text></Td>
              <Td><IconButton colorScheme='teal' aria-label='edit product' size='sm' icon={<BiEdit/>}/></Td>
            </Tr>)}
          </Tbody>
        </Table>
        {data.headers && <Pagination current={page} total={Math.ceil(data.headers['x-total-count']/LIMIT)} handlePageChange={setPage}/>}
      </>
      }
    </Box>
  )
}

export default Inventory