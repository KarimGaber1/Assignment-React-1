import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        {/* S T A R T - C O N T A C T - S E C T I O N  */}
        <div className="container py-5 my-2">
          <div className="contact">
            <h1 className=" text-center fw-bold">CONATCT SECTION</h1>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{ backgroundColor: "rgb(44, 62, 80)" }}
              ></div>
              <div className="icon2 ">
                <i className="fa-solid fa-star "></i>
              </div>
              <div
                className="line ms-3"
                style={{ backgroundColor: "rgb(44, 62, 80)" }}
              ></div>
            </div>
            <div className="w-75 m-auto">
              <form >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control "
                  style={{ borderWidth: " 0px 0px 1px 0px", padding: "10px" }}
                  placeholder="userName"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  style={{ borderWidth: " 0px 0px 1px 0px", padding: "10px" }}
                  placeholder="userAge"
                  min={0}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  style={{ borderWidth: " 0px 0px 1px 0px", padding: "10px" }}
                  placeholder="userEmail"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  style={{ borderWidth: " 0px 0px 1px 0px", padding: "10px" }}
                  placeholder="userPassword"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                send Massage
              </button>
            </form>
            </div>
            
          </div>
        </div>

        {/* E N D - C O N T A C T - S E C T I O N  */}
      </>
    );
  }
}
