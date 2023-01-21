import "./App.css";

import GeneralRoutes from "./AllRoutes/GeneralRoutes";
import Payment from "./Pages/Payment/Payment";
import Mycart from "./Pages/Mycart/Mycart";
import Product from "./Pages/product/Product";
import Success from "./Pages/Payment/Success";




function App() {
  return (
    <div className="App">
   
      <Success/>
      <Mycart/>
        <Payment/>
      {/* <GeneralRoutes /> */}
    

      <GeneralRoutes />
 main
    </div>
  );
}

export default App;
