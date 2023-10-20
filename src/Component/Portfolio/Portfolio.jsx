import React, { Component } from "react";
import img1 from ".././images/poert1.png";
import img2 from ".././images/port2.png";
import img3 from ".././images/port3.png";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        {/* S T A R T - P O R T F O L I O - S E C T I O N  */}
        <div className="text-center py-5 my-2">
          <h1 className="fw-bold">PORTFOLIO COMPONENT</h1>

          <div class="d-flex align-items-center justify-content-center mb-3">
            <div
              className="line me-3"
              style={{ backgroundColor: "rgb(44, 62, 80)" }}
            ></div>
            <div className="icon2">
              <i className="fa-solid fa-star"></i>
            </div>
            <div
              className="line ms-3"
              style={{ backgroundColor: "rgb(44, 62, 80)" }}
            ></div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-4  overflow-hidden position-relative  p-3">
                <img src={img1} alt="" className="w-100 rounded-3 " />
                <div
                  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center d-none "
                  style={{ backgroundColor: "#1abc9ce6" }}
                ></div>
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img2} alt="" className="w-100 rounded-3 " />
                <div
                  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center d-none "
                  style={{ backgroundColor: "#1abc9ce6" }}
                ></div>
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img3} alt="" className="w-100 rounded-3 " />
                <div
                  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center d-none "
                  style={{ backgroundColor: "#1abc9ce6" }}
                ></div>
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img1} alt="" className="w-100 rounded-3 " />
                <div
                  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center d-none "
                  style={{ backgroundColor: "#1abc9ce6" }}
                ></div>
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img2} alt="" className="w-100 rounded-3 " />
                <div
                  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center d-none "
                  style={{ backgroundColor: "#1abc9ce6" }}
                ></div>
              </div>
              <div className="col-4  overflow-hidden position-relative p-3">
                <img src={img3} alt="" className="w-100 rounded-3 " />
                <div
                  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center d-none "
                  style={{ backgroundColor: "#1abc9ce6" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* E N D - P O R T F O L I O - S E C T I O N  */}
      </>
    );
  }
}
