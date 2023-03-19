/** @format */

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from ".././src/Components/Home";
import About from ".././src/Components/About";
import Products from ".././src/Components/Products";
import Contact from ".././src/Components/Contact";
import ProductsDetail from "./Components/ProductsDetail";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  const MessageShow = () => {
    return (
      <>
        <div className="container text-center mt-5 bg-white shadow-lg py-5">
          <div className="row ">
            <div className="col-12">
              <p className="fw-bold text-danger  fs-3">
                please login to continue.....
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <MessageShow />}
        />
      </Routes>
    </div>
  );
}

export default App;
