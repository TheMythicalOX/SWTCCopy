import React, { useState } from "react";
import swtclogo from "../images/swtlogo_hz_white.png";
import searchIcon from "../images/search.gif";
import Menu from "./Menu";
import Hub from "../images/thehub.png";
import Myswtc from "../images/myswtc.png";
import Schoology from "../images/schoology.png";
import People from "../images/people.png";
import { useWindowDimensions } from "./App";
import DropMenu from "./DropMenue";

const Header = () => {
  const [useSearchText, setSearchText] = useState("");
  const [useSearch, setSearch] = useState("");
  const logoIcon =
    "w-8 inline-block mr-0 group-hover:mr-52 ml-5 transition-all relative duration-[2000ms]";
  const logoText =
    "text-nowrap text-xl font-bold h-full inline-block opacity-[0%] pl-16 absolute group-hover:opacity-[100%] transition-all duration-300";
  const logoBox = "group relative inline-flex transition-all duration-700";
  const logoHide = "bg-header-bg w-64 h-10 absolute";
  const { width } = useWindowDimensions();

  let headBoxStyle = "";
  let searchBocxStyle = "";

  if (width < 1300) {
    headBoxStyle = "max-w-[1300px] justify-center mx-auto";
    searchBocxStyle = "";
  } else if (width < 725) {
    headBoxStyle = "";
    searchBocxStyle = "inline";
  } else {
    headBoxStyle = "max-w-[1300px] p-5 mx-auto";
    searchBocxStyle = "inline-block m-auto float-right";
  }

  let style1 = "";
  // let style2 = "";
  let style3 = "";

  if (width < 725) {
    style1 = "w-8/12 block mx-6";
    // style2 = "inline-block";
    style3 = "inline-block float-right";
  } else {
    style1 = "w-3/12 inline-block ml-6";
    // style2 = "pl-1";
    style3 = "block p-0.5 ";
  }

  return (
    <div className="Head bg-header-bg font-medium">
      <div className={headBoxStyle}>
        <a href="https://swtc.edu/" className={style1}>
          <img src={swtclogo} alt="swtclogo" />
        </a>
        <div className={searchBocxStyle}>
          <div className="">
            <div className={logoBox}>
              <div className={logoHide}></div>
              <a href="https://swtc.edu/about/staff-directory">
                <div className={logoText}>Campus Directory</div>
                <img src={People} alt="tp" className={logoIcon} />
              </a>
            </div>
            <div className={logoBox}>
              <div className={logoHide}></div>
              <a href="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y1">
                <div className={logoText}>Schoology Login</div>
                <img src={Schoology} alt="tp" className={logoIcon} />
              </a>
            </div>
            <div className={logoBox}>
              <div className={logoHide}></div>
              <a href="/myswtc/cmcportal" target="_blank">
                <div className={logoText}>MySWTC Login</div>
                <img src={Myswtc} alt="tp" className={logoIcon} />
              </a>
            </div>
            <div className={logoBox}>
              <div className={logoHide}></div>
              <a href="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y3">
                <div className={logoText}>The HUB Login</div>
                <img src={Hub} alt="tp" className={logoIcon} />
              </a>
            </div>
            <div className={logoBox}>
              <div className={logoHide}></div>
              <div>
                <div className="w-8 inline-block mr-0 group-hover:mr-52 ml-5 transition-all relative duration-[2000ms]"></div>
              </div>
            </div>
          </div>
          <div className={style3}>
            <div className="relative pt-1.5">
              <input
                className="border-none inline-block h-8 leading-4 mr-0 ml-4 p-2 w-44 text-black"
                type="text"
                placeholder="Search..."
                value={useSearchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setSearch(
                    "https://swtc.edu/search-results?q=" + useSearchText
                  );
                }}
              ></input>
              <a href={useSearch}>
                <input
                  type="image"
                  src={searchIcon}
                  alt="Search"
                  className="align-bottom max-h-8 p-1.5 border-white bg-foot-text bg-none filter-none leading-normal"
                />
              </a>
            </div>
          </div>
        </div>
        {width <= 1300 && <Menu />}
      </div>
      {width > 1300 && <DropMenu />}
    </div>
  );
};

export default Header;
