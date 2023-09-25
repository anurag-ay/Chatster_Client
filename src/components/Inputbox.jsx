import React from "react";
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
  const [chat, setChat] = useState("");
  const [openEmojiPicker, setopenEmojiPicker] = useState(false);
  const userInfo = useUserInfo();
  const [currentSelectedUser] = useSelectedUser();
  const socket = useSocket();

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
        if (res.status === 200) setChat("");
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
      <Stack direction="row" alignItems="center" spacing="0.5em" p="0.2em">
        <Stack direction={"row"} spacing={3}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton onClick={() => setopenEmojiPicker(!openEmojiPicker)}>
            <EmojiEmotions />
          </IconButton>
          <Box position="absolute" sx={{ bottom: "9vh", left: "30vw" }}>
            {openEmojiPicker ? (
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            ) : null}
          </Box>
          <IconButton>
            <KeyboardVoiceIcon />
          </IconButton>
        </Stack>

        <Stack
          component="form"
          onSubmit={handleChatSubmit}
          spacing="0.5em"
          flex="1"
          direction="row"
        >
          <TextField
            autoComplete="false"
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
              backgroundColor: "#1976d2",
              ":hover": {
                backgroundColor: "#61b0ff",
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
