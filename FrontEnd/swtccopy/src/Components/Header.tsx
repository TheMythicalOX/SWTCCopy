import React from "react";
import swtclogo from "../images/swtlogo_hz_white.png";
import searchIcon from "../images/search.gif";
import Menu from "./Menu";
import tmp from "../images/tmp.svg";

const Header = () => {
  const logoBasic = "w-14 inline-block pl-5";

  return (
    <div className="Head bg-header-bg font-medium">
      <a href="/#" className="w-2/6 inline-block pl-5">
        <img src={swtclogo} alt="swtclogo" />
      </a>
      <div className="icons pl-1">
        <img src={tmp} alt="TMP" className={logoBasic} />
        <img src={tmp} alt="TMP" className={logoBasic} />
        <img src={tmp} alt="TMP" className={logoBasic} />
        <img src={tmp} alt="TMP" className={logoBasic} />
      </div>
      <div className="search ">
        <form className="">
          <input className="" type="text" placeholder="Search..."></input>
          <input
            type="image"
            alt="Submit Form"
            className=""
            src={searchIcon}
          ></input>
        </form>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
