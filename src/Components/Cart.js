/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DELETE_ITEM } from "../Redux/Action/Actions";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const HandleReducers = useSelector((state) => state.HandleReducers);
  const HandleClose = (Item) => {
    dispatch(DELETE_ITEM(Item));
  };
  const CartProduct = (Product) => {
    return (
      <>
        <div className="container  bg-light shadow-sm my-5 " key={Product.id}>
          <div className="row justify-content-center">
            <div className="col-4">
              <img
                className="d-block w-100"
                src={Product.img}
                alt={Product.title}
                height="100px"
              />
            </div>
            <div className="col-8">
              <button
                className="btn-close float-end"
                aria-label="Close"
                onClick={() => HandleClose(Product)}
              ></button>
              <h2 className="fw-bold ">{Product.title}</h2>
              <p className="lead fw-bold">Price:${Product.price} </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const CartMessage = () => {
    return (
      <>
        <div className="container-sm text-center mt-5 bg-white shadow-lg py-5">
          <div className="row ">
            <div className="col-12">
              <p className="fw-bold text-danger  fs-3">
                Not Any Item.. Cart is Empty
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  const CheckOut = () => {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <NavLink
              to="/checkout"
              className="btn btn-outline-primary mb-5 w-25"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {HandleReducers.length !== 0 && HandleReducers.map(CartProduct)}
      {HandleReducers.length === 0 && <CartMessage />}
      {HandleReducers.length !== 0 && <CheckOut />}
    </div>
  );
};

export default Cart;
