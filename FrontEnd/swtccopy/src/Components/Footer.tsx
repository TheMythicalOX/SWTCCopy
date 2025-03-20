import React from "react";
import tmp from "../images/tmp.svg";
import { useWindowDimensions } from "./App";

const Footer = () => {
  const { width } = useWindowDimensions();
  let boxStyle = "";

  if (width < 725) {
    boxStyle =
      "text-foot-text text-xs font-medium gap-4 grid grid-cols-1 grid-flow-row p-5 justify-center mx-auto";
  } else {
    boxStyle =
      "text-foot-text font-medium gap-4 grid grid-cols-3 grid-flow-row p-5 max-w-[1300px] justify-center mx-auto";
  }

  return (
    <div className="bg-foot-bg">
      <div className={boxStyle}>
        <div className="Contact row-span-2">
          <h1 className="font-medium pt-2 font pb-3">CONTACT INFORMATION</h1>
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
          <div className="bg-foot-text w-full h-0.5 my-2"></div>
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
        <div className="Links row-span-3">
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
        <div className="Forms row-span-2">
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
        <div className="Hours row-span-2">
          <h1 className="font-medium pt-2 pb-3">Hours</h1>
          <div className="Hrs grid grid-cols-1">
            <p>
              Monday-Friday 7:30am to 4:30pm Closed Fridays during June & July
            </p>
            <div className="italic p-5">
              <p>Southwest Tech</p>
              <p>1800 Bronson Boulevard</p>
              <p>Fennimore, WI 53809</p>
            </div>
            <div className="icons grid grid-cols-4">
              <img src={tmp} alt="" className="w-10" />
              <img src={tmp} alt="" className="w-10" />
              <img src={tmp} alt="" className="w-10" />
              <img src={tmp} alt="" className="w-10" />
            </div>
          </div>
        </div>
        <div className="staff row-span-1">
          <h1 className="font-medium pt-2 pb-3">STAFF LINKS</h1>
          <div className="Form grid grid-cols-1">
            <a className="text-foot-link" href="/#">
              Faculty & Staff Links
            </a>
            <a className="text-foot-link" href="/#">
              Charger Hub
            </a>
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
      <div className="Bottom bg-foot-lower-bg text-foot-text text-center">
        <p className="p-5 pb-0">
          Southwest Tech is committed to legal affirmative action, equal
          opportunity, access and diversity of its campus community.{" "}
        </p>
        <a className="text-foot-link pt-0" href="/#">
          Full Statement
        </a>
        <p className="p-5">
          Copyright © 2025 Southwest Wisconsin Technical College. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
