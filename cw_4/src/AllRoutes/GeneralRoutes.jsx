import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../components/AllProducts/AllProducts";

const GeneralRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllProducts category={"Western Wear"} />} />
      </Routes>
    </div>
  );
};

export default GeneralRoutes;
