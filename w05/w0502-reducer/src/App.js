import React, { useContext, useState } from "react";
import AuthContext, { AuthContextProVider } from "./context/AuthContext";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const context = useContext(AuthContext);
  console.log(<MainHeader />);

  return (
    <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
