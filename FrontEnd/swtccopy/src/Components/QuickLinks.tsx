import React from "react";
import tmp from "../images/tmp.svg";

const QuickLinks = () => {
  const imageStyle = `p-5 mx-[10.5px]`;

  const textStyle = `text-4xl font-bold my-auto
  text-campus-bg align-center
  w-0 group-hover:w-auto`;

  const linkStyle = `w-[106px] h-[5.5rem] mb-2
  bg-quick-link-bg opacity-50 inline-flex group overflow-hidden
  transition-all ease-in-out duration-700 border border-black border-r border-t hover:border-l-2 hover:border-b-2
  hover:bg-white hover:opacity-100 hover:w-80`;

  return (
    <div className="fixed right-0 bottom-[55%] list-none justify-items-end z-50">
      <li>
        <a href="/#" className={linkStyle}>
          <img src={tmp} alt="" className={imageStyle} />
          <h1 className={textStyle}>Visit</h1>
        </a>
      </li>
      <li>
        <a href="/#" className={linkStyle}>
          <img src={tmp} alt="" className={imageStyle} />
          <h1 className={textStyle}>Apply</h1>
        </a>
      </li>
      <li>
        <a href="/#" className={linkStyle}>
          <img src={tmp} alt="" className={imageStyle} />
          <h1 className={textStyle}>Classes</h1>
        </a>
      </li>
    </div>
  );
};

export default QuickLinks;
