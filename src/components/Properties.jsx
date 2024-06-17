import React from "react";
import "../css/Property.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../css/swiper.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import propertyDetails from "../utils/PropertyDeatils";
import { FaBath, FaBed, FaShower } from "react-icons/fa";
import Head from "./Head";
const Properties = () => {
  return (
    <div id="property-section">
      <div className="heading">
        <Head
          text={"Featured Properties"}
          Ptext={
            'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
          }
        />
      </div>
      <div className="card-container">
        <div className="card-2">
          {propertyDetails.map((item) => (
            <div className="card">
              <div className="img-card">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="desc">
                <h3 className="card-head">Seaside Serenity Villa</h3>
                <p className="card-desc">
                  A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
                  neighborhood.
                </p>

                <div className="">
                  <div className="room-features">
                    <FaBed />
                    <span>4-Bedroom</span>
                  </div>
                  <div className="room-features">
                    <FaBath />
                    <span>4-Bathroom</span>
                  </div>
                  <div className="room-features">
                    <FaBed />
                    <span>Villa</span>
                  </div>
                </div>
                <div className="card-bottom">
                  <div>
                    <span>Price</span>
                    <h3 className="price">${item.price}</h3>
                  </div>
                  <button className="buyBtn">View Property Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={
          {
            marginLeft: '30px'
          }
        }
      >
         {propertyDetails.map((item) => (
        <SwiperSlide>
          <div className="card">
            <div className="img-card">
              <img src={item.imgUrl} alt="" />
            </div>
            <div className="desc">
              <h3 className="card-head">Seaside Serenity Villa</h3>
              <p className="card-desc">
                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
                neighborhood.
              </p>

              <div className="">
                <div className="room-features">
                  <FaBed />
                  <span>4-Bedroom</span>
                </div>
                <div className="room-features">
                  <FaBath />
                  <span>4-Bathroom</span>
                </div>
                <div className="room-features">
                  <FaBed />
                  <span>Villa</span>
                </div>
              </div>
              <div className="card-bottom">
                <div>
                  <span>Price</span>
                  <h3 className="price">${item.price}</h3>
                </div>
                <button className="buyBtn">View Property Details</button>
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

export default Properties;
