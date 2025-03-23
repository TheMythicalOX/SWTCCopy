import React from "react";
import Facebook from "../images/facebook.png";
import Youtube from "../images/youtube.png";
import Twitter from "../images/twitter.png";
import Insta from "../images/instagram.png";
import { useWindowDimensions } from "./App";

const Footer = () => {
  const iconStyle = "w-10 border-[2px] p-2 rounded-full border-black invert";
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
            <a className="text-foot-link" href="tel:+16088223262">
              608.822.3262
            </a>
          </p>
          <p>
            Toll Free:&nbsp;
            <a className="text-foot-link" href="tel:+18003623322">
              800.362.3322
            </a>
          </p>
          <div className="bg-foot-text w-full h-0.5 my-2"></div>
          <p>
            TDD (hearing impared):&nbsp;
            <a className="text-foot-link" href="tel:+16088222072">
              608.822.2072
            </a>
          </p>
          <p>
            FAX:&nbsp;
            <a className="text-foot-link" href="tel:+16088226019">
              608.822.6019
            </a>
          </p>
        </div>
        <div className="Links row-span-3">
          <h1 className="font-medium pt-2 pb-3">CAMPUS LINKS</h1>
          <div className="CampLinks grid grid-cols-1">
            <a className="text-foot-link" href="https://www.swtcbookstore.com/">
              Bookstore
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/campus-closures"
            >
              Campus Closures
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/community/ged-hsed"
            >
              GED/HSED Services
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/student-resources/learning-resources/library/"
            >
              Library Services
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/about/campus-maps"
            >
              Maps
            </a>
            <a
              className="text-foot-link"
              href="https://passwordreset.microsoftonline.com/"
            >
              Student Password Reset
            </a>
            <a
              className="text-foot-link"
              href="https://www.getrave.com/login/swtc"
            >
              Sign up for Text Alerts
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/community/testing-center/"
            >
              Testing Center
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/student-resources/policies-procedures/transcripts"
            >
              Transcript Requests
            </a>
          </div>
        </div>
        <div className="Forms row-span-2">
          <h1 className="font-medium pt-2 pb-3">FORMS</h1>
          <div className="Form grid grid-cols-1">
            <a
              className="text-foot-link"
              href="https://swtc.edu/forms/accommodations-request-form"
            >
              Accommodation Request Form
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/student-resources/policies-procedures/complaints-process"
            >
              Complaints Process
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/student-resources/learning-resources/health-programs-support"
            >
              Health/Physical Forms
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/forms/ask-a-question"
            >
              Information Request Form
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/student-resources/campus-services/campus-security-safety#concern"
            >
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
            <div className="icons grid grid-cols-4 pr-28 pl-4">
              <a href="https://www.facebook.com/southwesttech/">
                <img src={Facebook} alt="" className={iconStyle} />
              </a>
              <a href="https://www.youtube.com/channel/UCkLi-yKPgF-tShaw-GW6eMQ">
                <img src={Youtube} alt="" className={iconStyle} />
              </a>
              <a href="https://twitter.com/swtc">
                <img src={Twitter} alt="" className={iconStyle} />
              </a>
              <a href="https://www.instagram.com/explore/locations/1032409575/southwest-wisconsin-technical-college/">
                <img src={Insta} alt="" className={iconStyle} />
              </a>
            </div>
          </div>
        </div>
        <div className="staff row-span-1">
          <h1 className="font-medium pt-2 pb-3">STAFF LINKS</h1>
          <div className="Form grid grid-cols-1">
            <a className="text-foot-link" href="https://swtc.edu/staff-links">
              Faculty & Staff Links
            </a>
            <a
              className="text-foot-link"
              href="https://swtc0.sharepoint.com/sites/SPChargerHub2"
            >
              Charger Hub
            </a>
          </div>
        </div>
        <div className="Employment">
          <h1 className="font-medium pt-2 pb-3">EMPLOYMENT</h1>
          <div className="Employ grid grid-cols-1">
            <a
              className="text-foot-link"
              href="https://swtc.edu/student-resources/career-services/"
            >
              Career Placement
            </a>
            <a
              className="text-foot-link"
              href="https://swtc.edu/about/job-opportunities"
            >
              Job Opportunities
            </a>
            <a className="text-foot-link" href="https://joinhandshake.com/">
              Handshake
            </a>
          </div>
        </div>
        <div className="Tools">
          <h1 className="font-medium pt-2 pb-3">TECHNICAL TOOLS</h1>
          <div className="TechTools grid grid-cols-1">
            <a
              className="text-foot-link"
              href="https://kb.swtc.edu/remote-support"
            >
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
        <a className="text-foot-link pt-0" href="https://swtc.edu/legal/ada">
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
