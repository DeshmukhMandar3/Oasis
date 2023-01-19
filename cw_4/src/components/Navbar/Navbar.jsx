
import React from "react";
import "./Navbar.css"
import logoimg from "../sources/prologo.jpg"

const Navbar=()=>{
   
    return (
        <>
        {/* navbar 1st part */}
      <div className="navbar_1st_part_div">
    <div className="navbar_app_part">
        <ul>
            <li>Sell With Us</li>
            <li>Call Us</li>
            <li>Download App</li>
            <li></li>
        </ul>
    </div>  

     {/* website logo */}

    <div className="navbar_website_logo">
        <a href="#">
            <img src={logoimg} alt="logo"/>
        </a>
    </div>

    {/* seacrh box */}

    <div className="navbar_search_box">
        <span>
            <input type="text" placeholder="What is on your mind today?" />
            <button className="navbar_srch_btn">Search</button>
        </span>
    </div> 
    {/* address wishlist notification cart signin part */}
    <div className="navbar_address_section">
        <ul>
            <li>
            <i class="fa-solid fa-location-dot"></i>
            </li>
            <li>
            <i class="far fa-bell"></i> 
            </li>
            <li>
            <i class="far fa-heart"></i>
            </li>
            <li id="showcart">
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                </li>
            
                <li id="navbar_signin_section_first">
                <a href="#">Sign In</a>
                <div class="navbar_hover_content_first">
                    <div id="navbar_userHeading_part">
                    <i class="fa-regular fa-user"></i><span>Login/Register</span>
                        <p>Join VIP club</p>
                    </div>
                    <ul>
                        <li>
                        <i class="fa-solid fa-bag-shopping"></i>
                            My Orders
                        </li>
                        <li>
                            <i class="fa-solid fa-person-walking-arrow-loop-left"></i>
                            My Returns
                        </li>
                        <li>
                            <i class="far fa-heart"></i>
                            Wishlist
                        </li>
                        <li>
                            <i class="fas fa-user-circle"></i>
                            My Profile
                        </li>
                        <li>
                           <i class="fa-solid fa-comment-dots"></i>
                            My Chat
                        </li>
                        <li>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                            My CluesBucks
                        </li>
                        <li>
                            <i class="fa-regular fa-message"></i>
                            My Feedback
                        </li>
                        <li>
                        <i class="fa-solid fa-phone"></i>
                            Help & Support
                        </li>
                        <li>
                        <i class="fa-solid fa-store"></i>
                            My Favorite Stores
                        </li>
                        {/* <li>
                            <i class="fa-solid fa-right-from-bracket"></i>
                            Sign Out
                        </li> */}
                    </ul>
                </div>
            </li>
        </ul>
    </div>   
</div>
{/* navbar 1st part completed */}


{/* 2nd part navbar dropdown section start */}
<div className="navbar_second_dropdown_main">
    <div id="navbar_dropdown_child">
        <ul>

{/* made in india logo */}
        <li id="navbar_madein_insia_logo">
                <a href="">
                    <img src="https://images.shopclues.com/images/ui/madeinindia.png" alt="madeInIndia"/>
                </a>
            </li>

{/* Mobiles & More dropdown options */}
<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">Mobiles & More</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">Men</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">women</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">home & kitchen</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">appliances</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">sports & more</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">essentials</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">offers</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>

<li id="navbar_dropdown1_part">
<a href="/ProductListPage.html">global shopping</a>
<div className="navbar_menu_wrap_part">
    <div className="navbar_ul_menu_block_part">
</div>
</div>
</li>
 </ul>
    </div>
</div>
{/* End of Mobiles & More dropdown options */}


</>
    )
}

export default Navbar


{/* <div id="navbar_column_1_part" className="navbar_s_col_part">
<ul>
<li><strong><a href="/ProductListPage.html">Smartphones & Tablets</a></strong></li>
<li><a href="#">I KALL</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<li><a href="#">Mi</a></li> 
<br />
<li><strong>Refurbished Smartphones</strong></li>
<br /><br />
<li><strong>Refurbished Feature Phones</strong></li>     
</ul>
</div>   */}