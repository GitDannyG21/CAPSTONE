import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { useParams } from "react-router-dom";

export default function Cart({
  token,
  isLoggedIn,
  quantity,
  setQuantity,
  setCartItem,
  cartItem,
  products,
  singleProduct,
  setSingleProduct,
  cartArray,
  setCartArray,
  cartProduct,
  setCartProduct,
}) {
  console.log(cartItem);
  console.log(singleProduct);
  console.log(cartArray);
  console.log(cartProduct);
  console.log(isLoggedIn);

  const cartTotal = cartArray
    .reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    )
    .toFixed(2);

  let [cartQuantity, setCartQuantity] = useState(cartProduct.quantity);
  let { id } = useParams();
  // Clear cart button intact, now need to add logic for adding price and totals, and ofc the check out button
  // Also add barrier to check out, user must be logged in to account prior to checking out
  // Somehow get information from products (price, quantity, maybe a small image) and add for a check out display
  // Create a state object? Pass by props?
  // Obs
  // Need to be able to access and change quantity on this page as well, added "Quantity" element to singleProduct object, access through there
  // Map through "cartArray", and make a new div for each cart item, totalling price * quantity
  // Make Api call right away?
  // How do I get cart to save? Post to Api right away?

  // 3 current problems, array is mapping over an empty undefined element, can't access quantity on cart page, yet to save cart upon closing window

  // Try conditional rendering for single Product

  // consider using lcoal storage for cart

  // async function fetchUserCart(userId) {
  //   const res = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);

  //   const result = await res.json();
  //   console.log(result);
  // }

  // fetchUserCart(4);

  // how to total the different subtotals?

  // last few minor problems,

  // So what can I do about keeping cart in session storage? Talk to instructor

  const finalSelection = async (quantity) => {};

  const increase = async (productId) => {
    const newCartArray = [...cartArray];
    const index = newCartArray.findIndex((element) => {
      return element.id === productId;
    });
    newCartArray[index].quantity = newCartArray[index].quantity + 1;
    console.log(index);
    console.log(newCartArray);
    setCartArray(newCartArray);
  };

  const decrease = async (productId) => {
    const newCartArray = [...cartArray];
    const index = newCartArray.findIndex((element) => {
      return element.id === productId;
    });
    newCartArray[index].quantity = newCartArray[index].quantity - 1;
    console.log(index);
    console.log(newCartArray);
    setCartArray(newCartArray);
  };

  async function removeFromCart(productId) {
    const newArray = [...cartArray];
    const index = newArray.findIndex((element) => {
      return element.id === productId;
    });
    newArray.splice(index, 1);
    setCartArray(newArray);
  }

  async function clearCart(e) {
    console.log(cartItem);
    cartItem = 0;
    console.log(cartItem);

    setCartItem(cartItem);
    setCartArray([]);
    setCartProduct([]);
    setSingleProduct([]);
    const clearCart = JSON.parse(localStorage.getItem("cartArray"));
    // localStorage.setItem("cartArray", cartArray);
  }

  async function checkoutFunction(e) {
    if (isLoggedIn && cartArray.length > 0) {
      alert("Purchase Completed");
    }
    if (cartArray.length === 0) {
      alert("No items in cart");
    }
    if (!isLoggedIn) {
      alert("Must be logged in to checkout");
    }
  }

  console.log(cartItem);

  return (
    <>
      <div className="cartHeader">
        <h1>View Cart</h1>
        <h3> Cart Grand Total: ${cartTotal} </h3>
        <br></br>
      </div>

      {cartProduct ? (
        <>
          <div className="CartPage">
            {" "}
            {cartArray.map((cart) => {
              return (
                <div className="CartBox" key={cart.id}>
                  {" "}
                  <div>
                    {cart.title}
                    <br></br>
                    <br></br>
                    <img className="cartIMG" src={cart.image} />
                    <br></br>
                    <br></br>${cart.price.toFixed(2)}
                    <br></br>
                    Subotal: $
                    {(cart.price.toFixed(2) * cart.quantity).toFixed(2)}
                    <br></br>
                    <br></br>
                    <form className="cartChange">
                      <label htmlFor="Quantity">
                        <br></br>
                        <br></br>
                        <button
                          type="button"
                          onClick={() => increase(cart.id)}
                          className="cartCounter"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => decrease(cart.id)}
                          className="cartCounter"
                        >
                          -
                        </button>
                        <p className="newFont"> Quantity Selected </p>
                        <input
                          className="quantity"
                          placeholder={cart.quantity}
                          value={cart.quantity}
                          readOnly
                        ></input>
                        <br></br>
                        <br></br>
                        <button onClick={() => removeFromCart(cart.id)}>
                          Remove Item From Cart
                        </button>
                      </label>
                    </form>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              );
            })}
          </div>
          <br></br>

          <div className="buttonBox">
            <br></br>
            Total: $ {cartTotal}
            <br></br>
            <br></br>
            <button type="submit" onClick={clearCart}>
              {" "}
              {console.log(cartItem)}
              Clear Cart
            </button>
            <br></br>
            <br></br>
            <button type="submit" onClick={checkoutFunction}>
              Proceed to Checkout{" "}
            </button>
          </div>
        </>
      ) : (
        <>"No Items In Cart"</>
      )}
    </>
  );
}
