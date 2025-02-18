import React from "react";
import news from "../images/news.svg";

const News = () => {
  return (
    <div className="bg-news-bg">
      <div className="topNews text-white inline-flex w-full pt-5">
        <img src={news} alt="Event Icon" className="w-9 ml-4"></img>
        <h1 className="font-semibold text-xl text-nowrap text-center m-auto px-3">
          IN THE NEWS
        </h1>
        <div className="h-1 w-full bg-white m-auto"></div>
      </div>
      <div className="images grid grid-cols-2 grid-rows-2 gap-5 p-5 ">
        <div className="col-span-2 group items-center text-[1.6em]">
          <a href="/#" className="input-border-none overflow-hidden">
            <div className="overflow-hidden max-h-[400px] relative bg-campus-bg">
              <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                <h2 className="text-shadow">
                  New STEP Scholarship Preogram receives $5,000 grant
                </h2>
              </div>
              <img
                src="https://www.swtc.edu/news/wp-content/uploads/2025/02/CRAWFORD-FRONT.jpg"
                alt="TMP"
                className="object-cover overflow-hidden h-auto w-full opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
              />
            </div>
          </a>
        </div>
        <div className="col-span-1 group items-center text-[1.6em]">
          <a href="/#" className="input-border-none overflow-hidden">
            <div className="overflow-hidden max-h-[400px] relative bg-campus-bg">
              <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                <h2 className="text-shadow">
                  Mendez carving path as local entrepreneur (with video)
                </h2>
              </div>
              <img
                src="https://www.swtc.edu/news/wp-content/uploads/2025/02/EDGAR-FRONT-2-1.png"
                alt="TMP"
                className="object-cover overflow-hidden h-auto w-full opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
              />
            </div>
          </a>
        </div>
        <div className="col-span-1 group items-center text-[1.6em]">
          <a href="/#" className="input-border-none overflow-hidden">
            <div className="overflow-hidden max-h-[400px] relative bg-campus-bg">
              <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                <h2 className="text-shadow">
                  New Scholarship format unveiled at Southwest Tech
                </h2>
              </div>
              <img
                src="https://www.swtc.edu/news/wp-content/uploads/2025/01/FRONT-1.jpg"
                alt="TMP"
                className="object-cover overflow-hidden h-auto w-full pb-[20px] opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="">
        <div className="text-white p-2 py-4 h-auto w-[15%] mx-auto text-lg font-bold text-center transition-colors duration-500 hover:bg-white hover:text-header-bg">
          <a href="/#">
            See all News
            <img src={news} alt="tmp" className="w-4 inline"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
