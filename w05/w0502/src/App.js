import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //만약 로그인이 되어 있다면 isLoggedIn = true
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    console.log(storedUserLoggedInInfo);
    if (storedUserLoggedInInfo === "1") setIsLoggedIn(true);
    //만약 로그인이 되어 있지 않다면 isLoggedIn = false
    else setIsLoggedIn(false);
    console.log("hello useEffect");
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1"); // string으로 저장된다. 타입변환
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoogedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
