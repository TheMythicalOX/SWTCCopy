import React from "react";
import Location from "../images/pin.png";
import Page from "../images/blank-page.png";
import Book from "../images/book.png";
import { useWindowDimensions } from "./App";

const QuickLinks = () => {
  const { width } = useWindowDimensions();

  let boxStyle = "";
  let linkStyle = "";
  let imageStyle = "";
  let textStyle = "";

  if (width > 1000) {
    boxStyle = "fixed right-0 bottom-[54%] list-none justify-items-end z-40";

    linkStyle = `w-[106px] h-[5.5rem] mb-2
    bg-quick-link-bg opacity-50 inline-flex group overflow-hidden
    transition-all ease-in-out duration-700 border border-black border-r border-t border-l-2 border-b-2
    hover:bg-white hover:opacity-100 hover:w-80`;

    imageStyle = `p-6 mx-[10.5px] invert group-hover:invert-[0%] transition-all ease-in-out duration-700`;

    textStyle = `text-4xl font-bold my-auto
    text-campus-bg align-center
    w-0 group-hover:w-auto`;
  } else {
    boxStyle =
      "fixed bottom-0 list-none w-full grid grid-cols-3 z-50 bg-campus-bg";

    linkStyle = `inline-flex w-full justify-center`;

    imageStyle = `h-4 my-auto invert group-hover:invert-[0%] transition-all ease-in-out duration-700`;

    textStyle = `my-auto p-2 pl-0 text-lg font-semibold`;
  }

  return (
    <div className={boxStyle}>
      <li>
        <a href="/#" className={linkStyle}>
          <img src={Location} alt="" className={imageStyle} />
          <h1 className={textStyle}>Visit</h1>
        </a>
      </li>
      <li>
        <a href="/#" className={linkStyle}>
          <img src={Page} alt="" className={imageStyle} />
          <h1 className={textStyle}>Apply</h1>
        </a>
      </li>
      <li>
        <a href="/#" className={linkStyle}>
          <img src={Book} alt="" className={imageStyle} />
          <h1 className={textStyle}>Classes</h1>
        </a>
      </li>
    </div>
  );
};

export default QuickLinks;
