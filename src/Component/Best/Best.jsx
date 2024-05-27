import React from "react";
import "./Best.css";
import img from "../../assets/Best-img.png";
import cod from '../../assets/cod.png'
import support from '../../assets/support.png'
import shopping from '../../assets/shopping.png'
import discount from '../../assets/discount.png'
import fast from '../../assets/fast.png'

const Best = () => {
  return (
    <>
      <div className="best">
        <h1>Why We Are Best</h1>
        <div className="main">
          <div className="two-best">
            <div className="box" id="box5"> <img src={cod} alt="" /><p>cash on Delivery</p></div>
            <div className="box"><img src={support} alt="" /><p>24/7 Customer Support</p></div>
          </div>
          <div className="best-img">
            <img src={img} alt="" />
          </div>
          <div className="three-best">
            <div className="box" id="box3"><img src={shopping} alt="" /><p>Online Shopping</p></div>
            <div className="box" id="box5"><img src={fast} alt="" /><p>Fast Delivery</p></div>
            <div className="box"><img src={discount} alt="" /><p>Monthly Discount</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Best;
