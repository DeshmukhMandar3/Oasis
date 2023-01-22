import React from 'react'
import { MenuList, MenuItem, Flex } from '@chakra-ui/react'
import { CATEGORIES1, CATEGORIES2 } from './category.data'
interface PropType {
    onClick : (e:any) => void
}

const CategoryMenuList = ({onClick}:PropType) => {
  return (
    <MenuList>
      <Flex>
        <Flex direction="column">
          {CATEGORIES1.map(c=><MenuItem key={c} onClick={(e) =>onClick(e)}>{c}</MenuItem>)}
        </Flex>
        <Flex direction="column">
          {CATEGORIES2.map(c=><MenuItem key={c} onClick={onClick}>{c}</MenuItem>)}
        </Flex>
      </Flex>
    </MenuList>
  )
}

export default CategoryMenuList