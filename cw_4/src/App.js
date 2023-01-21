import "./App.css";

import GeneralRoutes from "./AllRoutes/GeneralRoutes";
import Payment from "./Pages/Payment/Payment";
import Mycart from "./Pages/Mycart/Mycart";
import Product from "./Pages/product/Product";

import Success from "./Pages/Payment/Success";



import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
   
      <Success/>
      <Mycart/>
        <Payment/>
      {/* <GeneralRoutes /> */}
    

      <GeneralRoutes />
    </div>
  );
}

export default App;
