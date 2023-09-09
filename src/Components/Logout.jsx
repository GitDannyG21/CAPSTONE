import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ token, setToken, isLoggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("logout");
    setToken(null);
    setLoggedIn(false);
    alert("Successfully Logged Out");
  }, []);

  return <></>;
}
