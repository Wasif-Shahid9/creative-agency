import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Navb.css";
import { useState } from "react";

const Navb = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 position-sticky">
        <div className="container">
          <a className="navbar-brand pt-0 d-lg-none" href="#">
            <img src="./images/logo/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="">Home</Link>
              </li>
              <li className="nav-item logo d-none d-md-none d-lg-block fw-bold">
                <a className="nav-link fs-3" href="index.html">
                  <img src="./images/logo/logo.png" />
                </a>
              </li>
              <li className="nav-item drop">
                <a className="nav-link" href="destination.html">
                  Destination
                </a>
                <ul className="drop-menu">
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                  <Link to="">Home</Link>
                </ul>
              </li>
              <li className="nav-item drop">
                <a className="nav-link" href="shop.html">
                  Pages
                </a>
                <ul className="drop-menu">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="">Home</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* OFFCANVAs */}
        {/* <div className="offcanvas offcanvas-start" id="offcanvasExample">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"><a className="navbar-brand pt-0" href="#"><img src="./images/logo/logo.png"/></a></h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
                <div className="dropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item p-2">
                            <a className="nav-link nav-active" href="index.html">Home</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="service.html">Services</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="gallery.html">Gallery</a>
                        </li>
                        <li className="nav-item logo d-none d-md-none d-lg-block fw-bold">
                            <a className="nav-link fs-3" href="index.html"><img src="./images/logo/logo.png"/></a>
                        </li>
                        <li className="nav-item drop p-2">
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton"
                            data-bs-toggle="dropdown" href="destination.html">Destination</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="hazards.html">Hazards</a></li>
                                <li><a className="dropdown-item" href="sheltering.html">Sheltering</a></li>
                                <li><a className="dropdown-item" href="techniques.html">Techniques</a></li>
                                <li><a className="dropdown-item" href="history.html">History</a></li>
                            </ul>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="shop.html">Pages</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-link" href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
      </nav>
    </>
  );
};

export default Navb;
