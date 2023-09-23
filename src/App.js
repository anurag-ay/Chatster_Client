import { Box, Stack } from "@mui/material";
import ChatSidebar from "./components/ChatSidebar";
import "./App.css";
import NavBar from "./components/NavBar";
import SidebarItems from "./components/SidebarItems";
import { useState } from "react";
import CallSidebar from "./components/CallSidebar";
import Chatbody from "./components/Chatbody";
import CallUi from "./components/CallUi";
import VideoCall from "./components/VideoCall";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  const [chatActive, setChatActive] = useState(true);
  const [callActive, setCallActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  return (
    <Box>
      <LogIn/>
      {/* <SignUp/> */}
      {/* <VideoCall/> */}
      {/* <CallUi /> */}
      {/* <NavBar />
      <Stack direction="row" mt="4em">
        <Box
          sx={{
            backgroundColor: "#fafafa",
          }}
        >
          <SidebarItems
            chatActive={chatActive}
            setChatActive={setChatActive}
            callActive={callActive}
            setCallActive={setCallActive}
            notificationActive={notificationActive}
            setNotificationActive={setNotificationActive}
          />
          {chatActive ? <ChatSidebar /> : null}
          {callActive ? <CallSidebar /> : null}
        </Box>
        <Box flex="2" maxWidth={"73.6vw"}>
          <Chatbody />
        </Box>
      </Stack> */}
    </Box>
  );
}

export default App;
