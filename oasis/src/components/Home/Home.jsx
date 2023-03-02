import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import lefticon from "../sources/lefticons.png";
import rigthicon from "../sources/righticons.png";
import gadget_data from "../data/gadgetdata";
import deals_data from "../data/dealsdata";
import daily_essential_data from "../data/dailyessentialdata";
import prime_mall_data from "../data/primemalldata";
import festive_data from "../data/festivedata";
import trending_data from "../data/trendingdata";
import sports_data from "../data/sportsdata";
import brand_data from "../data/branddata";
import branded_deal_data from "../data/brandeddealdata";
import Footer from "../Footer/Footer";
import { useToast } from "@chakra-ui/react";
// console.log(gadget_data)

const Home = () => {
  const handleclickicon = (direction) => {
    const slider = document.getElementsByClassName(
      "home_gadgets_store_gadget"
    )[0];
    if (direction === "left") {
      slider.scrollBy(-400, 0);
    } else {
      slider.scrollBy(400, 0);
    }
  };

  const toast = useToast();

  React.useEffect(() => {
    toast({
      title: "Allow Insecure Content",
      description:
        "To see all Products in the website, Kindly allow insecure Content from your browser setting.",
      status: "warning",
      isClosable: true,
      duration: 150000,
      position: "top",
    });
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      {/* home first part  */}
      <div className="just_after_navbar_section">
        <div class="sliding_after_navbar_section">
          <div class="sliding_images_navbar_section"></div>
          <div class="sliding_images_name_navbar_section">
            <div id="sliding_name_first_navbar123">
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
        <div class="after_nav_secondpart">
          <img
            src="https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum1_SYM_06Dec22.jpg"
            alt=""
          />
          <div class="single_line_navbar_section"></div>
          <img
            src="https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum2_SYM_06Dec22.jpg"
            alt=""
          />
          <div class="single_line_navbar_section"></div>
          <img
            src="https://cdn.shopclues.com/images/banners/2022/dec/02/Platinum3_Esha_2ndDec22.jpg"
            alt=""
          />
        </div>
      </div>

      {/* home 2nd part */}
      <div class="home_six_div_part">
        <div class="home_first_three_inside_three">
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/Diet&Nutrition_ColorGold_3rdJune_PR.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/goldbanner_Beauty_3rdJune_PR.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/goldbanner_WaterBottles_3rdJune_PR.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="home_second_three_inside_three">
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_01.jpg"
              alt=""
            />
          </div>
          <div class="home_single_vertical_line"></div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg"
              alt=""
            />
          </div>
          <div class="home_single_vertical_line"></div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_03.jpg"
              alt=""
            />
          </div>
          <div class="home_single_vertical_line"></div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_04.jpg"
              alt=""
            />
          </div>
          <div class="home_single_vertical_line"></div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_05.jpg"
              alt=""
            />
          </div>
          <div class="home_single_vertical_line"></div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_03.jpg"
              alt=""
            />
          </div>
          <div class="home_single_vertical_line"></div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg"
              alt=""
            />
          </div>
          <div class="home_single_vertical_line"></div>
          <div>
            <img
              src="https://cdn.shopclues.com/images/banners/goldbanner_Beauty_3rdJune_PR.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* home 3rd part */}
      <div className="home_items_section_all">
        {/* gadgets store div */}
        <h1>Your Gadgets Store</h1>
        <div className="item_home_div_all_gadget">
          {/* btn lfet */}
          <div
            className="home_arrow_btn home_left_icon"
            onClick={() => handleclickicon("left")}
          >
            <img src={lefticon} alt="left" />
          </div>

          <div className="home_gadgets_store_gadget">
            {gadget_data.map((el, ind) => {
              return (
                <div className="home_gadgets_childdiv">
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  <div className="home_price_div_gadget">
                    <p>{`₹${el.p1}`}</p>

                    <p>{`₹${el.p3}`}</p>
                  </div>
                  <p className="home_discount_price_divplus_gadget">{el.dis}</p>
                </div>
              );
            })}
          </div>
          <div
            className="home_arrow_btn home_rigth_icon"
            onClick={() => handleclickicon("right")}
          >
            <img src={rigthicon} alt="rigth" />
          </div>
        </div>

        {/* deals of the day div */}
        <h1>Deals of the Day</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store">
            {deals_data.map((el, ind) => {
              return (
                <div className="home_gadgets_childdiv">
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  <div className="home_price_div home_deals_price_p">
                    <p>{`₹${el.p1}`}</p>
                    <p>{`₹${el.p3}`}</p>
                  </div>
                  <p className="home_discount_price_divplus home_deals_price_plus">
                    {el.dis}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* daily essentials div */}
        <h1>Daily Essentials</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store home_daily_essentials_main">
            {daily_essential_data.map((el, ind) => {
              return (
                <div
                  className="home_gadgets_childdiv"
                  id="home_daily_essential_childdiv"
                >
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  {/* <div className="home_price_div home_deals_price_p">
          <p>{`₹${el.p1}`}</p>
         <p>{`₹${el.p3}`}</p>
        </div> */}
                  <p className="daily_essentials_p_home">{el.p3}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* prime mall div */}
        <h1>Prime Mall</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store">
            {prime_mall_data.map((el, ind) => {
              return (
                <div className="home_gadgets_childdiv">
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  <div className="home_price_div home_deals_price_p">
                    <p></p>
                    <p>{`₹${el.p3}`}</p>
                  </div>
                  <p className="home_discount_price_divplus home_deals_price_plus">
                    {el.dis}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* festive specials div */}
        <h1>Festive Specials</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store home_daily_essentials_main">
            {festive_data.map((el, ind) => {
              return (
                <div
                  className="home_gadgets_childdiv"
                  id="home_daily_essential_childdiv"
                >
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  {/* <div className="home_price_div home_deals_price_p">
          <p>{`₹${el.p1}`}</p>
         <p>{`₹${el.p3}`}</p>
        </div> */}
                  <p className="daily_essentials_p_home">{el.p3}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* trending div */}
        <h1>Trending Fashion Zone</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store">
            {trending_data.map((el, ind) => {
              return (
                <div className="home_gadgets_childdiv">
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  <div className="home_price_div home_deals_price_p">
                    <p>{`₹${el.p2}`}</p>
                    <p>{`₹${el.p3}`}</p>
                  </div>
                  <p className="home_discount_price_divplus home_deals_price_plus">
                    {el.dis}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* sport and health div */}
        <h1>Sports & Health</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store home_daily_essentials_main">
            {sports_data.map((el, ind) => {
              return (
                <div
                  className="home_gadgets_childdiv"
                  id="home_daily_essential_childdiv"
                >
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  {/* <div className="home_price_div home_deals_price_p">
          <p>{`₹${el.p1}`}</p>
         <p>{`₹${el.p3}`}</p>
        </div> */}
                  <p className="daily_essentials_p_home">{el.dis}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* brand  div */}
        <h1>Brand Store</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store home_daily_essentials_main">
            {brand_data.map((el, ind) => {
              return (
                <div
                  className="home_gadgets_childdiv"
                  id="home_daily_essential_childdiv"
                >
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  {/* <div className="home_price_div home_deals_price_p">
          <p>{`₹${el.p1}`}</p>
         <p>{`₹${el.p3}`}</p>
        </div> */}
                  <p className="daily_essentials_p_home">{el.dis}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* branded deals div */}
        <h1>Branded Deals</h1>
        <div className="item_home_div_all">
          <div className="home_gadgets_store">
            {branded_deal_data.map((el, ind) => {
              return (
                <div className="home_gadgets_childdiv">
                  <img src={el.img} alt="" />
                  <p className="home_nameofpro_part">{el.name}</p>
                  <div className="home_price_div home_deals_price_p">
                    <p>{`₹${el.p1}`}</p>
                    <p>{`₹${el.p3}`}</p>
                  </div>
                  <p className="home_discount_price_divplus home_deals_price_plus">
                    {el.dis}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};
export default Home;
