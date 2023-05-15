import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getContactUs } from "../../utils/FirebaseService";
import logo from "../../template/assets/img/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Footer = () => {
  const [location, setLocation] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
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
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const userCollection = collection(db, "services");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setUser(data.docs.map((doc) => doc.data()));
    };
    getUsers();
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} alt="Error" />
                  </Link>
                </div>
                <p>
                  Integer purus odio, placerat nec ande rhoncus in, ullamcorper
                  nec dolor. on aptent taciti sociosqu.
                </p>
                <ul className="social-media-icons">
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
                      <AiOutlineInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Our Services</h4>
                {user.map((data) => (
                  <ul className="footer-menu" key={data.id}>
                    <li >
                      <a
                        onClick={() =>
                          navigate("/servicedetail", { state: data })
                        }
                      >
                        {data.title}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Quick Links</h4>
                <ul className="footer-menu">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/project">Project</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Contacts</h4>
                <div className="number">
                  <div className="num-icon">
                    <i className="">
                      <BsFillTelephoneFill />
                    </i>
                  </div>
                  <div className="phone">
                    <a href="">
                      {phone.phone && phone.phone[0]} <br />
                      {phone.phone && phone.phone[1]}
                    </a>
                  </div>
                </div>
                <div className="office-mail">
                  <div className="mail-icon">
                    <i className="">
                      <MdEmail />
                    </i>
                  </div>
                  <div className="email">
                    <span
                      className="__cf_email__"
                      data-cfemail="b8d1d6ded7f8ddc0d9d5c8d4dd96dbd7d5"
                    ></span>

                    <span
                      className="__cf_email__"
                      data-cfemail="0960676f66497a7c7979667b7d276a6664"
                    >
                      <a href="">
                        {email.address && email.address[0]}
                        <br />
                        {email.address && email.address[1]}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="address">
                  <div className="address-icon">
                    <i className="">
                      <ImLocation />
                    </i>
                  </div>
                  <p> {location.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 col-lg-4 col-xl-5">
              <div className="copy-txt">
                <span>
                  Copyright 2022 <b>Crea soft</b> | Design By{" "}
                  <a href="#">Egens Theme</a>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8 col-xl-7">
              <ul className="footer-bottom-menu">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
