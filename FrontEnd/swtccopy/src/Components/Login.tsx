import React, { useEffect, useState } from "react";
import iconSource from "../images/microsofticon.ico";
import backArrow from "../images/logbackarrow.svg";

const Login = () => {
  const title = "Sign in to your account";
  const icon = iconSource;
  const [useEmail, setEmail] = useState("");
  const [useTest, setTest] = useState("opacity-[0%] l-[20px]");
  const test = `transition-all duration-800 ease-in-out relative ${useTest}`;

  useEffect(() => {
    setEmail("example@email.com");

    setTest("opacity-[100%] l-[0px]");

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
    <div className="loginBody">
      <div className="loginBackgroundGradient z-0 fixed w-screen h-screen"></div>
      <div className="w-screen h-screen fixed bg-black opacity-[55%] z-25 "></div>
      <div className=" z-0 w-screen h-[98vh] flex items-center absolute">
        <div className="w-[440px] h-[416px] m-auto shadow-stone-900 shadow-md z-50 text-[.9375rem] transition-all">
          <div className="w-full h-[80.75%] bg-white *:transition-all *:duration-800 *:ease-in-out overflow-hidden">
            <div className={test}>
              <div className="p-[44px] font-medium">
                <img
                  src="https://aadcdn.msftauthimages.net/dbd5a2dd-uu6n-8cm1lzzxmp32bd-arusmto4dao1chilpm9uy5s/logintenantbranding/0/bannerlogo?ts=637278424175273182"
                  alt="TMP"
                  className="h-[36px]"
                />
                <div>
                  <div className="inline-flex mt-4">
                    <img
                      src={backArrow}
                      alt="TMP"
                      className="mr-[2px] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.1)] rounded-full active:bg-[rgba(0,0,0,0.4)]"
                    />
                    <p className="text-stone-700 leading-[24px]">{useEmail}</p>
                  </div>
                  <h1 className="w-full h-full text-[1.5rem] box-border font-semibold leading-[1.75rem] my-[5px] text-black">
                    Enter password
                  </h1>
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-full loginInputBorder box-border p-[2px] pt-[13px] pb-[7px] text-black border-[rgba(0, 0, 0, 0.4)]"
                  />
                  <div>
                    <a
                      className="text-[#0067b8] pt-[16px] pl-[2px] text-[.8125rem] block hover:text-stone-700 hover:underline"
                      href="https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2freprocess%3fctx%3drQQIARAArZK_i9NgGMeb63n-wNPD_0ARB_GuyZumbQ4ObC9NetG8ucSkbbJI3jdp0zS_Lk1zbf6Cw0VxUHBUcHA6nMRFQVBwchQnxUFxECdxcDAdHHRycHgeHnge-H6-PN-LZWqD2jw_YOuIrjVq6wjXyfXqwHHWEVOz1wdVplFvVAFpU0xy5sQa8yp69unt7cs39x70HzbvnntEbLtpGk82KxUrjjcm2I0iPxrON3AUVIphFFacWeokoeVftzCOpmE6qSQOdkaZUwlGOIkm0SB9QhBvCOIzQTxaWq3VHRJhp4bqLEDvlk7LzWnqgkWLklHu3Cv_LGMAI7NH-bs9l7Q7rVwM3AzTCotpmzTmTG4AN0Nglpn0eGoANhXDlmsLQ1bURAEJbGj1qr40Nn2no_o4YFzEs64BYGb3GBLP9bkair4BurEd6Iu71OrBOaJhZoZKgPtdH4djdsGAADvpAyY2t_Vc5fR9mVNmUJMY-Zr5m2GAAn-8q_256wNIYVrNUJcdI0C5BQ9rdVQSdyRfItuFprHQzW1a9a6G0LMENltwO9cYDwEyMIVubgv-1OirMQJV9t88QR8Fyt9-Cr0_WUUNtqHWrEKuTUn5mBFDNd_V2jTkdmiZawOYNwNbYBOzYFb8FqfkIqfrOuj6UNapIaNpmFI5k1c8gyluc8iJguLpVYmUSJlr8TBv8SrHtxXNbhV_czEYsrKmgKJIw9NnJtcNDG9ISoExM4LuGOamZ3ri2PR0BgJ963F5pYhWEIWvyyej2AlH9gUnsEb-2zLxZpn4srxEHvuxTNw_UmT18o3hh59nV1uHL5YOec8pvT5SaTjytLY34vPKTN5JjGZ7uBex-Wx-NertJ2nSQBZD7mAz9erkFrNJ3Vohvq0QB0dLT4__j5g_Xy39OHXn-9OXBx_ffe18OX1JSMEgopIrzTzi6G1dntLJTl_t97cpM45jieftodjLZiKA7a3DtdL7tdIv0&mkt=en-US&hosted=0&device_platform=Linux"
                    >
                      Forgot my password
                    </a>
                    <div className="w-[108px] min-h-[32px] float-right">
                      <button
                        type="submit"
                        className="bg-[#0067b8] active:bg-[rgba(0,0,0,0.4)] active:scale-[95%] mt-[16px] focus-visible:outline focus-visible:border-[0] active:outline-[0] focus:outline outline-black rounded-[0] w-full h-[32px] focus:underline font-normal py-[4px] hover:bg-[#005da6] focus:bg-[#005da6] "
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[19.25%] bg-[#f2f2f2]">
            <div className="pt-[23px] pl-[44px]">
              <a
                className="text-[#0067b8] hover:text-stone-700 hover:underline"
                href="https://kb.swtc.edu/password"
              >
                Password Reset Knowledgebase
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block fixed bottom-[4px] right-0 z-50 h-[2vh]">
        <div className="text-white h-fit inline-flex text-[12px] items-center">
          <a
            className="mx-[11px] hover:underline"
            href="https://www.microsoft.com/en-US/servicesagreement/"
          >
            Terms of use
          </a>
          <a
            className="mx-[8px] hover:underline"
            href="https://privacy.microsoft.com/en-US/privacystatement"
          >
            Privacy & cookies
          </a>
          <p className="mx-[11px] text-[17px] mr-[8px] font-semibold leading-[22px] cursor-pointer mb-1.5 tracking-[3px]">
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
