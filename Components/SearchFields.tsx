import React from 'react'
import {Flex, IconButton, Input, Text, CloseButton} from '@chakra-ui/react'
import { BiSearchAlt2 } from 'react-icons/bi'

interface PropsType {
    field : string,
    onSearch : (t:string) => void,
    onClose : () => void,
}

const SearchFields = ({field, onSearch, onClose }:PropsType) => {
  const [search, setSearch] = React.useState<boolean>(false)
  const [text, setText] = React.useState<string>("")
  const closeSearch = () => {
    setSearch(state=>!state)
    onClose()
  }
  return (
    <Flex align="center" justify="space-between">
        {search?<Input value={text} onChange={e=>setText(e.target.value)} size="xs" placeholder={`Search ${field}`}/>:<Text>{field}</Text>}
        <IconButton onClick={()=>search?onSearch(text):setSearch(state=>!state)} bg="transparent" aria-label='search' size='xs' icon={<BiSearchAlt2/>}/>    
        <CloseButton size="sm" display={search?"flex":"none"} onClick={()=>closeSearch()}/>
    </Flex>
  )
}

export default SearchFields