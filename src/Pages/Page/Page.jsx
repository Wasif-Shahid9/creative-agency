import React from "react";
import Navb from "../../Components/Navbar/Navb";
import video from "../../template/assets/img/breadcrumb-video.jpg";
import "../../screens/Home.css";
import formimg from "../../template/assets/img/call-center.png";
import "../Contact/Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import {
  getFirestore,
  collection,
  query,
  getDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { FirebaseError } from "firebase/app";
import { data } from "isotope-layout";
import Footer from "../../Components/Footer.jsx/Footer";
import { getContactUs } from "../../utils/FirebaseService";
import Newsletter from "../../Components/NewsLetter/Newsletter";
import { red } from "@mui/material/colors";
const Contact = () => {
  const [location, setLocation] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  // const docRef = doc(db, "contact_us", "location");
  // getDoc(docRef).then((doc) => {
  //   setLocation(doc.data());
  // });

  const [name, setName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState("");

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

  const areAllFieldsFilled = () => {
    return name !== "" && formEmail !== "" && subject !== "" && message !== "";
  };

  const isSubmitDisabled = !areAllFieldsFilled();

  const dataCollection = collection(db, "quotation");
  const sendData = async (e) => {
    e.preventDefault();
    if (areAllFieldsFilled()) {
      alert("Data Send");
      await addDoc(dataCollection, {
        name: name,
        email: formEmail,
        subject: subject,
        message: message,
      });
    } else {
      setEmptyFieldError("Please fill all fields before submitting.");
      setIsFormSubmitted(true);
    }
  };
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseEnter = () => {
    if (isSubmitDisabled) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipStyle = {
    display: showTooltip ? "block" : "",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
  };
  // const dataCollection = collection(db, "quotation");
  // const sendData = async (e) => {
  //   alert("Message Send Suucessfully");
  //   e.preventDefault();
  //   await addDoc(dataCollection, {
  //     name: name,
  //     email: formemail,
  //     subject: subject,
  //     message: message,
  //   });
  // };

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
                    <h1>Contact us</h1>
                    <span>
                      <a href="index.html">Home</a>
                      <i className="bi bi-arrow-right"></i>Contact us
                    </span>
                    <div className="breadcrumb-video">
                      <img src={video} alt="" />
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

        <section className="contact-area sec-mar">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <div className="contact-left">
                  <div className="sec-title layout2">
                    <span>Get in touch</span>
                    <h2>Contact us if you have more questions.</h2>
                  </div>
                  <ul className="social-follow">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <BsTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <FaPinterestP />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="">
                          <AiOutlineInstagram />
                        </i>
                      </a>
                    </li>
                  </ul>
                  <div className="informations">
                    <div className="single-info">
                      <div className="icon">
                        <i className="">
                          <ImLocation />
                        </i>
                      </div>
                      <div className="info">
                        <h3>Location</h3>
                        <p>{location.address}</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <div className="icon">
                        <i className="">
                          <BsFillTelephoneFill />
                        </i>
                      </div>
                      <div className="info">
                        <h3>Phone</h3>
                        <a href="">
                          {phone.phone && phone.phone[0]} <br />
                          {phone.phone && phone.phone[1]}
                        </a>
                      </div>
                    </div>
                    <div className="single-info">
                      <div className="icon">
                        <i className="">
                          <MdEmail />
                        </i>
                      </div>
                      <div className="info">
                        <h3>Email</h3>
                        <a href="tell:info@example.com">{email.address}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-7">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    {/* <iframe src="https://maps.google.com/maps?q=dhaka%20bangladesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe> */}
                    {/* <iframe src="https://maps.google.com/maps?q=gujranwala%20pakistan&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe> */}
                    <iframe src="https://maps.google.com/maps?q=32.180831246901334,74.1845546394235&z=15&output=embed"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="getin-touch">
              <div className="row">
                <div className="col-md-6 col-lg-7">
                  <div
                    className="contact-form wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <h3>Have Any Questions</h3>
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                        {isFormSubmitted && name === "" && (
                          <p className="error-message">
                            Please enter your name
                          </p>
                        )}
                        <div className="col-md-6">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formEmail}
                            onChange={(e) => {
                              setFormEmail(e.target.value);
                            }}
                          />
                        </div>
                        {isFormSubmitted && formEmail === "" && (
                          <p className="error-message">
                            Please enter your email
                          </p>
                        )}
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => {
                              setSubject(e.target.value);
                            }}
                          />
                        </div>
                        {isFormSubmitted && subject === "" && (
                          <p className="error-message">
                            Please enter the subject
                          </p>
                        )}
                        <div className="col-12">
                          <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                          ></textarea>
                          {isFormSubmitted && message === "" && (
                            <p className="error-message">
                              Please enter your message
                            </p>
                          )}

                          <div style={{ position: "relative" }}>
                            <input
                              type="submit"
                              value="Send Message"
                              onClick={sendData}
                              disabled={isSubmitDisabled}
                              style={{
                                cursor: isSubmitDisabled
                                  ? "not-allowed"
                                  : "pointer",
                              }}
                              onMouseEnter={handleMouseLeave}
                              onMouseLeave={handleMouseLeave}
                            />
                            {isSubmitDisabled && (
                              <div style={tooltipStyle}>
                                Please fill all fields before submitting.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-5 wow animate fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="call-banner">
                    <img src={formimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
