import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets/assets";
import left from "../../assets/left_icon.png";
import right from "../../assets/right_icon.png";
import { useRef } from "react";


const ExploreMenu = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200, // Adjust the value as needed
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200, // Adjust the value as needed
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div className="explore-menu" id="explore-menu">
      <div className="ee">
        <h1>Popular Categories</h1>
       
      </div>

      <div className="explore-menu-list">
        <img onClick={scrollLeft} src={left} alt="Scroll Left" className="arrow left-arrow" />
        <div ref={sliderRef} className="slider">
          {menu_list.map((item, index) => (
            <div key={index} className="explore-menu-list-item">
              <div className="explore-menu-list-item-image">
                <img style={{
                  backgroundColor:`${item.menu_background}`
                }} src={item.menu_image} alt={item.menu_name} />
              </div>
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <img onClick={scrollRight} src={right} alt="Scroll Right" className="arrow right-arrow" />
      </div>
      <hr />
    </div>
    </>
  );
};

export default ExploreMenu;