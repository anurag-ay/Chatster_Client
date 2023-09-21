import { Stack } from "@mui/material";
import React from "react";
import Message from "./Message";

function Chat() {
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
          timestamp={msg.timestamp}
          type={msg.type}
        />
      ))}
    </Stack>
  );
}
const messages = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "send",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "receive",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "send",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "receive",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "receive",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "send",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "receive",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "send",
    timestamp: "10:50 AM",
  },
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia.",
    type: "send",
    timestamp: "10:50 AM",
  },
];
export default Chat;
