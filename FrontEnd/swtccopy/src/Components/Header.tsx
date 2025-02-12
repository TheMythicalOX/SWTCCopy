import React from "react";
import image from "../images/image1.jpg";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="Head">
      <a href="/#">
        <img src={image} alt="TMP" className="2col  object-contain" />
      </a>
      <Menu />
      <div className="icons">
        <img src={image} alt="TMP" className="2col  object-contain" />
        <img src={image} alt="TMP" className="2col  object-contain" />
        <img src={image} alt="TMP" className="2col  object-contain" />
        <img src={image} alt="TMP" className="2col  object-contain" />
      </div>
      <div className="search">
        <form>
          <input type="text" placeholder="Search..."></input>
          <button type="submit" className="h-5 w-5 bg-slate-600"></button>
        </form>
      </div>
    </div>
  );
};

export default Header;
