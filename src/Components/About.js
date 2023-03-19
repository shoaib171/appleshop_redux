/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import AboutImg from "../Assests/Images/about.avif";
const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="text-primary fs-bold mb-4">About_us</h1>
            <p className="lead  mb-2">
              Apple is an American multinational technology company
              headquartered in Cupertino, California, that designs, develops,
              and sells consumer electronics, computer software, and online
              services. It is considered one of the Big Four technology
              companies along with Amazon, Google, and Facebook. Apple was
              founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April
              1976 to develop and sell personal computers. It was incorporated
              as Apple Computer, Inc. in January 1977, and was renamed as Apple
              Inc. in January 2007 to reflect its shifted focus towards consumer
              electronics. Apple is the world's largest technology company by
              revenue and one of the world's most valuable companies. Apple is
              well known for its range of products, including the iPhone, iPad,
              and Mac.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact_us
            </NavLink>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center">
            <img
              src={AboutImg}
              className="d-block w-100"
              alt="About_us"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
