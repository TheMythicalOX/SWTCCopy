import React from "react";
import hero from "../images/AspenHeroWeb.jpg";

const Campus = () => {
  return (
    <div className="camp bg-campus-bg">
      <img src={hero} alt="TMP" className="2col  object-contain" />
      <div className="p-5">
        <a className="underline font-semibold text-xl p-4 pl-0" href="/#">
          Visit Campus
        </a>
        <p className="p-4 pl-0">
          Picture yourself as a Charger—see classrooms, shops, and labs; meet
          students and faculty; discover resources available that will help you
          achieve your goals. Join us for a campus tour and enjoy our beautiful
          country-side location. Not sure where to start? Our staff is ready to
          help you explore your options by talking about programs you might be
          interested in or by taking a career assessment to see what program is
          the best fit for you.
        </p>
      </div>
      <div className="style-grapgic bg-amber-400 w-auto h-2"></div>
    </div>
  );
};

export default Campus;
