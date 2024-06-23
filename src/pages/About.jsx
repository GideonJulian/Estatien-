import React from "react";
import heroimg from "../assets/AboutImg.png";
import valueIcon1 from "../assets/valueIcon1.png";
import valueIcon2 from "../assets/valueicon2.png";
import valueIcon3 from "../assets/valueicon3.png";
import valueIcon4 from "../assets/valueIcon4.png";
import headIcon from "../assets/headIcon.png";
const About = () => {
  return (
    <div id="about-container">
      <div className="about-hero">
        <div className="textbox">
          <h1>Our Journey</h1>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div className="heroBox">
            <div className="box">
              {" "}
              <h3>200+</h3>
              <p>Happy customers</p>
            </div>
            <div className="box">
              {" "}
              <h3>10k+</h3>
              <p>Properties For Clients</p>
            </div>
            <div className="box">
              {" "}
              <h3>16+</h3>
              <p>Years in Business</p>
            </div>
          </div>
        </div>
        <div className="imgBox">
          <img src={heroimg} alt="" />
        </div>
      </div>
      <div className="value-section">
        <div className="textBox">
          <img
            src={headIcon}
            style={{
              width: "50px",
            }}
          />
          <h1>Our Values</h1>
          <p>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="values">
          <div className="value">
            <div className="head">
              <img src={valueIcon1} alt="" />
              <h3>Trust</h3>
            </div>
            <p>
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div className="value">
            <div className="head">
              <img src={valueIcon2} alt="" />
              <h3>Client-Contric</h3>
            </div>
            <p>
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>
          <div className="value">
            <div className="head">
              <img src={valueIcon3} alt="" />
              <h3>Excellence</h3>
            </div>
            <p>
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
          <div className="value">
            <div className="head">
              <img src={valueIcon4} alt="" />
              <h3>Our Commitment</h3>
            </div>
            <p>
              We are dedicated to providing you with the highest level of
              service, professionalism, and support.
            </p>
          </div>
        </div>
      </div>
      <div id="achievement-section">
        <div className="achieve-container">
          <div className="head">
            <img
              src={headIcon}
              style={{
                width: "50px",
              }}
            />
            <h1>Our Achievements</h1>
            <p>
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="achievements">
            <div className="box">
              <h3>3+ Years of Excellence</h3>
              <p>
                With over 3 years in the industry, we've amassed a wealth of
                knowledge and experience, becoming a go-to resource for all
                things real estate.
              </p>
            </div>
            <div className="box">
              <h3>Happy Clients</h3>
              <p>
                Our greatest achievement is the satisfaction of our clients.
                Their success stories fuel our passion for what we do.
              </p>
            </div>
            <div className="box">
              <h3>Industry Recognition</h3>
              <p>
                We've earned the respect of our peers and industry leaders, with
                accolades and awards that reflect our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="navigation-section">
        <div className="navigation-container">
          <div className="head">
            <img
              src={headIcon}
              style={{
                width: "50px",
              }}
            />
            <h1>Navigating the Estatein Experience</h1>
            <p>
              At Estatein, we've designed a straightforward process to help you
              find and purchase your dream property with ease. Here's a
              step-by-step guide to how it all works.
            </p>
          </div>
          <div className="navigation">
            <div className="navigate">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
