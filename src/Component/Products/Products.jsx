import React, { useState } from "react";
import "./Products.css";
import Services_Data from "../../assets/assets/services_data";
// import img from "../../assets/main-img.webp";
import lower from "../../assets/lower.png";
// import {div_list} from '../../assets/asset'


const Products = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <>
      <div className="floating-img1">
        <img src={lower} alt="" />
      </div>
      <div className="services">
        <div className="services-title">
          <h1>Weekly Deals on Top Products</h1>
        </div>
        
          <div className="services-container">
            {Services_Data.map((service, index) => {
              return (
                <>
                  <div key={index} className="services-format">
                    <div className="small-div">
                      <img className="float-img" src={service.s_image} alt="" />
                    </div>
                    <h3>
                      {service.s_no} <span>30% off</span>
                    </h3>
                    <h2>{service.s_name}</h2>
                    <img src={service.s_image} alt="" />

                    <div className="first">
                      <h4>{service.s_desc}</h4>
                      <p className="para-tag">
                        Rating <br />‎ 4.8⭐
                      </p>
                    </div>

                    <div className="second">
                      <h3>{service.s_desc1}</h3>
                      <div className="counter">
                        <button onClick={handleDecrement}>-</button>
                        <span>{count}</span>
                        <button onClick={handleIncrement}>+</button>
                      </div>
                    </div>

                    <div className="third">
                      <h3>{service.s_price} </h3>
                      <p>{service.s_cutprice} </p>
                    </div>
                    <button className="add-button">Add to cart</button>
                  </div>
                </>
              );
            })}
          </div>
      </div>
    </>
  );
};

export default Products;
