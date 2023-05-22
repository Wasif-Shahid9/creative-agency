import { Autoplay, Navigation } from "swiper";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CardSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { Container } from "react-bootstrap";
import img from "../template/assets/img/project/project-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import serviceicon1 from "../template/assets/img/icons/service-icon-1.png";
import serviceicon2 from "../template/assets/img/icons/service-icon-2.png";
import serviceicon3 from "../template/assets/img/icons/service-icon-3.png";
import "../screens/Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Modal } from "bootstrap";

SwiperCore.use([Autoplay, Pagination]);
const CardSlider = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const userCollection = collection(db, "services");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setUser(data.docs.map((doc) => doc.data()));
      console.log(7)
    };
    getUsers();
  }, []);

  return (
    <>
      <Container fluid>
        <div className="swiper-wrapper1">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
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
            className="mySwiper service-slider"
          >
            {user.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="single-service">
                  <div className="icon">
                    <img src={data.icon} alt="Error" />
                  </div>
                  <h4>{data.title}</h4>
                  <p>{data.detail.substring(0, 100)}...</p>

                  <div className="read-btn">
                    <a
                      onClick={() =>
                        navigate("/servicedetail", { state: data })
                      }
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination d-md-none d-md-block"></div>
        </div>
      </Container>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
};

export default CardSlider;
