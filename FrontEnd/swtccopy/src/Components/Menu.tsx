import React, { useState } from "react";

const Menu = () => {
  const [menueState, setMenueState] = useState<boolean>(false);
  const toggleMenue = () => {
    if (menueState) {
      setMenueState(false);
    } else {
      setMenueState(true);
    }
  };

  const listItem =
    "pl-10 py-[0.5rem] block hover:bg-white hover:text-header-bg transition-colors duration-500 ease-in-out";
  const headItem =
    "pl-5 py-[0.5rem] block hover:bg-white hover:text-header-bg transition-colors duration-500 ease-in-out";

  return (
    <div className="menu">
      <div className="MenuButton absolute right-3 top-4 transition-all hover:scale-125 duration-500">
        <button
          className="ring-2 ring-white px-4 py-1 text-sm font-medium"
          onClick={toggleMenue}
        >
          MENU
        </button>
      </div>
      {menueState && (
        <div className="Drop text-white">
          <div className="programs">
            <ul>
              <li>
                <a
                  href="https://swtc.edu/academics/programs/"
                  className={headItem}
                >
                  Programs & Classes
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/academics/programs/"
                  className={listItem}
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/academics/apprenticeships/"
                  className={listItem}
                >
                  Apprenticeships
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/continuing-education/"
                  className={listItem}
                >
                  Counting Education
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/academics/earn-credit-in-high-school"
                  className={listItem}
                >
                  Earn Credit in High School
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/community/ged-hsed"
                  className={listItem}
                >
                  GED/HSED
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/academics/general-education/"
                  className={listItem}
                >
                  General Education
                </a>
              </li>
              <li>
                <a href="https://swtc.edu/online/" className={listItem}>
                  Online
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/academics/transfer-agreements/"
                  className={listItem}
                >
                  Transfer Agreements
                </a>
              </li>
            </ul>
          </div>
          <div className="admissions">
            <ul>
              <li>
                <a href="https://swtc.edu/admissions/" className={headItem}>
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/admissions/explore-careers"
                  className={listItem}
                >
                  Explore Careers
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/admissions/visit-campus"
                  className={listItem}
                >
                  Visit Campus
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/financial-resources/"
                  className={listItem}
                >
                  Paying for College
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/admissions/transfer"
                  className={listItem}
                >
                  Transfer
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/admissions/credit-for-prior-learning/"
                  className={listItem}
                >
                  Credit for Prior Learning
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/admissions/apply"
                  className={listItem}
                >
                  Apply Now
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/student-services/registration"
                  className={listItem}
                >
                  Program Registration
                </a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <ul>
              <li>
                <a
                  href="https://swtc.edu/student-resources/student-life/"
                  className={headItem}
                >
                  Student Resources
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/student-life/"
                  className={listItem}
                >
                  Resident & Student Life
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/college-services/"
                  className={listItem}
                >
                  College Services
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/learning-resources/"
                  className={listItem}
                >
                  Academic Support & Resources
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/financial-resources/"
                  className={listItem}
                >
                  Financial Resources
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/chargertech360/"
                  className={listItem}
                >
                  Charger tech 360
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/career-services/"
                  className={listItem}
                >
                  Career Services
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/policies-procedures/"
                  className={listItem}
                >
                  Policies
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/community/testing-center/"
                  className={listItem}
                >
                  Testing Center
                </a>
              </li>
            </ul>
          </div>
          <div className="community">
            <ul>
              <li>
                <a href="https://swtc.edu/community/" className={headItem}>
                  Community
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/business-industry/"
                  className={listItem}
                >
                  business & Industry
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/student-resources/career-services/"
                  className={listItem}
                >
                  Career Services
                </a>
              </li>
              <li>
                <a href="https://swtc.edu/daycare" className={listItem}>
                  Child Care
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/community/community-services"
                  className={listItem}
                >
                  Community Services
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/continuing-education/"
                  className={listItem}
                >
                  Continuing Education
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/community/facility-rental"
                  className={listItem}
                >
                  Facility Rental
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/community/outreach-sites/"
                  className={listItem}
                >
                  Outreach Centers
                </a>
              </li>
              <li>
                <a href="https://swtc.edu/public-safety/" className={listItem}>
                  Public Safety Training
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/community/testing-center/"
                  className={listItem}
                >
                  Testing Center
                </a>
              </li>
            </ul>
          </div>
          <div className="foundation">
            <ul>
              <li>
                <a href="https://swtc.edu/foundation/" className={headItem}>
                  Foundation
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/foundation/alumni/"
                  className={listItem}
                >
                  Alumni
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/foundation/board/"
                  className={listItem}
                >
                  Board
                </a>
              </li>
              <li>
                <a
                  href="https://www.givecampus.com/campaigns/23455/donations/new"
                  className={listItem}
                >
                  Donate Today
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/foundation/donate-today"
                  className={listItem}
                >
                  Giving Opportunities
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/foundation/scholarships/apply"
                  className={listItem}
                >
                  Scholarships
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/foundation/visionary-circle"
                  className={listItem}
                >
                  Visionary Circle
                </a>
              </li>
            </ul>
          </div>
          <div className="about">
            <ul>
              <li>
                <a href="https://swtc.edu/about/" className={headItem}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/who-we-are"
                  className={listItem}
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a href="https://swtc.edu/about/board/" className={listItem}>
                  Board
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/college-accreditation"
                  className={listItem}
                >
                  Accreditation
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/staff-directory"
                  className={listItem}
                >
                  Campus Directory
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/college-effectiveness/"
                  className={listItem}
                >
                  College Effectiveness
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/core-abilities"
                  className={listItem}
                >
                  Core Abilities
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/legal/consumer-information"
                  className={listItem}
                >
                  Consumer Information
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/current-bids-rfps"
                  className={listItem}
                >
                  Current Bids/RFPs
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/job-opportunities"
                  className={listItem}
                >
                  Job Opportunities
                </a>
              </li>
              <li>
                <a href="https://swtc.edu/about/policies" className={listItem}>
                  Policies
                </a>
              </li>
              <li>
                <a
                  href="https://swtc.edu/about/publications"
                  className={listItem}
                >
                  Publications
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
