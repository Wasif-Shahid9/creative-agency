import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../template/assets/img/logo.svg";
import darklogo from "../../template/assets/img/logo-dark.svg";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navb.css";

const Navb = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <header
        className={`header-area position_top ${
          mobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="site-logo">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="image" />
            </Link>
          </div>
        </div>
        <div className={`main-menu ${mobileMenuOpen ? "active" : ""}`}>
          <nav className="main-nav">
            <div className="mobile-menu-logo">
              <Link to="/">
                <img src="assets/img/logo-dark.svg" alt="" />
              </Link>
              <div className="remove" onClick={handleMobileMenuClick}>
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
            <ul>
              <li className="has-child active">
                <Link to="/">Home</Link>
                <i className="bi bi-chevron-down"></i>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
                <i className="bi bi-chevron-down"></i>
                <ul className={`sub-menu ${mobileMenuOpen ? "active" : ""}`}>
                  {/* <li>
                  <Link to="/service">Service</Link>
                </li> */}
                </ul>
              </li>
              <li>
                <Link to="/project">Project</Link>
                <i className="bi bi-chevron-down"></i>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50">
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <Link to="/contact">Get A Quote</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <Link to="/contact">Get A Quote</Link>
            </div>
          </div>
          <div className="mobile-menu">
            {/* <a
              href="javascript:void(0)"
              className={`cross-btn ${mobileMenuOpen ? "active" : ""}`}
              onClick={handleMobileMenuClick}
            >
              <span className="cross-top"></span>
              <span className="cross-middle"></span>
              <span className="cross-bottom"></span>
    
            </a> */}
            {[false].map((expand) => (
              <Navbar key={expand} bg="" expand={expand} className="   mb-3">
                <Container fluid>
                  <Navbar.Brand href="#"></Navbar.Brand>
                  <Navbar.Toggle
                    className="navbar-icon"
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start"
                    className="offcanvas__navbar"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        <img src={darklogo} alt="Error" />
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end  pe-3 offcanvas__link">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/contact">Contact</Link>
                        <div className="get-qoute-abc">
                          <div className="cmn-btn">
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <Link to="/contact">Get A Quote</Link>
                          </div>
                        </div>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navb;
//  import Button from "react-bootstrap/Button";
//  import Container from "react-bootstrap/Container";
//  import Form from "react-bootstrap/Form";
//  import Nav from "react-bootstrap/Nav";
//  import Navbar from "react-bootstrap/Navbar";
//  import NavDropdown from "react-bootstrap/NavDropdown";
//  import Offcanvas from "react-bootstrap/Offcanvas";

//  function OffcanvasExample() {
//    return (
//      <>
//        {[false].map((expand) => (
//          <Navbar key={expand} bg="" expand={expand} className="mb-3">
//            <Container fluid>
//              <Navbar.Brand href="#"></Navbar.Brand>
//              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//              <Navbar.Offcanvas
//                id={`offcanvasNavbar-expand-${expand}`}
//                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                placement="start"
//              >
//                <Offcanvas.Header closeButton>
//                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                    Offcanvas
//                  </Offcanvas.Title>
//                </Offcanvas.Header>
//                <Offcanvas.Body></Offcanvas.Body>
//              </Navbar.Offcanvas>
//            </Container>
//          </Navbar>
//        ))}
//      </>
//    );
//  }

//  export default OffcanvasExample;
