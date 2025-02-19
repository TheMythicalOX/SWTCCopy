import React from "react";
import news from "../images/news.svg";

const News = () => {
  return (
    <div className="bg-news-bg p-5">
      <div className="topNews text-white inline-flex w-full py-10">
        <img src={news} alt="Event Icon" className="w-9 ml-4"></img>
        <h1 className="font-bold text-xl text-nowrap text-center m-auto pr-5">
          IN THE NEWS
        </h1>
        <div className="h-1 w-full bg-white m-auto"></div>
      </div>
      <div className="images grid grid-cols-2 auto-rows-max gap-8 ">
        <a href="/#" className="input-border-none col-span-2">
          <div className="relative group items-center text-[1.6em] h-full bg-campus-bg">
            <div className="overflow-hidden max-h-[400px]">
              <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                <h2 className="text-shadow text-2xl p-3">
                  New Scholarship format unveiled at Southwest Tech
                </h2>
              </div>
              <img
                src="https://www.swtc.edu/news/wp-content/uploads/2025/02/CRAWFORD-FRONT.jpg"
                alt="TMP"
                className="object-cover h-auto w-full opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
              />
            </div>
          </div>
        </a>
        <a href="/#" className="input-border-none col-span-1">
          <div className="relative group items-center text-[1.6em] h-full bg-campus-bg">
            <div className="overflow-hidden max-h-[400px]">
              <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                <h2 className="text-shadow text-2xl p-3">
                  New Scholarship format unveiled at Southwest Tech
                </h2>
              </div>
              <img
                src="https://www.swtc.edu/news/wp-content/uploads/2025/02/EDGAR-FRONT-2-1.png"
                alt="TMP"
                className="object-cover h-auto w-full opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
              />
            </div>
          </div>
        </a>
        <a href="/#" className="input-border-none col-span-1">
          <div className="relative group items-center text-[1.6em] h-full bg-campus-bg">
            <div className="overflow-hidden max-h-[400px]">
              <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                <h2 className="text-shadow text-2xl p-3">
                  New Scholarship format unveiled at Southwest Tech
                </h2>
              </div>
              <img
                src="https://www.swtc.edu/news/wp-content/uploads/2025/01/FRONT-1.jpg"
                alt="TMP"
                className="object-cover h-auto w-full opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
              />
            </div>
          </div>
        </a>
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
  );
};

export default News;
