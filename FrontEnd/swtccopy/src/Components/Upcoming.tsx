import React from "react";
import image from "../images/image1.jpg";

const Upcoming = () => {
  return (
    <div className="test">
      <div className="topEvents">
        <h1>
          <img src="" alt=""></img> UPCOMING EVENTS
        </h1>
        <p>LINE GRAPHIC</p>
      </div>
      <div className="images grid grid-cols-3 gap-5 p-5">
        <img src={image} alt="TMP" className="2col  object-contain" />
        <img src={image} alt="TMP" className="1col  object-contain" />
        <img src={image} alt="TMP" className="1col  object-contain" />
      </div>
      <a href="/#">
        See all Calendar Events <img src="" alt=""></img>
      </a>
    </div>
  );
};

export default Upcoming;
