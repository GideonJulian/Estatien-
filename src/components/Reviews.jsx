import React from "react";
import Head from "./Head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../css/swiper.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../css/Review.css";

import { ClientReview } from "../utils/PropertyDeatils";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div id="Review-container">
      <div
        className="review-heading"
        style={{
          marginLeft: "40px",
          marginBottom: "40px",
        }}
      >
        <Head
          text={"What Our Clients Say"}
          Ptext={
            "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          }
        />
      </div>

      <div className="card-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0

            }

          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ClientReview.map((items) => (
            <SwiperSlide>
              <div className="review-card">
                <div className="stars">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <h3>{items.title}</h3>
                <p>{items.experience}</p>
                <div className="user">
                  <img src={items.profile} alt="" />
                  <div>
                    <p>{items.name}</p>
                    <span>{items.location}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default Reviews;
