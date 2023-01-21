import {  Text,Radio,RadioGroup,Stack, useToast } from '@chakra-ui/react'

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

   

   const toast = useToast()
   const handleClick=()=>{
    // if(card===""){
    //   alert("please fill details")
    
    // }
    return(
      toast({
        title: 'Payment Success .',
        description: "Pealse Wait some time.",
        status: 'success',
        duration: 9000,
        isClosable: false,
      }))
    
  }

  return (
    <div>
      <Nav/>
     <div style={{display:"flex",gap:"30px"}}>
      <div className='sidebar'>
        <Text fontSize={"xl"} fontWeight="bold">Select Payment Method</Text>
      
        <RadioGroup defaultValue='2' marginLeft={"60px"}>
  <Stack margin={"15px"} >
    <Radio   colorScheme='orange' value='1' >
     Debit Card
    </Radio>
    <Radio  colorScheme='orange'  value='2' color={"orange"}>Credit Card</Radio>
    <Radio colorScheme='orange'  value='3'>Net Banking</Radio>
    <Radio colorScheme='orange'  value='4'>ZestMoney</Radio>
    <Radio colorScheme='orange'  value='5'>Paytm</Radio>
    <Radio colorScheme='orange'  value='6'>UPI</Radio>
    <Radio colorScheme='orange'  value='7'>Wallets</Radio>
    <Radio colorScheme='orange'  value='8'>Gift Cards</Radio>
    <Radio colorScheme='orange'  value='9'>EMI</Radio>
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
  
    <button   onClick={handleClick}  className="payment-btn" style={{padding:"12px",fontSize:"larger",fontWeight:"bold"}} >Pay-Rs 999</button>
    </form>

 <div style={{display:"flex"}}>
   <img style={{width:"120px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJWg9eQqmG1C3pYaYHG9IXddxo4Ao79Lo4Q&usqp=CAU" alt="" />

 </div>
 </div>

 <div><Text fontSize={"larger"} fontWeight="bold">Bank/Wallet Offers</Text></div>

     </div>

    </div>
  )
}


export default Payment