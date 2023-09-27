import React from "react";
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

  return (
    <Stack
      flex="1"
      spacing={1}
      sx={{
        p: "1em 1em 0em 1em",
        height: "71.5vh",
        overflowY: "scroll",
        minWidth: "25vw",
      }}
    >
      {searchText
        ? searchedUserArray.map((result, index) => (
            <SearchContact
              slectedSearchedContact={result}
              setSearchText={setSearchText}
              key={index}
              id={result._id}
              userName={result.userName}
              name={`${result.firstName} ${result.lastName}`}
            />
          ))
        : contacts.map((ele, index) => (
            <ContactCard
              onClick={() => setSelectedUser(ele._id)}
              key={index}
              name={`${ele.firstName} ${ele.lastName}`}
            />
          ))}
    </Stack>
  );
}
