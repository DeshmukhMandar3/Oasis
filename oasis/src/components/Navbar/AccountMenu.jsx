import { Box, Button, Image, Menu, MenuButton,  MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Logout from '../Authentication/Logout';

//for login button
const AccountMenu = () => {
  
  return (
    <>
    <Menu style={{border:"1px solid black"}} >
<Link to="#" > <Button style={{backgroundColor:"#24a3b5",color:"black",borderRadius:"0px",padding:"0px 25px"}}  ><Logout/></Button></Link> 
  </Menu>
    </>
  )
}

export default AccountMenu