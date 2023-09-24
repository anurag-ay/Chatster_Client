import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { Stack } from "@mui/material";
import { useUserInfo } from "../context/userInfoContex";
import axios, { getContactsRoute } from "../api/api";

export default function ChatSidebar({ handleClickContactCard }) {
  const userInfo = useUserInfo();

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts(_id) {
      const res = await axios.get(`${getContactsRoute}/${_id}`);
      const contactsList = res.data;
      setContacts(contactsList);
    }
    const _id = userInfo?._id;
    if (_id) getContacts(_id);
  }, [userInfo]);

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
      {contacts.map((ele, index) => (
        <ContactCard
          onClick={() => handleClickContactCard(ele._id)}
          key={index}
          name={`${ele.firstName} ${ele.lastName}`}
        />
      ))}
    </Stack>
  );
}
