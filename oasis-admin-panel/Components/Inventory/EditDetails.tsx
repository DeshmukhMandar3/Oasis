import React from 'react'
import CustomEditable from '../../Components/Inventory/CustomEditable'
import CategoryMenuList from '../../Components/Inventory/CategoryMenuList'

import { useAppDispatch } from '../../Redux/app.hooks'
import { ProductType } from '../../GlobalTypes/ProductType'
import {Flex, Table, Tbody, Text, Th, Td, Tr, Menu, MenuButton, IconButton} from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { STATE_ACTIONS } from '../../Redux/product/product.actions'

const EditDetails = ({data}:{data:ProductType}) => {
    const dispatch = useAppDispatch()

  return (
    <Flex direction="column">
        <Table>
        <Tbody>
            <Tr>
                <Th>Name</Th>
                <Td><CustomEditable field="product_name" value={data.product_name}/></Td>
            </Tr>
            <Tr>
                <Th>ID</Th>
                <Td><CustomEditable field="id" value={data.id}/></Td>
            </Tr>
            <Tr>
                <Th>PID</Th>
                <Td><CustomEditable field="pid" value={data.pid}/></Td>
            </Tr>
            <Tr>
                <Th>Retail Price</Th>
                <Td><CustomEditable field="retail_price" value={data.retail_price}/></Td>
            </Tr>
            <Tr>
                <Th>Discounted Price</Th>
                <Td><CustomEditable field="discounted_price" value={data.discounted_price}/></Td>
            </Tr>
            <Tr>
                <Th>
                    <Menu>
                        <MenuButton as={Flex}>
                            <Flex align="center">
                                <Text>Category</Text>
                                <IconButton bg="transparent" aria-label='select category' size='xs' icon={<IoMdArrowDropdown/>}/>   
                            </Flex>
                        </MenuButton>
                         <CategoryMenuList onClick={e=>dispatch(STATE_ACTIONS.updateEDIT({product_category_tree:data.product_category_tree.map((c, i)=>i===0?e.target.innerText:c)}))}/>
                    </Menu>
                </Th>
                <Td><Text>{data.product_category_tree[0]}</Text></Td>
            </Tr>
            <Tr>
                <Th>Stock</Th>
                <Td><CustomEditable field="stock" value={data.stock}/></Td>
            </Tr>
            </Tbody>
        </Table>
    </Flex>
  )
}

export default EditDetails