import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css"

const Home=()=>{
    return(
        <>
<Navbar/>

<div class="just_after_nav">
      <div class="sliding_after_nav">
        <div class="sliding_images"></div>
        <div class="sliding_images_name">
          <div id="sliding_name_first">
            <p>Refurbished Smartphones</p>
            
          </div>
          <div>
            <p>Mens Clothing</p>
            
          </div>
          <div>
            <p>Prebuzz</p>
            
          </div>
          <div>
            <p>JMAX Smartphones</p>
           
          </div>
          <div>
            <p>Intel</p>
            
          </div>
        </div>
      </div>
      <div class="recommodation_after_nav">
        <img
          src="https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum1_SYM_06Dec22.jpg"
          alt=""
        />
        <div class="single_line"></div>
        <img
          src="https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum2_SYM_06Dec22.jpg"
          alt=""
        />
        <div class="single_line"></div>
        <img
          src="https://cdn.shopclues.com/images/banners/2022/dec/02/Platinum3_Esha_2ndDec22.jpg"
          alt=""
        />
      </div>
    </div>
</>
    )
}
export default Home