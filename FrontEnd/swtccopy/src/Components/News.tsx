import React from "react";
import tmp from "../Images/image1.jpg";

const News = () => {
  return (
    <div>
      <div className="topNews">
        <h1>
          <img src="" alt=""></img> IN THE NEWS
        </h1>
        <p>LINE GRAPHIC</p>
      </div>
      <div className="images">
        <div className="2col">
          <img src={tmp} alt="TMP" />
        </div>
        <div className="1cols">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <a href="/#">
        See all News <img src="" alt=""></img>
      </a>
    </div>
  );
};

export default News;
