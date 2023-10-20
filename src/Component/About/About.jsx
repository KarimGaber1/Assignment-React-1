import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        {/* S T A R T - A B O U T - S E C T I O N  */}
        <div
          className=" text-white  d-flex justify-content-center align-items-center py-5 "
          style={{
            backgroundColor: "#1abc9cff",
          }}
        >
          <div className="container py-5 my-4">
            <h1 className="fs-1 fw-bold text-center">ABOUT COMPONENT</h1>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="icon">
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="row m-auto"
            style={{width: ' 90%'}}>
              <div className="col-md-6">
                <div>
                  <p className="p-3 ">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                <p className=" p-3">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* E N D  - A B O U T - S E C T I O N  */}
      </>
    );
  }
}

