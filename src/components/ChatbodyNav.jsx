import { Box, Avatar, Typography, Stack, IconButton } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import React, { useEffect, useState } from "react";
import { useSelectedUser } from "../context/CurrentSelectedUserContext";
import { useSocket } from "../context/SocketContext";
import { useContacts } from "../context/ContactContext";
import formatTime from "../utils/formatTimeStamp";

function ChatbodyNav() {
  const [selectedUser] = useSelectedUser();
  const [isOnline, setIsOnline] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [newUserAdded, setNewUserAdded] = useState("");
  const [typing, setTyping] = useState("");
  const socket = useSocket();
  const [contacts] = useContacts();
  const [recentOnline, setRecentOnline] = useState(null);

  useEffect(() => {
    const user = contacts.find((contact) => contact._id === selectedUser);
    setRecentOnline(user.lastOnline && formatTime(user.lastOnline));
  }, [contacts, selectedUser]);

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
    if (selectedUser && contacts) {
      const user = contacts.find((user) => user._id === selectedUser);
      if (user) {
        const { firstName, lastName, avatar } = user;
        setDisplayName(`${firstName} ${lastName}`);
        setAvatar(avatar);
      }
    }
  }, [selectedUser, contacts]);

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
          alt="User"
          src={avatar && `data:image/svg+xml;base64,${avatar}`}
        />
        <Box>
          <Typography variant="body1" sx={{ fontSize: "1em" }}>
            {displayName}
          </Typography>
          <Typography variant="body2">
            {typing ? typing : isOnline ? isOnline : recentOnline}
          </Typography>
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
