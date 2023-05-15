import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Navb from "../../Components/Navbar/Navb";
import { db } from "../../firebase";
import Footer from "../../Components/Footer.jsx/Footer";
import image from "../../template/assets/img/blog/blog-thumnail.jpg";
import image2 from "../../template/assets/img/widget-banner-bg.jpg";
import arrowImg from "../../template/assets/img/arrow-angle.png";
import headervideo from "../../template/assets/img/breadcrumb-video.jpg";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
const Servicedetail = () => {
  const { state } = useLocation();
  const [stepsData, setStepsData] = useState([]);

  useEffect(() => {
    const servicesRef = collection(db, "services");
    const serviceDocRef = doc(servicesRef, "FvMNSJeeMzJ1wWKwfAc9");
    const stepsRef = collection(serviceDocRef, "steps");

    getDocs(stepsRef).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setStepsData(data);
    });
  }, []);

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
                    <h1>Service Details</h1>
                    <span>
                      <Link to="/">Home</Link>
                      <i className="bi bi-arrow-right"></i>Service Details
                    </span>
                    <div className="breadcrumb-video">
                      <img src={headervideo} alt="Error" />
                      <div className="video-inner">
                        <a
                          className="video-popup"
                          href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        >
                          <i className="fas fa-play">
                            <FaPlay />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-details sec-mar-top">
          <div className="container">
            <div className="service-items sec-mar-top"></div>
          </div>
        </section>
        <section className="service-details sec-mar-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="service-details-content">
                  <img src={image} alt="" />
                  <h3>
                    <img src={state.icon} alt="firebase" /> <br />
                    {state.title}
                  </h3>
                  <p>{state.detail}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-widget">
                  <h4>Category</h4>
                  <ul className="category">
                    <li>
                      <Link to="/project">
                        Web Design<i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        Apps Development<i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        Software Development
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        Motion Graphics<i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        UI/UX Design<i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/project">
                        Graphic Design<i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-banner">
                  <img src={image2} alt="error" />
                  <div className="banner-inner">
                    <h3>
                      Any Project <span>Call Now.</span>
                      <img className="angle" src={arrowImg} alt="" />
                    </h3>
                    <a href="tel:11231231234">+1-123-123-1234</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-items sec-mar-top">
              <div className="service-details-item">
                {/* {stepsData.map((data, index) => {
                  return (
                    <>
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <div className="row">
                            <div className="col-lg-6 mb-5">
                              <div className="single-details">
                                <h4>
                                  <span>0{index + 1}</span> {data.title}
                                </h4>
                                <p>{data.detail}</p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single-details-thumb">
                                <img src={data.image} alt="" />
                              </div>
                            </div>
                          </div>
                        ) : index === 1 ? (
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="single-details-thumb">
                                <img src={data.image} alt="" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single-details">
                                <h4>
                                  <span>0{index + 1}</span> {data.title}
                                </h4>
                                <p>{data.detail}</p>
                              </div>
                            </div>
                          </div>
                        ) : index === 2 ? (
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="single-details">
                                <h4>
                                  <span>0{index + 1}</span> {data.title}
                                </h4>
                                <p>{data.detail}</p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single-details-thumb">
                                <img src={data.image} alt="" />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </React.Fragment>
                    </>
                  );
                })} */}
                <div className="service-details-item">
                  {stepsData.map((data, index) => {
                    const isEven = index % 2 === 0;
                    const imageColumn = (
                      <div className="col-lg-6">
                        <div className="single-details-thumb">
                          <img src={data.image} alt="" />
                        </div>
                      </div>
                    );
                    const detailsColumn = (
                      <div className="col-lg-6">
                        <div className="single-details">
                          <h4>
                            <span>0{index + 1}</span> {data.title}
                          </h4>
                          <p>{data.detail}</p>
                        </div>
                      </div>
                    );

                    return (
                      <React.Fragment key={index}>
                        <div className="row">
                          {isEven ? (
                            <>
                              {detailsColumn}
                              {imageColumn}
                            </>
                          ) : (
                            <>
                              {imageColumn}
                              {detailsColumn}
                            </>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="subscribe-newsletter sec-mar-top">
          <div className="container">
            <div className="news-letter-content">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="subscribe-cnt">
                    <span>Get In Touch</span>
                    <h3>Subscribe Our</h3>
                    <strong>Newsletter</strong>
                  </div>
                </div>
                <div
                  className="col-lg-6 wow animate fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="subscribe-form">
                    <form method="post">
                      <input
                        type="email"
                        name="email"
                        placeholder="Type Your Email"
                      />
                      <input type="submit" value="connect" />
                    </form>
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

export default Servicedetail;
