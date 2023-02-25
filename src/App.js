import { useState } from "react";
import "./App.css";
import * as pages from "./pages/index.js";
import * as components from "./components/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let [cari, setCari] = useState("");
  let getCari = (q) => {
    setCari(q);
  };
  const testing = process.env.REACT_APP_TESTING;
  console.log(cari);
  console.log(testing);
  return (
    <div className="App">
      <Router>
        <components.Navigation search={getCari} />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/link" element={<pages.Category />} />
          <Route path="/profile" element={<pages.Profile />}>
            <Route path="user" element={<pages.User />} />
            <Route path="orders" element={<pages.Orders />} />
            <Route path="address" element={<pages.Address />} />
            <Route path="addAddress" element={<pages.AddAddress />} />
          </Route>
          <Route path="cart" element={<pages.Cart />} />
          <Route path="checkout" element={<pages.Checkout />} />
          <Route path="invoice" element={<pages.Invoice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
