import React from "react";
import DownArrow from "../images/down-chevron.png";

const DropMenu = () => {
  const imageStyle =
    "invert w-3 inline-block m-auto ml-1 group-hover:invert-[0%] transition-all ease-in-out duration-700";
  let headDropBox =
    "h-full m-auto flex w-full group hover:bg-white hover:text-campus-bg align-middle text-center transition-all duration-500 relative";

  let headDropText =
    "m-auto h-fit px-5 text-center align-middle text-nowrap inline-flex text-[0.9rem]";

  let headDropLink = "h-full m-auto flex w-full align-middle text-center";

  let bodyDropBox = "absolute z-50 top-full";
  let bodyDropLink =
    "hidden group-hover:block w-[300px] hover:text-header-bg text-white bg-header-bg  hover:bg-white transition-all duration-500 text-left ";

  let bodyDropText = "pl-10 py-2";

  return (
    <div className="bg-campus-bg w-full align-middle text-center ">
      <div className="flex h-10 w-[1000px] m-auto">
        <div className={headDropBox}>
          <a href="/#" className={headDropLink}>
            <p className={headDropText}>
              Programs & Classes
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Programs</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Apprentinceships</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Continuing Education</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Earn Credit in High School</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>GED/HSED</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>General Education</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Online</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Transfer Agreements</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="/#" className={headDropLink}>
            <p className={headDropText}>
              Admissions{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Eplore Careers</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Visit Campus</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Paying for College</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Transfer</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Credit for Prior Learning</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Apply Now</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Program Registration</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="/#" className={headDropLink}>
            <p className={headDropText}>
              Student Resources{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Resident & Student Life</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>College Services</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Academic Support & Resources</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Financial Resources</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Charger Tech 360</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Career Services</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Policies</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Testing Center</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="/#" className={headDropLink}>
            <p className={headDropText}>
              Community{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Business & Industry</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Career Services</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Child Care</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Community Services</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Continuing Education</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Facility Rental</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Outreach Centers</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Public Safety Training</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Testing Center</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="/#" className={headDropLink}>
            <p className={headDropText}>
              Foundation{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
            <div className={bodyDropBox}></div>
          </a>
          <div className={bodyDropBox}>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Alumni</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Board</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Donate Today</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Giving Opportunities</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Scholarships</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Visionary Circle</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="/#" className={headDropLink}>
            <p className={headDropText}>
              About <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Who We Are</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Board</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Accreditation</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Campus Directory</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>College Effectiveness</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Core Abilities</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Consumer Information</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Curerent Bids/RFPs</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Job Opportunities</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Policies</p>
            </a>
            <a href="/##" className={bodyDropLink}>
              <p className={bodyDropText}>Publications</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
