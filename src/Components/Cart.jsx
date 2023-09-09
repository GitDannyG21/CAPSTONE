import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

export default function Cart({ token, IsLoggedIn, quantity }) {
  return (
    <>
      <div className="CartView">
        <h1>View Cart</h1>
        {console.log("token", token)}
        {console.log(quantity)}
      </div>
    </>
  );
}
