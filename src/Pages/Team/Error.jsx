import React from "react";
import Navb from "../../Components/Navbar/Navb";
import error from "../../template/assets/img/404.png";
import "../../screens/Home.css";
import Footer from "../../Components/Footer.jsx/Footer";

const Error = () => {
  return (
    <>
      <Navb />
      <main className="creasoft-wrap">
        <div className="line_wrap">
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
          <div className="line_item"></div>
        </div>

        <section className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrapper">
                  <div className="breadcrumb-cnt">
                    <h1>Error</h1>
                    <span>
                      <a href="index.html">Home</a>
                      <i className="bi bi-arrow-right"></i>Error
                    </span>
                    <div className="breadcrumb-video">
                      <img src="assets/img/breadcrumb-video.jpg" alt="Error" />
                      <div className="video-inner">
                        <a
                          className="video-popup"
                          href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        >
                          <i className="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="back-to-home sec-pad">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="error-wrapper">
                  <img src={error} alt="Error" />
                  <h3>Sorry We Can't Find That Page!</h3>
                  <p>
                    Donec bibendum enim ut elit porta ullamcorper. Vestibulum
                    Nai quam nulla, venenatis eget dapibus ac, catali topuny
                    wekemdini iaculis vitae nulla. Morbi mattis nec mi ac
                    mollis.
                  </p>
                  <div className="home-btn">
                    <a href="index.html">
                      <i className="bi bi-house-door"></i>Back To Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Error;
