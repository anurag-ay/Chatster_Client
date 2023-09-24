import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useUserInfo } from "../context/userInfoContex";
import axios, { messagesRoute } from "../api/api";
import formatTime from "../utils/formatTimeStamp";

function Chat({ selecteUserId }) {
  const userInfo = useUserInfo();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages(userId) {
      const res = await axios.get(
        `${messagesRoute}/${userId}/${selecteUserId}`
      );
      const messageList = res.data;
      setMessages(messageList);
    }
    if (userInfo?._id && selecteUserId) getMessages(userInfo._id);
  }, [selecteUserId, userInfo?._id]);

  return (
    <Stack
      direction="column"
      sx={{
        p: "0 0.4em 0 0.4em",
        height: "75vh",
        backgroundColor: "gray",
        overflowY: "scroll",
      }}
    >
      {messages.map((msg, index) => (
        <Message
          key={index}
          message={msg.message}
          timestamp={formatTime(msg.timestamp)}
          type={msg.type}
        />
      ))}
    </Stack>
  );
}
export default Chat;
