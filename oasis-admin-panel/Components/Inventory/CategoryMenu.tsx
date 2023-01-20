import React from 'react'
import { Menu, MenuButton, Flex, MenuList, Text, IconButton, MenuItem } from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { CATEGORIES1, CATEGORIES2 } from './category.data'
import { useAppDispatch } from '../../Redux/app.hooks'
import { STATE_ACTIONS } from '../../Redux/products/products.actions'

const CategoryMenu = () => {
  const dispatch = useAppDispatch()
  return (
    <Menu>
    <MenuButton as={Flex}>
      <Flex align="center" justify="space-between">
        <Text>Category</Text>
        <IconButton bg="transparent" aria-label='select category' size='xs' icon={<IoMdArrowDropdown/>}/>   
      </Flex>
      
    </MenuButton>
    <MenuList>
      <Flex>
        <Flex direction="column">
          {CATEGORIES1.map(c=><MenuItem onClick={(e)=>dispatch(STATE_ACTIONS.updateParams({category:e.target.innerText, page:1}))}>{c}</MenuItem>)}
        </Flex>
        <Flex direction="column">
          {CATEGORIES2.map(c=><MenuItem onClick={(e)=>dispatch(STATE_ACTIONS.updateParams({category:e.target.innerText, page:1}))}>{c}</MenuItem>)}
        </Flex>
      </Flex>
    </MenuList>
  </Menu>
  )
}

export default CategoryMenu