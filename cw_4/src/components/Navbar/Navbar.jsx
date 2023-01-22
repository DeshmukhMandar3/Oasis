import React from "react";
import "./Navbar.css";
import logoimg from "../sources/prologo.jpg";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Logout from "../Authentication/Logout";
import { Authcontext } from "../../AllContexts/AuthContext";
import { useContext } from "react";
import {GiCrossMark} from "react-icons/gi"


// search functionality function
export const fetchDataBySearch = async (category, page) => {
  // console.log("query 11", query);
  let res = await fetch(
    `https://backend-cw-4.onrender.com/Products?product_category_tree_like=${category}&_page=${page}&_limit=10`
  );
  res = await res.json();
  return res;
};
// Products?q=${query}

const Navbar = () => {
  const { auth} = useContext(Authcontext);
  console.log(auth)
  // search functionality state manage and function call
  const [category, setQuery] = useState("");
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const cartfun=()=>{
    if(auth)
    {
     window.location.href="/Mycart"
     }
    else{
      alert("first login")
    }
  }
  // const [toggle, settoggle]= useState(false)
  useEffect(() => {
    try {
      if (category !== "") {
        // console.log("query 27", query);
        fetchDataBySearch(category, page).then((res) => {
          console.log(res);
          setdata(res);
        });
      }
    } catch (error) {
      console.log("error:", error);
    }
  }, [category, page]);

  return (
    <>
      {/* navbar 1st part */}

      <div className="navbar_1st_part_div">
      
        <div className="navbar_app_part">
       

          <ul>
          <li><Logout /></li>
            <li>Sell With Us</li>
            <li>Call Us</li>
            <li>Download App</li>
          </ul>
        </div>

        {/* website logo */}

        <div className="navbar_website_logo">
          <a href="/">
            <img src={logoimg} alt="logo" />
          </a>
        </div>

        {/* seacrh box */}

        <div className="navbar_search_box">
          <span>
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What is on your mind today?"
            />
            <button className="navbar_srch_btn">Search</button>
          </span>
        </div>
        {/* search functionality start*/}
        {data.map((el) => {
          return (
            <div className="search_div_box_start_nav">
              <div className="search_div_box_start_nav_second_div" >
                <NavLink
                  className="search_div_functionality_nav"
                  to={`/AllProducts/${el.id}`}
                  key={el.id}
                >
                  {/* <img src={el.product_url} alt="products" /> */}
                  <h2>{el.product_name}</h2>
                  <p>{`Price:${el.discounted_price}`}</p>
                </NavLink>
              </div>
              <button
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
                style={{
                  border: "1px solid #24a3b5",
                  width: "50px",
                  background: "#24a3b5",
                  color: "white",
                }}
              >
                Prev
              </button>
              <button
                onClick={() => setPage(page + 1)}
                style={{
                  border: "1px solid #24a3b5",
                  marginLeft: "10px",
                  width: "50px",
                  background: "#24a3b5",
                  color: "white",
                }}
              >
                Next
              </button>
            </div>
          );
        })}
        {/* search functionality end*/}

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
            
              
             
              <i class="fa-solid fa-cart-shopping" onClick={cartfun}></i>
         
            
            
</li>
           

            <li id="navbar_signin_section_first">
              <div class="navbar_hover_content_first">
                <div id="navbar_userHeading_part">
                  <i class="fa-regular fa-user"></i>
                  <span>Login/Register</span>
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

        {/* <div className="navbar_logout_btn_new">
          {" "}
          <Logout />
        </div> */}

      </div>
      {/* navbar 1st part completed */}

      {/* 2nd part navbar dropdown section start */}
      <div className="navbar_second_dropdown_main">
        <div id="navbar_dropdown_child">
          <ul>
            {/* made in india logo */}
            <li id="navbar_madein_insia_logo">
              <a href="">
                <img
                  src="https://images.shopclues.com/images/ui/madeinindia.png"
                  alt="madeInIndia"
                />
              </a>
            </li>

            {/* Mobiles & More dropdown options */}
            <li id="navbar_dropdown1_part">
              <a href="#allproducts">mobiles & more</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">Men</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">women</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">home & kitchen</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">appliances</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">sports & more</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">essentials</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">offers</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>

            <li id="navbar_dropdown1_part">
              <a href="#">global shopping</a>
              <div className="navbar_menu_wrap_part">
                <div className="navbar_ul_menu_block_part"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* End of Mobiles & More dropdown options */}

      {/* navbar third section start */}
      <div id="navbar_third_setion_start">
        <Link to="/AllProducts/baby care" className="navbar_third_section_link">
          Baby Care
        </Link>
        <Link to="/AllProducts/Clothing" className="navbar_third_section_link">
          Clothing
        </Link>
        <Link
          to="/AllProducts/Home Cleaning"
          className="navbar_third_section_link"
        >
          Home Cleaning
        </Link>
        <Link to="/AllProducts/Home" className="navbar_third_section_link">
          Home Accessories
        </Link>
        <Link
          to="/AllProducts/Kitchen & Dining"
          className="navbar_third_section_link"
        >
          Kitchen & Dining
        </Link>
        <Link
          to="/AllProducts/Mobile Accessories"
          className="navbar_third_section_link"
        >
          Mobile Accessories
        </Link>
        <Link
          to="/AllProducts/Automotive"
          className="navbar_third_section_link"
        >
          Automotive
        </Link>
        <Link
          to="/AllProducts/Sports & Fitness"
          className="navbar_third_section_link"
        >
          Sports & Fitness
        </Link>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div id="navbar_column_1_part" className="navbar_s_col_part">
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
</div>   */
}
