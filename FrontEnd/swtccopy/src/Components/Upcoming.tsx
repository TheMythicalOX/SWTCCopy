import React from "react";
import first from "../images/Explore-Mfg-we.jpg";
import middle from "../images/AdultStudentInfoNight_we.jpg";
import last from "../images/MidtermStarts_we.jpg";
import event from "../images/upcoming-events.svg";
import tmp from "../images/tmp.svg";
import UpcomingImage from "./UpcomingImage";

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
          <UpcomingImage
            link="/#"
            image={first}
            text="Manufacturing Exploration Event"
            heading="FEBRUARY 26"
          />
          <UpcomingImage
            link="/#"
            image={middle}
            text="Adult Student Info Night"
            heading="MARCH 5"
          />
          <UpcomingImage
            link="/#"
            image={last}
            text="Mid-Term Classes Start"
            heading="MARCH 17"
          />
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
