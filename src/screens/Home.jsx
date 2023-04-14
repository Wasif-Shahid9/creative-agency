import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import bgimg from "../template/assets/img/bg.png";
import hero from "../template/assets/img/hero-banner.jpg";
// import ReactCardSlider from "react-card-slider-component";
import icon1 from "../template/assets/img/icons/service-icon-1.png";
import icon2 from "../template/assets/img/icons/service-icon-2.png";
import icon3 from "../template/assets/img/icons/service-icon-2.png";


const Home = () => {
  return (
    <>
      <Container fluid className="home">
        <div className="home__content">
          <Row>
            <Col lg={1}>
              <p>helo</p>
            </Col>
            <Col md={12} lg={6}>
              <div className="header__left">
                <h1 className=" fw-900 mt-5">
                  CREATIVE & MINIMAL IT AGENCY. <br />
                </h1>
                <p className="mt-5">
                  MOULIYA Welcomes your to it’s wonderful world of fundraising.
                  With millions of great ideas only waiting to be funded,
                  MOULIYA is the right place for you. Explore, create and reap
                  benefits of easy and secure online fundraising.
                </p>
                <button className="header__btn">
                  <span className="transition"></span>
                  <span className="gradient"></span>
                  <span className="label">Button</span>
                </button>
                <button className="header__btn ms-2">
                  <span className="transition"></span>
                  <span className="gradient"></span>
                  <span className="label">Button</span>
                </button>
              </div>
            </Col>
            <Col lg={5}>
              <div className="home__right">
                <img src={hero} alt="error" className="home__right__img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* // Services */}
      <Container>
        <Row>
          <Col>
            <div className="text-center services ">
              <p>Our Solutuins</p>
              <p>Services</p>
              <p className="w-20">
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile1.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile2.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile3.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile4.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile5.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile6.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile7.jpg" alt="" className="card-img" />
                  -->
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile8.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="images/profile9.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">David Dell</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div> */}
      <Container className="mt-5">
        <div className="cards">
          <Row>
            <Col lg={4}>
              <div class="card">
                <div>
                  <img src={icon1} alt="" />
                </div>
                <div className="card__txt">
                  <p className="">Web Design</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque, quos.
                  </p>
                </div>
                <div>
                  <p>Read More</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div class="card">
                <div>
                  <img src={icon2} alt="" />
                </div>
                <div className="card__txt">
                  <p>Soft Ware Development</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque, quos.
                  </p>
                </div>
                <div>
                  <p>Read More</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div class="card">
                <div>
                  <img src={icon3} alt="" />
                </div>
                <div className="card__txt">
                  <p>UI/UX Design</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque, quos.
                  </p>
                </div>
                <div>
                  <p>Read More</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

     

    </>
  );
};

export default Home;
