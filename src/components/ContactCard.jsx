import React from "react";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";

export default function ContactCard() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1em",
        "&:hover": {
          backgroundColor: "#fafafa",
        },
      }}
    >
      <Stack direction="row" spacing="0.3em" alignItems="center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          color="success"
          border="1em solid white"
        >
          <Avatar sx={{ height: "2.5em", width: "2.5em" }}>H</Avatar>
        </Badge>

        <Stack flex="2 1 auto" sx={{ maxWidth: "14em", minWidth: "5em" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2em",
              fontWeight: "bold",
            }}
          >
            Name
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "lighter",
              color: "gray",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            tempore odit. Sed repellendus maxime molestias, id necessitatibus at
            officiis suscipit voluptas. Non dicta atque fugiat quisquam maiores
            eius voluptas ut!
          </Typography>
        </Stack>
        <Typography
          flex="1 0 auto"
          variant="body2"
          sx={{
            fontSize: "0.8em",
            padding: "0.3em",
          }}
        >
          12:55 PM
        </Typography>
      </Stack>
    </Box>
  );
}
