import React, { useEffect } from "react";
import { Call, Chat, Search } from "@mui/icons-material";
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
    <Box
    <Box sx={{ backgroundColor: "#288672", maxheight: "18vh" }}>
      {/* Search */}
      <Box id="search-input" sx={{ padding: "0.5em" }}>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#BBF1E5",
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
            }
          }}
        >
          {callActive ? (
            <Call sx={{ color: "black", height: "1.2em", width: "1.2em" }} />
          ) : (
            <Call />
          )}
        </IconButton>
      </Stack>
      <Divider orientation="horizontal" color="#93E8D5" />
    </Box>
  );
}
