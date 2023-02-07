import React from 'react'
import CustomEditable from '../../Components/Inventory/CustomEditable'

import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BiAddToQueue } from 'react-icons/bi'
import { specificationType } from '../../GlobalTypes/ProductType'
import { useAppDispatch } from '../../Redux/app.hooks'
import {Flex, Table, Tbody, Text, Th, Td, Tr, IconButton, useColorModeValue, Thead, Button, Tfoot, Input } from '@chakra-ui/react'
import { STATE_ACTIONS } from '../../Redux/product/product.actions'
const EditSpecs = ({specs}:{specs:specificationType[]}) => {
    const dispatch = useAppDispatch()
    const [KEY, setKey] = React.useState<string>("")
    const [VALUE, setValue] = React.useState<string>("")

    const handleDelete = (id:number) => {
        dispatch(STATE_ACTIONS.removeSPEC(id))
    }
    const handleAdd = () => {
        dispatch(STATE_ACTIONS.addSPEC(KEY, VALUE))
        setKey("")
        setValue("")
    }
    const teal = useColorModeValue('brand.200', 'brand.100')

  return (
    <Flex direction="column">
        <Table>
            <Thead>
                <Tr>
                    <Th>Key</Th>
                    <Th>Value</Th>
                    <Th/>
                </Tr>
            </Thead>
                <Tbody>
                    {specs.map((spec, i)=>
                        <Tr key={i}>
                            <Th>{spec.key}</Th>
                            <Td><CustomEditable field={`spec${i}`} value={spec.value||""}/></Td>
                            <Td><IconButton onClick={()=>handleDelete(i)} color={teal} aria-label='delete spec' size='sm' icon={<RiDeleteBin5Fill/>}/></Td>
                        </Tr>
                    )}
                
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Td><Input value={KEY} onChange={e=>setKey(e.target.value)}/></Td>
                        <Td><Input value={VALUE} onChange={e=>setValue(e.target.value)}/></Td>
                        <Td><IconButton onClick={handleAdd} aria-label='add spec' icon={<BiAddToQueue/>} /></Td>
                    </Tr>
                </Tfoot>
            </Table>
            <Flex p="20px" justify="center">
                
            </Flex>
        </Flex>
  )
}

export default EditSpecs