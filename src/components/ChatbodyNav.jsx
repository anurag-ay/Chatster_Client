import { Box, Avatar, Typography, Stack } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import React from "react";

function ChatbodyNav() {
  return (
    <Stack
      position="sticky"
      direction="row"
      sx={{
        maxWidth: "73vw",
        minWidth: "25vw",
        padding: "0.2em",
        backgroundColor: "#F9F9FA",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing="1em" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg"
        />
        <Box>
          <Typography variant="body1" sx={{ fontSize: "1em" }}>
            Saifur Rahman Rana
          </Typography>
          <Typography variant="body2">Online</Typography>
        </Box>
      </Stack>
      <Stack spacing={2} direction="row" mr="1em">
        <PhoneInTalkIcon />
        <VideoCallIcon />
      </Stack>
    </Stack>
  );
}

export default ChatbodyNav;
