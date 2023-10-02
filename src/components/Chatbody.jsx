import React, { useState } from "react";
import ChatbodyNav from "./ChatbodyNav";
import Chat from "./Chat";
import Inputbox from "./Inputbox";
import { Stack } from "@mui/material";

function Chatbody() {
  const [postedChat, setPostedChat] = useState();
  return (
    <Stack direction="column">
      <ChatbodyNav />
      <Chat postedChat={postedChat} />
      <Inputbox setPostedChat={setPostedChat} />
    </Stack>
  );
}

export default Chatbody;
