import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fave.png"
import "../css/Footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerTop">
          <div className="inner">
            <div className="right">
              <div className="logo">
                <img src={logo} alt="" />
                <span>Estatien</span>
              </div>
              <div className="sendEmail">
                <input type="text" placeholder="Enter Your Email" />
                <button>Send</button>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum, laborum? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae, saepe!
              </p>
            </div>
            <div className="left">
              <div className="socials">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Properties</Link>
                <Link>FAQ's</Link>
              </div>
              <div className="socials">
                <Link>
                Portfolio</Link>
                <Link>Categories</Link>
                <Link>My Ariya</Link>
                <Link>Services</Link>
              </div>
              <div className="socials">
                <Link>Contact Us</Link>
                <Link>Our Works</Link>
                <Link>Our Clients</Link>
                <Link>Features</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="container">
            <div className="copyright">
              <p>© 2016–2024, Estatien. All Rights Reserved.</p>
            </div>
            <div className="social">
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>Twitter/X</Link>
              <Link>Pintrest</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
