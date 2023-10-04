import React, { useState } from "react";
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
import SetAvatar from "./pages/SetAvatar";
import MessageProvider from "./context/MessageContext";
import LastChatProvider from "./context/LastChatContext";

function App() {
  const [token] = useState(() => {
    return localStorage.getItem("token");
  });

  const ChatWithContext = (
    <UserInfoProvider>
      <SocketContextProvider>
        <LastChatProvider>
          <ContactProvider>
            <CurrentSelectedUserProvider>
              <MessageProvider>
                <LastMessageProvider>
                  <ChatApp />
                </LastMessageProvider>
              </MessageProvider>
            </CurrentSelectedUserProvider>
          </ContactProvider>
        </LastChatProvider>
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
        <Route path="/setavatar" element={<SetAvatar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
