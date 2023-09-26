import React, { useEffect } from "react";
import { Call, Chat, NotificationAdd, Search } from "@mui/icons-material";
import axios, { searchUserRoute } from "../api/api";

import {
  Box,
  InputBase,
  Paper,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { useUserInfo } from "../context/userInfoContex";

export default function SidebarItems(props) {
  const userInfo = useUserInfo();

  const {
    searchText,
    setSearchText,
    setsearchedUserArray,
    chatActive,
    setChatActive,
    callActive,
    setCallActive,
    notificationActive,
    setNotificationActive,
  } = props;

  useEffect(() => {
    if (userInfo) {
      const searchUsers = async () => {
        if (searchText) {
          const res = await axios.get(
            `${searchUserRoute}/${searchText}/${userInfo?.userName}`
          );
          const users = res.data;
          setsearchedUserArray(users);
        }
      };
      searchUsers();
    }
  }, [searchText, setsearchedUserArray, userInfo]);

  return (
    <Box>
      {/* Search */}
      <Box component="form" sx={{ padding: "0.5em" }}>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Contacts by User Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: "0.4em" }} aria-label="search">
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
