import React from "react";
import "./App.css";
import ChatApp from "./pages/ChatApp";
import UserInfoProvider from "./context/userInfoContex";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <UserInfoProvider>
      {/* <ChatApp /> */}
      {/* <LogIn/> */}
      <SignUp/>
    </UserInfoProvider>

  );
}

export default App;
