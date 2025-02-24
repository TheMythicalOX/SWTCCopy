import React from "react";
import news from "../images/news.svg";
import NewsImage from "./NewsImage";
import { useWindowDimensions } from "./App";

const News = () => {
  const { width } = useWindowDimensions();

  let style1 = "";
  // let style2 = "";

  if (width < 725) {
    style1 = "";
    // style2 = "inline-flex w-full";
  } else {
    style1 = "images grid grid-cols-2 gap-8 ";
    // style2 = "inline-flex w-full h-1/6";
  }

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
        <div className={style1}>
          <NewsImage
            link="/#"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/02/GROUP-USE.jpg"
            span={2}
            text="Students advance to PAS National Conference"
          />
          <NewsImage
            link="/#"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/02/GROUP-front2.jpg"
            span={1}
            text="Students compete at Midwest Reginal Dairy Challenge"
          />
          <NewsImage
            link="/#"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/02/CRAWFORD-FRONT.jpg"
            span={1}
            text="New STEP Scholarship Program receives $5,000 grant"
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
