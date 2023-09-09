import { Box, Stack } from "@mui/material";
import ChatSidebar from "./components/ChatSidebar";
import "./App.css";
import NavBar from "./components/NavBar";
import SidebarItems from "./components/SidebarItems";

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" mt="4em">
        <Box
          sx={{
            backgroundColor: "#fafafa",
            minWidth: "28vw",
          }}
        >
          <SidebarItems />
          <ChatSidebar />
        </Box>
        <Box flex="2" display={{ xs: "none", sm: "flex", lg: "flex" }}>
          Sidebar
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
