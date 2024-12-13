import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isSlideShow, setSlideShow] = useState("START SLIDESHOW");
  const navigate = useNavigate();
  const location = useLocation(); 

  const detailPage = location.pathname.startsWith("/detail");

  return (
    <div className="Main-div" style={{ paddingInline: "40px" }}>
      <div className="Nav-div">
        <h1 className="Nav-h1">
          <img src="../../assets/shared/logo.svg" />
        </h1>
        <p
          className="Nav-p"
          onClick={() => {
            if (!detailPage && isSlideShow === "START SLIDESHOW") {
              setSlideShow("STOP SLIDESHOW");
              navigate("/detail/1");
            } else {
              setSlideShow("START SLIDESHOW");
              navigate("/");
            }
          }}
        >
          {isSlideShow}
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Nav;
