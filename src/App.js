import React from "react";
import "./App.css";
import ChatApp from "./pages/ChatApp";
import UserInfoProvider from "./context/userInfoContex";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CurrentSelectedUserProvider from "./context/CurrentSelectedUserContext";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <UserInfoProvider>
        <CurrentSelectedUserProvider>
          <Routes>
            <Route
              path="/"
              element={token ? <ChatApp /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentSelectedUserProvider>
      </UserInfoProvider>
    </BrowserRouter>
  );
}

export default App;
