import React from "react";
// import { ProductsPage } from "./pages/ProductsPage";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
