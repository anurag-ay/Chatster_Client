import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import axios from "axios";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import chatsterServer, { setAvatarRoute } from "../api/api";
import loadingGif from "../assets/images/loader.gif";

const avatarApi = "https://api.multiavatar.com/4645646";

function SetAvatar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatarIndex, setSeletedAvatarIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function handleSetAvatar() {
    const userId = location?.state?.userId;
    if (!userId) return console.error("Can not set the Avatar");
    try {
      if (setSeletedAvatarIndex && userId) {
        const payload = {
          id: userId,
          avatar: avatars[selectedAvatarIndex],
        };
        await chatsterServer.put(setAvatarRoute, payload);
        navigate("/login");
      } else {
        console.log("Please Select Avatar");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getAvatars = async () => {
    const avatarArray = [];
    try {
      for (let i = 0; i <= 4; i++) {
        const res = await axios.get(
          `${avatarApi}/${Math.round(Math.random() * 1000)}`
        );
        const data = res.data;
        const buffer = new Buffer(data);
        avatarArray.push(buffer.toString("base64"));
      }
    } catch (err) {
      console.log(err);
    }
    return avatarArray;
  };

  useEffect(() => {
    async function callGetAvatars() {
      const images = await getAvatars();
      setAvatars(images);
      setIsLoading(false);
    }
    callGetAvatars();
  }, []);
  return (
    <>
      {isLoading ? (
        <Stack
          sx={{
            backgroundColor: "#288772",
            alignItems: "center",
            justifyContent: "center",
            height: "100dvh",
            width: "100dvw",
          }}
        >
          <Loading src={loadingGif} alt="loading page" />
        </Stack>
      ) : (
        <Stack
          flexShrink="0"
          spacing={5}
          sx={{
            backgroundColor: "#288772",
            height: "100dvh",
            width: "100dvw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" sx={{ color: "#0c372d", fontSize: "3em" }}>
            Select Your Avatar
          </Typography>
          <Stack
            direction="row"
            sx={{
              height: "11em",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {avatars.map((image, index) => (
              <Stack
                key={index + Math.random()}
                border={
                  selectedAvatarIndex === index ? "0.3em solid #0c372d" : "0"
                }
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  height: "11em",
                  width: "11em",
                }}
              >
                <Image
                  onClick={() => setSeletedAvatarIndex(index)}
                  key={index}
                  src={`data:image/svg+xml;base64,${image}`}
                  alt="avatar"
                />
              </Stack>
            ))}
          </Stack>
          <Button
            onClick={handleSetAvatar}
            sx={{
              backgroundColor: "#0c372d",
              color: "white",
              "&:hover": {
                backgroundColor: "#0c372d",
                boxShadow:
                  "#288772 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                cursor: "pointer",
              },
            }}
          >
            Set Avatar
          </Button>
        </Stack>
      )}
    </>
  );
}

const Image = styled("img")({
  maxWidth: "10em",
  height: "auto",
  borderRadius: "100%",
  ":hover": {
    boxShadow:
      "#288772 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    cursor: "pointer",
  },
});

const Loading = styled("img")({
  height: "10em",
  width: "10em",
});

export default SetAvatar;
