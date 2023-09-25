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

  const increase = async (e) => {
    setQuantity(quantity + 1);
  };

  const decrease = async (e) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  async function AddToCart(event) {
    event.preventDefault();
    let productId = id;
    console.log(quantity);

    console.log("PRODUCT ID", id);
    if (quantity > 0) {
      alert(`${quantity} Items Successfully Added To Cart`);

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
