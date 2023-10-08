import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { Stack } from "@mui/material";
import { useSelectedUser } from "../context/CurrentSelectedUserContext";
import SearchContact from "./SearchContact";
import { useContacts } from "../context/ContactContext";

export default function ChatSidebar({
  searchText,
  searchedUserArray,
  setSearchText,
}) {
  const [, setSelectedUser] = useSelectedUser();
  const [contacts] = useContacts([]);
  const [active, setActive] = useState(false);

  return (
    <Stack
      flex="1"
      spacing={1}
      sx={{
        p: "0.5em 0.4em 0em 0.4em",
        height: "72.7dvh",
        overflowY: "scroll",
        minWidth: "25vw",
      }}
    >
      {searchText
        ? searchedUserArray.map((user, index) => (
            <SearchContact
              setActive={setActive}
              slectedSearchedContact={user}
              setSearchText={setSearchText}
              key={index}
              id={user._id}
              userName={user.userName}
              avatar={user.avatar}
              name={`${user.firstName} ${user.lastName}`}
            />
          ))
        : contacts.map((user, index) => (
            <ContactCard
              active={active}
              onClick={() => {
                setSelectedUser(user._id);
                setActive(true);
              }}
              lastChat={user.lastChat}
              lastChatTimestamp={user.lastChatTimestamp}
              lastChatType={user.lastChatType}
              userContactId={user._id}
              key={index}
              name={`${user.firstName} ${user.lastName}`}
              avatar={user.avatar}
            />
          ))}
    </Stack>
  );
}
