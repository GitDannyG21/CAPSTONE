import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar2 from "./Components/Navbar2.jsx";
import "./App.css";
import HomePage from "./Components/HomePage.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import SalePage from "./Components/SalePage.jsx";
import Cart from "./Components/Cart.jsx";
import ProductsApi from "./Components/ProductsApi.jsx";
import CartApi from "./Components/CartApi.jsx";
import SingleItemButton from "./Components/SingleItemButton.jsx";
import SingleItemRender from "./Components/SingleItemRender.jsx";
import AddToCartButton from "./Components/AddToCartButton.jsx";
import Logout from "./Components/Logout.jsx";
import SortBar from "./Components/SortBar.jsx";
import FilterBar from "./Components/FilterBar.jsx";
// let's try and make this more component oriented
// SAVE THIS FOR USING ROUTER DOM npm install react-router-dom localforage match-sorter sort-by
// Trying new format of making seperate file of fetch/helper functions, and exporting, for cleaner code

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [singleProdcut, setSingleProduct] = useState({});
  const [itemId, setItemId] = useState("id");
  const [render, setRender] = useState(null);
  const [sortedArray, setSortedArray] = useState([]);
  // I need to setItem local storage at log in or register pages, then pass through app
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setToken(token);
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Navbar2 isLoggedIn={isLoggedIn} setIsLoggedIn={setLoggedIn} />
      <br></br>
      {/* <HomePage /> */}
      {/* <CartApi /> */}

      <Routes>
        <Route
          path="/Login"
          element={
            <LoginPage
              token={token}
              setToken={setToken}
              setLoggedIn={setLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/" element={<HomePage token={token} />} />
        <Route
          path="/products"
          element={
            <SalePage
              token={token}
              setProducts={setProducts}
              products={products}
              setSingleProduct={setSingleProduct}
              render={render}
              setRender={setRender}
              setSortedArray={setSortedArray}
              sortedArray={sortedArray}
            />
          }
        />
        <Route path="/Cart" element={<Cart token={token} />} />
        <Route
          path="/products/:id"
          element={
            <SingleItemRender
              products={products}
              singleProdcut={singleProdcut}
              render={render}
              setRender={setRender}
            />
          }
        />
        <Route
          path="/SingleItemButton"
          element={<SingleItemButton itemId={itemId} setItemId={setItemId} />}
        />

        <Route path="/AddToCartButton" element={<AddToCartButton />} />
        <Route
          path="/Logout"
          element={<Logout setToken={setToken} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/SortBar"
          element={
            <SortBar
              setRender={setRender}
              setSortedArray={setSortedArray}
              sortedArray={sortedArray}
            />
          }
        />
        <Route
          path="/FilterBar"
          element={
            <FilterBar
              setRender={setRender}
              sortedArray={sortedArray}
              setSortedArray={setSortedArray}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
