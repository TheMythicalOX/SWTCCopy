import React from "react";
import news from "../images/news.svg";
import NewsImage from "./NewsImage";

const News = () => {
  return (
    <div className="bg-news-bg p-5">
      <div className="max-w-[1300px] justify-center mx-auto">
        <div className="topNews text-white inline-flex w-full py-10">
          <img src={news} alt="Event Icon" className="w-9 ml-4"></img>
          <h1 className="font-bold text-xl text-nowrap text-center m-auto pr-5">
            IN THE NEWS
          </h1>
          <div className="h-1 w-full bg-white m-auto"></div>
        </div>
        <div className="images grid grid-cols-2 gap-8 ">
          <NewsImage
            link="/#"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/02/CRAWFORD-FRONT.jpg"
            span={2}
            text="New Scholarship format unveiled at Southwest Tech"
          />
          <NewsImage
            link="/#"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/02/EDGAR-FRONT-2-1.png"
            span={1}
            text="Mendez carving path as local entrepeneur (with video)"
          />
          <NewsImage
            link="/#"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/01/FRONT-1.jpg"
            span={1}
            text="New scholarship format unveiled at Southwest Tech"
          />
        </div>
        <div className="pb-12">
          <a href="/#" className="">
            <div className="text-white p-3 h-auto w-[20%] mx-auto text-lg font-bold text-center transition-colors duration-500 hover:bg-white hover:text-header-bg">
              <p className="">
                See all News
                <img src={news} alt="tmp" className="w-4 inline"></img>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
