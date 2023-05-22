import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../template/assets/img/breadcrumb-video.jpg";
import aboutWhy1 from "../../template/assets/img/why-1.jpg";
import aboutWhy2 from "../../template/assets/img/why-2.jpg";
import aboutWhy3 from "../../template/assets/img/why-3.jpg";
import aboutbanner1 from "../../template/assets/img/about-baner-1.jpg";
import aboutbanner2 from "../../template/assets/img/about-baner-2.jpg";
import abouttimel1 from "../../template/assets/img/timeline-1.jpg";
import abouttimel2 from "../../template/assets/img/timeline-2.jpg";
import abouttimel3 from "../../template/assets/img/timeline-3.jpg";
import abouttimel4 from "../../template/assets/img/timeline-4.jpg";
import blog1 from "../../template/assets/img/blog/blog-1.jpg";
import blog2 from "../../template/assets/img/blog/blog-2.jpg";
import blog3 from "../../template/assets/img/blog/blog-3.jpg";
import Navb from "../../Components/Navbar/Navb";
// import { collection, getDocs } from "firebase/firestore";
// import Service from "../Service/Service";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";
import { getDocs, getDoc, doc } from "firebase/firestore";
import Footer from "../../Components/Footer.jsx/Footer";
import Newsletter from "../../Components/NewsLetter/Newsletter";
import { FaPlay } from "react-icons/fa";

const About = () => {
  const [aboutDataChoose, setAboutDataChoose] = useState([]);
  const [abotDataKnow, setAboutDataKnow] = useState([]);
  const userCollection = collection(db, "about_us");
  useEffect(() => {
    const getUsers = async () => {
      const singleRef = doc(userCollection, "whay_chose_us");
      const data = await getDoc(singleRef);
      setAboutDataChoose(data.data());
      console.log("abc", data.data());
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const singleRef = doc(userCollection, "get_to_know");
      const data = await getDoc(singleRef);
      setAboutDataKnow(data.data());
      console.log(data.data());
    };
    getUsers();
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
                    <h1>About us</h1>
                    <span>
                      <Link to="/">Home</Link>
                      <i className="bi bi-arrow-right"></i>About us
                    </span>
                    <div className="breadcrumb-video">
                      <img src={aboutImg} alt="Error" />
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

        <section
          className="why-choose sec-mar wow animate fadeIn"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="why-choose-left">
                  <div className="choose-banner1">
                    <img src={aboutWhy1} alt="Error" />
                  </div>
                  <div className="choose-banner2">
                    <img src={aboutWhy2} alt="Error" />
                    <img src={aboutWhy3} alt="Error" />
                  </div>
                  <div className="years">
                    <h5>20+</h5>
                    <span>Years</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="why-choose-right">
                  <div className="sec-title layout2">
                    <span> Why Choose </span>
                    <h2> {aboutDataChoose.title}</h2>
                  </div>
                  <div className="counter-boxes">
                    <div className="count-box">
                      <span className="counter">150</span>
                      <sup>+</sup>
                      <h5>Project Completed</h5>
                    </div>
                    <div className="count-box">
                      <span className="counter">250</span>
                      <sup>+</sup>
                      <h5>Satisfied Clients</h5>
                    </div>
                    <div className="count-box">
                      <span className="counter">50</span>
                      <sup>+</sup>
                      <h5>Expert Teams</h5>
                    </div>
                  </div>
                  <p>{aboutDataChoose.detail}</p>
                  <div className="buttons-group">
                    <span>24/7 Support</span>
                    <span>Unique Design</span>
                    <span>Clean Code Develope</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="about-area sec-mar-bottom wow animate slideInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 or-2">
                <div className="sec-title layout2">
                  <span>Get To Know</span>
                  <h2>About Us</h2>
                </div>
                <div className="about-left">
                  <h3> {abotDataKnow.title} </h3>
                  <p>{abotDataKnow.detail}</p>
                  <div className="company-since">
                    <div className="company-logo">
                      <img src={abotDataKnow.image} alt="" />
                    </div>
                    <strong>#1</strong>
                    <h4>
                      Best Creative IT Agency And Solutions
                      <span>Since 2005.</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 or-1">
                <div className="about-right">
                  <div className="banner-1">
                    <img src={aboutbanner1} alt="Error" />
                  </div>
                  <div className="banner-2">
                    <img src={aboutbanner2} alt="Error" />
                    <div className="banner2-inner">
                      <div className="play">
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
        <section
          className="about-area sec-mar-bottom wow animate slideInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        ></section>

        <section className="features-area">
          <div className="container">
            <div
              className="title-wrap wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title white">
                <span>Care Study</span>
                <h2>Features</h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
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
                      <img src="assets/img/icons/feature-icon-1.png" alt="" />
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
                      <img src="assets/img/icons/feature-icon-2.png" alt="" />
                    </div>
                    <span className="counter">250</span>
                    <sup>+</sup>
                    <h4>Satisfied Clients</h4>
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
                      <img src="assets/img/icons/feature-icon-3.png" alt="" />
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
                      <img
                        src="assets/img/icons/feature-icon-4.png"
                        alt="Error"
                      />
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

        <section className="history-area sec-mar">
          <div className="container">
            <div className="title-wrap">
              <div className="sec-title">
                <span>History</span>
                <h2>Creasoft History</h2>
              </div>
            </div>
            <div className="single-history">
              <div
                className="history wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-thumb">
                  <img src={abouttimel4} alt="" />
                </div>
              </div>
              <div
                className="history wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-cnt">
                  <div className="history-cnt-inner">
                    <span>2020</span>
                    <h4>We Are Open Our Office</h4>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec aptent taciti sociosqu ad litora torquent per conubia
                      nostra, himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa vitae enim velit. Ut ut posuere orci, id dapibus
                      odio. himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-history">
              <div
                className="history wow animate fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-cnt">
                  <div className="history-cnt-inner">
                    <span>2021</span>
                    <h4>We Work Hard for design</h4>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec aptent taciti sociosqu ad litora torquent per conubia
                      nostra, himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa vitae enim velit. Ut ut posuere orci, id dapibus
                      odio. himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="history wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-thumb">
                  <img src={abouttimel1} alt="" />
                </div>
              </div>
            </div>
            <div className="single-history">
              <div
                className="history wow animate fadeInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-thumb">
                  <img src={abouttimel2} alt="" />
                </div>
              </div>
              <div
                className="history wow animate fadeInRight"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-cnt">
                  <div className="history-cnt-inner">
                    <span>2022</span>
                    <h4>We Are Success And Win</h4>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec aptent taciti sociosqu ad litora torquent per conubia
                      nostra, himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa vitae enim velit. Ut ut posuere orci, id dapibus
                      odio. himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-history">
              <div
                className="history wow animate fadeInLeft"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-cnt">
                  <div className="history-cnt-inner">
                    <span>2023</span>
                    <h4>Many Award Win</h4>
                    <p>
                      Integer purus odio, placerat nec rhoncus in, ullamcorper
                      nec aptent taciti sociosqu ad litora torquent per conubia
                      nostra, himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa vitae enim velit. Ut ut posuere orci, id dapibus
                      odio. himenaeos. Praesent nec neque at dolor venenatis
                      thoseaol Donec lacinia placerat felis non aliquam.Mauris
                      nec justo ag euismod sit amet non ipsum. Praesent commodo
                      at massa
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="history wow animate fadeInRight"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <div className="circle">
                  <div className="inner"></div>
                </div>
                <div className="history-thumb">
                  <img src={abouttimel3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="our-team sec-mar">
          <div className="container">
            <div
              className="title-wrap wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title">
                <span>Our Team</span>
                <h2>Meet Our Team</h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <div className="swiper team-slider">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-team">
                    <div className="member-img">
                      <img src={aboutteam1} alt="" />
                      <svg
                        width="185"
                        height="299"
                        viewBox="0 0 167 269"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
                        fill="#191A1C"
                      />
                     
                      <ul className="team-social">
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/">
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-inner">
                      <h4>Thoren Okendhild</h4>
                      <span>Executive Chairman</span>
                    </div>
                  </div>
                </div>
             
                <div
                  className="swiper-slide wow animate fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-team">
                    <div className="member-img">
                      <img src={aboutteam2} alt="" />
                      <svg
                        width="185"
                        height="299"
                        viewbox="0 0 167 269"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z"
                          fill="#191A1C"
                        />
                      </svg>
                      <ul className="team-social">
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/">
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-inner">
                      <h4>Adrian Eodri</h4>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section> */}

        <section className="blog-area">
          <div className="container">
            <div
              className="title-wrap wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title">
                <span>All Blog</span>
                <h2>Latest Post</h2>
                <p>
                  Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                  fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                  convallis sapien, quis commodo libero.
                </p>
              </div>
            </div>
            <div className="row gy-4">
              <div
                className="col-md-6 col-lg-4 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-blog">
                  <div className="blog-thumb">
                    <a href="blog-details.html">
                      <img src={blog1} alt="" />
                    </a>
                    <div className="tag">
                      <a href="blog-details.html">UI/UX</a>
                    </div>
                  </div>
                  <div className="blog-inner">
                    <div className="author-date">
                      <a href="#">By, Admin</a>
                      <a href="#">22.02.2022</a>
                    </div>
                    <h4>
                      <a href="blog-details.html">
                        Quisque malesuada sapien and Donec sed nunc.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="single-blog">
                  <div className="blog-thumb">
                    <a href="blog-details.html">
                      <img src={blog2} alt="" />
                    </a>
                    <div className="tag">
                      <a href="blog-details.html">Software</a>
                    </div>
                  </div>
                  <div className="blog-inner">
                    <div className="author-date">
                      <a href="#">By, Admin</a>
                      <a href="#">22.02.2022</a>
                    </div>
                    <h4>
                      <a href="blog-details.html">
                        Suspendisse pretium magna qu nisl egestas porttitor.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="single-blog">
                  <div className="blog-thumb">
                    <a href="blog-details.html">
                      <img src={blog3} alt="" />
                    </a>
                    <div className="tag">
                      <a href="blog-details.html">Dashbord</a>
                    </div>
                  </div>
                  <div className="blog-inner">
                    <div className="author-date">
                      <a href="#">By, Admin</a>
                      <a href="#">22.02.2022</a>
                    </div>
                    <h4>
                      <a href="blog-details.html">
                        In a augue sit amet erat Suspel eleifend suscipit issen.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default About;
