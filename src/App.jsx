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

  const [itemId, setItemId] = useState("id");
  const [render, setRender] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [singleProduct, setSingleProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [sort, setSort] = useState("");
  const [sortedArray, setSortedArray] = useState([]);
  const [cartArray, setCartArray] = useState([]);

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
              sort={sort}
              setSort={setSort}
              render={render}
              setRender={setRender}
              sortedArray={sortedArray}
              setSortedArray={setSortedArray}
              cartArray={cartArray}
              setCartArray={setCartArray}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <Cart
              token={token}
              cartItem={cartItem}
              setCartItem={setCartItem}
              products={products}
              isLoggedIn={isLoggedIn}
              singleProduct={singleProduct}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              setSingleProduct={setSingleProduct}
              cartArray={cartArray}
              setCartArray={setCartArray}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <SingleItemRender
              products={products}
              singleProduct={singleProduct}
              setSingleProduct={setSingleProduct}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              render={render}
              setRender={setRender}
              cartItem={cartItem}
              setCartItem={setCartItem}
              cartArray={cartArray}
              setCartArray={setCartArray}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />
        <Route
          path="/SingleItemButton"
          element={
            <SingleItemButton
              itemId={itemId}
              setItemId={setItemId}
              cartArray={cartArray}
              setCartArray={setCartArray}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />

        <Route
          path="/AddToCartButton"
          element={
            <AddToCartButton
              cartItem={cartItem}
              setCartItem={setCartItem}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
              singleProduct={singleProduct}
              setSingleProduct={setSingleProduct}
              cartArray={cartArray}
              setCartArray={setCartArray}
              products={products}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />
        <Route
          path="/Logout"
          element={<Logout setToken={setToken} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/SortBar"
          element={
            <SortBar
              setRender={setRender}
              sort={sort}
              setSort={setSort}
              sortedArray={sortedArray}
              setSortedArray={setSortedArray}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        />
        <Route
          path="/FilterBar"
          element={<FilterBar setRender={setRender} />}
        />
      </Routes>
    </>
  );
}

export default App;
