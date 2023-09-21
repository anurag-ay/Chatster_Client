import { Box,Stack } from "@mui/material";
import ChatSidebar from "./components/ChatSidebar";
import "./App.css";
import NavBar from "./components/NavBar";
import SidebarItems from "./components/SidebarItems";
import { useState } from "react";
import CallSidebar from "./components/CallSidebar";
import Chatbody from "./components/Chatbody";


function App() {
  const [chatActive, setChatActive] = useState(true);
  const [callActive, setCallActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  return (
    <Box>
      <NavBar />
      {/* SideBar */}
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
        {/* ChatBody */}
        <Box flex="2" maxWidth={"73.6vw"}>
          <Chatbody />
        </Box>
      </Stack>
   
    </Box>
  );
}

export default App;
