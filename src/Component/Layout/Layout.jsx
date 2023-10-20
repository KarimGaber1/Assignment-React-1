import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <>
        {/* S T A R T - N A V B A R - S E C T I O N  */}
        <nav>
          <div
            className="navBarLogo  p-4"
            style={{ backgroundColor: "#2c3e50ff" }}
          >
            <div className="container d-flex justify-content-between  align-items-center ">
              <Link
                className="text-decoration-none text-white fs-2 fw-bold"
                to="/"
              >
                START FRAMEWORK
              </Link>
              <div className="navBarContent">
                <ul className="d-flex my-auto list-unstyled  fw-bold">
                  <li className="pe-4">
                    <Link
                      className="text-decoration-none text-white"
                      to="/about"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="pe-4">
                    <Link
                      className="text-decoration-none text-white"
                      to="/portfolio"
                    >
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="pe-4">
                    <Link
                      className="text-decoration-none text-white"
                      to="/contact"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* E N D - N A V B A R - S E C T I O N  */}
        <Outlet />
        {/* S T A R T - F O O T E R - S E C T I O N  */}
        <footer className=" py-5" style={{ backgroundColor: "#2c3e50ff" }}>
          <div className="container text-white text-center">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h3 className="fw-bold m-3">LOCATION</h3>
                  <p >2215 John Daniel Drive</p>
                  <p >Clark, MO 65243</p>
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <h3 className="fw-bold m-3">AROUND THE WEB</h3>
                  <div className="d-flex justify-content-center align-items-center  ">
                  <div><i className="fa-brands fa-facebook fa-lg px-2"></i></div>
                  <div><i className="fa-brands fa-twitter fa-lg px-2"></i></div>
                  <div><i className="fa-brands fa-instagram fa-lg px-2"></i></div>
                  <div><i className="fa-solid fa-globe fa-lg px-2"></i></div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <h3 className="fw-bold m-3">ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap them created by Route</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="py-3 bg-dark text-white text-center">
          <p> Copyright © Your website 2023</p>
        </div>

        {/*E N D - F O O T E R - S E C T I O N  */}
      </>
    );
  }
}

export default Layout;
