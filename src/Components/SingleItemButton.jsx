import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SingleItemRender from "./SingleItemRender.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SingleItemButton({ id }) {
  const navigate = useNavigate();

  const handleClick = async (event) => {
    console.log(id);

    try {
      console.log(id);
      console.log("in function");
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log("data", data);
      const newId = data.id;
      console.log(newId);
    } catch (err) {
      console.error("trouble fetching product", err);
    }

    navigate(`/products/${id}`);
  };

  //   return <button onClick={() => navigate(`/products/${id}`)}>View Item</button>;

  return (
    <>
      <button className="button1" onClick={handleClick}>
        View Item
      </button>
    </>
  );
}
