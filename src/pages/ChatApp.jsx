import { Box, Stack } from "@mui/material";
import ChatSidebar from "../components/ChatSidebar";
import NavBar from "../components/NavBar";
import SidebarItems from "../components/SidebarItems";
import { useState } from "react";
import CallSidebar from "../components/CallSidebar";
import Chatbody from "../components/Chatbody";
import { useSelectedUser } from "../context/CurrentSelectedUserContext";
// import CallUi from "./components/CallUi";
import WelcomeGif from "../assets/images/welcome.gif";

function ChatApp() {
  const [chatActive, setChatActive] = useState(true);
  const [callActive, setCallActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  const [selectedUser] = useSelectedUser();

  const Welcome = (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <img src={WelcomeGif} alt="Welcome Gif" />
    </Stack>
  );

  return (
    <Box>
      {/* <CallUi /> */}
      <NavBar />
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
          {selectedUser ? <Chatbody /> : Welcome}
        </Box>
      </Stack>
    </Box>
  );
}

export default ChatApp;
