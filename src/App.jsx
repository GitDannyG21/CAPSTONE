import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar2 from "./Components/Navbar2.jsx";
import "./App.css";
import HomePage from "./Components/HomePage.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import SalePage from "./Components/SalePage.jsx";
import Cart from "./Components/Cart.jsx";
// let's try and make this more component oriented
// SAVE THIS FOR USING ROUTER DOM npm install react-router-dom localforage match-sorter sort-by
// Trying new format of making seperate file of fetch/helper functions, and exporting, for cleaner code

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

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

      <Routes>
        <Route path="/Login" element={<LoginPage token={token} />} />
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/SalePage" element={<SalePage token={token} />} />
        <Route path="/Cart" element={<Cart token={token} />} />
      </Routes>
    </>
  );
}

export default App;
