import React from "react";

const UpcomingImage = (props: {
  link: string;
  image: string;
  text: string;
  heading: string;
}) => {
  return (
    <div className=" group items-center">
      <a href={props.link} className="input-border-none overflow-hidden">
        <div className="overflow-hidden relative bg-campus-bg">
          <div className="z-10 absolute w-full text-center font-bold ease-in-out transition-all duration-700  group-hover:bg-campus-bg group-hover:bottom-0 bottom-1/3">
            <h2 className="text-shadow event-title-text-size">
              {props.heading}
            </h2>
            <p className="text-xl text-shadow">{props.text}</p>
          </div>
          <img
            src={props.image}
            alt="TMP"
            className="object-cover overflow-hidden h-fit opacity-60 transition-all ease-in-out group-hover:opacity-100 duration-700 z-0 group-hover:scale-125"
          />
        </div>
      </a>
    </div>
  );
};

export default UpcomingImage;
