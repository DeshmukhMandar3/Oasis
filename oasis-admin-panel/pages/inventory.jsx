import React from 'react'
import { Box, Flex, Text, Table, Tr, Td, Tbody, Thead, Th, IconButton, useColorModeValue, Input, CloseButton, Spinner, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Tfoot } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCTS_ACTIONS } from '../Redux/products/products.actions'
import { BiEdit, BiSearchAlt2 } from 'react-icons/bi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { IoMdArrowDropdown } from 'react-icons/io'
import Pagination from '../Components/Pagination/Pagination'

const LIMIT = 10

const formatPrice = (price) => {
  return price.toFixed(2).toLocaleString('en-US')
}

const getDiscount = (price, mrp) => {
  return (1-(price/mrp))*100
}

const Inventory = () => {
  const {loading, error, data} = useSelector(store=>store.ProductsManager)
  const dispatch = useDispatch()
  const [page, setPage] = React.useState(1)
  const teal = useColorModeValue('brand.200', 'brand.100')
  const [searchName, setSearchName] = React.useState(false)
  const [searchPID, setSearchPID] = React.useState(false)
  const [pid, setPID] = React.useState("")
  const [name, setName] = React.useState("")
  const handleSearchPID = () => {
    dispatch(PRODUCTS_ACTIONS.getData({pid, limit:LIMIT}))
    setPage(1)
  }
  const handleSearchName = () => {
    dispatch(PRODUCTS_ACTIONS.getData({name, limit:LIMIT}))
    setPage(1)
  }
  const closeSearch = (set) => {
    set(state=>!state)
    dispatch(PRODUCTS_ACTIONS.getData({limit:LIMIT}))
    setPage(1)
  }
  React.useEffect(()=>{
    !data.data && dispatch(PRODUCTS_ACTIONS.getData({page, limit:LIMIT}))
  }, [page])
  // console.log(data)
  return (
    <Box px="1em" w="100%" h="500px">
      { 
      loading? <Flex justify="center" align="center" w="100%" h="100%"><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color={teal} size='xl' /></Flex>:
      error? <Box>Something went wrong...</Box>:
      data.data &&
      <>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th w="300px">
                <Flex align="center" justify="space-between">
                {searchName?<Input value={name} onChange={e=>setName(e.target.value)} size="xs" placeholder="search Name"/>:<Text>Name</Text>}
                  <IconButton onClick={()=>searchName?handleSearchName(name):setSearchName(state=>!state)} bg="transparent" aria-label='search productName' size='xs' icon={<BiSearchAlt2/>}/>    
                  <CloseButton size="sm" display={searchName?"flex":"none"} onClick={()=>closeSearch(setSearchName)}/>
                </Flex>
              </Th>
              <Th>
                <Flex align="center" justify="space-between">
                  {searchPID?<Input value={pid} onChange={e=>setPID(e.target.value)} size="xs" placeholder="search PID"/>:<Text>PID</Text>}
                  <IconButton onClick={()=>searchPID?handleSearchPID():setSearchPID(state=>!state)} bg="transparent" aria-label='search productName' size='xs' icon={<BiSearchAlt2/>}/>    
                  <CloseButton size="sm" display={searchPID?"flex":"none"} onClick={()=>closeSearch(setSearchPID)}/>
                </Flex>
              </Th>
              <Th><Text>MRP {'(INR)'}</Text></Th>
              <Th><Text>Price {'(INR)'}</Text></Th>
              <Th><Text>Discount</Text></Th>
              <Th>
                <Menu>
                  <MenuButton as={Flex}>
                    <Flex align="center" justify="space-between">
                      <Text>Category</Text>
                      <IconButton bg="transparent" aria-label='search productName' size='xs' icon={<IoMdArrowDropdown/>}/>   
                    </Flex>
                    
                  </MenuButton>
                  <MenuList>
                    <Flex>
                      <Flex direction="column">
                        {CATEGORIES1.map(c=><MenuItem onClick={(e)=>dispatch(PRODUCTS_ACTIONS.getData({category:e.target.innerText, limit:LIMIT}))}>{c}</MenuItem>)}
                      </Flex>
                      <Flex direction="column">
                        {CATEGORIES2.map(c=><MenuItem onClick={(e)=>dispatch(PRODUCTS_ACTIONS.getData({category:e.target.innerText, limit:LIMIT}))}>{c}</MenuItem>)}
                      </Flex>
                    </Flex>
                  </MenuList>
                </Menu>
                
              </Th>
              <Th><Text>Stock</Text></Th>
              <Th/>
              <Th/>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data?.map(prod=><Tr key={prod.pid} h="50px" align="center">
              <Td w="300px"><Text w="300px" isTruncated >{prod.product_name}</Text></Td>
              <Td><Text>{prod.pid}</Text></Td>
              <Td><Text>{formatPrice(prod.retail_price)}</Text></Td>
              <Td><Text>{formatPrice(prod.discounted_price)}</Text></Td>
              <Td><Text>{formatPrice(getDiscount(prod.discounted_price, prod.retail_price))}%</Text></Td>
              <Td><Text>{prod.product_category_tree[0]}</Text></Td>
              <Td><Text>{Math.ceil(Math.random()*1000)}</Text></Td>
              <Td><IconButton colorScheme='teal' aria-label='edit product' size='sm' icon={<BiEdit/>}/></Td>
              <Td><IconButton color={teal} aria-label='delete product' size='sm' icon={<RiDeleteBin5Fill/>}/></Td>
            </Tr>)}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>{data?.headers['x-total-count']} results, showing {page} out of {Math.ceil(data?.headers['x-total-count']/LIMIT)} pages.</Th>
            </Tr>
          </Tfoot>
        </Table>
        {data?.data?.length>1 && <Pagination current={page} total={Math.ceil(data.headers['x-total-count']/LIMIT)} handlePageChange={setPage}/>}
      </>
      }
    </Box>
  )
}

export default Inventory

const CATEGORIES1 = [
  'Clothing',
  'Kitchen & Dining',
  'Footwear',
  'Home Decor & Festive Needs',
  'Computers',
  'Jewellery',
  'Pens & Stationery',
  'Watches',
  'Tools & Hardware',
  'Home Furnishing',
  'Bags, Wallets & Belts',
  'Beauty and Personal Care',
  'Baby Care',
  'Mobiles & Accessories',
  'Toys & School Supplies',
]

const CATEGORIES2 = [
  'Sports & Fitness',
  'Furniture',
  'Automotive',
  'Cameras & Accessories',
  'Home Entertainment',
  'Home Improvement',
  'Gaming',
  'Sunglasses',
  'Pet Supplies',
  'Home & Kitchen',
  'Health & Personal Care Appliances',
  'eBooks',
  'Eyewear',
  'Small Toes Bellies',
  'Household Supplies',
]