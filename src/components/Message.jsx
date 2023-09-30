import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Message({ message, type, timestamp }) {
  return (
    <Box m={type === "receive" ? "0.5em auto 0.5em 0" : "0.5em 0 0.5em auto"}>
      <Box
        maxWidth={"25vw"}
        backgroundColor={type === "receive" ? "#3DC3A5" : "white"}
        sx={{
          borderRadius: "0.5em",
          padding: "0.3em 0.3em 0 0.4em ",
        }}
      >
        <Typography>{message}</Typography>
        <Stack alignItems="flex-end">
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.7em",
              fontWeight: "light",
              p: "0 0.2em 0.2em 0.2em",
            }}
          >
            {timestamp}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Message;
