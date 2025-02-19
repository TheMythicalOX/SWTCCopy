import React from "react";

const NewsImage = (props: {
  link: string;
  image: string;
  span: string;
  text: string;
}) => {
  return (
    <a href={props.link} className={`input-border-none col-span-${props.span}`}>
      <div className="relative group items-center text-[1.6em] h-full bg-campus-bg">
        <div className="overflow-hidden max-h-[400px]">
          <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
            <h2 className="text-shadow text-2xl p-3">{props.text}</h2>
          </div>
          <img
            src={props.image}
            alt="TMP"
            className="object-cover h-auto w-full opacity-40 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
          />
        </div>
      </div>
    </a>
  );
};

export default NewsImage;
