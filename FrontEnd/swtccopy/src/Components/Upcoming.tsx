import React from "react";
import first from "../images/Explore-Mfg-we.jpg";
import middle from "../images/AdultStudentInfoNight_we.jpg";
import last from "../images/MidtermStarts_we.jpg";
import event from "../images/upcoming-events.svg";

const Upcoming = () => {
  return (
    <div className="test">
      <div className="topEvents text-campus-bg inline-flex w-full pt-5">
        <img src={event} alt="Event Icon" className="w-9 ml-4"></img>
        <h1 className="font-semibold text-xl text-nowrap text-center m-auto px-3">
          UPCOMING EVENTS
        </h1>
        <div className="h-1 w-full bg-campus-bg m-auto"></div>
      </div>
      <div className="images grid grid-cols-3 gap-5 mx-0 max-h-96 min-h-72 ">
        <div className="relative group items-center overflow-hidden">
          <a
            href="/#"
            className="absolute h-full w-full input-border-none bg-campus-bg"
          >
            <div className="z-10 absolute text-center font-bold  w-full ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
              <h2 className="text-4xl text-shadow">FEBRUARY 26</h2>
              <p className="text-xl text-shadow">
                Manufacturing Exploration Event
              </p>
            </div>
            <img
              src={first}
              alt="TMP"
              className="object-contain opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
            />
          </a>
        </div>
        <div className="relative group items-center overflow-hidden">
          <a
            href="/#"
            className="absolute h-full w-full input-border-none bg-campus-bg"
          >
            <div className="z-10 absolute text-center font-bold  w-full ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
              <h2 className="text-4xl text-shadow">MARCH 5</h2>
              <p className="text-xl text-shadow">Adult Student Info Night</p>
            </div>
            <img
              src={middle}
              alt="TMP"
              className="object-contain opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
            />
          </a>
        </div>
        <div className="relative group items-center overflow-hidden">
          <a
            href="/#"
            className="absolute h-full w-full input-border-none bg-campus-bg"
          >
            <div className="z-10 absolute text-center font-bold  w-full ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
              <h2 className="text-4xl text-shadow">MARCH 17</h2>
              <p className="text-xl text-shadow">Mid-term Classes Start</p>
            </div>
            <img
              src={last}
              alt="TMP"
              className="object-contain opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
            />
          </a>
        </div>
      </div>
      <a href="/#">
        See all Calendar Events <img src="" alt=""></img>
      </a>
    </div>
  );
};

export default Upcoming;
