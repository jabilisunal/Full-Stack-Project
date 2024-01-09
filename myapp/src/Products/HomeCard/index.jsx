import React, { useEffect, useState } from "react";
import "./index.scss"
import { Link } from "react-router-dom";

function HomeCard() {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    const result = await fetch("http://localhost:3200/");
    const data = await result.json();
    setProduct(data);
  }

  function deleteProduct(id) {
    fetch('http://localhost:3200/'+id, { method: 'DELETE' }) 
        .then(() => getProduct())
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="homeCards">
      {product.map((x) => (
        <div className="homeCard" key={x._id}>
          <p><span>Name:</span>{x.name}</p>
          <p><span>Price:</span>{x.price}</p>
          <div className="homeCard_btn">
          <Link to={"/detail/"+x._id}><button>Go to details</button></Link>
          <button onClick={()=>deleteProduct(x._id)}>x</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCard;
