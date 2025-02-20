import React from "react";
import swtclogo from "../images/swtlogo_hz_white.png";
import searchIcon from "../images/search.gif";
import Menu from "./Menu";
import tmp from "../images/tmp.svg";
import { useWindowDimensions } from "./App";
import DropMenu from "./DropMenue";

const Header = () => {
  const logoBasic = "w-14 inline-block pl-5";
  const { height, width } = useWindowDimensions();

  let headBoxStyle = "";
  let searchBocxStyle = "";

  if (width < 1300) {
    headBoxStyle = "max-w-[1300px] justify-center mx-auto";
    searchBocxStyle = "";
  } else {
    headBoxStyle = "max-w-[1300px] p-5";
    searchBocxStyle = "inline-block m-auto float-right";
  }

  return (
    <div className="Head bg-header-bg font-medium">
      <div className={headBoxStyle}>
        <a href="/#" className="w-3/12 inline-block ml-6">
          <img src={swtclogo} alt="swtclogo" />
        </a>

        <div className="fixed left-0 text-green-500 font-bold z-50">
          <h1>{height}</h1>
          <h1>{width}</h1>
        </div>
        <div className={searchBocxStyle}>
          <div className="icons pl-1">
            <img src={tmp} alt="TMP" className={logoBasic} />
            <img src={tmp} alt="TMP" className={logoBasic} />
            <img src={tmp} alt="TMP" className={logoBasic} />
            <img src={tmp} alt="TMP" className={logoBasic} />
          </div>
          <div className="block p-0.5">
            <input
              className="border-none inline-block h-8 leading-4 mr-0 ml-4 p-2 w-44"
              type="text"
              placeholder="Search..."
            ></input>
            <input
              type="image"
              src={searchIcon}
              alt="Search"
              onClick={() => {}}
              className="align-bottom max-h-8 p-1.5 border-white bg-foot-text bg-none filter-none leading-normal"
            />
          </div>
        </div>
        {width <= 1300 && <Menu />}
      </div>
      {width > 1300 && <DropMenu />}
    </div>
  );
};

export default Header;
