/** @format */

import React from "react";
import Products from "./Products";
import AllIPHONE from "../Assests/Images/all .png";
import Eleven from "../Assests/Images/11-pro.png";
import Twelve from "../Assests/Images/iphon12.png";
import TwelveCombine from "../Assests/Images/Combine_12.png";
import Thirteen from "../Assests/Images/iphone13.png";
import ThirteenColor from "../Assests/Images/13-color.jpg";
import PRO from "../Assests/Images/13pro.jpg";
const Home = () => {
  return (
    <div className="Hero--section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={AllIPHONE}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Eleven}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Twelve}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={TwelveCombine}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Thirteen}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ThirteenColor}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={PRO}
              className="d-block w-100"
              alt="Shopping_img"
              height="580px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </div>
  );
};

export default Home;
