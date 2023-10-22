import React from "react";
import { Link } from "react-router-dom";
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const [location, setLocation] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  // const docRef = doc(db, "contact_us", "location");
  // getDoc(docRef).then((doc) => {
  //   setLocation(doc.data());
  // });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Please enter your email."),
    subject: Yup.string().required("Please enter the subject."),
    message: Yup.string().required("Please enter your message."),
  });

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // alert("Data Sent");
    toast.success("Messge Sent Successfully.");
    try {
      const dataCollection = collection(db, "quotation");
      await addDoc(dataCollection, {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });
      resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setSubmitting(false);
  };

  const notify = () => toast("Messge Sent Successfully.");
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
                      <Link to="/">Home</Link>
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
                        <a href="">
                          {email.address && email.address[0]} <br />
                          {email.address && email.address[1]}
                        </a>
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
                  </div>

                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="form-group">
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="form-control form-input"
                          placeholder="Enter Your Name"
                          autoComplete="true"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error-message "
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-input"
                          placeholder="Enter Your Email"
                          autoComplete="true"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control form-input"
                          placeholder="Enter Your Subject"
                          autoComplete="true"
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          className="form-control form-input "
                          placeholder="Enter Your Message"
                          autoComplete="true"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <button type="submit" className="form__btn mt-4">
                        Submit
                      </button>
                      <div>
                        {/* <button onClick={notify}>Make me a toast</button> */}
                        <Toaster />
                      </div>
                    </Form>
                  </Formik>
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
