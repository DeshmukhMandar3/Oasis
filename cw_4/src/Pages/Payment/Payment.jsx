import {  Text,Radio,RadioGroup,Stack } from '@chakra-ui/react'

import React from 'react'
import { useState } from 'react'
import Nav from './Nav'


const Payment = () => {


  const [card,setCard]=useState("")
  const [name,setname]=useState("")

  const [YY,setYY]=useState("")
  const [nick,setNick]=useState("")
  const [CVV,setCVV]=useState("")
  const [month,setMonth]=useState("")

   const handleCard=(e)=>{
    setCard(e.target.value)

   
  


   }
   const handleMonth=(e)=>{
   setMonth(e.target.value)
   }
   const handleCVV=(e)=>{
    setCVV(e.target.value)
   }
  
   const handleYY=(e)=>{
    setYY(e.target.value)
   }
   
   const handlename=(e)=>{
    setname(e.target.value)
   }
   const handlenick=(e)=>{
    setNick(e.target.value)
   }


  return (
    <div>
      <Nav/>
     <div style={{display:"flex",gap:"30px"}}>
      <div className='sidebar'>
        <Text fontSize={"xl"} fontWeight="bold">Select Payment Method</Text>
      
        <RadioGroup defaultValue='2' marginLeft={"60px"}>
  <Stack margin={"15px"} >
    <Radio value='1' >
     Debit Card
    </Radio>
    <Radio  value='2' color={"orange"}>Credit Card</Radio>
    <Radio value='3'>Net Banking</Radio>
    <Radio value='4'>ZestMoney</Radio>
    <Radio value='5'>Paytm</Radio>
    <Radio value='6'>UPI</Radio>
    <Radio value='7'>Wallets</Radio>
    <Radio value='8'>Gift Cards</Radio>
    <Radio value='9'>EMI</Radio>
  </Stack>
</RadioGroup>

      </div>

      
 <div>
   <div><Text fontSize={"2xl"} fontWeight="bold" textAlign={"left"}>Credit Card</Text></div>
    <form action="" className='form-style' >
      <br />
   <input type="number" placeholder=' Enter card number' className='input-fill' onChange={handleCard} value={card} />






   <div className='flex'>
    <input onChange={handleMonth} value={month} className='form-input' type="number" placeholder='MM'  />  / <input onChange={handleYY} value={YY} className='form-input' type="number" placeholder='YY' />
    <input onChange={handleCVV} value={CVV} style={{marginLeft:"90px"}} className='form-input'   type="number" placeholder='CVV' />
    
   </div>
   <input onChange={handlename} value={name} className='input-fill' type="text" placeholder=' Enter name on card' />
   <input onChange={handlenick} value={nick} className='input-fill' type="text" placeholder=' Nickname (for easy identification)'  />
  
    <button style={{backgroundColor: "orange",color:"white",padding:"10px" , fontSize:"large", width:"90%",borderRadius:"5px"}}>Pay-Rs000</button>
    </form>

 </div>

 <div><Text fontSize={"larger"} fontWeight="bold">Bank/Wallet Offers</Text></div>

     </div>

    </div>
  )
}

export default Payment