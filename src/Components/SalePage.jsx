import { Link, useNavigate } from "react-router-dom";
import ProductsApi from "./ProductsApi";
import getAllProducts from "./ProductsApi";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import SingleItemButton from "./SingleItemButton";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";

// gonna just combined sort and filter for now

export default function SalePage({
  setProducts,
  products,
  quantity,
  setQuantity,
  render,
  sort,
  setSort,
  setRender,
  sortedArray,
  setSortedArray,
  cartArray,
  setCartArray,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);
        console.log("in this function");
      } catch (err) {
        console.error("trouble fetching products", err);
      }
    };
    getAllProducts();
  }, []);

  // console.log(products);
  // After rendering all items, link individual items to a different page including description and add to cart functionality
  // Can work on sort/filter functionality while login functionality is down

  console.log("current cart array", cartArray);

  return (
    <>
      {render ? (
        <>
          <h1 className="SaleHeader">Items Currently For Sale, Test</h1>{" "}
          {console.log("current render", render)}
          <div className="firstRender">
            <br></br>

            <SortBar
              products={products}
              render={render}
              quantity={quantity}
              setQuantity={setQuantity}
              setRender={setRender}
              sortedArray={sortedArray}
              setSortedArray={setSortedArray}
              sort={sort}
              setSort={setSort}
              cartArray={cartArray}
              setCartArray={setCartArray}
            />
          </div>
          <div className="sortedRender">
            {sortedArray.map((product) => {
              return (
                <div key={product.id} className="sortedBox">
                  {product.title}
                  <br></br>
                  <br></br>
                  <img src={product.image} />
                  <br></br>
                  <br></br>${product.price.toFixed(2)}
                  <br></br>
                  <br></br>
                  <br></br>
                  <SingleItemButton
                    id={product.id}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    products={products}
                    cartArray={cartArray}
                    setCartArray={setCartArray}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h1 className="SaleHeader">Items Currently For Sale</h1>{" "}
          {/* {console.log("current render", render)} */}
          <br></br>
          <SortBar
            products={products}
            render={render}
            sort={sort}
            setSort={setSort}
            setRender={setRender}
            quantity={quantity}
            setQuantity={setQuantity}
            sortedArray={sortedArray}
            setSortedArray={setSortedArray}
            cartArray={cartArray}
            setCartArray={setCartArray}
            // sort={sort}
            // setSort={setSort}
          />
          {/* <FilterBar /> */}
          {/* <br></br> */}
          <div className="ProductsPage">
            {" "}
            {/* {console.log(render)} {console.log(products)} */}
            {products.map((product) => {
              return (
                <div className="productBox" key={product.id}>
                  {" "}
                  <div>
                    {product.title}
                    <br></br>
                    <br></br>
                    <img
                      className="img1"
                      // onClick={() => navigate(`/`)}
                      src={product.image}
                    />{" "}
                    <br></br>
                    <br></br>${product.price.toFixed(2)}
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* {product.id} */}
                    <SingleItemButton
                      id={product.id}
                      products={products}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      cartArray={cartArray}
                      setCartArray={setCartArray}
                    />
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
