/** @format */

import React from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const HandleReducers = useSelector((state) => state.HandleReducers);
  var total = 0;
  const CartItems = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  };
  return (
    <div className="container my-5 ">
      <div className="row ">
        <div className="col-md-12 col-lg-12 ">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">
              {HandleReducers.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {HandleReducers.map(CartItems)}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </form>
          <button className="btn btn-outline-primary  my-3">
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
