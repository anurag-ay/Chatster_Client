import React, { useState } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useSelectedUser } from "../context/CurrentSelectedUserContext";


export default function ContactCard({
  name,
  onClick,
  contactCardId,
  active,
  avatar,
}) {
  const [currentSelectedUser] = useSelectedUser();
  return (
    <Box
      onClick={onClick}
      backgroundColor={
        contactCardId === currentSelectedUser && active ? "#0c372d" : "#288672"
      }
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
      <Stack direction="row" spacing="0.5em" alignItems="center">
        <Avatar
          src={avatar && `data:image/svg+xml;base64,${avatar}`}
          alt="User"
          sx={{ height: "2.5em", width: "2.5em" }}
        />

        <Stack flex="2 1 auto">
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2em",
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "lighter",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "15em",
              minWidth: "5em",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            harum rerum similique corrupti neque vero in omnis maiores nemo
            ducimus fugiat, possimus est repellat? Fugiat consectetur illum,
            nobis aliquam officia iure minus in suscipit odit minima doloribus
            numquam eius eligendi id debitis quae esse explicabo. Amet error
            sequi molestiae illo!
          </Typography>
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
