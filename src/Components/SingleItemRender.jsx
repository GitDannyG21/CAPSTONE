import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsApi from "./ProductsApi";
import AddToCartButton from "./AddToCartButton";

export default function singleItem({ setRender, render }) {
  const [item, setItem] = useState([]);

  let { id } = useParams();
  //   console.log("id", id);
  //   console.log(products);
  //   console.log(products);
  //   useEffect(
  //     () =>
  //       async function getSingleProduct() {
  //         try {
  //           const response = await fetch(`${baseURL}/products/${id}`);
  //           const data = await response.json();
  //           console.log(data);
  //         } catch (err) {
  //           //   console.error("trouble fetching product", err);
  //         }
  //         getSingleProduct();
  //       },
  //     []
  //   );
  useEffect(() => {
    async function getSingleProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        setItem(data);
        setRender(false);
        console.log(render);
      } catch (err) {
        console.error("trouble fetching product", err);
      }
    }
    getSingleProduct();
  }, []);

  //   console.log(item);

  return (
    <>
      <div className="SingleProductView">
        {/* <h1> Single Item View</h1> */}
        <br></br>

        <h3>{item.title}</h3>
        <br></br>
        <p>
          <img src={item.image} />
        </p>
        <br></br>
        <p>${item.price}</p>

        <p>{item.description}</p>

        <AddToCartButton />

        <p></p>
      </div>
    </>
  );
}
