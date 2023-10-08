import { Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import formatTime from "../utils/formatTimeStamp";
import { useSocket } from "../context/SocketContext";
import { useMessage } from "../context/MessageContext";
import TextMessage from "./TextMessage";
import ImageMessage from "./ImageMessage";

function Chat({ postedChat }) {
  const [messages, setMessages] = useMessage();
  const scrollRef = useRef();
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("recieveMessage", (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
      });
    }
  }, [socket, setMessages]);

  useEffect(() => {
    const messageContaner = scrollRef.current;
    messageContaner.scrollTop = messageContaner.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (postedChat) {
      setMessages((prevMessages) => [...prevMessages, postedChat]);
    }
  }, [postedChat, setMessages]);

  return (
    <Stack
      ref={scrollRef}
      direction="column"
      sx={{
        height: "74.2dvh",
        p: "0 0.4em 0 0.4em",
        backgroundColor: "#BBF1E5",
        overflowY: "scroll",
      }}
    >
      {messages.map((msg, index) =>
        msg.contentType === "text" ? (
          <TextMessage
            key={index}
            message={msg.message}
            timestamp={formatTime(msg.timestamp)}
            type={msg.type}
          />
        ) : (
          <ImageMessage
            key={index}
            message={msg.message}
            timestamp={formatTime(msg.timestamp)}
            type={msg.type}
          />
        )
      )}
    </Stack>
  );
}
export default Chat;
