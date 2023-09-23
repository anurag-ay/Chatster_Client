import React from "react";
import "./App.css";
import ChatApp from "./pages/ChatApp";
import UserInfoProvider from "./context/userInfoContex";

function App() {
  return (
    <UserInfoProvider>
      <ChatApp />
    </UserInfoProvider>

  );
}

export default App;
