import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Call } from "@mui/icons-material";
export default function CallCard() {
  return (
    <Box
      backgroundColor="#288672"
      sx={{
        borderRadius: "0.3em",
        padding: "1em",
        color: "white",
        "&:hover": {
          boxShadow:
            "#288772 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          cursor: "pointer",
        },
      }}
    >
      <Stack direction="row" spacing="0.3em" alignItems="center">
        <Avatar sx={{ height: "2.5em", width: "2.5em" }}>H</Avatar>

        <Stack
          flex="2 1 auto"
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2em",
              fontWeight: "bold",
              ml: "0.37em",
            }}
          >
            Name
          </Typography>
          <Stack direction="row" alignItems="center">
            <Call sx={{ height: "0.7em", widht: "0.7em" }} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "lighter",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Incoming
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            ml: "auto",
          }}
        >
          <Typography
            flex="1 0 auto"
            variant="body2"
            sx={{
              ml: "auto",
              fontSize: "0.8em",
              padding: "0.3em",
            }}
          >
            12:55 PM
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
