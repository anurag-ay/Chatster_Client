import React, { useEffect } from "react";
import { Box, Stack, TextField, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { EmojiEmotions, Send } from "@mui/icons-material";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import axios, { messagesRoute } from "../api/api";
import { useUserInfo } from "../context/userInfoContex";
import { useSelectedUser } from "../context/CurrentSelectedUserContext";
import { useSocket } from "../context/SocketContext";

function Inputbox({ setPostedChat }) {
  const [messageInputFocus, setMessageInputFocus] = useState(false);
  const [chat, setChat] = useState("");
  const [openEmojiPicker, setopenEmojiPicker] = useState(false);
  const userInfo = useUserInfo();
  const [currentSelectedUser] = useSelectedUser();
  const socket = useSocket();

  useEffect(() => {
    socket.emit("typing", {
      from: userInfo._id,
      to: currentSelectedUser,
      isTyping: messageInputFocus,
    });
  }, [messageInputFocus, currentSelectedUser, socket, userInfo?._id]);

  async function handleChatSubmit(e) {
    e.preventDefault();
    if (chat && currentSelectedUser) {
      try {
        const payload = {
          sender: userInfo._id,
          receiver: currentSelectedUser,
          content: chat,
          status: "sent",
        };
        const res = await axios.post(messagesRoute, payload);
        setChat("");
        const { content, createdAt, receiver } = res.data;
        const postedChat = {
          type: "send",
          message: content,
          timestamp: createdAt,
        };
        if (socket) {
          const realTimeChat = {
            ...postedChat,
            to: receiver,
          };
          socket.emit("sendMessage", realTimeChat);
        }
        setPostedChat(postedChat);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function handleEmojiClick(EmojiObj) {
    setChat((prevChat) => prevChat + EmojiObj.emoji);
  }

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing="0.5em"
        p="0.2em"
        sx={{ backgroundColor: "#288772" }}
      >
        <Stack direction={"row"} spacing={3}>
          <IconButton
            sx={{
              ":hover": {
                boxShadow:
                  "#BBF1E5 0px 2px 4px,#BBF1E5 0px 7px 13px -3px, #BBF1E5 0px -3px 0px inset",
                cursor: "pointer",
              },
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <IconButton
            onClick={() => setopenEmojiPicker(!openEmojiPicker)}
            sx={{
              ":hover": {
                boxShadow:
                  "#BBF1E5 0px 2px 4px,#BBF1E5 0px 7px 13px -3px, #BBF1E5 0px -3px 0px inset",
                cursor: "pointer",
              },
            }}
          >
            <EmojiEmotions />
          </IconButton>
          <Box position="absolute" sx={{ bottom: "9vh", left: "30vw" }}>
            {openEmojiPicker ? (
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            ) : null}
          </Box>
          <IconButton
            sx={{
              ":hover": {
                boxShadow:
                  "#BBF1E5 0px 2px 4px,#BBF1E5 0px 7px 13px -3px, #BBF1E5 0px -3px 0px inset",
                cursor: "pointer",
              },
            }}
          >
            <KeyboardVoiceIcon />
          </IconButton>
        </Stack>

        <Stack
          component="form"
          autoComplete="off"
          onSubmit={handleChatSubmit}
          spacing="0.5em"
          flex="1"
          direction="row"
        >
          <TextField
            sx={{
              backgroundColor: "#BBF1E5",
            }}
            onFocus={() => setMessageInputFocus(true)}
            onBlur={() => setMessageInputFocus(false)}
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Stack
            component="button"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: "100%",
              border: "0",
              height: "4em",
              width: "4em",
              backgroundColor: "#288772",
              ":hover": {
                boxShadow:
                  "#288772 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                cursor: "pointer",
              },
            }}
          >
            <Send />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Inputbox;
