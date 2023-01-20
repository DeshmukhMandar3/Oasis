
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Product = () => {
    const [loading,setLoading]=useState(true)
const [data,setData]=useState([])

useEffect(()=>{
    setLoading(true)
    axios.get("https://backend-cw-4.onrender.com/Products")
    .then((res)=>setData(res.data))
    setLoading(false)

},[])

console.log(data)

if(loading){
    return(<div>
         <img style={{width:"250px"}} src="https://media.tenor.com/18VaUqVtArwAAAAC/loading-buffering.gif" alt="" />
    <h1>Loading....</h1>
    </div>
    )
}

  return (
    <div>

        <div style={{display:"grid" , gridTemplateColumns:"repeat(4,1fr)",gap:"25px"}}>
            {
                 
                data.slice(100,200).map((product)=>{
                    return(
                        <div key={product.pid} >
                           <div style={{ borderRadius:"5px",height:"400px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",textAlign:"center"}}>
                           
                          <img style={{width:"100px",height:"180px"}} src={product.image[0]} alt="product-image" />
                          <h5>{product.product_name}</h5>
                          <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>    
                          <h2 style={{fontWeight:"bold"}}>Rs.  {product.discounted_price}</h2>
                           <h3 style={{fontWeight:"semibold", color:"gray"}} className="price">Rs. {product.retail_price}</h3>
                         </div>
                     
                           </div>
                           

                        </div>
                    )
                })
            }
        </div>

   

    </div>
  )
}

export default Product