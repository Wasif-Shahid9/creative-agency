import React from "react";
import { Autoplay, Navigation } from "swiper";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Container } from "react-bootstrap";
import img from "../template/assets/img/project/project-1.jpg";
import "../Components/Navbar/Navb";
import "./Home.css";
import logo from "../template/assets/img/logo.svg";
import headerimg from "../template/assets/img/hero-banner.jpg";
import serviceicon1 from "../template/assets/img/icons/service-icon-1.png";
import serviceicon2 from "../template/assets/img/icons/service-icon-1.png";
import serviceicon3 from "../template/assets/img/icons/service-icon-1.png";
import aboutsvg from "../template/assets/img/logo-dark.svg";
import aboutrightb1 from "../template/assets/img/about-baner-1.jpg";
import aboutrightb2 from "../template/assets/img/about-baner-2.jpg";
import projectimg1 from "../template/assets/img/project/project-1.jpg";
import team1 from "../template/assets/img/team/team-1.jpg";
import feature1 from "../template/assets/img/icons/feature-icon-1.png";
import feature2 from "../template/assets/img/icons/feature-icon-2.png";
import feature3 from "../template/assets/img/icons/feature-icon-3.png";
import feature4 from "../template/assets/img/icons/feature-icon-4.png";
import { Link } from "react-router-dom";
import Navb from "../Components/Navbar/Navb";
import CardHeader from "react-bootstrap/esm/CardHeader";
import CardSlider from "../Components/CardSlider";

import { AiFillPlayCircle } from "react-icons/ai";
import { getDoc, doc, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  getAboutUs,
  getHomeSection,
  getClientComments,
} from "../utils/FirebaseService";
import { data } from "isotope-layout";
import { getContactUs } from "../utils/FirebaseService";
import Footer from "../Components/Footer.jsx/Footer";
import { motion, useAnimation } from "framer-motion";
import Newsletter from "../Components/NewsLetter/Newsletter";

const Home = () => {
  const [clientdata, setClientData] = useState([]);
  const [clientComm, setClientComm] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  const [priceHeading, setPriceHeading] = useState([]);
  const [featureHeading, setFeatureHeading] = useState([]);
  const [clientHead, setClientHead] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [getProject, setgetProject] = useState([]);
  const [getPartners, setgetPartners] = useState([]);
  const [location, setLocation] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const slider = await getHomeSection("slider");
      console.log("slider..", slider);
      setSliderData(slider);
      const price = await getHomeSection("price");
      setPriceHeading(price);
      const features = await getHomeSection("features");
      console.log("features", features);
      setFeatureHeading(features);
      const client = await getHomeSection("clients");
      setClientHead(client);
      const about = await getAboutUs("get_to_know");
      setAboutData(about);
      const clientComment = await getClientComments("MqeVeTGGl1lqhbWl9jOC");
      setClientComm(clientComment);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const projectRef = collection(db, "projects");
    const getData = async () => {
      const docData = await getDocs(projectRef);
      setgetProject(docData.docs.map((doc) => doc.data()));
    };
    getData();
  }, []);

  useEffect(() => {
    const contactData = async () => {
      const location = await getContactUs("location");
      setLocation(location);
      const phone = await getContactUs("phone");
      setPhone(phone);
      const email = await getContactUs("email");
      setEmail(email);
    };
    contactData();
  }, []);
  useEffect(() => {
    const dataCollection = collection(db, "partners");
    const getData = async () => {
      const docRef = await getDocs(dataCollection);
      const partnersData = docRef.docs.map((doc) => doc.data());
      setgetPartners(partnersData);
    };
    getData();
  }, []);

  /////////////// News Letter Input Start
  const [newsletters, setNewsLetters] = useState([]);

  const [emailError, setEmailError] = useState(false);
  const newsCollection = collection(db, "newsletter");
  const handleNewsSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
      await addDoc(newsCollection, {
        newsletter: newsletters,
      });
      alert("Message sent successfully");
    }

    // await addDoc(newsCollection, {
    //   newsletter: newsletters,
    // });
  };
  /////////////// News Letter Input END

  /////////////// Client Comment Start

  const commentsCollection = collection(db, "client_comments");
  useEffect(() => {
    const getData = async () => {
      const commentRef = await getDocs(commentsCollection);
      const commentData = commentRef.docs.map((doc) => doc.data());
      setClientData(commentData);
    };
    getData();
  }, []);

  /////////////// CLient Comment END

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
        <section className="hero-area">
          <div className="ken-burns-slideshow">
            <img src={sliderData.image} alt="image" />
            {/* <img src={headerimg} alt="" /> */}
          </div>
          <div className="verticale-social">
            <ul className="vertical-media">
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="hero-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1>{sliderData.title}</h1>
                    <p>{sliderData.detail}</p>

                    <div className="buttons">
                      <div className="cmn-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link to="/about">About Us</Link>
                      </div>
                      <div className="cmn-btn layout-two">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link to="/project">See Project</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-area sec-mar">
          <div className="container">
            <div
              className="title-wrap wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title">
                <span>Our Solutions</span>
                <h1 className="animate__animated animate__animate__backInLeft">
                  Services
                </h1>

                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <CardSlider />
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </section>
        <section className="about-area sec-mar-bottom">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 or-2 wow animate fadeIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="sec-title layout2">
                  <span>Get To Know</span>
                  <h2>About Us</h2>
                </div>
                <div className="about-left">
                  <h3> {aboutData.title} </h3>
                  <p> {aboutData.detail} </p>
                  <div className="company-since">
                    <div className="company-logo">
                      <img src={aboutData.image} alt="Error" />
                    </div>
                    <strong>#1</strong>
                    <h4>
                      Best Creative IT Agency And Solutions
                      <span>Since 2005.</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 or-1 wow animate fadeIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-right">
                  <div className="banner-1">
                    <img src={aboutrightb1} alt="" />
                  </div>
                  <div className="banner-2">
                    <img src={aboutrightb2} alt="" />
                    <div className="banner2-inner">
                      <div className="play">
                        <Link
                          className="video-popup"
                          href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        >
                          <i className="fas fa-play">
                            <AiFillPlayCircle />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-area">
          <div className="container">
            <div
              className="title-wrap  wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title white">
                <span>Care Study</span>
                <h2>Features</h2>
                <p>{featureHeading.title}</p>
              </div>
            </div>
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-3 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-feature">
                  <div className="feature-inner">
                    <div className="icon">
                      <img src={feature1} alt="Error" />
                    </div>
                    <span className="counter">150</span>
                    <sup>+</sup>
                    <h4>Project Completed</h4>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="single-feature">
                  <div className="feature-inner">
                    <div className="icon">
                      <img src={feature2} alt="Error" />
                    </div>
                    <span className="counter">250</span>
                    <sup>+</sup>
                    <h4>Satisfied Clients </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="single-feature">
                  <div className="feature-inner">
                    <div className="icon">
                      <img src={feature3} alt="Error" />
                    </div>
                    <span className="counter">50</span>
                    <sup>+</sup>
                    <h4>Expert Teams</h4>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow animate fadeInUp"
                data-wow-delay="800ms"
                data-wow-duration="1500ms"
              >
                <div className="single-feature">
                  <div className="feature-inner">
                    <div className="icon">
                      <img src={feature4} alt="Error" />
                    </div>
                    <span className="counter">28</span>
                    <sup>+</sup>
                    <h4>Win Awards</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="project-area sec-mar">
          <div className="container">
            <div className="title-wrap">
              <div className="sec-title">
                <span>Case Study</span>
                <h2>Project</h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="isotope-menu"></ul>
              </div>
            </div>
            <div className="row g-4 project-items">
              {getProject &&
                getProject.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="col-md-6 col-lg-4 single-item "
                    >
                      <a href="/" target="_blank">
                        <div className="item-img">
                          <a href="">
                            <img src={data.image} alt="" />
                          </a>
                        </div>
                        <div className="item-inner-cnt">
                          <span> {data.detail} </span>
                          <h4> {data.title} </h4>
                          <div className="view-btn">
                            {/* <Link to={data.url}>view details</Link> */}
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
            {/* <div className="row g-4 project-items">
              <div className="col-md-6 col-lg-4 single-item graphic ui">
                <div className="item-img">
                  <a href="">
                    <img src={projectimg1} alt="" />
                  </a>
                </div>
                <div className="item-inner-cnt">
                  <span>Software</span>
                  <h4>Desktop Mockup</h4>
                  <div className="view-btn">
                    <Link href="project-details.html">view details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item developing web">
                <div className="item-img">
                  <Link href="project.html">
                    <img src={projectimg2} alt="" />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>Template</span>
                  <h4>Creative Agency</h4>
                  <div className="view-btn">
                    <Link href="project-details.html">view details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item developing">
                <div className="item-img">
                  <Link href="project.html">
                    <img src={projectimg3} alt="" />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>App</span>
                  <h4>Mobile Crypto Wallet</h4>
                  <div className="view-btn">
                    <Link href="project-details.html">view details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item graphic">
                <div className="item-img">
                  <Link href="project.html">
                    <img src={projectimg4} alt="" />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>UI Kit</span>
                  <h4>E-Shop Ecommerce</h4>
                  <div className="view-btn">
                    <Link href="project-details.html">view details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item ui">
                <div className="item-img">
                  <Link href="project.html">
                    <img src={projectimg5} alt="" />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>Graphic</span>
                  <h4>Art Deco Cocktails</h4>
                  <div className="view-btn">
                    <Link href="project-details.html">view details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 single-item web">
                <div className="item-img">
                  <Link href="project.html">
                    <img src={projectimg6} alt="" />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>3D Design</span>
                  <h4>Low poly Base mesh</h4>
                  <div className="view-btn">
                    <Link href="project-details.html">view details</Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* <Container>
          <Filter />
        </Container> */}
        {/* <section className="our-partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="sec-title white layout2">
                  <span>Satisfied Client</span>
                  <h2>Our Partner</h2>
                  <div className="-partnerslider-navigator">
                    <div className="swiper-button-prev-c">
                      <i className="bi bi-chevron-left"></i>
                    </div>
                    <div className="swiper-button-next-c">
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="swiper partner-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="single-partner">
                        <img src={partner1} alt="Error" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-partner">
                        <img src={partner2} alt="Error" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-partner">
                        <img src={partner3} alt="Error" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-partner">
                        <img src={partner4} alt="Error" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="single-partner">
                        <img src={partner5} alt="Error" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="our-partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="sec-title white layout2">
                  <span>Satisfied Client</span>
                  <h2>Our Partner</h2>
                  <div className="-partnerslider-navigator">
                    <div className="swiper-button-prev-c">
                      <i className="bi bi-chevron-left"></i>
                    </div>
                    <div className="swiper-button-next-c">
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <Swiper
                  slidesPerView={6}
                  spaceBetween={6}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination]}
                  className="mySwiper__partner"
                >
                  <div className="swiperPartner-slider">
                    <div className="swiper-wrapper-partner">
                      {getPartners.map((data) => {
                        return (
                          <SwiperSlide key={data.id}>
                            <div className="single-partner">
                              <img src={data.image} alt="Error" />
                            </div>
                          </SwiperSlide>
                        );
                      })}

                      {/* <SwiperSlide>
                        <div className="single-partner">
                          <img src={imgpartner2} alt="Error" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner">
                          <img src={imgpartner3} alt="Error" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner">
                          <img src={imgpartner4} alt="Error" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner">
                          <img src={imgpartner5} alt="Error" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner">
                          <img src={partner1} alt="Error" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-partner">
                          <img src={partner1} alt="Error" />
                        </div>
                      </SwiperSlide> */}
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* //////////////// Slider */}
        <section className="priceing-plan sec-mar">
          <div className="container">
            <div className="title-wrap">
              <div className="sec-title">
                <span>Getting Start</span>
                <h2>Pricing Plan</h2>
                {/* <p>{priceHeading.title}</p> */}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="price-table-tab">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Pay Monthly
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Pay Yearly
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-4 wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Small Business</h3>
                      <span>Single Business</span>
                      <strong>
                        $15.99<sub>/Per Month</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <i className="bi bi-check"></i>10 Pages Responsive
                          Website
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5PPC Campaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>10 SEO Keyword
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5 Facebook Camplaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link href="contact.html">Pay Now</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Professional</h3>
                      <span>Small team</span>
                      <strong>
                        $99.99<sub>/Per Month</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <i className="bi bi-check"></i>10 Pages Responsive
                          Website
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5PPC Campaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>10 SEO Keyword
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5 Facebook Camplaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link href="contact.html">Pay Now</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Enterprice</h3>
                      <span>Large Team</span>
                      <strong>
                        $120.99<sub>/Per Month</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <i className="bi bi-check"></i>10 Pages Responsive
                          Website
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5PPC Campaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>10 SEO Keyword
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5 Facebook Camplaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link href="contact.html">Pay Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-4 wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Small Business</h3>
                      <span>Single Business</span>
                      <strong>
                        $35.99<sub>/Per Year</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <i className="bi bi-check"></i>10 Pages Responsive
                          Website
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5PPC Campaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>10 SEO Keyword
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5 Facebook Camplaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link href="contact.html">Pay Now</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Professional</h3>
                      <span>Small team</span>
                      <strong>
                        $199.99<sub>/Per Year</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <i className="bi bi-check"></i>10 Pages Responsive
                          Website
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5PPC Campaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>10 SEO Keyword
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5 Facebook Camplaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link href="contact.html">Pay Now</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow animate fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="price-box">
                      <h3>Enterprice</h3>
                      <span>Large Team</span>
                      <strong>
                        $220.99<sub>/Per Year</sub>
                      </strong>
                      <ul className="item-list">
                        <li>
                          <i className="bi bi-check"></i>10 Pages Responsive
                          Website
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5PPC Campaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>10 SEO Keyword
                        </li>
                        <li>
                          <i className="bi bi-check"></i>5 Facebook Camplaigns
                        </li>
                        <li>
                          <i className="bi bi-check"></i>2 Video Camplaigns
                        </li>
                      </ul>
                      <div className="price-btn">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <Link href="contact.html">Pay Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-area">
          <div className="container-fluid p-0">
            <div className="title-wrap">
              <div className="sec-title white">
                <span>Testimonial</span>
                <h2> {clientHead.title} </h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <div className="swiper testimonial-slider">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[]}
                  className="mySwiper"
                >
                  {clientdata.map((data, i) => {
                    return (
                      <>
                        <SwiperSlide key={i}>
                          <div className="swiper-slide">
                            <div className="single-testimonial">
                              <div className="quote">
                                <i className="fas fa-quote-right"></i>
                              </div>
                              <h5> {data.name} </h5>
                              <span> {data.designation} </span>
                              <p>{data.comment}</p>
                              <div className="reviewer">
                                <img src={team1} alt="Error" />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>
              </div>
              <div className="swiper-pagination d-md-none d-md-block"></div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </section>
        <Newsletter />
        <Footer />
      </main>
      <div className="cursor"></div>
    </>
  );
};

export default Home;
