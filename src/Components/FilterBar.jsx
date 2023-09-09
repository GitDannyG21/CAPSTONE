import { useState } from "react";
import SortBar from "./SortBar";
import SingleItemButton from "./SingleItemButton";

export default function FilterBar({ products, render, setRender }) {
  const [filter, setFilter] = useState("none");
  const [sortedArray, setSortedArray] = useState([]);
  async function testFunction(e) {
    console.log("filter", filter);
    setFilter(e.target.value);
    setRender(true);
    console.log(render);
    console.log(products);
    if (filter === "none") {
      setSortedArray(products);
    }

    if (filter === "500") {
      console.log("< 500 logic");
      const filterByCategory = [...products].filter(
        (product) => product.price > 500
      );
      console.log(filterByCategory);
      setSortedArray(filterByCategory);
      console.log("sorted Array Ascending Price", sortedArray);
    }

    if (filter === "100") {
      console.log(" < 100 logic");
      const filter100 = [...products].filter((product) => product.price > 100);
      console.log(filter100);
      setSortedArray(filter100);
      console.log("sorted Array descending price", sortedArray);
    }
  }
  return (
    <>
      <div className="FilterBar">
        {/* <form action="#"> */}
        <label htmlFor="Sort">Filter By: </label>

        <select
          onClick={testFunction}
          name="Sort"
          id="Sort"
          className="dropdownlist"
        >
          <option onClick={(e) => setSort(e.target.value)} value="none">
            None Selected
          </option>
          <option value="" disabled></option>
          <option onClick={(e) => setSort(e.target.value)} value="500">
            {" "}
            {/* {console.log(sort)} */}
            Price (Above $500)
          </option>
          <option value="" disabled></option>
          <option onSelect={(e) => setSort(e.target.value)} value="100">
            Price (Below $100)
          </option>
          <option value="" disabled></option>
        </select>
        {/* </form> */}
      </div>

      {/* <div className="sortedRender">
        {sortedArray.map((product) => {
          return (
            <div key={product.id} className="sortedBox">
              {product.title}
              <br></br>
              <br></br>
              <img src={product.image} />
              <br></br>
              <br></br>${product.price}
              <br></br>
              <br></br>
              <br></br>
              <SingleItemButton id={product.id} />
            </div>
          );
        })}
      </div> */}
    </>
  );
}
