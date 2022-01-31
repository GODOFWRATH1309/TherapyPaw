import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    // const handleOnClick = ()=>{
    //     console.log("keep up");
    // }
    // const count=52;
    // console.log("const",count);

    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-black">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              Therapy Paw
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link np"
                    aria-current="page"
                    to="/Doctor"
                  >
                    Doctor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link np" aria-current="page" to="/Dog">
                    Dog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link np" aria-current="page" to="/about">
                    About
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link np" aria-current="page" to="/preview">
                    preview
                  </Link>
                  
                </li>
              </ul>
              <form className="d-flex">
                <Link className="btn btn-info" to="/LoginPage" role="button">
                  Login
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
