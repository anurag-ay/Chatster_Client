import React from "react";
import "./App.css";
import ChatApp from "./pages/ChatApp";
import UserInfoProvider from "./context/userInfoContex";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <UserInfoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatApp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserInfoProvider>
  );
}

export default App;
