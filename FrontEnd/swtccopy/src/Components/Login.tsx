import React, { useEffect } from "react";
import iconSource from "../images/microsofticon.ico";

const Login = () => {
  const title = "Sign in to your account";
  const icon = iconSource;
  useEffect(() => {
    document.title = title;

    const link: HTMLLinkElement | null =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = icon;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [title, icon]);
  return (
    <>
      <div className="loginBackgroundGradient w-screen h-screen flex items-center">
        <div className="w-[55%] h-[54%] m-auto ">
          <div className="w-full h-[82.5%] bg-white shadow-stone-400 shadow-md"></div>
          <div className="w-full h-[5%]"></div>
          <div className="w-full h-[12.5%] bg-white shadow-stone-400 shadow-md"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
