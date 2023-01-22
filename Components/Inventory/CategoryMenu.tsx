import React from 'react'
import { Menu, MenuButton, Flex, MenuList, Text, IconButton, MenuItem } from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useAppDispatch } from '../../Redux/app.hooks'
import { STATE_ACTIONS } from '../../Redux/products/products.actions'
import CategoryMenuList from './CategoryMenuList'

const CategoryMenu = () => {
  const dispatch = useAppDispatch()
  const onClick = (e:React.MouseEvent) => {
    dispatch(STATE_ACTIONS.updateParams({category:e.target.innerText, page:1}))
  }
  return (
    <Menu>
    <MenuButton as={Flex}>
      <Flex align="center" justify="space-between">
        <Text>Category</Text>
        <IconButton bg="transparent" aria-label='select category' size='xs' icon={<IoMdArrowDropdown/>}/>   
      </Flex>
    </MenuButton>
    <CategoryMenuList onClick={onClick}/>
  </Menu>
  )
}

export default CategoryMenu