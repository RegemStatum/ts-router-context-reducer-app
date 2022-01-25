import React from "react";
// app context
import { AppProvider } from "./context/AppContext";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import {
  ContactPage,
  HomePage,
  ErrorPage,
  ProductsPage,
  ProductPage,
} from "./pages";
// sass
import "./assets/scss/index.scss";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="products" element={<ProductsPage />}></Route>
          <Route path="products/:productId" element={<ProductPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
