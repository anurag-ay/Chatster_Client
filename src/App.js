import React, { useState } from "react";
import "./App.css";
import ChatApp from "./pages/ChatApp";
import UserInfoProvider from "./context/userInfoContex";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CurrentSelectedUserProvider from "./context/CurrentSelectedUserContext";
import SocketContextProvider from "./context/SocketContext";
import LastMessageProvider from "./context/LastMessageContext";
import ContactProvider from "./context/ContactContext";

function App() {
  const [token] = useState(() => {
    return localStorage.getItem("token");
  });

  const ChatWithContext = (
    <UserInfoProvider>
      <SocketContextProvider>
        <ContactProvider>
          <CurrentSelectedUserProvider>
            <LastMessageProvider>
              <ChatApp />
            </LastMessageProvider>
          </CurrentSelectedUserProvider>
        </ContactProvider>
      </SocketContextProvider>
    </UserInfoProvider>
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
