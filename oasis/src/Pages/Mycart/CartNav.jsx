import React from 'react'
import {Radio,RadioGroup,Stack,Text} from "@chakra-ui/react"

const CartNav = () => {
  return (
    <div>
          <div className='cart-nav'>
     <div><img src="https://scontent.fpnq14-1.fna.fbcdn.net/v/t39.30808-6/326521603_1604968816640846_9105269804802444165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ok0kd7s6pq4AX8C5Lu5&_nc_ht=scontent.fpnq14-1.fna&oh=00_AfAgE0evpYYBsmEWxur5_UCLg8YxwIOUIrJDFdYvmH2lHg&oe=63D12D96" alt="logo" /></div>
        <div>
        <RadioGroup defaultValue='1'>
  <Stack spacing={4} direction='row'>
    <Radio size='lg' colorScheme='teal' value='1' >
     <Text color={"#05BE25"} fontSize="large" fontWeight={"semibold"}>Select Address</Text>
    </Radio>
    <Radio isInvalid size='lg' colorScheme='teal' value='2'><Text  fontSize="large" fontWeight={"semibold"}>Review Cart</Text></Radio>
    <Radio size='lg' value='3' ><Text fontSize="large" color={"gray"} fontWeight={"semibold"}> Select Payment</Text></Radio>
  </Stack>
</RadioGroup>
        </div>
</div>

    </div>
  )
}

export default CartNav