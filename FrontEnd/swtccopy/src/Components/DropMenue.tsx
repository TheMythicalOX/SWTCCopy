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
          <a
            href="https://swtc.edu/academics/programs/"
            className={headDropLink}
          >
            <p className={headDropText}>
              Programs & Classes
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a
              href="https://swtc.edu/academics/programs/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Programs</p>
            </a>
            <a
              href="https://swtc.edu/academics/apprenticeships/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Apprentinceships</p>
            </a>
            <a
              href="https://swtc.edu/continuing-education/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Continuing Education</p>
            </a>
            <a
              href="https://swtc.edu/academics/earn-credit-in-high-school"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Earn Credit in High School</p>
            </a>
            <a
              href="https://swtc.edu/community/ged-hsed"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>GED/HSED</p>
            </a>
            <a
              href="https://swtc.edu/academics/general-education/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>General Education</p>
            </a>
            <a href="https://swtc.edu/online/" className={bodyDropLink}>
              <p className={bodyDropText}>Online</p>
            </a>
            <a
              href="https://swtc.edu/academics/transfer-agreements/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Transfer Agreements</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="https://swtc.edu/admissions/" className={headDropLink}>
            <p className={headDropText}>
              Admissions{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a
              href="https://swtc.edu/admissions/explore-careers"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Eplore Careers</p>
            </a>
            <a
              href="https://swtc.edu/admissions/visit-campus"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Visit Campus</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/financial-resources/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Paying for College</p>
            </a>
            <a
              href="https://swtc.edu/admissions/transfer"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Transfer</p>
            </a>
            <a
              href="https://swtc.edu/admissions/credit-for-prior-learning/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Credit for Prior Learning</p>
            </a>
            <a
              href="https://swtc.edu/admissions/apply"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Apply Now</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/student-services/registration"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Program Registration</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a
            href="https://swtc.edu/student-resources/"
            className={headDropLink}
          >
            <p className={headDropText}>
              Student Resources{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a
              href="https://swtc.edu/student-resources/student-life/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Resident & Student Life</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/college-services/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>College Services</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/learning-resources/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Academic Support & Resources</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/financial-resources/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Financial Resources</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/chargertech360/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Charger Tech 360</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/career-services/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Career Services</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/policies-procedures/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Policies</p>
            </a>
            <a
              href="https://swtc.edu/community/testing-center/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Testing Center</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="https://swtc.edu/community/" className={headDropLink}>
            <p className={headDropText}>
              Community{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a
              href="https://swtc.edu/business-industry/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Business & Industry</p>
            </a>
            <a
              href="https://swtc.edu/student-resources/career-services/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Career Services</p>
            </a>
            <a href="https://swtc.edu/daycare" className={bodyDropLink}>
              <p className={bodyDropText}>Child Care</p>
            </a>
            <a
              href="https://swtc.edu/community/community-services"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Community Services</p>
            </a>
            <a
              href="https://swtc.edu/continuing-education/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Continuing Education</p>
            </a>
            <a
              href="https://swtc.edu/community/facility-rental"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Facility Rental</p>
            </a>
            <a
              href="https://swtc.edu/community/outreach-sites/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Outreach Centers</p>
            </a>
            <a href="https://swtc.edu/public-safety/" className={bodyDropLink}>
              <p className={bodyDropText}>Public Safety Training</p>
            </a>
            <a
              href="https://swtc.edu/community/testing-center/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Testing Center</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="https://swtc.edu/foundation/" className={headDropLink}>
            <p className={headDropText}>
              Foundation{" "}
              <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
            <div className={bodyDropBox}></div>
          </a>
          <div className={bodyDropBox}>
            <a
              href="https://swtc.edu/foundation/alumni/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Alumni</p>
            </a>
            <a
              href="https://swtc.edu/foundation/board/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Board</p>
            </a>
            <a
              href="https://www.givecampus.com/campaigns/23455/donations/new"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Donate Today</p>
            </a>
            <a
              href="https://swtc.edu/foundation/donate-today"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Giving Opportunities</p>
            </a>
            <a
              href="https://swtc.edu/foundation/scholarships/apply"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Scholarships</p>
            </a>
            <a
              href="https://swtc.edu/foundation/visionary-circle"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Visionary Circle</p>
            </a>
          </div>
        </div>
        <div className={headDropBox}>
          <a href="https://swtc.edu/about/" className={headDropLink}>
            <p className={headDropText}>
              About <img src={DownArrow} alt="arrow" className={imageStyle} />
            </p>
          </a>
          <div className={bodyDropBox}>
            <a
              href="https://swtc.edu/about/who-we-are"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Who We Are</p>
            </a>
            <a href="https://swtc.edu/about/board/" className={bodyDropLink}>
              <p className={bodyDropText}>Board</p>
            </a>
            <a
              href="https://swtc.edu/about/college-accreditation"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Accreditation</p>
            </a>
            <a
              href="https://swtc.edu/about/staff-directory"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Campus Directory</p>
            </a>
            <a
              href="https://swtc.edu/about/college-effectiveness/"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>College Effectiveness</p>
            </a>
            <a
              href="https://swtc.edu/about/core-abilities"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Core Abilities</p>
            </a>
            <a
              href="https://swtc.edu/legal/consumer-information"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Consumer Information</p>
            </a>
            <a
              href="https://swtc.edu/about/current-bids-rfps"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Curerent Bids/RFPs</p>
            </a>
            <a
              href="https://swtc.edu/about/job-opportunities"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Job Opportunities</p>
            </a>
            <a href="https://swtc.edu/about/policies" className={bodyDropLink}>
              <p className={bodyDropText}>Policies</p>
            </a>
            <a
              href="https://swtc.edu/about/publications"
              className={bodyDropLink}
            >
              <p className={bodyDropText}>Publications</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
