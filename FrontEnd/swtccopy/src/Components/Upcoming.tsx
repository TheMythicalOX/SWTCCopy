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
      <div className="images grid grid-cols-3 gap-5 ml-0 max-h-96 ">
        <div className="relative group items-center transition-all duration-1000">
          <div className="absolute text-center top-1/2 w-full ease-in-out transition-all duration-1000  group-hover:bg-campus-bg group-hover:bottom-0 group-hover:top-auto ">
            <h2 className="">FEBRUARY 26</h2>
            <p>Manufacturing Exploration Event</p>
          </div>
          <img src={first} alt="TMP" className="1col  object-contain" />
        </div>
        <img src={middle} alt="TMP" className="1col  object-contain" />
        <img src={last} alt="TMP" className="1col  object-contain" />
      </div>
      <a href="/#">
        See all Calendar Events <img src="" alt=""></img>
      </a>
    </div>
  );
};

export default Upcoming;
