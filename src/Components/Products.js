/** @format */
import React from "react";
import { NavLink } from "react-router-dom";
import { DATA } from "../DATA";
const Products = () => {
  const cardItem = (Items) => {
    return (
      <div className="card my-5 py-4" key={Items.id} style={{ width: "18rem" }}>
        <img
          src={Items.img}
          className="card-img-top "
          height="200px"
          alt={Items.title}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{Items.title}</h5>
          <p className="lead fw-bold">$:{Items.price}</p>
          <NavLink
            to={`/products/${Items.id}`}
            className="btn btn-outline-primary"
          >
            BuyNow
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-12 text-center ">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Products;
