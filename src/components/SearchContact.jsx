import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import axios, { addContactRoute } from "../api/api";
import { useUserInfo } from "../context/userInfoContex";
import { useContacts } from "../context/ContactContext";
import { useSelectedUser } from "../context/CurrentSelectedUserContext";

export default function SearchContact({
  id,
  userName,
  name,
  setSearchText,
  slectedSearchedContact,
  avatar,
}) {
  const userInfo = useUserInfo();
  const [contacts, setContact] = useContacts();
  const [, setCurrentSelectedUser] = useSelectedUser();

  async function handleClick() {
    try {
      if (userInfo) {
        let payload = {
          userId: userInfo?._id,
          contactId: id,
        };
        await axios.put(addContactRoute, payload);

        payload = {
          userId: id,
          contactId: userInfo?._id,
        };

        await axios.put(addContactRoute, payload);
        setSearchText("");
        const isPresent = contacts.some(
          (contact) => contact.userName === slectedSearchedContact.userName
        );
        if (!isPresent) setContact((prev) => [slectedSearchedContact, ...prev]);
        setCurrentSelectedUser(slectedSearchedContact._id);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Box
      onClick={handleClick}
      sx={{
        backgroundColor: "#288672",
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
          sx={{ height: "2.5em", width: "2.5em" }}
        />

        <Stack flex="2 1 auto">
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: "1.2em",
              fontWeight: "bold",
            }}
          >
            {userName}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "lighter",
              color: "white",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "15em",
              minWidth: "5em",
            }}
          >
            {name}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
