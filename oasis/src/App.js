import "./App.css";

import GeneralRoutes from "./AllRoutes/GeneralRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer1 from "./components/Footer/Footer1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GeneralRoutes />
      <Footer1 />
    </div>
  );
}

export default App;
