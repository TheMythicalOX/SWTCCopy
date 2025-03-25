import React from "react";
import hero from "../images/AspenHeroWeb.jpg";
import { useWindowDimensions } from "./App";

const Campus = () => {
  const { width } = useWindowDimensions();

  let imgStyle = "";

  if (width > 1900) {
    imgStyle = "2col max-w-[1900px] w-auto object-contain mx-auto";
  } else {
    imgStyle = "2col object-contain mx-auto";
  }

  return (
    <div className="camp bg-campus-bg mx-auto">
      <img src={hero} alt="TMP" className={imgStyle} />
      <div className="max-w-[1300px] justify-center align-middle mx-auto">
        <div className="p-2 py-5">
          <a
            className="underline font-semibold  p-4 pl-0"
            href="https://swtc.edu/admissions/visit-campus"
          >
            Visit Campus
          </a>
          <p className="p-4 pl-0 text-[72.9165%]">
            Picture yourself as a Charger—see classrooms, shops, and labs; meet
            students and faculty; discover resources available that will help
            you achieve your goals. Join us for a campus tour and enjoy our
            beautiful country-side location. Not sure where to start? Our staff
            is ready to help you explore your options by talking about programs
            you might be interested in or by taking a career assessment to see
            what program is the best fit for you.
          </p>
        </div>
      </div>
      <div className="style-grapgic bg-amber-400 w-auto h-2"></div>
    </div>
  );
};

export default Campus;
