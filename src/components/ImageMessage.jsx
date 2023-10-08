import { Box, Card, CardMedia } from "@mui/material";
import React from "react";
import { BASE_URL } from "../api/api";

function ImageMessage({ message, timestamp, type = "receive" }) {
  return (
    <Box
      m={type === "receive" ? "0.5em auto 0.5em 0" : "0.5em 0 0.5em auto"}
      sx={{
        border: `0.3em solid ${type === "receive" ? "#3dc3a5" : "#ffffff"}`,
        borderRadius: "0.2em",
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="194"
          image={`${BASE_URL}/${message}`}
          alt={`${message}`}
        />
      </Card>
    </Box>
  );
}

export default ImageMessage;
