import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Myswtc from "./Myswtc";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  return (
    <div className="App text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y1"
            element={<Login next="https://swtc.schoology.com/" />}
          />
          <Route path="/myswtc/cmcportal" element={<Myswtc />} />
          <Route
            path="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y2"
            element={<Login next="https://myswtc.swtc.edu/cmcportal/" />}
          />
          <Route
            path="/login.microsoftonline.com/common/oauth2/authorizeresponse_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https3A2F2Fapp.schoology.com2Flogin2Fexternal_accounts2Freceive2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9c3d0Y3"
            element={
              <Login next="https://swtc0.sharepoint.com/sites/SPChargerHub2" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
