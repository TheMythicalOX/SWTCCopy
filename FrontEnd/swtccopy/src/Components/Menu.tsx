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
                <a href="/#" className={headItem}>
                  Programs & Classes{" "}
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Programs
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Apprenticeships
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Counting Education
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Earn Credit in High School
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  GED/HSED
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  General Education
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Online
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Transfer Agreements
                </a>
              </li>
            </ul>
          </div>
          <div className="admissions">
            <ul>
              <li>
                <a href="/#" className={headItem}>
                  Admissions
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Explore Careers
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Visit Campus
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Paying for College
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Transfer
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Credit for Prior Learning
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Apply Now
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Program Registration
                </a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <ul>
              <li>
                <a href="/#" className={headItem}>
                  Student Resources
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Resident & Student Life
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  College Services
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Academic Support & Resources
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Financial Resources
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Charger tech 360
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Career Services
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Policies
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Testing Center
                </a>
              </li>
            </ul>
          </div>
          <div className="community">
            <ul>
              <li>
                <a href="/#" className={headItem}>
                  Community
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  business & Industry
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Career Services
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Child Care
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Community Services
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Continuing Education
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Facility Rental
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Outreach Centers
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Public Safety Training
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Testing Center
                </a>
              </li>
            </ul>
          </div>
          <div className="foundation">
            <ul>
              <li>
                <a href="/#" className={headItem}>
                  Foundation
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Alumni
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Board
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Donate Today
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Giving Opportunities
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Scholarships
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Visionary Circle
                </a>
              </li>
            </ul>
          </div>
          <div className="about">
            <ul>
              <li>
                <a href="/#" className={headItem}>
                  About
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Who We Are
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Board
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Accreditation
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Campus Directory
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  College Effectiveness
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Core Abilities
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Consumer Information
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Current Bids/RFPs
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Job Opportunities
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
                  Policies
                </a>
              </li>
              <li>
                <a href="/#" className={listItem}>
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
