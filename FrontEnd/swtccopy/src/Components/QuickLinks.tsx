import React from "react";

const QuickLinks = () => {
  const style =
    "w-32 bg-quick-link-bg hover:w-80  hover:bg-white opacity-50 hover:opacity-100 hover:text-campus-bg p-5 mb-2 ease-in-out transition-all duration-500";
  return (
    <div className="fixed right-0 bottom-2/3 list-none justify-items-end">
      <li>
        <div className={`top ${style}`}>
          <a href="/#">
            <img src="" alt="" />
            <h1>Visit</h1>
          </a>
        </div>
      </li>
      <li className="object-right">
        <div className={`middle ${style}`}>
          <a href="/#">
            <img src="" alt="" />
            <h1>Apply</h1>
          </a>
        </div>
      </li>
      <li>
        <div className={`bottom ${style}`}>
          <a href="/#">
            <img src="" alt="" />
            <h1>Classes</h1>
          </a>
        </div>
      </li>
    </div>
  );
};

export default QuickLinks;
