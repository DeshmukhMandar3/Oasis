import "./App.css";

import GeneralRoutes from "./AllRoutes/GeneralRoutes";
import Navbar1 from "./components/Navbar/Navbar1";
import Footer1 from "./components/Footer/Footer1";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <GeneralRoutes />
      <Footer1 />
    </div>
  );
}

export default App;
