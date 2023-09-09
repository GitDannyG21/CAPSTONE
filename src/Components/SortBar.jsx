import { useState } from "react";
import SalePage from "./SalePage.jsx";
import { useNavigate } from "react-router-dom";
import SingleItemButton from "./SingleItemButton.jsx";

export default function SortBar({ products, render, setRender }) {
  const navigate = useNavigate();
  const [sort, setSort] = useState("none");
  const [sortedArray, setSortedArray] = useState([]);
  async function testFunction(e) {
    console.log(sort);
    setSort(e.target.value);
    setRender(true);
    console.log(render);

    if (sort === "none") {
      setSortedArray(products);
    }

    if (sort === "lowest") {
      console.log("lowest to highest logic");
      const ascendingSort = [...products].sort((a, b) => a.price - b.price);
      console.log(ascendingSort);
      setSortedArray(ascendingSort);
      //   console.log("sorted Array Ascending Price", sortedArray);
    }

    if (sort === "highest") {
      console.log("high to low logic");
      const descendingSort = [...products].sort((a, b) => b.price - a.price);
      console.log(descendingSort);
      setSortedArray(descendingSort);
      //   console.log("sorted Array descending price", sortedArray);
    }

    if (sort === "A/Z") {
      console.log("A/Z by item");
      const atoZ = [...products].sort((a, b) => (a.title > b.title ? 1 : -1));
      console.log(atoZ);
      setSortedArray(atoZ);
      //   console.log("sorted Array a to z", sortedArray);
    }
  }

  //   console.log(sort);

  return (
    <>
      {/* I guess I need to make on click functions for each selection, only way I know how to do it right now */}
      <div className="SortBar">
        <form action="#">
          <label htmlFor="Sort">Sort by: </label>
          <br></br>
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
            <option onClick={(e) => setSort(e.target.value)} value="lowest">
              {" "}
              {/* {console.log(sort)} */}
              Sort By: Price (Lowest){" "}
            </option>
            <option value="" disabled></option>
            <option onSelect={(e) => setSort(e.target.value)} value="highest">
              Price (Highest)
            </option>
            <option value="" disabled></option>
            <option onClick={(e) => setSort(e.target.value)} value="A/Z">
              {" "}
              Sort A/Z
            </option>
          </select>
        </form>
      </div>
      <br></br>

      <div className="sortedRender">
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
      </div>
    </>
  );
}
