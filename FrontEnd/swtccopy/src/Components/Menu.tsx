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

  return (
    <div className="menu">
      <div className="MenuButton">
        <button onClick={toggleMenue}>MENU</button>
      </div>
      {menueState && (
        <div className="Drop">
          <div className="programs">
            <a href="/#">Programs & Classes</a>
            <ul>
              <li>
                <a href="/#">Programs</a>
              </li>
              <li>
                <a href="/#">Apprenticeships</a>
              </li>
              <li>
                <a href="/#">Counting Education</a>
              </li>
              <li>
                <a href="/#">Earn Credit in High School</a>
              </li>
              <li>
                <a href="/#">GED/HSED</a>
              </li>
              <li>
                <a href="/#">General Education</a>
              </li>
              <li>
                <a href="/#">Online</a>
              </li>
              <li>
                <a href="/#">Transfer Agreements</a>
              </li>
            </ul>
          </div>
          <div className="admissions">
            <a href="/#">Admissions</a>
            <ul>
              <li>
                <a href="/#">Explore Careers</a>
              </li>
              <li>
                <a href="/#">Visit Campus</a>
              </li>
              <li>
                <a href="/#">Paying for College</a>
              </li>
              <li>
                <a href="/#">Transfer</a>
              </li>
              <li>
                <a href="/#">Credit for Prior Learning</a>
              </li>
              <li>
                <a href="/#">Apply Now</a>
              </li>
              <li>
                <a href="/#">Program Registration</a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <a href="/#">Student Resources</a>
            <ul>
              <li>
                <a href="/#">Resident & Student Life</a>
              </li>
              <li>
                <a href="/#">College Services</a>
              </li>
              <li>
                <a href="/#">Academic Support & Resources</a>
              </li>
              <li>
                <a href="/#">Financial Resources</a>
              </li>
              <li>
                <a href="/#">Charger tech 360</a>
              </li>
              <li>
                <a href="/#">Career Services</a>
              </li>
              <li>
                <a href="/#">Policies</a>
              </li>
              <li>
                <a href="/#">Testing Center</a>
              </li>
            </ul>
          </div>
          <div className="community">
            <a href="/#">Community</a>
            <ul>
              <li>
                <a href="/#">business & Industry</a>
              </li>
              <li>
                <a href="/#">Career Services</a>
              </li>
              <li>
                <a href="/#">Child Care</a>
              </li>
              <li>
                <a href="/#">Community Services</a>
              </li>
              <li>
                <a href="/#">Continuing Education</a>
              </li>
              <li>
                <a href="/#">Facility Rental</a>
              </li>
              <li>
                <a href="/#">Outreach Centers</a>
              </li>
              <li>
                <a href="/#">Public Safety Training</a>
              </li>
              <li>
                <a href="/#">Testing Center</a>
              </li>
            </ul>
          </div>
          <div className="foundation">
            <a href="/#">Foundation</a>
            <ul>
              <li>
                <a href="/#">Alumni</a>
              </li>
              <li>
                <a href="/#">Board</a>
              </li>
              <li>
                <a href="/#">Donate Today</a>
              </li>
              <li>
                <a href="/#">Giving Opportunities</a>
              </li>
              <li>
                <a href="/#">Scholarships</a>
              </li>
              <li>
                <a href="/#">Visionary Circle</a>
              </li>
            </ul>
          </div>
          <div className="about">
            <a href="/#">About</a>
            <ul>
              <li>
                <a href="/#">Who We Are</a>
              </li>
              <li>
                <a href="/#">Board</a>
              </li>
              <li>
                <a href="/#">Accreditation</a>
              </li>
              <li>
                <a href="/#">Campus Directory</a>
              </li>
              <li>
                <a href="/#">College Effectiveness</a>
              </li>
              <li>
                <a href="/#">Core Abilities</a>
              </li>
              <li>
                <a href="/#">Consumer Information</a>
              </li>
              <li>
                <a href="/#">Current Bids/RFPs</a>
              </li>
              <li>
                <a href="/#">Job Opportunities</a>
              </li>
              <li>
                <a href="/#">Policies</a>
              </li>
              <li>
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
