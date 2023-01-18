
import React from "react";
import "./Navbar.css"
import {AiOutlineAndroid} from "react-icons/ai"
import {AiOutlineApple} from "react-icons/ai"
import {RiWindowsLine} from "react-icons/ri"
import {BsSearch} from "react-icons/bs"
import logoimg from "../sources/prologo.jpg"
// import location from "../sources/location.png"
import notification from "../sources/notification.png"
import wishlist from "../sources/wishlist.png"
import addtocart from "../sources/addtocart.png"
const Navbar=()=>{
    return (
        <div>
<div className="navbar_app_logo">

   <div className="navbar_app">
    <span>Sell With Us | </span>
    <span>Call Us | </span>
    <span>Download App:</span>
<span className="nav_app_logo"><AiOutlineAndroid/></span>
<span className="nav_app_logo"><AiOutlineApple/></span>
<span className="nav_app_logo"><RiWindowsLine/></span>
   </div>

   <div className="nav_main_logo">
<div style={{marginLeft:"15px"}}>
<a  href="#">
 <img src={logoimg} width="180px" height="" alt="" srcset=""/>
 </a> 
</div>
<div className="nav_search_bar">
            <form action="">
                <button type="submit" className="nav_search_button"><BsSearch/></button>
                <input type="text" name="" className="nav_search_bar_input" placeholder="What is on your mind today?"/>
            <button className="nav_search_btn">Seacrh</button>
            </form>
        </div>
        <div className="nav_noti_icon">
            {/* <div><img src={location} alt="" width="35px"/></div> */}
            <div><img src={notification} alt="" width="30px"/></div>
            <div><img src={wishlist}  width="30px" alt=""/></div>
            <div><img src={addtocart} width="30px" alt="" /></div>
            <div>Sign In</div>
        </div>
   </div>
            </div>
             </div>
    )
}

export default Navbar