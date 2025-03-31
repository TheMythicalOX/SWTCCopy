import React, { useEffect } from "react";
import logo from "../images/swtlogo_hz_white.png";
import student from "../images/student.svg";
import staff from "../images/faculty.svg";
import schedule from "../images/schedule.svg";
import iconSource from "../images/swtc.ico";

const Myswtc = () => {
  const title = "Sign in to your account";
  const icon = iconSource;
  useEffect(() => {
    document.title = title;
    const link: HTMLLinkElement | null =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = icon;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [title, icon]);
  let box =
    "bg-white shadow-xl p-8 hover:outline swtcBodyText hover:outline-campus-bg text-[#999]";
  let image = "h-16 mb-5";
  let text = "text-header-bg text-4xl font-bold swtcHeadText";

  return (
    <div className="w-screen h-screen bg-[#f2f2f2]">
      <div className="h-[8%] bg-header-bg">
        <img src={logo} alt="" className="h-12 ml-4 mt-4 absolute" />
      </div>
      <div className="h-[92%]">
        <div className="h-[95%]">
          <div className="w-[80%] m-auto text-center p-5 pt-40">
            <h1 className="text-black text-[2.5rem] font-bold swtcHeadText">
              Self-Service Portal
            </h1>
            <div className="w-28 h-2 bg-campus-bg m-auto my-5"></div>
            <h3 className="text-[#333] swtcBodyText">
              Log into the portal to view your academic information, receive
              personalized communication, and use our self-service tools.
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-5 w-[95%] m-auto">
            <div className={box}>
              <a href="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y2">
                <img src={student} alt="" className={image} />
                <h2 className={text}>Student Portal Homepage</h2>
                <p>Student Login Here</p>
              </a>
            </div>
            <div className={box}>
              <a href="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y22">
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
