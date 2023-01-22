import React from "react";
import ReactDOM from "react-dom/client";
import { createStandaloneToast } from "@chakra-ui/toast";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Authcontextprovider from "./AllContexts/AuthContext";

const { ToastContainer, toast } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Authcontextprovider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
        <ToastContainer />
      </ChakraProvider>
    </BrowserRouter>
  </Authcontextprovider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
