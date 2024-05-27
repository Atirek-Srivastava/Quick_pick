import React from "react";
import "./BuyNow.css";
import thumb from "../../assets/thumbs.ico";
import health from "../../assets/health.png";
import accs from "../../assets/accessibility.png";
import right1 from "../../assets/right1_icon.png";

const BuyNow = () => {
  return (
    <>
      <div className="buynow-container">
        <div className="left-section">
          <div>
            <h1>
              A Distinct Kind of <br /> Organic Store
            </h1>
          </div>

          <div className="para">
            <p>
              Our Store is to revolutionize the way people shop for groceries{" "}
              <br />
              by providing convenient access to fresh, high-quality products{" "}
              <br />
              at any time of the day or night.
            </p>
          </div>
          <div className="btn">
            <button>
              Buy Now <img src={right1} alt="" />
            </button>
          </div>
        </div>
        <div className="right-section">
          <div className="CS">
            <div className="sure">
              <img src={thumb} alt="" />
              <h1>Customer Satisfaction</h1>
            </div>
            <div>
              <p>
                Ensure that every customer has a positive experience by
                providing excellent customer service, high-quality products, and
                user-friendly online shopping experiences.
              </p>
            </div>
          </div>

          <div className="CA">
            <div className="sure1">
              <img src={accs} alt="" />
              <h1>Convenience Accessibility</h1>
            </div>

            <div>
              <p>
                Prioritize convenience by offering 24/7 online shopping, fast
                and reliable delivery.
              </p>
            </div>
          </div>

          <div className="HW">
            <div className="sure">
              <img src={health} alt="" />
              <h1>Health and Wellness</h1>
            </div>

            <div>
              <p>
                Promote healthy eating habits by offering a selection of
                nutritious products, including organic options, fresh produce,
                and wholesome snacks, to help customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
