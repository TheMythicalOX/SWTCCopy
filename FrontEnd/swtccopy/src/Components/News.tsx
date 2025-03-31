import React from "react";
import news from "../images/arrow-right.png";
import newsIcon from "../images/news.svg";
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
          <img src={newsIcon} alt="Event Icon" className="w-9 ml-4"></img>
          <h1 className="font-bold text-xl text-nowrap text-center m-auto pr-5">
            IN THE NEWS
          </h1>
          <div className="h-1 w-full bg-white m-auto"></div>
        </div>
        <div className={style1}>
          <NewsImage
            link="https://www.swtc.edu/news/press-releases/governor-evers-tours-child-care-center/"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/03/FRONT4-1.jpg"
            span={2}
            text="Governor Evers tours Child Care Center"
          />
          <NewsImage
            link="https://www.swtc.edu/news/press-releases/patel-selected-as-state-student-ambassador/"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/03/FRONT.jpg"
            span={1}
            text="Patel selected as State Student Ambassador"
          />
          <NewsImage
            link="https://www.swtc.edu/news/press-releases/students-advance-to-pas-national-conference/"
            image="https://www.swtc.edu/news/wp-content/uploads/2025/02/GROUP-USE.jpg"
            span={1}
            text="Students cadvance to PAS National Conference"
          />
        </div>
        <div className="pb-12">
          <a href="https://swtc.edu/news/" className="">
            <div className="text-white p-3 h-auto w-[20%] mx-auto text-lg font-bold text-center transition-colors duration-500 hover:bg-white hover:text-header-bg">
              <p className="">
                See all News
                <img
                  src={news}
                  alt="tmp"
                  className="w-5 ml-1 invert inline"
                ></img>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
