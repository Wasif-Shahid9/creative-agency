import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Navb from "../../Components/Navbar/Navb";
import Footer from "../../Components/Footer.jsx/Footer";
import headervideo from "../../template/assets/img/breadcrumb-video.jpg";
import Newsletter from "../../Components/NewsLetter/Newsletter";
import { FaPlay } from "react-icons/fa";

const Project = () => {
  const [getProject, setgetProject] = useState([]);

  useEffect(() => {
    const projectRef = collection(db, "projects");
    const getData = async () => {
      const docData = await getDocs(projectRef);
      setgetProject(docData.docs.map((doc) => doc.data()));
    };
    getData();
  }, []);
  return (
    <>
      <header>
        <Navb></Navb>
      </header>
      <div>
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
                      <h1>Project</h1>
                      <span>
                        <Link to="/"> Home </Link>
                        <i className="bi bi-arrow-right"></i>Project
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
                  getProject.map((data, i) => {
                    return (
                      <div key={i} className="col-md-6 col-lg-4 single-item ">
                        <div className="item-img">
                          <a href="">
                            <img src={data.image} alt="" />
                          </a>
                        </div>
                        <div className="item-inner-cnt">
                          <span> {data.detail} </span>
                          <h4> {data.title} </h4>
                          <div className="view-btn">
                            <Link href={data.url}>view details</Link>
                          </div>
                        </div>
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

          <Newsletter />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Project;
