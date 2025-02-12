import React from "react";
import swtclogo from "../images/swtlogo_hz_white.png";
import searchIcon from "../images/search.gif";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="Head bg-sky-700">
      <a href="/#">
        <img src={swtclogo} alt="swtclogo" className="w-2/5" />
      </a>
      <Menu />
      <div className="icons">
        {/* <img src={image} alt="TMP" className="2col  object-contain" />
        <img src={image} alt="TMP" className="2col  object-contain" />
        <img src={image} alt="TMP" className="2col  object-contain" />
        <img src={image} alt="TMP" className="2col  object-contain" /> */}
      </div>
      <div className="search">
        <form>
          <input type="text" placeholder="Search..."></input>
          <button type="submit" className="bg-neutral-300 w-7">
            <img src={searchIcon} alt="Search Icon" className="p-1.5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
