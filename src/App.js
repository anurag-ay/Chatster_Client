import {
  Box,
  Divider,
  InputBase,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import { Call, Chat, NotificationAdd, Search } from "@mui/icons-material";
import { useState } from "react";
import ChatSidebar from "./components/ChatSidebar";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [chatActive, setChatActive] = useState(true);
  const [callActive, setCallActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  return (
    <>
      <NavBar />
      <Stack direction="row" height="90vh">
        <Box
          sx={{
            backgroundColor: "#fafafa",
            overflowY: "scroll",
            minWidth: "28vw",
          }}
        >
          <Box sx={{ padding: "0.5em" }}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
              <IconButton type="button" sx={{ p: "0.4em" }} aria-label="search">
                <Search />
              </IconButton>
            </Paper>
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ p: "1em" }}
          >
            <IconButton
              onClick={() => {
                if (chatActive === false) {
                  setChatActive(true);
                  setCallActive(false);
                  setNotificationActive(false);
                }
              }}
            >
              {chatActive ? (
                <Chat
                  sx={{ color: "black", height: "1.2em", width: "1.2em" }}
                />
              ) : (
                <Chat />
              )}
            </IconButton>
            <IconButton
              onClick={() => {
                if (callActive === false) {
                  setCallActive(true);
                  setChatActive(false);
                  setNotificationActive(false);
                }
              }}
            >
              {callActive ? (
                <Call
                  sx={{ color: "black", height: "1.2em", width: "1.2em" }}
                />
              ) : (
                <Call />
              )}
            </IconButton>
            <IconButton
              onClick={() => {
                if (notificationActive === false) {
                  setNotificationActive(true);
                  setChatActive(false);
                  setCallActive(false);
                }
              }}
            >
              {notificationActive ? (
                <NotificationAdd
                  sx={{ color: "black", height: "1.2em", width: "1.2em" }}
                />
              ) : (
                <NotificationAdd />
              )}
            </IconButton>
          </Stack>
          <Divider orientation="horizontal" />

          {chatActive ? <ChatSidebar /> : null}
        </Box>
        <Box flex="2">Sidebar</Box>
      </Stack>
    </>
  );
}

export default App;
