import React from "react";
import news from "../images/news.svg";

const News = () => {
  return (
    <div className="bg-news-bg">
      <div className="topNews">
        <h1>
          <img src={news} alt="News Icon" className="w-10"></img> IN THE NEWS
        </h1>
        <p>LINE GRAPHIC</p>
      </div>
      <div className="images grid grid-cols-2 grid-rows-2 gap-5 p-5 ">
        <img
          src="https://www.swtc.edu/news/wp-content/uploads/2025/02/EDGAR-FRONT-2-1.png"
          alt="TMP"
          className="2col col-span-2 object-contain"
        />
        <img
          src="https://www.swtc.edu/news/wp-content/uploads/2025/01/FRONT-1.jpg"
          alt="TMP"
          className="1col col-span-1 object-contain"
        />
        <img
          src="https://www.swtc.edu/news/wp-content/uploads/2025/01/FRONT4.jpg"
          alt="TMP"
          className="1col col-span-1 object-contain"
        />
      </div>
      <a href="/#">
        See all News <img src="" alt=""></img>
      </a>
    </div>
  );
};

export default News;
