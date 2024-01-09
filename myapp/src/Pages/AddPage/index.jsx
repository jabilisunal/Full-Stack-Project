import React, { useState } from "react";
import Navbar from "../../Layouts/Navbar";
import { useNavigate } from "react-router-dom";
import "./index.scss";

function AddPage() {
  const [prtName, setprtName] = useState("");
  const [prtPrice, setprtPrice] = useState("");
  const navigate = useNavigate();

  function addProduct() {
    fetch("http://localhost:3200/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: prtName, price: prtPrice }),
    });
    navigate("/");
  }

  return (
    <div className="addPage">
      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="add product name"
          onChange={(e) => setprtName(e.target.value)}
        />
        <input
          type="text"
          placeholder="add product price"
          onChange={(e) => setprtPrice(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default AddPage;
