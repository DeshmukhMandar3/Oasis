import "./App.css";

import GeneralRoutes from "./AllRoutes/GeneralRoutes";
import Payment from "./Pages/Payment/Payment";
import Mycart from "./Pages/Mycart/Mycart";
import Product from "./Pages/product/Product";




function App() {
  return (
    <div className="App">
      
      <Mycart/>
        <Payment/>
      {/* <GeneralRoutes /> */}
    
    </div>
  );
}

export default App;
