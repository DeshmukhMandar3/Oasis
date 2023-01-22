import "./App.css";

import GeneralRoutes from "./AllRoutes/GeneralRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GeneralRoutes />
      <Footer />
    </div>
  );
}

export default App;
