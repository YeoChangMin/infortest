import "./Owner.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import NotFoundPage from "../routes/NotFoundPage";
import Main from "../routes/Main";

function Owner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ownerInfo, setOwnerInfo] = useState([]);

  const getLoginData = (loginData) => {
    setIsLoggedIn(loginData);
  };
  const getOwnerData = (ownerData) => {
    setOwnerInfo(...ownerData);
    console.log(ownerInfo);
  };

  return (
    <div className="Owner">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login getLoginData={getLoginData} getOwnerData={getOwnerData} />
            }
          />
          <Route path="/home" element={<Home ownerInfo={ownerInfo} />} />
          <Route path="/main" element={<Main ownerInfo={ownerInfo} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Owner;
