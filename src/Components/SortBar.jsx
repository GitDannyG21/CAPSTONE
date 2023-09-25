import { useState, useEffect } from "react";
import SalePage from "./SalePage.jsx";
import { useNavigate } from "react-router-dom";
import SingleItemButton from "./SingleItemButton.jsx";
import FilterBar from "./FilterBar.jsx";

export default function SortBar({
  products,
  sort,
  setSort,
  render,
  setRender,
  sortedArray,
  setSortedArray,
}) {
  const navigate = useNavigate();
  // const [sort, setSort] = useState("");
  // const [sortedArray, setSortedArray] = useState([]);

  async function testFunction(e) {
    e.preventDefault();
    // console.log(sort);
    // setSort(sort);
    // console.log("current sort", sort);
    // console.log(render);
    setRender(true);

    if (sort === "no filter") {
      setSortedArray(products);

      setRender(false);
      // setRender(true);
      // console.log(sort);
    }

    if (sort === "Lowest Priced") {
      // console.log("lowest to highest logic");
      const ascendingSort = [...products].sort((a, b) => a.price - b.price);
      // console.log(ascendingSort);
      setSortedArray(ascendingSort);
      // setRender(true);
      console.log(sort);
      //   console.log("sorted Array Ascending Price", sortedArray);
      // return (
      //   <div className="sortedRender">
      //     {sortedArray.map((product) => {
      //       return (
      //         <div key={product.id} className="sortedBox">
      //           {product.title}
      //           <br></br>
      //           <br></br>
      //           <img src={product.image} />
      //           <br></br>
      //           <br></br>${product.price}
      //           <br></br>
      //           <br></br>
      //           <br></br>
      //           <SingleItemButton id={product.id} />
      //         </div>
      //       );
      //     })}
      //   </div>
      // );
    }

    if (sort === "Highest Priced") {
      // console.log("high to low logic");
      const descendingSort = [...products].sort((a, b) => b.price - a.price);
      // console.log(descendingSort);
      setSortedArray(descendingSort);
      // setRender(true);
      // console.log(sort);
      //   console.log("sorted Array descending price", sortedArray);
    }

    if (sort === "A/Z") {
      // console.log("A/Z by item");
      const atoZ = [...products].sort((a, b) => (a.title > b.title ? 1 : -1));
      // console.log(atoZ);
      setSortedArray(atoZ);
      // console.log(sort);
      // setRender(true);
      //   console.log("sorted Array a to z", sortedArray);
    }

    if (sort === "Over $500") {
      // console.log("< 500 logic");
      const filterByCategory = [...products].filter(
        (product) => product.price > 500
      );
      // console.log(filterByCategory);
      setSortedArray(filterByCategory);
      // setRender(true);
      // console.log("sorted Array Ascending Price", sortedArray);
    }

    if (sort === "Less than $100") {
      // console.log(" < 100 logic");
      const filter100 = [...products].filter((product) => product.price < 100);
      // console.log(filter100);
      // setRender(true);
      setSortedArray(filter100);
      // console.log("sorted Array descending price", sortedArray);
    }
  }

  //   console.log(sort);e => setSort(e.target.value)

  return (
    <>
      {/* I guess I need to make on click functions for each selection, only way I know how to do it right now */}
      <div className="SortBar">
        <form onSubmit={testFunction}>
          <label htmlFor="Sort">Sort/Filter by...{sort}... </label>{" "}
          <select
            name="Sort"
            id="Sort"
            className="dropdownlist"
            // defaultValue="none"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="no filter">None Selected</option>
            <option value="" disabled></option>
            <option value="Lowest Priced"> Sort By: Price (Lowest) </option>
            <option value="" disabled></option>
            <option value="Highest Priced">Price (Highest)</option>
            <option value="" disabled></option>
            <option value="A/Z"> Sort A/Z</option>
            <option value="" disabled></option>
            <option value="Over $500"> Price (Above $500)</option>
            <option value="" disabled></option>
            <option value="Less than $100">Price (Below $100)</option>
          </select>
          <button onSubmit={() => testFunction()} className="SelectButton">
            {" "}
            Select{" "}
          </button>
        </form>
      </div>
      <br></br>

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
