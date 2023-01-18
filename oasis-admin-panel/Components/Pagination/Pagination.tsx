import React from 'react'
import {Flex, Button, Text, IconButton} from '@chakra-ui/react'
import {RxDoubleArrowLeft, RxDoubleArrowRight} from 'react-icons/rx'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

interface propsType {
    current: number,
    total: number,
    handlePageChange: (n:number) => void
}

let BTN_COUNT = 5

const getStartingIdx = (current:number, total:number):number => {
    if (total-current<2) return Math.max(current-(BTN_COUNT-1-total+current))
    return Math.max(current-2, 1)
}

const Pagination = ({current, total, handlePageChange}: propsType) => {
    let btns = []
    let start = getStartingIdx(current, total)
    for (let i=start; i<start+BTN_COUNT; i++){
        console.log(i===current)
        btns.push(<Button size="xs" background="transparent" isDisabled={i===current} onClick={()=>handlePageChange(i)}>{i}</Button>)
    }
  return (
    <Flex gap="5px" mt="20px" align="center">
        <IconButton size="xs" display={current===1?"none":"flex"} onClick={()=>handlePageChange(1)} bg="transparent" aria-label='search productName' icon={<RxDoubleArrowLeft/>}/>
        <IconButton size="xs" display={current===1?"none":"flex"} onClick={()=>handlePageChange(current-1)} bg="transparent" aria-label='search productName' icon={<IoIosArrowBack/>}/>
        {btns}
        <IconButton size="xs" display={current===total?"none":"flex"} onClick={()=>handlePageChange(current+1)} bg="transparent" aria-label='search productName' icon={<IoIosArrowForward/>}/>
        <IconButton size="xs" display={current===total?"none":"flex"} onClick={()=>handlePageChange(total)} bg="transparent" aria-label='search productName' icon={<RxDoubleArrowRight/>}/>
    </Flex>
  )
}

export default Pagination