import React from "react";
import { Box, Stack, TextField, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { EmojiEmotions, Send } from "@mui/icons-material";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useEffect } from "react";

function Inputbox() {
  const [openEmojiPicker, setopenEmojiPicker] = useState(false);
  const [chat, setChat] = useState("");

  useEffect(() => {
    console.log(chat);
  }, [chat]);

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

        <TextField
          autoComplete="false"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#1976d2",
            p: "0.7em",
            ":hover": {
              backgroundColor: "#61b0ff",
              cursor: "pointer",
            },
          }}
        >
          <Send />
        </Box>
      </Stack>
    </>
  );
}

export default Inputbox;
