import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../AllProducts/AllProducts";

const GeneralRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllProducts />} />
      </Routes>
    </div>
  );
};

export default GeneralRoutes;
