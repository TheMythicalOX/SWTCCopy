import React from "react";
import first from "../images/Explore-Mfg-we.jpg";
import middle from "../images/AdultStudentInfoNight_we.jpg";
import last from "../images/MidtermStarts_we.jpg";
import event from "../images/upcoming-events.svg";

const Upcoming = () => {
  return (
    <div className="test">
      <div className="topEvents">
        <h1>
          <img src={event} alt="Event Icon" className="w-9"></img> UPCOMING
          EVENTS
        </h1>
        <p>LINE GRAPHIC</p>
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
