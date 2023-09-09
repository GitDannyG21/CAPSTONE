import { Link, useNavigate } from "react-router-dom";
import ProductsApi from "./ProductsApi";
import getAllProducts from "./ProductsApi";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import SingleItemButton from "./SingleItemButton";
import SortBar from "./SortBar";

export default function SalePage({ setProducts, products, render, setRender }) {
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  // console.log("test");
  // // console.log(products);
  // console.log(render);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // console.log("data", data);
        setProducts(data);
        // console.log("in this function");
        // console.log(products);
        // return products;
      } catch (err) {
        console.error("trouble fetching products", err);
      }
    };
    getAllProducts();
  }),
    [products];

  // console.log(products);
  // After rendering all items, link individual items to a different page including description and add to cart functionality
  // Can work on sort/filter functionality while login functionality is down

  return (
    <>
      {render ? (
        <>
          <h1 className="SaleHeader">Items Currently For Sale</h1>
          <br></br>
          <SortBar products={products} render={render} setRender={setRender} />
          <br></br>
        </>
      ) : (
        <>
          <h1 className="SaleHeader">Items Currently For Sale</h1>
          <br></br>
          <SortBar products={products} render={render} setRender={setRender} />
          {/* <br></br> */}
          <div className="ProductsPage">
            {products.map((product) => {
              return (
                <div className="productBox" key={product.id}>
                  {" "}
                  <div>
                    {product.title}
                    <br></br>
                    <br></br>
                    <img
                      onClick={() => navigate(`/`)}
                      src={product.image}
                    />{" "}
                    <br></br>
                    <br></br>${product.price}
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* {product.id} */}
                    <SingleItemButton id={product.id} />
                  </div>
                </div>
              );
            })}
          </div>
          ;
        </>
      )}
    </>
  );
}

//
