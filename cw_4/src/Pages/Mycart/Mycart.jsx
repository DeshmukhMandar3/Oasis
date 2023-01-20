import { Button, ModalBody, Text,ModalFooter, ModalCloseButton,ModalContent,Modal,ModalOverlay, useDisclosure,ModalHeader
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

import CartNav from './CartNav'

const Mycart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [coupon,setCoupon]=useState("")

 const [count,setCount]=useState(1)

 const handleCount=(val)=>{
  setCount(count+val)
 }

  return (
    <div>
   <CartNav/>

   <div className='flex'>
    <div className='left_div'>
      <div style={{borderBottom:"0.5px solid darkgray"}}>
      <Text textAlign={"left"} marginLeft="40px" fontSize="larger" fontWeight={"bold"}>Shipping to : Other, Person Name</Text>
     <Text textAlign={"left"} marginLeft="40px" color={"gray"}>No Deendyal Chowk jabalpur , Jabalpur , MP , 482002 | Mob - 6260771518</Text>
      </div>
      <Text textAlign={"left"} fontSize="large" fontWeight={"bold"}>(count) Item in Cart</Text>
   
      <div className='flex' >
        <div className='cart-img'><img src="https://cdn.shopclues.com/images1/thumbnails/85667/320/320/137473807-85667452-1662545252.jpg" alt="" /></div>
        <div><Text color={"gray"}>Vivient Women Color Block Hooded Swe..</Text>
        <Text>Size-Women-Upper : 5XL</Text>
        </div>
        <div>
          <div style={{display:"flex", gap:"5px"}}>   <Button isDisabled={count==1} onClick={()=>handleCount(-1)} fontSize={"xl"} borderRadius="50%" marginLeft={"50px"}>-</Button>
          <Text fontSize={"larger"} marginTop="5px">{count}</Text>
         <Button  onClick={()=>handleCount(1)}  fontSize={"xl"} borderRadius="50%">+</Button></div> </div>
        <div className='right' ><Text fontSize={"large"} fontWeight="bold">Rs. 339</Text>
        <Text fontSize={"small"} color='gray'>Inclusive of all the applicable taxes</Text>
        </div>
      </div>

    </div>
    <div className='right_div'>
    
     <div className='coupon'> <Button onClick={onOpen} bg="transparent"  ><Text color={"#09C32A"}>Apply Coupons</Text></Button></div>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"grey"}>Available Coupons</ModalHeader>
          <ModalCloseButton />
        <ModalBody>
     <input type="text" placeholder='Enter Coupon Code' style={{borderBottom:"1px solid gray", outline:"none"}}/>
     <br /><br />
     <div className='coupon-btn'><button isDisabled={coupon===""} style={{color:"white",}}>Apply Coupon</button></div>
        </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    
    <div className='No'>
      <Text>No CB/CB+ Available</Text>
    </div>
       <div  className='cashback'><Text fontWeight={"semibold"}>Get 100% CashBack</Text> instantly on prepaid orders! Place order using Debit/Credit cards, Net Banking, Wallets, UPI etc.. and get  CluesBucks+ instantly </div>

  <div className='save'>
    <Text>Save additional Rs 55, Pay by Bank,Credit/Debit or Wallets!</Text>
  </div>

  
  <div className='price_total'>  <div><Text color={"gray"}>Total Order Value	</Text ></div><Text fontWeight={"bold"}>₹ 1,399</Text><div></div></div>

  <div className='price_total'>  <div><Text color={"gray"}>Total Discount		</Text ></div><Text fontWeight={"bold"}>-₹ 1,060</Text><div></div></div>

  <div className='price_total'>  <div><Text fontSize={"xl"} fontWeight="bold" color={"lightblack"}>Grand Total	</Text ></div><Text fontSize={"larger"} fontWeight={"bold"}>₹ 339</Text><div></div></div>
 
 <div style={{marginTop:"15px"}} className="payment-btn" ><button style={{marginLeft:"10px"}}><Text fontSize={"xl"} fontWeight="bold"  padding="10px"  >Procced to Payment</Text></button></div>
 <div style={{marginTop:"12px"}}><Text color={"gray"} fontSize="sm">Secure Payment, Easy Returns & Refunds</Text></div>


    </div>
   </div>
    


    </div>
  )
}

export default Mycart