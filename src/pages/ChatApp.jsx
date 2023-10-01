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
  const [selectedUser] = useSelectedUser();

  const [searchText, setSearchText] = useState("");
  const [searchedUserArray, setsearchedUserArray] = useState([]);

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
            backgroundColor: "#BBF1E5",
            maxHeight: "90.9dvh",
          }}
        >
          <SidebarItems
            setsearchedUserArray={setsearchedUserArray}
            setSearchText={setSearchText}
            searchText={searchText}
            chatActive={chatActive}
            setChatActive={setChatActive}
            callActive={callActive}
            setCallActive={setCallActive}
          />

          {chatActive ? (
            <ChatSidebar
              searchText={searchText}
              setSearchText={setSearchText}
              searchedUserArray={searchedUserArray}
            />
          ) : null}
          {callActive ? <CallSidebar /> : null}
        </Box>
        <Box flex="2">{selectedUser ? <Chatbody /> : Welcome}</Box>
      </Stack>
    </Box>
  );
}

export default ChatApp;
