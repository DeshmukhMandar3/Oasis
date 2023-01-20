import React from 'react'
import {Radio,RadioGroup,Stack,Text} from "@chakra-ui/react"

const CartNav = () => {
  return (
    <div>
          <div className='cart-nav'>
     <div><img src="https://64.media.tumblr.com/09ac90e7b00b5b8314fc7b237e0baaf3/08ad9d2d7ec42ac6-d8/s500x750/b8155fb35beaaa73f386af6c608b200494465d8f.pnj" alt="logo" /></div>
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