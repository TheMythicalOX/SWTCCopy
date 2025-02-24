import React from "react";
import { useWindowDimensions } from "./App";

const NewsImage = (props: {
  link: string;
  image: string;
  span: number;
  text: string;
}) => {
  const { width } = useWindowDimensions();
  let span = "";
  if (props.span === 2) {
    span = "input-border-none col-span-2";
  } else {
    span = "input-border-none col-span-1";
  }

  let style1 = "";
  let style2 = "";
  let style3 = "";
  let style4 = "";

  if (width < 725) {
    style1 = " p-5";
    style2 = "z-10 absolute w-full text-left font-bold  bottom-0";
    style3 = "";
    style4 = "text-shadow text-xl p-3 bg-campus-bg inline-block";
  } else {
    style1 = "";
    style2 =
      "z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3";
    style3 =
      "object-cover h-auto w-full opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125";
    style4 = "text-shadow text-2xl p-3";
  }

  const styleComb = span + style1;

  return (
    <a href={props.link} className={styleComb}>
      <div className="relative group items-center text-[1.6em] h-full bg-campus-bg">
        <div className="overflow-hidden max-h-[400px]">
          <div className={style2}>
            <h2 className={style4}>{props.text}</h2>
          </div>
          <img src={props.image} alt="TMP" className={style3} />
        </div>
      </div>
    </a>
  );
};

export default NewsImage;
