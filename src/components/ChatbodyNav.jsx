import { Box, Avatar, Typography, Stack, IconButton } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import React, { useEffect, useState } from "react";
import { useSelectedUser } from "../context/CurrentSelectedUserContext";
import axios, { getUserRoute } from "../api/api";
import { useSocket } from "../context/SocketContext";

function ChatbodyNav() {
  const [selectedUser] = useSelectedUser();
  const [isOnline, setIsOnline] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [newUserAdded, setNewUserAdded] = useState("");
  const [typing, setTyping] = useState("");
  const socket = useSocket();

  useEffect(() => {
    socket.on("isTyping", ({ currentSelectedUser, isTyping }) => {
      if (selectedUser === currentSelectedUser) {
        isTyping ? setTyping("typing...") : setTyping(null);
      } else {
        setTyping(null);
      }
    });
  }, [socket, selectedUser]);

  useEffect(() => {
    if (socket) {
      socket.on("userConnectDisconnect", (data) => {
        setNewUserAdded(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket && selectedUser) {
      socket.emit("isOnline", selectedUser);
      socket.on("online", (onlineSatus) => {
        setIsOnline(onlineSatus);
      });
    }
  }, [socket, selectedUser, newUserAdded]);

  useEffect(() => {
    if (selectedUser) {
      const getUserName = async () => {
        try {
          const res = await axios.get(`${getUserRoute}/${selectedUser}`);
          const { firstName, lastName } = res.data;
          setDisplayName(`${firstName} ${lastName}`);
        } catch (err) {
          console.log(err);
        }
      };
      getUserName();
    }
  }, [selectedUser]);

  return (
    <Stack
      position="sticky"
      direction="row"
      sx={{
        padding: "0.5em",
        backgroundColor: "#288772",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <Stack direction="row" spacing="1em" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg"
        />
        <Box>
          <Typography variant="body1" sx={{ fontSize: "1em" }}>
            {displayName}
          </Typography>
          <Typography variant="body2">{typing ? typing : isOnline}</Typography>
        </Box>
      </Stack>
      <Stack spacing={2} direction="row" mr="1em">
        <IconButton>
          <PhoneInTalkIcon />
        </IconButton>
        <IconButton>
          <VideoCallIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default ChatbodyNav;
