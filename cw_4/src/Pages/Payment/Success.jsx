import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'


const Success = () => {



  return (
    <div>
          <div className='payment-nav'>

<div > <img style={{width:"160px"}}  src="https://scontent.fpnq14-1.fna.fbcdn.net/v/t39.30808-6/326521603_1604968816640846_9105269804802444165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ok0kd7s6pq4AX8C5Lu5&_nc_ht=scontent.fpnq14-1.fna&oh=00_AfAgE0evpYYBsmEWxur5_UCLg8YxwIOUIrJDFdYvmH2lHg&oe=63D12D96" alt="logo" /></div>

</div>

<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Your Order Successfully Placed!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
  Thank you for your order! We know you’re going to love it. You can track your order here, review us here, or shop again here.
  </AlertDescription>
</Alert>
<div ><img style={{margin:"auto"}} src="https://www.funimada.com/assets/images/cards/big/congrats-9.gif" alt="" /></div>
  

    </div>
  )
}

export default Success