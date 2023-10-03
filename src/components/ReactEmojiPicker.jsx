import React, { useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { Box } from "@mui/material";

function ReactEmojiPicker({
  handleEmojiClick,
  setopenEmojiPicker,
  openEmojiPicker,
}) {
  const EmojiRef = useRef();

  useEffect(() => {
    function handleClickAway(event) {
      if (EmojiRef.current && !EmojiRef.current.contains(event.target)) {
        setopenEmojiPicker(false);
      }
    }

    openEmojiPicker && document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [setopenEmojiPicker, openEmojiPicker]);

  return (
    <Box
      ref={EmojiRef}
      position="absolute"
      sx={{ bottom: "9vh", left: "30vw" }}
    >
      <EmojiPicker
        skinTonesDisabled
        theme="auto"
        onEmojiClick={handleEmojiClick}
      />
    </Box>
  );
}

export default ReactEmojiPicker;
