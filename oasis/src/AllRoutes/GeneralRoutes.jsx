import React from "react";
import { Route, Routes } from "react-router-dom";

import Home1 from "../components/homePage/Home1";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Mycart from "../Pages/Mycart/Mycart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";

const GeneralRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/AllProducts/:category" element={<AllProducts />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Mycart />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default GeneralRoutes;
