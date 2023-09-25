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

  async function testFunction(e) {
    e.preventDefault();

    setRender(true);

    if (sort === "no filter") {
      setSortedArray(products);

      setRender(false);
    }

    if (sort === "Lowest Priced") {
      const ascendingSort = [...products].sort((a, b) => a.price - b.price);

      setSortedArray(ascendingSort);

      console.log(sort);
    }

    if (sort === "Highest Priced") {
      const descendingSort = [...products].sort((a, b) => b.price - a.price);

      setSortedArray(descendingSort);
    }

    if (sort === "A/Z") {
      const atoZ = [...products].sort((a, b) => (a.title > b.title ? 1 : -1));

      setSortedArray(atoZ);
    }

    if (sort === "Over $500") {
      const filterByCategory = [...products].filter(
        (product) => product.price > 500
      );

      setSortedArray(filterByCategory);
    }

    if (sort === "Less than $100") {
      const filter100 = [...products].filter((product) => product.price < 100);

      setSortedArray(filter100);
    }
  }

  return (
    <>
      <div className="SortBar">
        <form onSubmit={testFunction}>
          <label htmlFor="Sort">Sort/Filter by...{sort}... </label>{" "}
          <select
            name="Sort"
            id="Sort"
            className="dropdownlist"
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
    </>
  );
}
