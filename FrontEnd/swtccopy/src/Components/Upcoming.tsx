import React from "react";
import first from "../images/Explore-Mfg-we.jpg";
import middle from "../images/AdultStudentInfoNight_we.jpg";
import last from "../images/MidtermStarts_we.jpg";
import event from "../images/upcoming-events.svg";
import tmp from "../images/tmp.svg";

const Upcoming = () => {
  return (
    <div className="test grid">
      <div className="topEvents relative text-campus-bg pt-5 pb-20">
        <div className="bg-header-bg absolute w-full h-[16%] top-[43%]"></div>

        <div className="inline-flex w-full h-1/6">
          <img src={event} alt="Event Icon" className="w-9 ml-4"></img>
          <h1 className="font-semibold text-xl text-nowrap text-center m-auto px-3">
            UPCOMING EVENTS
          </h1>
          <div className="h-1 w-full bg-campus-bg m-auto"></div>
        </div>
        <div className="images text-white grid grid-cols-3 gap-[2.5%] mx-0 h-fit">
          <div className=" group items-center">
            <a href="/#" className="input-border-none overflow-hidden">
              <div className="overflow-hidden relative bg-campus-bg">
                <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                  <h2 className="text-shadow event-title-text-size">
                    FEBRUARY 26
                  </h2>
                  <p className="text-xl text-shadow">
                    Manufacturing Exploration Event
                  </p>
                </div>
                <img
                  src={first}
                  alt="TMP"
                  className="object-cover overflow-hidden h-fit opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
                />
              </div>
            </a>
          </div>
          <div className=" group items-center">
            <a href="/#" className="input-border-none overflow-hidden">
              <div className="overflow-hidden relative bg-campus-bg">
                <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                  <h2 className="event-title-text-size text-shadow">MARCH 5</h2>
                  <p className="text-xl text-shadow">
                    Adult Student Info Night
                  </p>
                </div>
                <img
                  src={middle}
                  alt="TMP"
                  className="object-cover overflow-hidden h-fit opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
                />
              </div>
            </a>
          </div>
          <div className=" group items-center">
            <a href="/#" className="input-border-none overflow-hidden">
              <div className="overflow-hidden relative bg-campus-bg">
                <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
                  <h2 className="event-title-text-size text-shadow">
                    MARCH 17
                  </h2>
                  <p className="text-xl text-shadow">Mid-term Classes Start</p>
                </div>
                <img
                  src={last}
                  alt="TMP"
                  className="object-cover overflow-hidden h-fit opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="">
          <div className="text-header-bg p-2 my-4 h-auto w-[35%] mx-auto text-lg font-bold text-center transition-colors duration-500 hover:bg-header-bg hover:text-white">
            <a href="/#">
              See all Calendar Events
              <img src={tmp} alt="tmp" className="w-4 inline"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
