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

  const listItem = "pl-10 pb-5";
  const headItem = "pl-5 pb-5";

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
        <div className="Drop">
          <div className="programs">
            <ul>
              <li className={headItem}>
                <a href="/#">Programs & Classes</a>
              </li>
              <li className={listItem}>
                <a href="/#">Programs</a>
              </li>
              <li className={listItem}>
                <a href="/#">Apprenticeships</a>
              </li>
              <li className={listItem}>
                <a href="/#">Counting Education</a>
              </li>
              <li className={listItem}>
                <a href="/#">Earn Credit in High School</a>
              </li>
              <li className={listItem}>
                <a href="/#">GED/HSED</a>
              </li>
              <li className={listItem}>
                <a href="/#">General Education</a>
              </li>
              <li className={listItem}>
                <a href="/#">Online</a>
              </li>
              <li className={listItem}>
                <a href="/#">Transfer Agreements</a>
              </li>
            </ul>
          </div>
          <div className="admissions">
            <ul>
              <li className={headItem}>
                <a href="/#">Admissions</a>
              </li>
              <li className={listItem}>
                <a href="/#">Explore Careers</a>
              </li>
              <li className={listItem}>
                <a href="/#">Visit Campus</a>
              </li>
              <li className={listItem}>
                <a href="/#">Paying for College</a>
              </li>
              <li className={listItem}>
                <a href="/#">Transfer</a>
              </li>
              <li className={listItem}>
                <a href="/#">Credit for Prior Learning</a>
              </li>
              <li className={listItem}>
                <a href="/#">Apply Now</a>
              </li>
              <li className={listItem}>
                <a href="/#">Program Registration</a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <ul>
              <li className={headItem}>
                <a href="/#">Student Resources</a>
              </li>
              <li className={listItem}>
                <a href="/#">Resident & Student Life</a>
              </li>
              <li className={listItem}>
                <a href="/#">College Services</a>
              </li>
              <li className={listItem}>
                <a href="/#">Academic Support & Resources</a>
              </li>
              <li className={listItem}>
                <a href="/#">Financial Resources</a>
              </li>
              <li className={listItem}>
                <a href="/#">Charger tech 360</a>
              </li>
              <li className={listItem}>
                <a href="/#">Career Services</a>
              </li>
              <li className={listItem}>
                <a href="/#">Policies</a>
              </li>
              <li className={listItem}>
                <a href="/#">Testing Center</a>
              </li>
            </ul>
          </div>
          <div className="community">
            <ul>
              <li className={headItem}>
                <a href="/#">Community</a>
              </li>
              <li className={listItem}>
                <a href="/#">business & Industry</a>
              </li>
              <li className={listItem}>
                <a href="/#">Career Services</a>
              </li>
              <li className={listItem}>
                <a href="/#">Child Care</a>
              </li>
              <li className={listItem}>
                <a href="/#">Community Services</a>
              </li>
              <li className={listItem}>
                <a href="/#">Continuing Education</a>
              </li>
              <li className={listItem}>
                <a href="/#">Facility Rental</a>
              </li>
              <li className={listItem}>
                <a href="/#">Outreach Centers</a>
              </li>
              <li className={listItem}>
                <a href="/#">Public Safety Training</a>
              </li>
              <li className={listItem}>
                <a href="/#">Testing Center</a>
              </li>
            </ul>
          </div>
          <div className="foundation">
            <ul>
              <li className={headItem}>
                <a href="/#">Foundation</a>
              </li>
              <li className={listItem}>
                <a href="/#">Alumni</a>
              </li>
              <li className={listItem}>
                <a href="/#">Board</a>
              </li>
              <li className={listItem}>
                <a href="/#">Donate Today</a>
              </li>
              <li className={listItem}>
                <a href="/#">Giving Opportunities</a>
              </li>
              <li className={listItem}>
                <a href="/#">Scholarships</a>
              </li>
              <li className={listItem}>
                <a href="/#">Visionary Circle</a>
              </li>
            </ul>
          </div>
          <div className="about">
            <ul>
              <li className={headItem}>
                <a href="/#">About</a>
              </li>
              <li className={listItem}>
                <a href="/#">Who We Are</a>
              </li>
              <li className={listItem}>
                <a href="/#">Board</a>
              </li>
              <li className={listItem}>
                <a href="/#">Accreditation</a>
              </li>
              <li className={listItem}>
                <a href="/#">Campus Directory</a>
              </li>
              <li className={listItem}>
                <a href="/#">College Effectiveness</a>
              </li>
              <li className={listItem}>
                <a href="/#">Core Abilities</a>
              </li>
              <li className={listItem}>
                <a href="/#">Consumer Information</a>
              </li>
              <li className={listItem}>
                <a href="/#">Current Bids/RFPs</a>
              </li>
              <li className={listItem}>
                <a href="/#">Job Opportunities</a>
              </li>
              <li className={listItem}>
                <a href="/#">Policies</a>
              </li>
              <li className={listItem}>
                <a href="/#">Publications</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
