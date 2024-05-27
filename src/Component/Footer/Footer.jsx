import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import logo from "../../assets/logo.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-i">
          <div>
            <h2>ABOUT</h2>
            <ul>
              <li>Who we are?</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h2>HELP</h2>
            <ul>
              <li>Support</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <h2>CONTACT</h2>
            <ul>
              <li>Term & Condition</li>
              <li>Return & Exchange Policy</li>
            </ul>
          </div>
          <div>
            <h2>FOLLOW US</h2>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="div-class">
          <div>
            <div className="newsletter">
              <h1>Newsletter</h1>

              <div className="search">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
              {/* <div className="search">
                <button>Subscribe</button>
              </div> */}
            </div>
            <div className="footer-social-icons">
              <img src={facebook_icon} alt="" />
              <img src={twitter_icon} alt="" />
              <img src={instagram_icon} alt="" />
              <img src={youtube_icon} alt="" />
            </div>
          </div>
          <div className="pick">
            <div className="pick-f">
              <img src={logo} alt="" />
              <h1>Quick Pick</h1>{" "}
            </div>
            <p>
              Embracing Freshness <br /> at Organic Groceries
            </p>
          </div>
        </div>
        <div className="contact">
          <img src={email} alt="" />
          <p>www.QuickPick.com</p>
          <img src={location} alt="" />
          <p>XYZ,ABC</p>
          <img src={phone} alt="" />
          <p>+111-22-333</p>
        </div> 
      </div>
    </>
  );
};

export default Footer;
