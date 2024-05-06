import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  useEffect(() => {
    document.title = "Pack Express";
  });

  return (
    <>
      <div className="container">
        <div className="compName">
          <p>Pack Express</p>
        </div>

        <div className="row">
          <div id="headContent" className="col-lg-6">
            <h1>We are here to deliver your assests</h1>

            <div id="btnSection" className="row">
              <div className="col-lg-6">
                <h4>For User</h4>
                <p>
                  Registered user can login.
                  <br /> If you are not registered then contact to Admin
                </p>

                <Link to="/userlogin">
                  <button id="user">Login</button>
                </Link>
              </div>
              <div className="col-lg-6">
                <h4>For Admin</h4>
                <p>
                  Admin of the company can
                  <br /> only login through this login window
                </p>
                <Link to="/adminlogin">
                  <button id="admin">Login</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="compImg">
              <img
                loading="lazy"
                src="./packageImg.png"
                alt="package delivery"
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ fontSize: "14px", color: "gray" }}>
          copyright @ 2024 Pack Express
        </div>
      </div>
    </>
  );
}

export default MainPage;
