import React from "react";
import { Call, Chat, NotificationAdd, Search } from "@mui/icons-material";
import { useState } from "react";

import {
  Box,
  InputBase,
  Paper,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

export default function SidebarItems() {
  const [chatActive, setChatActive] = useState(true);
  const [callActive, setCallActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  return (
    <Box>
      {/* Search */}
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
      {/* Icons */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ p: "0.5em" }}
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
            <Chat sx={{ color: "black", height: "1.2em", width: "1.2em" }} />
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
            <Call sx={{ color: "black", height: "1.2em", width: "1.2em" }} />
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
    </Box>
  );
}
