import React from "react";
import "./Navbar.css";
import logoimg from "../sources/prologo.jpg";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// search functionality function
export const fetchDataBySearch = async (query, page) => {
  console.log("query 11", query);
  let res = await fetch(
    `https://backend-cw-4.onrender.com/Products?q=${query}&_page=${page}&_limit=10`
  );
  res = await res.json();
  return res;
};

const Navbar = () => {
  // search functionality state manage and function call
  const [query, setQuery] = useState("");
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    try {
      if (query !== "") {
        console.log("query 27", query);
        fetchDataBySearch(query, page).then((res) => {
          console.log(res);
          setdata(res);
        });
      }
    } catch (error) {
      console.log("error:", error);
    }
  }, [query, page]);

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
              <div className="search_div_box_start_nav_second_div">
                <NavLink
                  className="search_div_functionality_nav"
                  to={`/ProductDetails/${el.id}`}
                  key={el.id}
                >
                  {/* <img src={el.product_url} alt="products" /> */}
                  <h2>{el.product_name}</h2>
                  <p>{el.discounted_price}</p>
                </NavLink>
              </div>
              <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                Prev
              </button>
              <button onClick={() => setPage(page + 1)}>Next</button>
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
              <a href="#">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </li>

            <li id="navbar_signin_section_first">
              <a href="#">Sign In</a>
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
        <Link to="/foodandbeverage" className="navbar_third_section_link">
          Food and Beverage
        </Link>
        <Link to="/" className="navbar_third_section_link">
          Home Cleaning
        </Link>
        <Link to="/" className="navbar_third_section_link">
          Personal Hygiene
        </Link>
        <Link to="/" className="navbar_third_section_link">
          Kitchen & Dining
        </Link>
        <Link to="/" className="navbar_third_section_link">
          Mobile Accessories
        </Link>
        <Link to="/" className="navbar_third_section_link">
          Refurbished Mobiles
        </Link>
        <Link to="/" className="navbar_third_section_link">
          Women Care
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