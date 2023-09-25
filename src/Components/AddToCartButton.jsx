import { useState } from "react";
import Cart from "./Cart";
import { useParams } from "react-router-dom";

export default function AddToCartButton({
  cartItem,
  setCartItem,
  singleProduct,
  setSingleProduct,
  cartArray,
  setCartArray,
  products,
  cartProduct,
  setCartProduct,
  quantity,
  setQuantity,
}) {
  // let [quantity, setQuantity] = useState(0);
  let { id } = useParams();
  let userId = 4;

  // hard coding donero: ewedon user idk what else to do

  // let productId = id;
  // console.log(productId);

  const increase = async (e) => {
    setQuantity(quantity + 1);
  };

  const decrease = async (e) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // nothing happening first time I add to cart, what am I doing wrong?
  // I have ID in here, what to do with ID to get total quantity and price?
  // Maybe can post to api here and then base cart render off of posted API
  // Try to insert api post here

  // async function fetchUserCart(userId) {
  //   const res = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);

  //   const result = await res.json();
  //   console.log(result);
  // }

  // async function addToUserCart(userId) {
  //   const res = await fetch(`https://fakestoreapi.com/carts/${userId}`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       userId: 4,
  //       date: "date of today",
  //       products: [{ productId: productId, quantity: quantity }],
  //     }),
  //   });
  //   const result = await res.json();
  //   console.log(result);
  // }

  async function AddToCart(event) {
    event.preventDefault();
    let productId = id;
    console.log(quantity);

    console.log("PRODUCT ID", id);
    if (quantity > 0) {
      alert(`${quantity} Items Successfully Added To Cart`);

      // It says nothing real will update in  the database. So how am I to upload to api for checkout? Where do I go from here?
      // Do I save this to an api cart or no? Local Storage?
      // use push?

      console.log(quantity);
      console.log(singleProduct);
      setCartProduct({ ...singleProduct, quantity });
      console.log(cartProduct);
      const newArray = [...cartArray, { ...singleProduct, quantity }];
      setCartArray(newArray);
      console.log(newArray);
      console.log(cartArray);
      console.log(cartProduct);
      localStorage.setItem("cartArray", JSON.stringify(newArray));
      console.log(cartArray);
      setQuantity(0);
    }
  }

  //   I need to use user cart ID here somewhere, in order to add to that specific user cart ID

  return (
    <>
      <form onSubmit={AddToCart}>
        <br></br>
        <button className="button1">Add To Cart</button>
        <br></br>
        <br></br>
        <label htmlFor="Quantity">
          <p className="newFont"> Quantity Selected </p>
          <input
            className="quantity"
            placeholder={quantity}
            value={quantity}
            readOnly
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <button
            type="button"
            onClick={() => increase()}
            className="cartCounter"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => decrease()}
            className="cartCounter"
          >
            -
          </button>
        </label>
      </form>
    </>
  );
}
