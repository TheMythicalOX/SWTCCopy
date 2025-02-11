import React from "react";
import image from "../images/image1.jpg";

const News = () => {
  return (
    <div className="bg-sky-700">
      <div className="topNews">
        <h1>
          <img src="" alt=""></img> IN THE NEWS
        </h1>
        <p>LINE GRAPHIC</p>
      </div>
      <div className="images grid grid-cols-2 grid-rows-2 gap-5 p-5 ">
        <img src={image} alt="TMP" className="2col col-span-2 object-contain" />
        <img src={image} alt="TMP" className="1col col-span-1 object-contain" />
        <img src={image} alt="TMP" className="1col col-span-1 object-contain" />
      </div>
      <a href="/#">
        See all News <img src="" alt=""></img>
      </a>
    </div>
  );
};

export default News;
