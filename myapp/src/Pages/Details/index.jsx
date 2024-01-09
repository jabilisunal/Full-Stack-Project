import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

function DetailPage() {
  let { id } = useParams();
  const [detailProduct, setdetailProduct] = useState([]);

  async function getDetailProduct() {
    const result = await fetch("http://localhost:3200/" + id);
    const data = await result.json();
    setdetailProduct(data);
  }

  useEffect(() => {
    getDetailProduct();
  }, []);

  return (
    <div className="detailCard">
      <div className="detailCard_container">
        <p>
          <span>Name:</span>
          {detailProduct.name}
        </p>
        <p>
          <span>Price:</span>
          {detailProduct.price}
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
