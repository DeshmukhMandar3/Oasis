



import AdminLogin from './AdminLogin'
import { Authcontext } from "../AuthContext/AuthContext";
import { useContext, useEffect } from "react";
import axios from 'axios'
import { Button } from "@chakra-ui/react";



let userulr='http://localhost:8080/adminuser'
function Admin() {
     
const {adminauth,setadminauth,adminuserdata,adminsetuserdata}=useContext(Authcontext)

useEffect(()=>{
  usedatacheck()
},[])

const usedatacheck=async()=>{
  try {
      let resdata=await axios.get("http://localhost:8080/adminuser") 
      let data=resdata.data
   if(data.length===0){
      // adminsetuserdata([])
      setadminauth(false)

    }else{
      setadminauth(true)
   
    adminsetuserdata(data[0])
   
    }

  } catch (error) {
      console.log("error")
  }
    
}


//delete data

const deletedata=async()=>{
  try {
      let resdata=await axios.get("http://localhost:8080/adminuser/") 
      let data=resdata.data

      userdatadelete(data[0].id)
    

  } catch (error) {
      console.log("error")
  }
    
}
const userdatadelete=async(id)=>{
  try {
        let userdelete=await axios.delete(`http://localhost:8080/adminuser/${id}`)
        usedatacheck()
  } catch (error) {
        
  }

}
let useremail=adminuserdata.email
  return (
   
    <div >
      {adminauth ? <Button onClick={deletedata}>Hi {useremail.substring(0, 7)}</Button>:<AdminLogin/>}
   
      
      {/* <Mycart/>
        <Payment/> */}
      {/* <GeneralRoutes /> */}
    

      {/* <GeneralRoutes /> */}

    </div>
  );
}

export default Admin;
