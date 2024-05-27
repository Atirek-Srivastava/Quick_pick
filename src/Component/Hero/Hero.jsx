import React from "react";
import "./Hero.css";
import img from "../../assets/hero-img.png";
import lower from "../../assets/lower.png";
import scroll from "../../assets/scroll.png";
import play from "../../assets/play.png";
import basket from "../../assets/basket.png";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left">
          <div className="h1">
            <h1>
              Grab Your <span className="green">Organic Food</span> to <br />
              Delight your <span>Taste</span> Buds
            </h1>
          </div>

          <div className="left-para">
            <p>
              If you want to enjoy healthy and energetic Life,We're dedicated to
              providing you with the freshest, highest quality groceries.
            </p>
          </div>

          <div className="left-btn">
            <button>Shop now</button>
            <button>
              {" "}
              <img src={play} alt="" /> Watch Video
            </button>
          </div>
        </div>
        <div className="scroll-up">
          <h4>Scroll</h4> <img src={scroll} alt="" />
        </div>
        <div className="hero-right">
          <img src={img} />
        </div>
        <div className="floating-img">
          <img src={lower} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
