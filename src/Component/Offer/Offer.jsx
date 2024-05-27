import React, { useState, useEffect } from "react";
import "./Offer.css";
import img1 from "../../assets/offer-img1.png";
import img2 from "../../assets/offer-img2.png";
import img3 from "../../assets/offer-img3.png";

const Offer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-06-06T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="offer-week">
        <h1>Get The Special Offer Of This Week</h1>
        <p>100% Free shipping on each product</p>

        <div className="time">
          <span>{String(timeLeft.days).padStart(2, "0")}</span>
          <a>:</a>
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <a>:</a>
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <a>:</a>
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>

        {/* <div className="offer-sections"> 
          <div className="offer-section">
            <div className="left-section">
              <p>Summer Sake</p>
              <p>100% Fresh Fruit</p>
              <h2>Up to</h2>
              <button>Shop Now</button>
            </div>
            <div className="right-section">
              <img src={img1} />
            </div>
          </div>

          <div className="offer-section">
            <div className="left-section">
              <p>Summer Sake</p>
              <p>100% Fresh Fruit</p>
              <h2>Up to</h2>
              <button>Shop Now</button>
            </div>
            <div className="right-section">
              <img src={img1} />
            </div>
          </div>

          <div className="offer-section">
            <div className="left-section">
              <p>Summer Sake</p>
              <p>100% Fresh Fruit</p>
              <h2>Up to</h2>
              <button>Shop Now</button>
            </div>
            <div className="right-section">
              <img src={img1} />
            </div>
          </div>
        </div> */}

        <div className="offer-sections">
          <div className="first-offer">
            <div>
              <h6>SUMMER SALE</h6>
              <h1>100% Fresh Fruit</h1>
              <h5>
                Upto <span>60% Off</span>
              </h5>
              <button>Show Now</button>
            </div>
            <img src={img1} alt="" />
          </div>

          <div className="second-offer">
            <div>
              <h6>BEST DEALS</h6>
              <h1>Sale of the Mont</h1>
              <span>06ㅤ:ㅤ11ㅤ:ㅤ23ㅤ:ㅤ03</span>
              <span>DaysㅤHoursㅤMinㅤSec</span>
              <button>Shop Now</button>
            </div>
            <img src={img2} alt="" />
          </div>

          <div className="third-offer">
            <div>
              <h6>BEST DEALS</h6>
              <h1>Sale of the Mont</h1>
              <span>06ㅤ:ㅤ11ㅤ:ㅤ23ㅤ:ㅤ03</span>
              <span>DaysㅤHoursㅤMinㅤSec</span>
              <button>Shop Now</button>
            </div>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
