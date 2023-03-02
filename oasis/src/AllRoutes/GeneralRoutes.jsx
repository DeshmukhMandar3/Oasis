import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Mycart from "../Pages/Mycart/Mycart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";

const GeneralRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/AllProducts/:category"
          element={
            <PrivateRoutes>
              <AllProducts />
            </PrivateRoutes>
          }
        />
        <Route
          path="/ProductDetails/:id"
          element={
            <PrivateRoutes>
              <ProductDetails />
            </PrivateRoutes>
          }
        />
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