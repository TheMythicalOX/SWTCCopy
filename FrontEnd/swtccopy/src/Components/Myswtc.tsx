import React from "react";
import logo from "../images/swtlogo_hz_white.png";
import student from "../images/student.svg";
import staff from "../images/faculty.svg";
import schedule from "../images/schedule.svg";

const Myswtc = () => {
  let box =
    "bg-white shadow-xl hover:outline hover:outline-campus-bg text-[#999]";
  let image = "h-16";
  let text = "text-header-bg";

  return (
    <div className="w-screen h-screen bg-[#f2f2f2]">
      <div className="h-[8%] bg-header-bg">
        <img src={logo} alt="" className="h-12 ml-4 mt-4 absolute" />
      </div>
      <div className="h-[92%]">
        <div className="h-[95%]">
          <h1>Self-Service Portal</h1>
          <div></div>
          <h3>
            Log into the portal to view your academic information, receive
            personalized communication, and use our self-service tools.
          </h3>
          <div className="grid grid-cols-3 gap-8 w-[80%] m-auto">
            <div className={box}>
              <a href="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y2">
                <img src={student} alt="" className={image} />
                <h2 className={text}>Student Portal Homepage</h2>
                <p>Student Login Here</p>
              </a>
            </div>
            <div className={box}>
              <a href="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y2">
                <img src={staff} alt="" className={image} />
                <h2 className={text}>Faculty Portal Homepage</h2>
                <p>Faculty Login Here</p>
              </a>
            </div>
            <div className={box}>
              <a href="https://myswtc.swtc.edu/CMCPortal/Common/CourseSchedule.aspx">
                <img src={schedule} alt="" className={image} />
                <h2 className={text}>Course Schedule</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="h-[5%]">
          <div className="w-[95%] m-auto">
            <div className="w-full bg-[#aaa] h-[2px]"></div>
            <div className="text-[#aaa]">Version: 25.0.1.21</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myswtc;
