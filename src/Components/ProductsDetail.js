/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../DATA";
import { useDispatch } from "react-redux";
import { ADD_ITEM, DELETE_ITEM } from "../Redux/Action/Actions";
import { useState } from "react";
const ProductsDetail = () => {
  const dispatch = useDispatch();
  const [CartBtn, SetCartBtn] = useState("Add_to_Cart");
  const HandleChange = (Product) => {
    if (CartBtn === "Add_to_Cart") {
      dispatch(ADD_ITEM(Product));

      SetCartBtn("Remove_From_Cart");
    } else {
      dispatch(DELETE_ITEM(Product));

      SetCartBtn("Add_to_Cart");
    }
  };
  const productsID = useParams();
  const ProductDetails = DATA.filter((x) => x.id == productsID.id);
  const Product = ProductDetails[0];
  console.log(Product, "Products");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center py-5 my-5">
            <img
              src={Product.img}
              className="d-block w-100"
              alt={Product.title}
              height="400px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center my-5">
            <h1 className="display-5 fw-bold">{Product.title}</h1>
            <hr />
            <h2 className="py-4">$:{Product.price}</h2>
            <p className="lead">{Product.Desc}</p>
            <button
              className="btn btn-outline-primary my-2"
              onClick={() => HandleChange(Product)}
            >
              {CartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
