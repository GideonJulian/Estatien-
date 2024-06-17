import React from "react";
import Head from "./Head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../css/swiper.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../css/Review.css"
import { ClientReview } from "../utils/PropertyDeatils";
 
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
        {
          ClientReview.map((items)=> (
            <div className="review-card"></div>
          ))
        }
      </div>
    </div>
  );
};

export default Reviews;
