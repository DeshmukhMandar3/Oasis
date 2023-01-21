
import React from "react";
import {Route, Routes} from "react-router-dom"

import Babycare from "../allproducts/Babycare";
import Foodandbeverage from "../allproducts/Foodandbeverage";
import Home from "../Home/Home";

const Allroutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
             <Route path="/babycare" element={<Babycare/>}></Route>
             <Route path="/foodandbeverage" element={<Foodandbeverage/>}></Route>
            </Routes>
        </div>
    )
}
export default Allroutes