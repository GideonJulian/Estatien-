import React from "react";
import "../css/Home.css";
import Hero from "../components/Hero";
import featureImg1 from "../assets/icon-2.png"
import featureImg2 from "../assets/icon-3.png"
import featureImg3 from "../assets/icon-4.png"
import featureImg4 from "../assets/icon-1.png"
import Properties from "../components/Properties";
import Reviews from "../components/Reviews";
const Home = () => {
  return (
    <div className="Home-container">
      <div className="hero">
        <Hero />
      </div>
      <div id="feature-row">
        <div className="features">
          <div>
            <img src={featureImg1} alt="" />
            <h3>Find Your Dream Home</h3>
          </div>
        </div>
        <div className="features">
          <div>
            <img src={featureImg2} alt="" />
            <h3>Unlock Property Value</h3>
          </div>
        </div>
        <div className="features">
          <div>
            <img src={featureImg3} alt="" />
            <h3>Effortless Property Management</h3>
          </div>
        </div>
        <div className="features">
          <div>
            <img src={featureImg4} alt="" />
            <h3>Smart Investments, Informed Decisions</h3>
          </div>
        </div>
      </div>
      <div className="properties-row">
        <Properties />
      </div>
      <div className="review-row">
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
