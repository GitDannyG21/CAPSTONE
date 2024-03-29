import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsApi from "./ProductsApi";
import AddToCartButton from "./AddToCartButton";

export default function singleItem({
  setRender,
  render,
  cartItem,
  setCartItem,
  cartProduct,
  quantity,
  setQuantity,
  setCartProduct,
  singleProduct,
  setSingleProduct,
  products,
  cartArray,
  setCartArray,
}) {
  // const [item, setItem] = useState([]);

  let { id } = useParams();

  console.log(cartArray);

  useEffect(() => {
    async function getSingleProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        setSingleProduct(data);
        setRender(false);
        console.log(render);
      } catch (err) {
        console.error("trouble fetching product", err);
      }
    }
    getSingleProduct();
  }, []);

  return (
    <>
      {singleProduct && (
        <div className="SingleProductView">
          <br></br>

          <h3>{singleProduct.title}</h3>
          <br></br>
          <p>
            <img className="img1" src={singleProduct.image} />
          </p>
          <br></br>
          <p>${singleProduct.price}</p>

          <p>{singleProduct.description}</p>

          <AddToCartButton
            cartItem={cartItem}
            setCartItem={setCartItem}
            quantity={quantity}
            setQuantity={setQuantity}
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
            cartProduct={cartProduct}
            setCartProduct={setCartProduct}
            products={products}
            cartArray={cartArray}
            setCartArray={setCartArray}
          />

          <p></p>
        </div>
      )}
    </>
  );
}
