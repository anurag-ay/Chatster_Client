import React from "react";
import "./App.css";
import ChatApp from "./pages/ChatApp";
import UserInfoProvider from "./context/userInfoContex";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CurrentSelectedUserProvider from "./context/CurrentSelectedUserContext";
import SocketContextProvider from "./context/SocketContext";

function App() {
  const token = localStorage.getItem("token");

  const ChatWithContext = (
    <SocketContextProvider>
      <UserInfoProvider>
        <CurrentSelectedUserProvider>
          <ChatApp />
        </CurrentSelectedUserProvider>
      </UserInfoProvider>
    </SocketContextProvider>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? ChatWithContext : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
