import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const GeneralRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllProducts category={"Men's Clothing"} />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default GeneralRoutes;
