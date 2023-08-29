import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../context/AuthContext";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>리액트 페이지</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
