import React from "react";
import first from "../images/Explore-Mfg-we.jpg";
import middle from "../images/AdultStudentInfoNight_we.jpg";
import last from "../images/MidtermStarts_we.jpg";
import event from "../images/upcoming-events.svg";

const Upcoming = () => {
  return (
    <div className="test">
      <div className="topEvents text-campus-bg inline-flex w-full pt-5">
        <img src={event} alt="Event Icon" className="w-9"></img>
        <h1 className="font-semibold text-nowrap text-center m-auto px-3">
          UPCOMING EVENTS
        </h1>
        <div className="h-1 w-full bg-campus-bg m-auto"></div>
      </div>
      <div className="images grid grid-cols-3 gap-5 p-5">
        <img src={first} alt="TMP" className="1col  object-contain" />
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
