import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Home from "./routes/Home";
import Marketplace from "./routes/Marketplace";
import Form from "./routes/Form";
import Commisions from "./routes/Commission";
import Footer from "./component/Footer";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Marketplace" element={<Marketplace />}></Route>
        <Route path="Commission" element={<Commisions />}></Route>
        <Route path="Form" element={<Form />}></Route>
      </Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

