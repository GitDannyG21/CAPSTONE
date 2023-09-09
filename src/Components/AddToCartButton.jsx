import { useState } from "react";

export default function AddToCartButton() {
  let [quantity, setQuantity] = useState(0);

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
    if (quantity > 0) {
      alert(`${quantity} Items Successfully Added To Cart`);
      setQuantity(0);
      //   setTotalItems(totalItems + quantity);
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
