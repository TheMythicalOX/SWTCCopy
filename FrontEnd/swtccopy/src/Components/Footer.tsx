import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-foot-bg text-foot-text grid grid-cols-3 grid-rows-2 text-center pt-32">
        <div className="Contact ">
          <h1 className="font-medium pt-2 pb-3">CONTACT INFORMATION</h1>
          <p>
            Phone:&nbsp;
            <a className="text-foot-link" href="/#">
              608.822.3262
            </a>
          </p>
          <p>
            Toll Free:&nbsp;
            <a className="text-foot-link" href="/#">
              800.362.3322
            </a>
          </p>
          <p>Line Graphic</p>
          <p>
            TDD (hearing impared):&nbsp;
            <a className="text-foot-link" href="/#">
              608.822.2072
            </a>
          </p>
          <p>
            FAX:&nbsp;
            <a className="text-foot-link" href="/#">
              608.822.6019
            </a>
          </p>
        </div>
        <div className="Links">
          <h1 className="font-medium pt-2 pb-3">CAMPUS LINKS</h1>
          <div className="CampLinks grid grid-cols-1">
            <a className="text-foot-link" href="/#">
              Bookstore
            </a>
            <a className="text-foot-link" href="/#">
              Campus Closures
            </a>
            <a className="text-foot-link" href="/#">
              GED/HSED Services
            </a>
            <a className="text-foot-link" href="/#">
              Library Services
            </a>
            <a className="text-foot-link" href="/#">
              Maps
            </a>
            <a className="text-foot-link" href="/#">
              Student Password Reset
            </a>
            <a className="text-foot-link" href="/#">
              Sign up for Text Alerts
            </a>
            <a className="text-foot-link" href="/#">
              Testing Center
            </a>
            <a className="text-foot-link" href="/#">
              Transcript Requests
            </a>
          </div>
        </div>
        <div className="Forms">
          <h1 className="font-medium pt-2 pb-3">FORMS</h1>
          <div className="Form grid grid-cols-1">
            <a className="text-foot-link" href="/#">
              Accommodation Request Form
            </a>
            <a className="text-foot-link" href="/#">
              Complaints Process
            </a>
            <a className="text-foot-link" href="/#">
              Health/Physical Forms
            </a>
            <a className="text-foot-link" href="/#">
              Information Request Form
            </a>
            <a className="text-foot-link" href="/#">
              Report a(n) Concern/Incident
            </a>
          </div>
        </div>
        <div className="Hours">
          <h1 className="font-medium pt-2 pb-3">Hours</h1>
          <div className="Hrs grid grid-cols-1">
            <p>
              Monday-Friday 7:30am to 4:30pm Closed Fridays during June & July
            </p>
            <p>Southwest Tech 1800 Bronson Boulevard Fennimore, WI 53809</p>
            <div className="icons grid grid-cols-1">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div className="Employment">
          <h1 className="font-medium pt-2 pb-3">EMPLOYMENT</h1>
          <div className="Employ grid grid-cols-1">
            <a className="text-foot-link" href="/#">
              Career Placement
            </a>
            <a className="text-foot-link" href="/#">
              Job Opportunities
            </a>
            <a className="text-foot-link" href="/#">
              Handshake
            </a>
          </div>
        </div>
        <div className="Tools">
          <h1 className="font-medium pt-2 pb-3">TECHNICAL TOOLS</h1>
          <div className="TechTools grid grid-cols-1">
            <a className="text-foot-link" href="/#">
              Remote Support
            </a>
          </div>
        </div>
      </div>
      <div className="Bottom bg-foot-lower-bg text-foot-text text-center p-10">
        <p className="p-5">
          Southwest Tech is committed to legal affirmative action, equal
          opportunity, access and diversity of its campus community.{" "}
          <a className="text-foot-link" href="/#">
            Full Statement
          </a>
        </p>
        <p className="p-5">
          Copyright © 2025 Southwest Wisconsin Technical College. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
