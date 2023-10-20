import React, { Component } from "react";
import avatar from "../avataaars.svg";

export default class Home extends Component {
  render() {
    return (
      <>
        {/* S T A R T - H O M E - S E C T I O N  */}
        <div
          className=" text-white position-relative text-center "
          style={{
            backgroundColor: "#1abc9cff",
            height : '600px'
          }}
        >
          <div
            className="homeContent"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50% , -50%)",
            }}
          >
            <img
              style={{ width: "250px", height: "265px" }}
              src={avatar}
              alt=""
            />
            <h2 className="fs-1 fw-bold pt-4">START FRAMEWORK</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{ backgroundColor: "white" }}
              ></div>
              <div className="icon ">
              <i className="fa-solid fa-star "></i>
              </div>
              <div
                className="line ms-3"
                style={{ backgroundColor: "white" }}
              ></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
        {/* E N D - H O M E - S E C T I O N  */}
      </>
    );
  }
}
