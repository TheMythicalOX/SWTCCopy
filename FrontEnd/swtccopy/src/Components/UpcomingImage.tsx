import React from "react";
import { useWindowDimensions } from "./App";

const UpcomingImage = (props: {
  link: string;
  image: string;
  text: string;
  heading: string;
}) => {
  const { width } = useWindowDimensions();

  let style1 = "";
  let style2 = "";
  let style3 = "";
  let style4 = "";

  if (width < 725) {
    style1 = "overflow-hidden relative bg-white text-white";
    style2 =
      "z-10 absolute w-full text-center p-3 font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg backgroundOpacityBlack top-[35.8%]";
    style3 =
      "object-cover overflow-hidden h-fit opacity-1 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125";
    style4 = "group items-center p-5 max-h-[413px] overflow-hidden";
  } else {
    style1 = "overflow-hidden relative bg-campus-bg";
    style2 =
      "z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3";
    style3 =
      "object-cover overflow-hidden h-fit opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125";
    style4 = "group items-center";
  }

  return (
    <div className={style4}>
      <a href={props.link} className="input-border-none overflow-hidden">
        <div className={style1}>
          <div className={style2}>
            <h2 className="text-shadow text-4xl">{props.heading}</h2>
            <p className="text-xl text-shadow">{props.text}</p>
          </div>
          <img src={props.image} alt="TMP" className={style3} />
        </div>
      </a>
    </div>
  );
};

export default UpcomingImage;
