import React from "react";
import event from "../images/upcoming-events.svg";
import Arrow from "../images/arrow-right.png";
import UpcomingImage from "./UpcomingImage";
import { useWindowDimensions } from "./App";

const Upcoming = () => {
  const { width } = useWindowDimensions();

  let style1 = "";
  let style2 = "";

  if (width < 725) {
    style1 = "";
    style2 = "inline-flex w-full";
  } else {
    style1 = "images text-white grid grid-cols-3 gap-[2.5%] mx-0 h-fit";
    style2 = "inline-flex w-full h-1/6";
  }

  return (
    <div className="relative">
      {width >= 725 && (
        <div className="bg-header-bg absolute w-full h-[16%] top-[43%]"></div>
      )}
      <div className="test grid max-w-[1300px] justify-center mx-auto">
        <div className="topEvents relative text-campus-bg pt-5 pb-20">
          <div className={style2}>
            <img src={event} alt="Event Icon" className="w-9 ml-4"></img>
            <h1 className="font-semibold text-xl text-nowrap text-center m-auto px-3">
              UPCOMING EVENTS
            </h1>
            <div className="h-1 w-full bg-campus-bg m-auto"></div>
          </div>
          <div className={style1}>
            <UpcomingImage
              link="https://www.swtc.edu/calendar-events/details/2025-04-16%2018:00/adult-student-info-night-%7C-richland-center"
              image="https://swtc.edu/Images/events/AdultStudentInfo_4-16_we.jpg"
              text="Adult Student Info Night"
              heading="APRIL 16"
            />
            <UpcomingImage
              link="https://www.swtc.edu/calendar-events/details/2025-04-18%2000:00/campus-closed-%7C-holiday-"
              image="https://www.swtc.edu/Images/events/campusclosed_we.jpg"
              text="Campus Closed"
              heading="APRIL 18"
            />
            <UpcomingImage
              link="https://www.swtc.edu/events/new-student-registration/"
              image="https://www.swtc.edu/Images/events/NewStudentOrientation_we.jpg"
              text="New Student Registration"
              heading="NOW - MAY 13"
            />
          </div>
          <div className="">
            <div className="text-header-bg p-2 my-4 h-auto w-[35%] mx-auto text-lg font-bold text-center transition-colors duration-500 hover:bg-header-bg hover:text-white">
              <a href="https://swtc.edu/calendar-events/">
                See all Calendar Events
                <img src={Arrow} alt="tmp" className="w-6 ml-1 inline"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
